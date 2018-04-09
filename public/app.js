const addCat = function() {
  // parent element ul class = "cat"
  // child element li Name: <name>
  // as above li Favourite food: <food>
  // as above li img width="500" src=""

  let parentCat = document.createElement("ul");
  parentCat.classList.add("cat");
  let name = document.createElement("li");
  name.innerText = "Name: Chicken";
  parentCat.append(name);
  let food = document.createElement("li");
  food.innerText = "Favourite Food: Cat Food";
  parentCat.append(food);
  let image = document.createElement("img");
  image.width = 500
  image.src = "cat_photo.jpeg";
  let picture = document.createElement("li");
  picture.appendChild(image);
  parentCat.append(picture);

  let cats = document.querySelector("#cats");
  cats.appendChild(parentCat);
}



const app = function() {
  addCat();
}
window.onload = app;
