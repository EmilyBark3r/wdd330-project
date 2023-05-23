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
  const buttonX = document.querySelectorAll(".clearItem")
    buttonX.forEach( function(item) {
      item.addEventListener("click", removeFromCartHandler);
    })
  
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
  <button class="clearItem" data-id="${item.Id}">X</button>
</li>`;

  return newItem;
}

//delete button.

// // Add an eventlistener to each X button. 
// // When the X is clicked you need to pull the id of the item to be removed
// document.querySelector('clearItem').addEventListener('click', () => {
// // pull the contents of the cart from local storage (get/id or post/id)
// const cartItems = getLocalStorage("so-cart");
// // remove the appropriate item
// })

// remove the appropriate item
// restore the cart in localStorage
// re-render the cart list

//Doesnt work, products no longer will show up in the cart. Cant read null.


  async function removeProductFromCart(productId) {
      const products = getLocalStorage("so-cart");
      const newProducts = products.filter((item) => item.Id != productId); 
      localStorage.setItem("so-cart", JSON.stringify(newProducts)); 
    }
  
  // add to cart button event handler
  async function removeFromCartHandler(event) {
      const productId = event.target.dataset.id;
      removeProductFromCart(productId);
      renderCartContents();
  }

  //cart total
function countCartContents(){
  const cartItems = getLocalStorage("so-cart");
  const totalBar = document.querySelector(".cart-footer");

  if("so-cart" in localStorage){
    total.style.display = "none";
    return;
  } 

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
// countCartContents();
renderHeaderFooter();