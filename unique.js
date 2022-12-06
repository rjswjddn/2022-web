let currentimg = 0;
let imgarray = new Array();

imgarray[0] = "uniqueimg/0.jpg";
imgarray[1] = "uniqueimg/1.jpg";
imgarray[2] = "uniqueimg/2.jpg";
imgarray[3] = "uniqueimg/3.jpg";

explarray = new Array();
explarray[0] = 
"청국장 <br> 콩을 쪄서 항아리에 짚을 깔아 그 위에 넣고 발효시킨 콩. 숙성 기간 동안 볏짚에 있는 고초균(Bacillus subtilis)이라는 미생물이 증식하면서 "
+ "삶은 콩을 발효시키고, 여기서 효소가 발생하여 끈적한 청국장이 완성된다. 외국인들 사이에서는 혐오식품으로 유명하다. 서구권에서 '냄새 많이 나는 음식'을 "
+ "논할 때 삭힌 홍어와 함께 빠지지 않는 한국의 강자. 청국장을 흔히 dead body soup나 corpse soup 등으로 표현한다.";
explarray[1] = "산낙지 <br> 한국의 해산물 회 음식의 일종으로 이름의 뜻은 말 그대로 '살아 있는 낙지.[1]' 영어로는 'Live octopus'라고 부른다."
+ "거의 모든 외국인들은 산낙지를 먹는 한국인을 보면서 신기해 하거나 징그럽게 생긴 바다 생물을 산채로 먹는 모습에 경악을 한다.";
explarray[2] = "홍어 <br> 홍어는 '연골어류'는 요소를 통해 체내에 저장해두는 방식으로 삼투압을 조절하기 때문에 내장만 제거하면 암모니아가 없는 다른 생선들과 달리 죽어도 체내에 암모니아가 남아있다."
+ "연골어류는 시간이 지나면 체내에 있던 요소가 암모니아로 분해되어 부패가 아닌 발효가 이루어진다.";
explarray[3] = "순대 <br>  돼지 창자에 숙주, 우거지, 찹쌀 등과 돼지 선지를 섞어서 된장으로 간한 것을 채워서 삶은 음식을 뜻한다. 현재 한국의 대표적인 길거리 음식 중 하나이다. "
+ "또한 떡볶이, 튀김, 라면, 김밥과 함께 대표적인 분식 메뉴이기도 하다. 내장에 피까지 들어가다 보니 잡내가 강해서 호불호가 매우 심한 음식이기도 하다.";

let text = document.getElementById("text");

function next(){
  currentimg++;
  if(currentimg > 3){
    currentimg = 0;
  }
  sectionimg.src=imgarray[currentimg];
  text.innerHTML = explarray[currentimg];
}

function back(){
  currentimg--;
  if(currentimg < 0){
    currentimg = 3;
  }
  sectionimg.src=imgarray[currentimg];
  text.innerHTML = explarray[currentimg];
}