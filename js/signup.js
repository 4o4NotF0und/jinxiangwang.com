var oInp = document.querySelectorAll("form p input");
console.log(oInp);

var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var rand;
randStr();
oInp[4].nextElementSibling.nextElementSibling.onclick = function () {
    randStr();
    if (this.value == rand) {
        this.style.backgroundPosition = "128px -82px";
        this.nextElementSibling.nextElementSibling.nextElementSibling.style = "display:none";
        tftel = true;
    } else {
        this.style.backgroundPosition = "128px -112px";
        this.nextElementSibling.nextElementSibling.nextElementSibling.style = "display:inline-block;border:1px solid #d0d0d0;";
        this.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = "请输入验证码";
        tftel = false;
    }
    if (tfname && tfpwd && tfrepwd && tftel) {
        oInp[6].onclick = sub;
        oInp[6].style.cursor = "pointer";
    } else {
        oInp[6].onclick = null;
        oInp[6].style.cursor = "no-drop";
    }
}

function randStr() {
    rand = str[Math.floor(Math.random() * str.length)] + str[Math.floor(Math.random() * str.length)] + str[Math.floor(Math.random() * str.length)] + str[Math.floor(Math.random() * str.length)];
    oInp[4].nextElementSibling.innerHTML = rand;
}

oInp[0].onfocus = function () {
    this.nextElementSibling.style = "display:inline-block;border:1px solid #d0d0d0;";
    this.nextElementSibling.innerHTML = "4-20位字符、支持汉字、字母、数字及“-”“_”组合";
}
oInp[1].onfocus = function () {
    this.nextElementSibling.style = "display:inline-block;border:1px solid #d0d0d0;";
    this.nextElementSibling.innerHTML = "6-20位字符，必须由字母、数字、和符号两种以上组合";
}
oInp[2].onfocus = function () {
    this.nextElementSibling.style = "display:inline-block;border:1px solid #d0d0d0;";
    this.nextElementSibling.innerHTML = "再次验证输入的密码";
}
oInp[3].onfocus = function () {
    this.nextElementSibling.style = "display:inline-block;border:1px solid #d0d0d0;";
    this.nextElementSibling.innerHTML = "请输入手机号码";
}
oInp[4].onfocus = function () {
    this.nextElementSibling.nextElementSibling.nextElementSibling.style = "display:inline-block;border:1px solid #d0d0d0;";
    this.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = "请输入验证码";
}
var tfname = false;
oInp[0].onblur = function () {
    var re = /^(\w|[\u4e00-\u9fa5]|-){4,20}$/;
    if (re.test(this.value)) {
        this.style.backgroundPosition = "280px -82px";
        this.nextElementSibling.style = "display:none";
        tfname = true;
    } else {
        this.style.backgroundPosition = "280px -112px";

        this.nextElementSibling.style = "display:inline-block;border:1px solid #fb5e5f;color:#fb5e5f";
        this.nextElementSibling.innerHTML = "4-20位字符、支持汉字、字母、数字及“-”“_”组合";
        tfname = false;
    }
    if (tfname && tfpwd && tfrepwd && tftel) {
        oInp[6].onclick = sub;
        oInp[6].style.cursor = "pointer";
    } else {
        oInp[6].onclick = null;
        oInp[6].style.cursor = "no-drop";
    }

}
var tfpwd = false;
oInp[1].onblur = function () {
    var re = /^\w{6,20}$/;
    if (re.test(this.value)) {
        this.style.backgroundPosition = "280px -82px";
        this.nextElementSibling.style = "display:none";
        tfpwd = true;
    } else {
        this.style.backgroundPosition = "280px -112px";
        this.nextElementSibling.style = "display:inline-block;border:1px solid #fb5e5f;";
        this.nextElementSibling.innerHTML = "6-20位字符，必须由字母、数字、和符号两种以上组合";
        tfpwd = false;

    }
    if (tfname && tfpwd && tfrepwd && tftel) {
        oInp[6].onclick = sub;
        oInp[6].style.cursor = "pointer";
    } else {
        oInp[6].onclick = null;
        oInp[6].style.cursor = "no-drop";
    }
}
var tfrepwd = false;

oInp[2].onblur = function () {
    if (this.value == oInp[1].value) {
        this.style.backgroundPosition = "280px -82px";
        this.nextElementSibling.style = "display:none";
        tfrepwd = true;

    } else {
        this.style.backgroundPosition = "280px -112px";
        this.nextElementSibling.style = "display:inline-block;border:1px solid #fb5e5f;";
        this.nextElementSibling.innerHTML = "再次验证输入的密码";
        tfrepwd = false;

    }
    if (tfname && tfpwd && tfrepwd && tftel) {
        oInp[6].onclick = sub;
        oInp[6].style.cursor = "pointer";
    } else {
        oInp[6].onclick = null;
        oInp[6].style.cursor = "no-drop";
    }
}
var tftel = false;

oInp[3].onblur = function () {
    var re = /\d{11}/
    if (re.test(this.value)) {
        this.style.backgroundPosition = "280px -82px";
        this.nextElementSibling.style = "display:none";
        tftel = true;
    } else {
        this.style.backgroundPosition = "280px -112px";
        this.nextElementSibling.style = "display:inline-block;border:1px solid #fb5e5f;";
        this.nextElementSibling.innerHTML = "请输入手机号码";
        tftel = false;
    }
    if (tfname && tfpwd && tfrepwd && tftel) {
        oInp[6].onclick = sub;
        oInp[6].style.cursor = "pointer";
    } else {
        oInp[6].onclick = null;
        oInp[6].style.cursor = "no-drop";
    }
}
var tftel = false;

oInp[4].onblur = function () {
    if (this.value == rand) {
        this.style.backgroundPosition = "128px -82px";
        this.nextElementSibling.nextElementSibling.nextElementSibling.style = "display:none";
        tftel = true;
    } else {
        this.style.backgroundPosition = "128px -112px";
        this.nextElementSibling.nextElementSibling.nextElementSibling.style = "display:inline-block;border:1px solid #fb5e5f;";
        this.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = "请输入验证码";
        tftel = false;
    }
    if (tfname && tfpwd && tfrepwd && tftel) {
        oInp[6].onclick = sub;
        oInp[6].style.cursor = "pointer";
    } else {
        oInp[6].onclick = null;
        oInp[6].style.cursor = "no-drop";
    }
}

function sub() {
    alert("suc");
    $.post("../php/signup.php", {
        "uname": oInp[0].value,
        "pwd": oInp[1].value,
        "tel": oInp[3].value
    }, function (callBackVal) {
        if (callBackVal) {
            var i = " ";
            var jump = setInterval(function(){
                oInp[6].value = "注册成功，正在跳转" + i;
                i = i + " ·";
                if(i == " · · · ·"){
                    i = " ";
                }
            },1000)
            setTimeout(function(){
                window.location = "../html/signin.html";
                clearInterval(jump);
            },5000)
            
            
        } else {
            alert("注册失败");

        }
    })
}


// oInp[0].onblur = function(){

// }