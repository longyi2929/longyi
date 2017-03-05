/**
 * Created by Administrator on 2016/8/26.
 */
//进度条1
var canvas=document.getElementById('d1');
var ctx1=canvas.getContext("2d");
ctx1.lineWidth=8;
ctx1.font='24px SiHei';
var start=-90;
var end=-90;
var timer1=setInterval(function(){
    ctx1.clearRect(0,0,100,100);
    end+=2;
    ctx1.beginPath();
    ctx1.arc(50,50,40,start*Math.PI/180,end*Math.PI/180);
    if(end-start<120){
        ctx1.strokeStyle='red';
        ctx1.fillStyle='red';
    }
    else if(end-start<240){
        ctx1.strokeStyle='orange';
        ctx1.fillStyle='orange';
    }else{
        ctx1.strokeStyle='green';
        ctx1.fillStyle='green';
    }
    ctx1.stroke();
    //绘制文字
    var perentage=Math.floor((end-start)/360*100)+'%';
    var textWidth=ctx1.measureText(perentage).width;
    ctx1.fillText(perentage,50-textWidth/2,50+2);


    if(end>=270){
        clearInterval(timer1);
    }
},500)
//进度条2
var ctx2=d2.getContext('2d');
ctx2.lineWidth=8;
ctx2.font='24px SiHei';
var start=-90;
var end=-90;
var timer=setInterval(function(){
    ctx2.clearRect(0,0,100,100);
    end+=2;
    ctx2.beginPath();
    ctx2.arc(50,50,40,start*Math.PI/180,end*Math.PI/180);
    if(end-start<120){
        ctx2.strokeStyle='red';
        ctx2.fillStyle='red';
    }
    else if(end-start<240){
        ctx2.strokeStyle='pink';
        ctx2.fillStyle='pink';
    }else{
        ctx2.strokeStyle='orange';
        ctx2.fillStyle='orange';
    }
    ctx2.stroke();
    //绘制文字
    var perentage=Math.floor((end-start)/360*100)+'%';
    var textWidth=ctx2.measureText(perentage).width;
    ctx2.fillText(perentage,50-textWidth/2,50+2);


    if(end>=270){
        clearInterval(timer);
    }
},500)


//进度条蓝色条纹
function run(){  
    var bar = document.getElementById("bar"); 
    var total = document.getElementById("total"); 
    bar.style.width=parseInt(bar.style.width) + 1 + "%";  
    total.innerHTML = bar.style.width; 
    if(bar.style.width == "100%"){  
      window.clearTimeout(timeout); 
      return; 
    } 
    var timeout=window.setTimeout("run()",100); 
  } 
    window.onload = function(){  
       run(); 
    }  
//无缝上下滚动
var speed = 50;  
demo2.innerHTML = demo1.innerHTML;  
function Marquee() {  
   if (demo2.offsetTop - demo.scrollTop <= 0) {  
       demo.scrollTop -= demo1.offsetHeight;  
    } else {  
        demo.scrollTop++;  
    }  
}  
var MyMar = setInterval(Marquee, speed);  
  
demo.onmouseover = function() {  
    clearInterval(MyMar);  
}  
  
demo.onmouseout = function() {  
   MyMar = setInterval(Marquee, speed);  
}  