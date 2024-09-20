
var i = 0;

function myOpenmenu(){
  var mymenuphone = document.getElementById("mymenuphone");
  if( i == 0 ){
    mymenuphone.style.marginLeft = "0px";
  }
}
function myClosemenu(){
  var mymenuphone = document.getElementById("mymenuphone");
  mymenuphone.style.marginLeft = "";
}
const body = document.body;
const textMode = document.textMode;
function myMode(){
  body.classList.toggle("dark-mode");
}
function openAlert(){
  setTimeout(function(){ myAlert.style.display = "block";},400);
  setTimeout(function(){ myAlert.style.display = "none"; }, 4000);
  mymenuphone.style.marginLeft = "";
}
function nightModeDesktop(){
  body.classList.toggle("dark-mode");
}
function nightModeDesktop(){
  body.classList.toggle("dark-mode");
  setTimeout(function(){ myAlert.style.display = "block";},0);
  setTimeout(function(){ myAlert.style.display = "none";}, 2000);
}

function readMoreDesscript(){
  var readMoreDesscript = document.getElementById("readdess");
  const element = document.querySelector(".box-desscription > p");
      if(i == 0){
    readMoreDesscript.style.height = "auto";
    element.style.cssText = "-webkit-line-clamp: 10000;";
    i = 1;
    } else {
    element.style.cssText = "-webkit-line-clamp: ";
    i = 0;
  }
}
function clickSubscribe(){
  var l = 1;
  const sub = document.getElementById("subscribeme");
  if(l == 0){	
    sub.innerHTML = "បានជាវ";
    l = 1;
  }else{
    sub.innerHTML = "ឈប់ជាវ";
    l = 0;
  }
    
}