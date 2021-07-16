let scrollTop = 0;
let imageAll;
let totalNum = 0;
let moveMouse, stars1, stars2, stars3, text3d, IntoTheStarsPage;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.009;

window.onload = function(){
  stars1 = document.getElementById("stars1");
  stars2 = document.getElementById("stars2");
  stars3 = document.getElementById("stars3");
  moveMouse = document.getElementById("moveMouse");
  text3d = document.getElementsByClassName("text3d")[0];
  IntoTheStarsPage = document.getElementsByClassName("starPage")[0];

  window.addEventListener("mousemove", mouseFunc, false);

  // window.addEventListener('resize', stageResize, false);
  //window.addEventListener('scroll', scrollFunc);
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

  //3d 텍스트 모션
  //rotate3d 속성
  text3d.style.transform = "translate3d("+ -(mx/5) +"px," + -(my/5) +"px,0) rotate3d(0,1,0,"+ -mx / 60 + "deg)";

  window.requestAnimationFrame(loop);
}




// function scrollFunc(e) {
//     scrollTop = this.scrollY;

//     // let per = Math.ceil(scrollTop / (_documentHum - _windowHNum) * 100);
//     // progressBar.style.width = per + "%";

//     for(var i=0; i< totalNum ; i++){
//         imageAll[i].style.transform = "perspective(400px) translateZ("+ scrollTop/(5*(totalNum-i)) +"px)";
//         // imageAll[i].style.transform = "perspective(400px) translateZ("+ scrollTop/5 +"px)";
//         console.log(scrollTop , scrollTop / (5*(totalNum-i)) );
//     }

// }

// function stageResize() {
//     _documentHum = document.body.offsetHeight; 
//     _windowHNum = window.outerHeight; 
// }


