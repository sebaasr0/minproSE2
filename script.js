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

// cart state — load from localStorage
let cart = loadCart();

// localStorage functions
function loadCart() {
  const saved = localStorage.getItem("cart");
  return saved ? JSON.parse(saved) : [];
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

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
  saveCart();
  updateCartBadge();
  renderCartPopup();
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

// cart popup functions
function toggleCartPopup() {
  document.getElementById("cart-popup").classList.toggle("open");
}

function renderCartPopup() {
  var itemsContainer = document.getElementById("cart-items");
  var totalContainer = document.getElementById("cart-total");
  var emptyMsg = document.getElementById("cart-empty-msg");

  itemsContainer.innerHTML = "";

  if (cart.length === 0) {
    emptyMsg.style.display = "block";
    totalContainer.style.display = "none";
    return;
  }

  emptyMsg.style.display = "none";
  totalContainer.style.display = "flex";

  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].price;

    var row = document.createElement("div");
    row.classList.add("cart-item");

    var nameSpan = document.createElement("span");
    nameSpan.classList.add("cart-item-name");
    nameSpan.textContent = cart[i].name;

    var priceSpan = document.createElement("span");
    priceSpan.classList.add("cart-item-price");
    priceSpan.textContent = "$" + cart[i].price;

    var removeBtn = document.createElement("button");
    removeBtn.classList.add("cart-item-remove");
    removeBtn.textContent = "\u2715";
    removeBtn.setAttribute("data-index", i);
    removeBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      removeFromCart(parseInt(this.getAttribute("data-index")));
    });

    row.appendChild(nameSpan);
    row.appendChild(priceSpan);
    row.appendChild(removeBtn);
    itemsContainer.appendChild(row);
  }

  totalContainer.innerHTML = "<span>Total</span><span>$" + total + "</span>";
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartBadge();
  renderCartPopup();
}

// subscribe function
function handleSubscribe() {
  const emailInput = document.getElementById("email");
  const msg = document.getElementById("subscribe-msg");
  const email = emailInput.value.trim();

  if (!email) {
    msg.textContent = "Please enter an email address.";
    msg.style.color = "#c0392b";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    msg.textContent = "Please enter a valid email address.";
    msg.style.color = "#c0392b";
    return;
  }

  msg.textContent = "You have successfully subscribed with " + email + "!";
  msg.style.color = "#27ae60";
  emailInput.value = "";
}

// navigation
function handleHomeClick(event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// init
document.addEventListener("DOMContentLoaded", function () {
  renderCards();
  updateCartBadge();
  document.getElementById("subscribe-btn").addEventListener("click", handleSubscribe);
  document.getElementById("home-link").addEventListener("click", handleHomeClick);

  // cart popup listeners
  document.getElementById("cart-link").addEventListener("click", function (e) {
    e.preventDefault();
    toggleCartPopup();
  });

  document.getElementById("cart-popup-close").addEventListener("click", function () {
    document.getElementById("cart-popup").classList.remove("open");
  });

  document.addEventListener("click", function (e) {
    var popup = document.getElementById("cart-popup");
    var cartLink = document.getElementById("cart-link");
    if (!popup.contains(e.target) && !cartLink.contains(e.target)) {
      popup.classList.remove("open");
    }
  });

  renderCartPopup();
});
