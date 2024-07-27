


var sliderindex = 0;
slideShow();
function slideShow(){
  var x=document.getElementsByClassName("box-ads");
  var i = 0;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
    sliderindex++;
    if (sliderindex > x.length) {
      sliderindex = 1
    }
    x[sliderindex - 1].style.display = "block";
    setTimeout(slideShow, 3500);
}


var i = 0;
function myList(){
  var listVideo = document.getElementById("listVideo");
  if( i == 0 ){
    listVideo.style.display = "block";
    i = 1;
  }else{
    listVideo.style.display = "None";
    i = 0;
  }
}

function listremove(){
  document.getElementById("listVideo").style.display = "none";
}

// function notlink(){
//   confirm("តើអ្នកមិនចាប់អារម្មណ៍ John Sey មែនទេ?");
//   document.getElementById("listreview").style.display = "none";
//   document.getElementById("reviewclose").style.display = "none";
// }
function notlink() {
  var txt;
  if (confirm("តើអ្នកមិនចាប់អារម្មណ៍ John Sey មែនទេ?")) {
    txt = document.getElementById("listreview").style.display = "none";
    document.getElementById("reviewclose").style.display = "none";
  } else {
    txt = document.getElementById("listVideo").style.display = "none";
    // document.getElementById("changecolor").innerHTML = "";
    // document.getElementById("changecolortwo").innerHTML = "បានច្រានចោលការមិនចាប់អារម្មណ៍ John Sey";
  }
}
function brows() {
  var txt;
  if (confirm("តើអ្នកចូលមើលឆានែល John Sey មែនទេ?")) {
    window.open('https://www.youtube.com/@JohnSey', '_blank');
  } else {
    txt = "No"
  }
}
window.onscroll = function () {
  if (pageYOffset > 290) {
    list.style.position = "fixed";
    list.style.top = "63px";
    list.style.left = "0px";
  } else {
    list.style.position = "";
    list.style.top = "";
  }
}
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
    myAlert.style.display = "block";
  setTimeout(function(){ myAlert.style.display = "none"; }, 3000);
  mymenuphone.style.marginLeft = "";
}