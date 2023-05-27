import { findProductById } from "./productData.mjs";
import { cartCount } from "./stores.mjs";
import { setLocalStorage, getLocalStorage, getParam } from "./utils.mjs";

let product = {};

export async function productDetails(productId){
    // use findProductById to get the details for the current product. 
    // findProductById will return a promise! use await or .then() to process it
    product = await findProductById(productId);
    
    // once we have the product details we can render out the HTML
    document.getElementById("productName").innerHTML = product.Brand.Name;
    document.getElementById("productNameWithoutBrand").innerHTML = product.NameWithoutBrand;
    document.getElementById("productImage").src = product.Image;
    document.getElementById("productFinalPrice").innerHTML = product.FinalPrice;
    document.getElementById("productColorName").innerHTML = product.Colors[0].ColorName;
    document.getElementById("productDescriptionHtmlSimple").innerHTML = product.DescriptionHtmlSimple;

    // add a listener to Add to Cart button
    document
    .getElementById("addToCart")
    .addEventListener("click", addToCartHandler);
}

function addToCartHandler() {
    let cartContents = getLocalStorage("so-cart");
    //check to see if there was anything there
    if (!cartContents) {
      cartContents = [];
    }
    // then add the current product to the list
    cartContents.push(product);
    setLocalStorage("so-cart", cartContents);
    // update the visible cartCount
    cartCount.set(cartContents.length);
  }

