/**
 * Created by Admin on 2017/7/18.
 */
    window.onload=function() {
        {
            var imgbox = document.querySelectorAll('.banner-logo > ul > li');
            var button = document.querySelectorAll('.lunbo>ul>li');
            var left = document.querySelector('.jiantou-left');
            var right = document.querySelector('.jiantou-right');
            var banner = document.querySelector('.banner-right');
            var now = 0;
            // 把第一张图片定义为0
            var t = setInterval(move, 2000);
            // 时间函数，做轮播
            function move() {
                now++;
                if (now == button.length) {
                    now = 0;
                }
                if (now == -1) {
                    now = button.length - 1;
                }

                // 如果运行到最后一张图片的时候返回第一张图片
                for (var i = 0; i < button.length; i++) {
                    imgbox[i].classList.remove('active');
                    button[i].classList.remove('active');
                }
                // 做一个循环把每一个图片的active属性去掉
                imgbox[now].classList.add('active');
                button[now].classList.add('active');
                // 再给第now张图片加上active属性
            }

            banner.onmousemove = function () {
                clearInterval(t);
            }
            // 鼠标移入时间函数停止运行
            banner.onmouseout = function () {
                t = setInterval(move, 1000);
            }
            // 鼠标移出运行时间函数

            button.forEach(function (value, index) {
                value.onclick = function () {
                    for (let j = 0; j < button.length; j++) {
                        imgbox[j].classList.remove('active');
                        button[j].classList.remove('active');
                    }
                    imgbox[index].classList.add('active');
                    button[index].classList.add('active');
                    // 同上，鼠标点击每一个小圆，对应每张图片
                    now = index;
                    // 使现在的图片变成时间函数运行的开始
                }
            });

            right.onclick = function () {
                move();
            }
            left.onclick = function () {
                now -= 2;
                move();
            }
        }
    // 小轮播
        {

            let big=document.querySelectorAll(".neiron-tu>.neirong-box");
            for(var i=0;i<big.length;i++){
                dong(big[i]);
            }

            function dong(big) {
                let neirongbox = big.querySelector('.neirong-1-img');
                let diandian = big.querySelectorAll('.diandian>.dian11');
                let left = big.querySelector('.neirong-box-left');
                let right = big.querySelector('.neirong-box-right');
                diandian.forEach(function (ele, index) {
                    ele.onclick = function () {
                        for (var i = 0; i < diandian.length; i++) {
                            diandian[i].classList.remove('actives');
                        }
                        neirongbox.style.marginLeft = -[index] * 296 + "px";
                        this.classList.add('actives');
                    }
                });
                let num = 0;
                right.onclick = function () {
                    num++;
                    if (num <= diandian.length - 1) {
                        neirongbox.style.marginLeft = -num * 296 + "px";
                        for (var i = 0; i < diandian.length; i++) {
                            diandian[i].classList.remove('actives');
                        }
                        diandian[num].classList.add('actives');
                    } else {
                        num = diandian.length - 1
                    }
                }
                left.onclick = function () {
                    num--;
                    if (num >= 0) {
                        neirongbox.style.marginLeft = -num * 296 + "px";
                        for (var i = 0; i < diandian.length; i++) {
                            diandian[i].classList.remove('actives');
                        }
                        diandian[num].classList.add('actives');
                    } else {
                        num = 0;
                    }
                }

            }


        }


        //选项卡
        {
            let xmdp=document.querySelector('.xiaomidan');
            // console.log(xmdp);
            let next=document.querySelector('.jiantou-2-r');
            let prev=document.querySelector('.jiantou-2-l');
            next.onclick=function () {
                xmdp.style.left=-1226+'px';
            }
            prev.onclick=function () {
                xmdp.style.left=0;
            }
        }
        //类似下面
        {
            let right=document.querySelector('.jiantou-you');
            let left=document.querySelector('.jiantou-zuo');
            let divbox=document.querySelector('.tuijian-tu');
            right.onclick=function () {
                divbox.style.left=-1226+'px';
            }
            left.onclick=function () {
                divbox.style.left=0;
            }
        }

}