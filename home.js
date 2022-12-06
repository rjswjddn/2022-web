let sectionimg = document.getElementById("sectionimg");

let imgArray = new Array();
imgArray[0] = "main1.jpg";
imgArray[1] = "main2.jpg";
imgArray[2] = "main3.jpg";
let i = 0;

showImage()

function showImage(){
  sectionimg.src=imgArray[i];
  i++;
  if(i>2){
    i=0;
  }
  setTimeout(showImage,3000);
}
