import ShoppingCart from "./components/ShoppingCart.svelte";
import { renderHeaderFooter } from "./utils.mjs";
import { getLocalStorage } from "./utils.mjs";

renderHeaderFooter();

new ShoppingCart({
  target: document.querySelector(".products"),
});

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