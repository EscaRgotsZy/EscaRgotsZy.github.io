/**
 * Created by Admin on 2017/8/17.
 */
$("#main").fullpage({
    anchors:["p1","p2","p3","p4","p5"],
    sectionsColor:[`${fun()}`,`${fun()}`,`${fun()}`,`${fun()}`,`${fun()}`],
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
        if (index===4){
            $(".box1").removeClass("leftOut").addClass("left");
            $(".box2").removeClass("rightOut").addClass("right");
        }
    },
    onLeave:function (index) {
        if (index===4){
            $(".box1").removeClass("left").addClass("leftOut");
            $(".box2").removeClass("right").addClass("rightOut");
        }
    }

});
function fun(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+','+g+','+b+")";
}
$(".next").click(function () {
    $.fn.fullpage.moveSectionDown();
})