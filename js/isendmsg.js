/*
* jQuery isendMsg Plugin for mobile
* version: 1.1.0
* Requires jQuery v2.0 or later
* Copyright 2017 Abao
* Project repository: https://github.com/duanxb/isendmsg
*/
;(function (factory) {
    if (typeof define === "function" && define.amd) {
        // AMD模式
        define([ "jquery" ], factory);
    } else {
        // 全局模式
        factory(jQuery);
    }
}(function ($) {
    $.fn.isendMsg = function($params) { 

        if(!$params.phoneId){ 
            console.error("手机号码文本框ID未设置");
        }

        $params = $.extend(true, {
            timeOut: 60,
            countText: "{n}S",
            sign:"",
            sendDatas:{},
            captcha: false,
            captchaUrl: "",
            errorCount: 0
        }, $params);

        var $this = $(this),
            $self = this;

        var _timeout = $params.timeOut,
            $mobile = $("#"+$params.phoneId);
        /*手机号码验证*/
        $self.validPhoneFild = function() { 
            var _phone = $mobile.val(),
                validResult = true;
            if(!_phone){
                return false;
            }
            var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
            if (!reg.test(_phone)) {
                return false;
            }

            return validResult;
        } 
        /*初始化按钮*/
        $self.init = function() { 
            $this.attr("disabled",true);
            $self.start();
        }
        /*倒计时函数开始*/ 
        $self.start = function() { 
            var _countText = $params.countText;
            if(_timeout > 0){
                _countText = _countText.replace(/{n}/i, _timeout--); 
                $this.text(_countText);
                setTimeout(function(){
                    $self.start();
                },1000);
            }else{
                $this.removeAttr("disabled").text("再次发送");
                _timeout = $params.timeout;
            }
        }

        /*Ajax发送*/
        $self.sendAjax = function(postData) { 
            $.ajax({
                url: $params.url,
                dataType:"json",
                type:"post",
                data: postData,
                beforeSend: function(){ 
                    var iresult = true;
                    if($params.beforeSend && typeof $params.beforeSend == 'function'){ 
                        iresult = $params.beforeSend();
                    }
                    return iresult;
                },
                success: function(data){
                    if(data.code == 0){
                        $self.init();
                        if($params.success && typeof $params.success == 'function'){ 
                            $params.success(data);
                        }
                    }else{
                        $this.removeAttr("disabled");
                        if($params.error && typeof $params.error == 'function'){ 
                            $params.error(data);
                        }
                        return false;
                    }
                },
                error: function(){ 
                    $this.removeAttr("disabled");
                }
            });
        }

        /*图形验证码*/
        $self.captchaModelOpen = function(captchaUrl,sendtoFun){   
            var ID = "CAPTCHMODEL",$model = $("#"+ID);
            if($model.size() == 0){ 

                var btnArray = ["取消","确定"],
                    placeholder = "请输入图形验证码",
                    randomnumber = Math.random();

                var popup = '<div id="'+ ID +'">'
                    popup += '<div class="captcha-model">';
                    popup += '<div class="captcha-model-title">'+ placeholder +'</div>';
                    popup += '<div class="captcha-model-content">';
                    popup += '<div class="captcha-inputWapper"><input id="CAPTCHINPUT" placeholder="'+placeholder+'" />';
                    popup += '<img id="captchaImage" src="'+captchaUrl+'" onClick="this.src=\''+ captchaUrl +'?version='+randomnumber+'\'" /></div>';
                    popup += '</div>';
                    popup += '<div class="captcha-model-buttons">';
                    popup += '<span class="captcha-model-button" id="captchaCancel">'+ btnArray[0] +'</span>';
                    popup += '<span class="captcha-model-button" id="captchaOk">'+ btnArray[1] +'</span>';
                    popup += '</div>';
                    popup += '</div>';
                    
                    $("body").append(popup);

                    $self.captchaModelAnimation(ID);

                    $("#captchaCancel").click(function(){
                        $self.captchaModelClose(ID);
                    });
                    $("#captchaOk").click(function(){
                        var valuebox = $("#CAPTCHINPUT").val();
                        if(valuebox){ 
                            sendtoFun(valuebox);
                            $self.captchaModelClose(ID);
                        }else{ 
                            $("#CAPTCHINPUT").focus();
                        }
                        
                        
                    });
            }else{ 
                $model.fadeIn(function(){ 
                    $("#CAPTCHINPUT").val();
                    $self.captchaChange();
                });
            }
        }
        $self.captchaModelClose = function(ID) { 
            $("#"+ID).fadeOut();
        }
        $self.captchaModelAnimation = function(ID) { 
            $("#"+ID).fadeIn();
        }
        $self.captchaChange = function() { 
            $("#captchaImage").trigger('click');
        }
        /*发送按钮绑定事件*/
        $this.on('click', function() { 
            if($self.validPhoneFild() == false){ 
                alert("请输入正确的手机号码，再点击发送");
                $mobile.focus().select();
                return false;
            }
            var postData = {};
                postData.phone = $mobile.val();
            if($params.sign){ 
                postData.sign = $params.sign;
            }
            postData = $.extend(true, $params.sendDatas, postData);
            //当开启图形验证码时
            if($params.captcha){ 
                $self.captchaModelOpen($params.captchaUrl,function(imgVerify) { 
                    postData.verfiy = imgVerify;
                    $self.sendAjax(postData);  
                })
            }else{ 
                //Ajax发送
                $self.sendAjax(postData);
            }
            

        })     

        
    }

}));
