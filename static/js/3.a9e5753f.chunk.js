(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{312:function(e,a,t){e.exports={login__container:"Login_login__container__2Mymd",testData:"Login_testData__2VR-c",submitButton:"Login_submitButton__2QlRb",form:"Login_form__3JOzi",rememberMeContainer:"Login_rememberMeContainer__3JIxd",buttonRememberMe:"Login_buttonRememberMe__3zHyr",captchaImg:"Login_captchaImg__2wdfC"}},316:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(99),m=t(100),l=t(30),o=t(312),i=t.n(o),s=t(82),u=t.n(s),p=t(53),b=t(19),d=t(40),_=t(0),h=Object(m.a)({form:"login"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",{className:i.a.login__container},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(c.a,{className:i.a.form,placeholder:"\u0415\u043c\u0435\u0439\u043b",name:"email",component:l.a,validate:[p.b]})),r.a.createElement("div",null,r.a.createElement(c.a,{className:i.a.form,type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",component:l.a,validate:[p.b]})),r.a.createElement("div",{className:i.a.rememberMeContainer},r.a.createElement(c.a,{className:i.a.buttonRememberMe,type:"checkbox",name:"rememberMe",component:l.a}),r.a.createElement("div",null,"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c?")),r.a.createElement("div",null,e.captchaUrl&&r.a.createElement("img",{src:e.captchaUrl,className:i.a.captchaImg}),e.captchaUrl&&Object(l.c)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0441 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438","captcha",[p.b],l.a,{},"","captchaInput")),e.error&&r.a.createElement("div",{className:u.a.formSummaryError},e.error),r.a.createElement("div",null,r.a.createElement("button",{className:i.a.submitButton},"\u0412\u043e\u0439\u0442\u0438"))),r.a.createElement("div",{className:i.a.testData},r.a.createElement("div",null,"\u041c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u0438 \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u0430 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442:"),r.a.createElement("div",{style:{fontSize:"20px",fontWeight:"700"}},"Email: free@samuraijs.com"),r.a.createElement("div",{style:{fontSize:"20px",fontWeight:"700"}},"Password: free"))))});a.default=Object(b.b)(function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}},{login:d.c})(function(e){return e.isAuth?r.a.createElement(_.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement(h,{onSubmit:function(a){e.login(a.email,a.password,a.rememberMe,a.captcha)},captchaUrl:e.captchaUrl}))})}}]);
//# sourceMappingURL=3.a9e5753f.chunk.js.map