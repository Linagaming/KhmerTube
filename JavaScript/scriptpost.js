
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
  if(i == 0){
    readMoreDesscript.style.height = "auto";
    i = 1;
    } else {
    readMoreDesscript.style.height = "110px";
    i = 0;
  }
}
