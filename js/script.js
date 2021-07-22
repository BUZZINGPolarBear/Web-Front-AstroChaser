let oldScrollTop=0,newScrollTop = 0, scrollPercent=0;
let imageAll;
let totalNum = 0;
let moveMouse, stars1, stars2, stars3, text3d, intoTheStars;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.009;
let scrollCnt = 0;

var context, canvas;
var sattelliteStartScroll, sattellite;
var isIntoTheStarsEnd = false; 

window.onload = function(){
  stars1 = document.getElementById("stars1");
  stars2 = document.getElementById("stars2");
  stars3 = document.getElementById("stars3");
  moveMouse = document.getElementById("moveMouse");
  text3d = document.getElementsByClassName("text3d")[0];
  intoTheStars = document.getElementById("intoTheStars");
  sattellite = document.getElementById("sattelliteImg");

  window.addEventListener("mousemove", mouseFunc, false);

  // window.addEventListener('resize', stageResize, false);
  window.addEventListener('scroll', scrollFunc);
  function mouseFunc(e)
  {
    x = (e.clientX - window.innerWidth / 2);
    y = (e.clientY - window.innerHeight / 2);
  }
  loop();
}

function loop(){
  mx += (x - mx) * speed;
  my += (y - my) * speed;

  moveMouse.style.transform = "translate("+ (mx/12) +"px," +"0px)";
  stars1.style.transform = "translate("+ (mx/10) +"px," + (my/10) +"px)";
  stars2.style.transform = "translate("+ -(mx/15) +"px," + -(my/15) +"px)";
  stars3.style.transform = "translate("+ (mx/8) +"px," + -(my/8) +"px)";
  intoTheStars.style.transform = "translate("+ (mx/15) +"px," + -(my/15) +"px)";
  sattellite.style.transform = "translate("+ (mx) +"px," + (my) +"px)";

  //3d 텍스트 모션
  //rotate3d 속성
  text3d.style.transform = "translate3d("+ -(mx/5) +"px," + -(my/5) +"px,0) rotate3d(0,1,0,"+ -mx / 60 + "deg)";

  window.requestAnimationFrame(loop);
}

function scrollFunc(e) {
    newScrollTop = document.documentElement.scrollTop;
    scrollPercent = Math.ceil((newScrollTop/document.body.scrollHeight)*100);

    intoTheStars.style.opacity = (newScrollTop/(document.body.scrollHeight)*20);
    //console.log( intoTheStars.style.opacity);

    if(scrollPercent<=0.01) intoTheStars.style.opacity = 0;
     
    if(newScrollTop-oldScrollTop>10)
    {
      scrollCnt += 1;
      //console.log(scrollCnt%40);
      drawIntoTheStars(scrollCnt%40);
    }
    else if(newScrollTop-oldScrollTop<-10 && scrollCnt>0)
    {
      scrollCnt -= 1;
      //console.log(scrollCnt%40);
      drawIntoTheStars(scrollCnt%40);
    }
    if(scrollCnt<100)
    {
      moveMouse.style.opacity = 1;
      stars1.style.opacity = 1;
      stars2.style.opacity = 1;
      stars3.style.opacity = 1;
      intoTheStars.opacity = 1;
      text3d.style.opacity = 1;
    }
    else if(scrollCnt==100) intoTheStars.style.opacity=1;
    else if(scrollCnt>100)
    {
      moveMouse.style.opacity = 0;
      stars1.style.opacity = 0;
      stars2.style.opacity = 0;
      stars3.style.opacity = 0;
      intoTheStars.opacity = 0;
      text3d.style.opacity = 0;
      intoTheStars.style.opacity = 1 - ((scrollCnt-100)*0.02);
      console.log(intoTheStars.style.opacity);
    }
    oldScrollTop = newScrollTop;
}

function  drawIntoTheStars(i)
{
  document.getElementById('intoTheStars').src = "./image/Space Travel/IntoTheStars"+i+".jpg";
}

function introduceScroll()
{
  scrollCnt=0;
}

function endIntoTheStarsImg()
{
  isIntoTheStarsEnd=true;
  console.log(isIntoTheStarsEnd);
}

