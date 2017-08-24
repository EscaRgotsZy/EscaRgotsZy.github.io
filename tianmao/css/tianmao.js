/**
 * Created by Admin on 2017/7/21.
 */
window.onload=function () {
    {
        let ding=document.querySelector('.dingceng');

        window.onscroll=function () {
            let obj=document.body.scrollTop==0?document.documentElement:document.body;
            if (obj.scrollTop>=500){
                ding.style.top=0;
            }else{
                ding.style.top=-50+'px';
            }
        }
    }
    {
        var imgs=document.querySelectorAll('.banner-banner>li');
        var dians=document.querySelectorAll('.circle>li');
        var box=document.querySelector('.bannerbiao');
        var colorarr=['#E8E8E8','#F0F0F0','#E8E8E8','#EAEAEA','#6A31D6','#84CEF1'];
        dians.forEach(function (value,index) {
            value.onmouseover=function () {
                for(var i=0;i<dians.length;i++){
                    dians[i].classList.remove('active');
                    imgs[i].classList.remove('active');
                }
                this.classList.add('active');
                imgs[index].classList.add('active');
                box.style.background=colorarr[index];
                num=index;
            }
        });
        var num=0;
        var ttt=setInterval(fun,2000);
        function fun() {
            num++;
            if(num==dians.length){
                num=0;
            }
            for(var i=0;i<dians.length;i++){
                dians[i].classList.remove('active');
                imgs[i].classList.remove('active');
            }
            dians[num].classList.add('active');
            imgs[num].classList.add('active');
            box.style.background=colorarr[num];
        }
        box.onmouseover=function () {
            clearInterval(ttt);
        }
        box.onmouseout=function () {
            ttt=setInterval(fun,2000);
        }
    }
    //楼层
    {
        let leftbar=document.querySelector('.navs');
        let btns=document.querySelectorAll('.navs>ul>li');
        console.log(btns);
        let floor = document.querySelectorAll('.contentml');
        let obj;
        window.addEventListener("scroll",function () {//增加一个事件监听 监听的具体就是屏幕 scroll(滚动) 当滚动的过程中执行函数
            obj=document.documentElement.scrollTop==0?document.body:document.documentElement;// 判断当前浏览是在火狐还是在谷歌(document.body.scrollTop获取当前高度)浏览器中
            if (obj.scrollTop>800){
                leftbar.style.cssText='width:36px;height:342px';
            }else {
                leftbar.style.cssText='width:0;height:0';
            }
            btns.forEach(function (value,index) {
                value.onclick=function () {
                    let ot=floor[index].offsetTop;
                    animate(obj,{scrollTop:ot},500);
                }
            })
            const colorArr=["#EA5F8D","#0AA6E8","#64C333","#F15453","#19C8A9","#F7A945","#000"];
            window.addEventListener("scroll",function () {
                let st=obj.scrollTop;
                for(let i =0;i< floor.length;i++){
                    if(st >=floor[i].offsetTop){
                        btns.forEach(function (ele) {
                            ele.style.background="";
                        });
                        btns[i].style.background=colorArr[i];
                    }
                }
            })

        })
    }
    {
        let div=document.querySelector('.youtiao-2')
        div.onclick=function () {
//        document.body.scrollTop=0;
            let obj=document.body.scrollTop==0?document.documentElement:document.body;
            let scrollt=obj.scrollTop;
            let time=2000;
            let speed=scrollt/time*50;
            let t=setInterval(function () {
                scrollt-=speed;
                obj.scrollTop=scrollt;
                if (scrollt<=0){
                    obj.scrollTop=0;
                    clearInterval(t);
                }
            },1000)
        }
    }
    var big=document.querySelectorAll(".topimg>li");
    var mao=document.querySelectorAll(".topimg> li > a > .bofang");
    var maos=document.querySelectorAll(".bottonimg > li > a > .bofang-1");
    var small=document.querySelectorAll(".bottonimg>li");
    var yugaokuang = document.querySelector('.yugaokuang');
    var kanzhibo =  document.querySelector('.yugaokuang>ul>li');
    var zhibo = document.querySelector('.zhibo');
    var zhiboimg = document.querySelectorAll('.zhibo>img');
    var zbtutu = document.querySelectorAll('.zbtutu');
    small.forEach(function(ele,index){
        ele.onmouseover=function(){
            maos[index].style.opacity=1;
            maos[index].style.transform="scale(1.2)"
            big.forEach(function(ele,index){
                ele.style.zIndex=2;
                ele.style.display="none";
            })
            big[index].style.zIndex=10;
            big[index].style.display="block";
        }
        big[index].onmouseover=function () {
            mao[index].style.transform="scale(1.2)"
        }
        ele.onmouseout=function () {
            maos[index].style.opacity=0;
        }
    })


    {
        let fontbox = document.querySelector('.live>.live-inner');
        let length = document.querySelectorAll('.live-inner>li');
        let nn = 0;
        setInterval(function () {
            nn++;
            if (nn == length.length) {
                nn = 0;
            }
            fontbox.style.marginTop =-nn * 50+'px';
        }, 2000)
    }
































}