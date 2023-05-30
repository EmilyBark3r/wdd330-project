import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import { renderHeaderFooter } from "./utils.mjs";
import { findProductById } from "./productData.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");

  // Checking to make sure there is something in the cart/localStorage before generating html
  if(cartItems){
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(".product-list").innerHTML = htmlItems.join("");
  }
  //remove from cart
  const buttonX = document.querySelectorAll(".clearItem")
    buttonX.forEach( function(item) {
      item.addEventListener("click", removeFromCartHandler);
    })
  
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimarySmall}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  <button class="clearItem" data-id="${item.Id}">X</button>
</li>`;

  return newItem;
}

//delete button.
  async function removeProductFromCart(productId) {
      const products = getLocalStorage("so-cart");
      const newProducts = products.filter((item) => item.Id != productId); 
      localStorage.setItem("so-cart", JSON.stringify(newProducts)); 
    }
  
  // remove from cart handler
  async function removeFromCartHandler(event) {
      const productId = event.target.dataset.id;
      removeProductFromCart(productId);
      renderCartContents();
      countCartContents();
  }

  //cart total
function countCartContents(){
  const cartItems = getLocalStorage("so-cart");
  const totalBar = document.querySelector(".cart-footer");

  // if("so-cart" in localStorage){
  //   total.style.display = "none";
  //   return;
  // } 

  let total = function () {
    let price = 0;
    cartItems.forEach(item => {
      price += item.FinalPrice;
    });
    return price;
  }

  totalBar.innerHTML = `<p>Total: ${Math.round(total() * 100) /100}</p>`; 
  renderCartContents(); 
}

renderCartContents();
countCartContents();
renderHeaderFooter();