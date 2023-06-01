import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ShoppingCart from "./components/ShoppingCart.svelte";
import { renderHeaderFooter } from "./utils.mjs";

renderHeaderFooter();

new ShoppingCart({
  target: document.querySelector(".products"),
});
  
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
}

  //cart total
function countCartContents(){
  const cartItems = getLocalStorage("so-cart");
  const totalBar = document.querySelector(".cart-footer");

  let total = function () {
    let price = 0;
    cartItems.forEach(item => {
      price += item.FinalPrice;
    });
    return price;
  }

  if("so-cart" in localStorage){
    total.style.display = "none";
    return;
  } 

  totalBar.innerHTML = `<p>Total: ${total()}</p>`;  
}

// countCartContents();