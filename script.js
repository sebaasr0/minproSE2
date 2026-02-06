// data, the menu items
const menuItems = [
  { name: "Espresso (Single Shot)", price: 3, image: "./assets/Expresso.png", alt: "espresso" },
  { name: "Espresso (Double Shot)", price: 5, image: "./assets/Expresso.png", alt: "espresso" },
  { name: "Americano (Large)", price: 4, image: "./assets/Expresso.png", alt: "americano" },
  { name: "Caffe Latte (Small)", price: 4, image: "./assets/Expresso.png", alt: "latte" },
  { name: "Caffe Latte (Medium)", price: 5, image: "./assets/Expresso.png", alt: "latte" },
  { name: "Caffe Latte (Large)", price: 6, image: "./assets/CoffeeCupG.png", alt: "latte" },
  { name: "Cold Brew (Small)", price: 4, image: "./assets/CoffeeCupG.png", alt: "coldbrew" },
  { name: "Cold Brew (Medium)", price: 5, image: "./assets/CoffeeCupG.png", alt: "coldbrew" },
  { name: "Cold Brew (Large)", price: 6, image: "./assets/CoffeeCupG.png", alt: "coldbrew" },
];

// cart state
let cart = [];

// dom references
function getCartBadge() {
  return document.getElementById("cart-badge");
}

function getCardsContainer() {
  return document.getElementById("cards-container");
}

// card generation
function createCard(item, index) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.alt;

  const h3 = document.createElement("h3");
  h3.classList.add("primary-font");
  h3.style.fontSize = "1.1rem";
  h3.textContent = item.name;

  const h4 = document.createElement("h4");
  h4.classList.add("primary-font");
  h4.style.fontSize = "1rem";
  h4.textContent = "Price: $" + item.price;

  const button = document.createElement("button");
  button.textContent = "Add to Cart";
  button.addEventListener("click", function () {
    addToCart(index);
  });

  card.appendChild(img);
  card.appendChild(h3);
  card.appendChild(h4);
  card.appendChild(button);

  return card;
}

function renderCards() {
  const container = getCardsContainer();
  container.innerHTML = "";
  for (let i = 0; i < menuItems.length; i++) {
    const card = createCard(menuItems[i], i);
    container.appendChild(card);
  }
}

// cart functions
function addToCart(index) {
  const item = menuItems[index];
  cart.push({ name: item.name, price: item.price });
  updateCartBadge();
}

function updateCartBadge() {
  const badge = getCartBadge();
  if (cart.length > 0) {
    badge.textContent = cart.length;
    badge.style.display = "flex";
  } else {
    badge.style.display = "none";
  }
}

// init
document.addEventListener("DOMContentLoaded", function () {
  renderCards();
  updateCartBadge();
});
