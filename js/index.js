//
//                       .::::.
//                     .::::::::.
//                    :::::::::::
//                 ..:::::::::::'
//              '::::::::::::'
//                .::::::::::
//           '::::::::::::::..
//                ..::::::::::::.
//              ``::::::::::::::::
//               ::::``:::::::::'        .:::.
//              ::::'   ':::::'       .::::::::.
//            .::::'      ::::     .:::::::'::::.
//           .:::'       :::::  .:::::::::' ':::::.
//          .::'        :::::.:::::::::'      ':::::.
//         .::'         ::::::::::::::'         ``::::.
//     ...:::           ::::::::::::'              ``::.
//    ```` ':.          ':::::::::'                  ::::..
//                       '.:::::'                    ':'````..
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////


//大轮播图
$('.slider').bscSlider({
    autoplay        : true,
    navigation      : false,
    duration        : 4000,
    effect          : 1,
    effect_speed    : 750,
    easing          : 'swing',
    height          : 453
  });   

  $('.slider2').bscSlider({
    autoplay        : true,
    navigation      : false,
    duration        : 2000,
    effect          : 7,
    effect_speed    : 750,
    easing          : 'swing',
    height          : 220
  });
    // autoplay：轮播图是否自动播放。
    // navigation：轮播图是否显示前后导航按钮。
    // duration：轮播图图片切换的间隔时间，单位毫秒。
    // effect：内置的过渡动画效果，可选值为1-17。
    // effect_speed：过渡动画的速度，单位毫秒。
    // easing：easing动画函数。
    // height：指定轮播图的高度。            

    //设置选项卡效果
    var lis = document.querySelectorAll(".fRight h4 ul li");
    for(let i = 0;i < lis.length;i++){
      lis[i].onmouseenter = function(){
        // this.className = "lihover";
        // console.log($(this).siblings());
        for(var i in $(this).siblings()){
          $(this).siblings()[i].className = "";
          // console.log($(this).siblings()[i].firstChild());
          
          // console.log(this);
        }
        // for(var j in $(".content")){
        //   console.log($(".content")[j].style.zIndex = "1");
        // }
        // console.log($(".content"))
        $(".content").css({
          zIndex : 1
        })
        // console.log(this);
        this.className = "lihover";
        // console.log(this.getElementsByTagName("div")[0]);
        this.getElementsByTagName("div")[0].style.zIndex = "3";

      }
    }
    var daojishi = document.querySelectorAll(".buytimeout p span");
    console.log(daojishi);
    function jishiqi(year,month,date){
      month -= 1;
      var time = new Date(year,month,date);
      console.log(time);
      setInterval(clock,500)
      function clock(){
        var now = new Date();
        var count = parseInt((parseInt(time.getTime()) - parseInt(now.getTime()))/1000);
        daojishi[0].innerHTML = parseInt(count/3600) < 10 ? "0" + parseInt(count/3600) : parseInt(count/3600);
        daojishi[1].innerHTML = parseInt((count/3600 - daojishi[0].innerHTML) * 60 % 60) < 10 ? "0" + parseInt((count/3600 - daojishi[0].innerHTML) * 60 % 60) : parseInt((count/3600 - daojishi[0].innerHTML) * 60 % 60);
        daojishi[2].innerHTML = parseInt((((count/3600 - daojishi[0].innerHTML) * 60)-daojishi[1].innerHTML)*60) < 10 ? "0"+parseInt((((count/3600 - daojishi[0].innerHTML) * 60)-daojishi[1].innerHTML)*60) : parseInt((((count/3600 - daojishi[0].innerHTML) * 60)-daojishi[1].innerHTML)*60);
      
      }
    }
    jishiqi(2018,6,6);
    