# iSendMsg - A send valid message ountdown effect plugin for Mobile

* jQuery isendMsg Plugin for mobile
* send SMS verification code plugin for mobile
* version: 1.1.0
* Requires jQuery v2.0 or later
* Copyright 2017 Abao
* Project repository: https://github.com/duanxb/isendmsg

## Intro
IsendMsg to meet the needs of mobile-side SMS verification code generated, to solve the project to all the SMS verification code needs, and contains some special needs, such as adding graphics verification code, add a custom sign token and so on.

IsendMsg is mainly composed of functions:

- No graphics verification code mode
- Turn on the graphics verification code mode
- Mobile phone number regular verification
- Customize the countdown string
- Some callback functions are convenient for more flexible calls and are available in existing development projects

## Show

![此处输入图片的描述][1]

## Tips

 - You can make full use of callback to do anything.
 - Please make sure to read the guide and use it correctly.

## Params intro

| 参数        	| 说明           |
| ------------- |-------------|
| phoneId      	| String, ID of the fill input of the mobile. **Required** |
| url     		| String, Send message Api **Required** |      |
| timeOut 		| Number, Send the countdown after the success of the default 60S. **Optional**      | 
| countText		| String, After sending successfully, the countdown button appears on the text, default: "{n} s"  **Optional**     | 
| captcha 		| Boolean, Whether to open the graphics verification code, the default does not open: false.   **Optional**   | 
| captchaUrl	| String, When opening the graphics verification code, set the address of the graphic verification code.   **Optional**      | 
| sign 			| String, Customizable rules Encrypted string tokens are passed to the background to prevent others from attacking the SMS interface. **Optional**      | 
| sendDatas		| Object, When submitted to the background, a pass over the additional datas. **Optional**|
| encryptRuleQuery	| callback Function The transmitted data is processed. Param: data object.      |
| beforeSend	| Send a verification code before the implementation of the function, if return false, then stop sending.      | 
| success 		| After sending successfully, execute the callback function.     | 
| error 		| After sending a failed function, execute the callback function      | 

## Authors

 - For questions and issues please use [THIS WAY][2]
 
----------

# iSendMsg - 移动端发送短信验证码倒计时效果的插件

## 自我介绍

IsendMsg为满足移动端短信验证码的需求而生的，解决项目中给所有的短信验证码需求，并包含一些特殊的需求，比如添加图形验证码、添加自定义sign令牌等等。

isendMsg主要是功能组成：

 - 无图形验证码模式
 - 开启图形验证码模式
 - 手机号规则性验证
 - 自定义倒计时字符串
 - 一些回调函数,方便更加灵活的调用和适用于现有的开发项目中

## Tips

 - 可以充分利用callback，对返回的结果执行相应操作；
 - 自定义规则的加密字符串令牌传到后台，用于防止别人攻击短信接口；

## Params intro

| 参数        	| 说明           |
| ------------- |-------------|
| phoneId      	| 字符，所属手机号码文本框的ID。 **必填** |
| url     		| 字符，后台发送短信的接口链接。 **必填** |      |
| timeOut 		| 数字，发送成功后的倒计时，默认60S。 **可选**      | 
| countText		| 字符，发送成功后，倒计时按钮上显示的文字，默认："{n}S"。 **可选**     | 
| captcha 		| 布尔值，是否开启图形验证码，默认不开启：false。 **可选**   | 
| captchaUrl	| 字符，当开启图形验证码时，设置获取图形验证码图片的地址。 **可选**      | 
| sign 			| 字符，可自定义规则的加密字符串令牌传到后台，用于防止别人攻击短信接口。**可选**      | 
| sendDatas		| 对象, 当提交到后台时，一块传过去的额外数据。 **可选**|
| encryptRuleQuery	| 回调函数， 对发送的数据进行处理，param: 数据对象。      | 
| beforeSend	| 发送验证码之前，执行的函数，若return false,则阻止继续发送。      | 
| success 		| 发送成功后，执行的函数。     | 
| error 		| 发送失败后，执行的函数。      | 

## Authors

 - 如果你遇到了什么神bug，请发起 [ISSUE][3] 联系我 ~
 - 致力于前端开发，一起努力中……


  [1]: https://github.com/duanxb/isendmsg/blob/master/images/isendmsgdemo.gif
  [2]: https://github.com/duanxb/isendmsg/issues
  [3]: https://github.com/duanxb/isendmsg/issues

