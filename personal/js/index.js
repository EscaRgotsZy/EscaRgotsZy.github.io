/**
 * Created by Admin on 2017/8/12.
 */
let windowScroll=document.documentElement.scrollTop==0?document.body:document.documentElement;

$(window).scroll(function () {
    let rt=windowScroll.scrollTop;
    let ot=$("#skillst").offset().top;
    let top=ot-rt;
    if (top<=998){
        let num=0;
        $(".jindu:first-child").animate({width:"90%"},2000)
    }
    $(".jindu-ziright").animate({
        marginRight:"6%",
    },2000).html(function () {

    })

        // $(".jindu:nth-child(2)").animate({width:"86%"},2000)
})
