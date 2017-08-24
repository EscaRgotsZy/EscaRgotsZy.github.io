/**
 * Created by Admin on 2017/8/21.
 */
// let windowScroll=document.documentElement.scrollTop==0?document.body:document.documentElement;
//
// $(window).scroll(function () {
//     let rt=windowScroll.scrollTop;
//     let ot=$("#skillst").offset().top;
//     let top=ot-rt;
//     if (top<=998){
//         let num=0;
//         $(".jindu:first-child").animate({width:"90%"},2000)
//     }
//     $(".jindu-ziright").animate({
//         marginRight:"6%",
//     },2000).html(function () {
//         $(".jindu:first-child").css("wid")
//     })
//
//     // $(".jindu:nth-child(2)").animate({width:"86%"},2000)
// })

$("#personal").fullpage({
    anchors:["p1","p2","p3","p4","p5"],
    sectionsColor:[`white`,`white`,`white`,`white`,`white`],
    verticalCentered:false,//字体是否垂直居中
    scrollingSpeed:1000,//设置滚动速度
    easing:"easeOutBounce",//设置动画效果引入js
    navigation:true,
    // navigationPosition:left,
    // // navigationTooltips:[111,222,333,444,555],
    keyboardScrolling:true,
    continuousVertical:false,//可以
    fixedElements:"#menu",
    menu:"#menu",
    slidesNavigation:true,
    afterLoad:function (anchor,index) {
        if(index===2){
            $(".menuBlock a").css({
                "color":"black",
            });
        }
        if (index===3){
            $(".jindu:first-child").animate({width:"90%"},2000);
            $(".jindu-ziright").animate({
                marginRight:"6%",
            },2000);
        }
    },
});
$(".next").click(function () {
    $.fn.fullpage.moveSectionDown();
})

// setInterval(function() {
//     // if (flag){
//     //     $(".next").addClass("scaleN");
//     // }else {
//     //     $(".next").removeClass("scaleN");
//     // }
//     // flag=!flag;
//     alert(1)
// },1000);
var flag=true;
setInterval(function () {
    if (flag){
        $(".next").removeClass("scaleS");
        $(".next").addClass("scaleN");
    }else {
        $(".next").removeClass("scaleN");
        $(".next").addClass("scaleS");
    }
    flag=!flag;
},1000)
$(".menuBlock").click(function () {
    $(".menuBlock").hide(1000);
    $("#menu").show(1000);
})
$("#nav-None").click(function () {
    $(".menuBlock").show(1000);
    $("#menu").hide(1000);
})


