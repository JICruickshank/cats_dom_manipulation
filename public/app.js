const createCat = function() {
  let cat = document.createElement("ul");
  cat.classList.add("cat");
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

const addCat = function(catToAdd) {
  let cat = createCat();
  cat.appendChild(nameCat(catToAdd.name));
  cat.appendChild(faveFood(catToAdd.food));
  cat.appendChild(image(catToAdd.path));
  return cat;
}

var Cat = function(name, food, path) {
  this.name = name;
  this.food = food;
  this.path = path;
}

const cat1 = new Cat("Boba", "sock fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");
const cat2 = new Cat("Barnaby", "tuna", "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg");
const cat3 = new Cat("Max", "Whiskas Temptations", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg");
const cat4 = new Cat("Chicken", "pizza", "cat_photo.jpeg");
let catsToAdd = [cat1, cat2, cat3, cat4];

const app = function() {
  let body = document.querySelector("body");
  let catsSection = document.createElement("section");
  catsSection.id = "cats";
  body.appendChild(catsSection);
  for(let cat of catsToAdd) {
    catsSection.appendChild(addCat(cat));
  }
}
window.onload = app;
