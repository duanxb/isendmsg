# isendmsg

* jQuery isendMsg Plugin for mobile
* send SMS verification code plugin for mobile
* version: 1.1.0
* Requires jQuery v2.0 or later
* Copyright 2017 Abao
* Project repository: https://github.com/duanxb/isendmsg

# isendmsg提供参数描述

| 参数        	| 说明           |
| ------------- |-------------|
| phoneId      	| 所属手机号码文本框的ID。 *必填* |
| url     		| 后台发送短信的接口链接。 *必填* |      |
| timeOut 		| 发送成功后的倒计时，默认60S。 *可选*      | 
| countText		| 发送成功后，倒计时按钮上显示的文字，默认："{n}S"。 *可选*     | 
| captcha 		| 是否开启图形验证码，默认不开启：false。 *可选*   | 
| captchaUrl	| 当开启图形验证码时，设置获取图形验证码图片的地址。 *可选*      | 
| sign 			| 可自定义规则的加密字符串令牌传到后台，用于防止别人攻击短信接口。*可选*      | 
| beforeSend	| 发送验证码之前，执行的函数，若return false,则阻止继续发送。      | 
| success 		| 发送成功后，执行的函数。     | 
| error 		| 发送失败后，执行的函数。      | 

