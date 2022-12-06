function search(){
  let recipeName = document.getElementById("recipeName");
  let searchIframe = document.getElementById("searchIframe");
  searchIframe.src = "https://www.10000recipe.com/recipe/list.html?q=" + recipeName.value;
}