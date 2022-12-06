let canvas = document.getElementById("graph");
let context = canvas.getContext("2d");

let img = new Image();
img.onload = function(){
  context.drawImage(img, 0, 0, canvas.width, canvas.height);
}

img.src = "globalimg/1.jpg";



function init(){
  a = document.getElementById("a");
  b = document.getElementById("b");
  c = document.getElementById("c");
  d = document.getElementById("d");
  e = document.getElementById("e");

  a.addEventListener("click", open1);
  b.addEventListener("click", open2);
  c.addEventListener("click", open3);
  d.addEventListener("click", open4);
  e.addEventListener("click", open5);
}

function open1(){
  window.open("https://www.ytn.co.kr/_ln/0104_202201020640134157", "_blank", "width=1200,height=1000");
}

function open2(){
  window.open("http://realfoods.co.kr/view.php?ud=20210719000236", "_blank", "width=1200,height=1000");
}

function open3(){
  window.open("http://www.ikoreanspirit.com/news/articleView.html?idxno=65522", "_blank", "width=1200,height=1000");
}

function open4(){
  window.open("https://biz.chosun.com/distribution/food/2022/11/23/FHXX5IVD7JAJVAAVKBZUTJOSP4/", "_blank", "width=1200,height=1000");
}

function open5(){
  window.open("http://www.ikbn.news/news/article.html?no=132081", "_blank", "width=1200,height=1000");
}

