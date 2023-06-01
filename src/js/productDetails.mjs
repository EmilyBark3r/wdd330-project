import { findProductById } from "./externalServices.mjs";
import { cartCount } from "./stores.mjs";
import { setLocalStorage, getLocalStorage, getParam } from "./utils.mjs";

let product = {};

export async function productDetails(productId){
    // use findProductById to get the details for the current product. 
    // findProductById will return a promise! use await or .then() to process it
    const product = await findProductById(productId);
    
    // once we have the product details we can render out the HTML
    document.getElementById("productName").innerHTML = product.Brand.Name;
    document.getElementById("productNameWithoutBrand").innerHTML = product.NameWithoutBrand;
    document.getElementById("productImage").src = product.Images.PrimaryLarge;
    document.getElementById("productFinalPrice").innerHTML = product.FinalPrice;
    document.getElementById("productColorName").innerHTML = product.Colors[0].ColorName;
    document.getElementById("productDescriptionHtmlSimple").innerHTML = product.DescriptionHtmlSimple;

    // add a listener to Add to Cart button
    document
    .getElementById("addToCart")
    .addEventListener("click", addToCartHandler);
}

// add product to cart
async function addProductToCart(productId) {
    let cartContents = getLocalStorage("so-cart");
    const product = await findProductById(productId);
    cartCount.set(cartContents.length + 1);
    setLocalStorage("so-cart", product);
}

// add to cart button event handler
async function addToCartHandler(event) {
    const productId = getParam('product');
    addProductToCart(productId);
}

