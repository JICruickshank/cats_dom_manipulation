const createCat = function() {
  let cat = document.createElement("ul");
  return cat;
}

const nameCat = function(name) {
  let nameTag = document.createElement("li");
  nameTag.innerText = `Name: ${name}`;
  return nameTag;
}

const faveFood = function(food) {
  let foodTag = document.createElement("li");
  foodTag.innerText = `Favourite Food: ${food}`;
  return foodTag;
}

const image = function(path) {
  let imgLi = document.createElement("li");
  let imgTag = document.createElement("img");
  imgTag.width = 500;
  imgTag.src = path;
  imgLi.appendChild(imgTag);
  return imgLi;
}

const addCat = function(name, food, path) {
  let cat = createCat();
  cat.appendChild(nameCat(name));
  cat.appendChild(faveFood(food));
  cat.appendChild(image(path));
  let cats = document.querySelector("#cats");
  cats.appendChild(cat);
}

const app = function() {
  addCat("Chicken", "Pizza", "cat_photo.jpeg");
}
window.onload = app;
