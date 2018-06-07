console.log($("p input")[3]);
var $inp = $("p input");
var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var rand;
randStr();
$inp[2].nextElementSibling.nextElementSibling.onclick = function () {
    randStr();
}

function randStr() {
    rand = str[Math.floor(Math.random() * str.length)] + str[Math.floor(Math.random() * str.length)] + str[Math.floor(Math.random() * str.length)] + str[Math.floor(Math.random() * str.length)];
    $inp[2].nextElementSibling.innerHTML = rand;
}
$inp[0].onfocus = function(){
    $("form i").get(0).innerHTML = "<b></b>"
    $("form i b").css("background","white");
    this.previousElementSibling.style.backgroundPosition = "0px -40px";
}
$inp[0].onblur = function(){
    $("form i b").css("background","white");        
    this.previousElementSibling.style.backgroundPosition = "0px 0px";
}
$inp[1].onfocus = function(){
    $("form i").get(0).innerHTML = "<b></b>"
    $("form i b").css("background","white");
    this.previousElementSibling.style.backgroundPosition = "-40px -40px";
}
$inp[1].onblur = function(){
    $("form i b").css("background","white");        
    this.previousElementSibling.style.backgroundPosition = "-40px 0px";
}
$inp[2].onfocus = function(){
    $("form i").get(0).innerHTML = "<b></b>"
    $("form i b").css("background","white");
    this.previousElementSibling.style.backgroundPosition = "-40px -40px";
}
$inp[2].onblur = function(){
    $("form i b").css("background","white");        
    this.previousElementSibling.style.backgroundPosition = "-40px 0px";
    
    if(this.value == rand){
        //alert("hahaha")
    }else{
        $("form i b").css("background","none");
        $("form i").get(0).innerHTML = "验证码输入错误!";        
    }
}
$inp[4].onclick = function(){
    $.post("../php/signin.php",{"uname":$inp[0].value,"pwd":$inp[1].value},function(boo){
        // alert("登录成功"+boo)
        console.log(boo);//true\false
        if(false){
            var i = " ";
            var jump = setInterval(function(){
                $inp[4].value = "登录成功，正在跳转" + i;
                i = i + " ·";
                if(i == " · · · ·"){
                    i = " ";
                }
            },1000)
            setTimeout(function(){
                window.location = "../index.html";
                clearInterval(jump);
            },5000)
        }else{
            // $("form i b").get(0).innerHTML = "用户名或密码错误，请重新输入！"
            $("form i").get(0).innerHTML = "用户名或密码错误，请重新输入！";
            $("form i b").css({
                // "border": "1px solid #fb5e5f",
                // "line-height": 20,
                // "color": "#fb5e5f",
                // "font-size": 12,
                // "padding-left": 20,
                // "background": "url(../img/iconLogin.png) no-repeat 1px -123px"
                "display":"none"
            });
        }
    })
}
