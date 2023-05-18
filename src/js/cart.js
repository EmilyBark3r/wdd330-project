import { element } from "svelte/internal";
import { getLocalStorage, removeLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");

  // Checking to make sure there is something in the cart/localStorage before generating html
  if(cartItems){
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(".product-list").innerHTML = htmlItems.join("");
  }
}

// REMOVE FROM CART
async function RemoveItem(){

  // localStorage.removeItem("productId");
  // console.log("this is working");
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  <button id="remove" data-id="">X</button>
  </li>`;
  
 //   <input type="button" value="Remove From Cart" onClick="RemoveItem()"> 
// button is for the x to remove items from the cart
  return newItem;
}


//cart contents
function countCartContents(){
  const cartItems = getLocalStorage("so-cart");

  const totalBar = document.querySelector(".cart-footer");

//check if theres something in the cart already, if not set total to 0
  if(cartItems.length <= 0){
    total.style.display = "none";
    return;
  } 
//total price in cart
  let total = function () {
    let price = 0;
    cartItems.forEach(item => {
      price += item.FinalPrice;
    });
    return price;
  }

  totalBar.innerHTML = `<p>Total: ${total()}</p>`;  
}

renderCartContents();
countCartContents();
