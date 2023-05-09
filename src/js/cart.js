import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");

  // Checking to make sure there is something in the cart/localStorage before generating html
  if(cartItems){
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(".product-list").innerHTML = htmlItems.join("");
  }
}

function cartItemTemplate(product) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${product.Image}"
      alt="${product.Brand.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${product.Brand.Name}</h2>
  </a>
  <p class="cart-card__color">${product.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${product.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();
