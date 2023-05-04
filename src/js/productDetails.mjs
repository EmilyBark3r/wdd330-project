import { findProductById } from "./productData.mjs";

export async function productDetails(productId, selector){
    // use findProductById to get the details for the current product. 
    // findProductById will return a promise! use await or .then() to process it
    const product = await findProductById(productId);
    // once we have the product details we can render out the HTML
    document.getElementById("productName").innerHTML = product.Brand.Name;
    document.getElementById("productNameWithoutBrand").innerHTML = product.NameWithoutBrand;
    document.getElementById("productImage").innerHTML = product.Image;
    document.getElementById("productFinalPrice").innerHTML = product.FinalPrice;
    document.getElementById("productColorName").innerHTML = product.Colors[0].ColorName;
    document.getElementById("productDescriptionHtmlSimple").innerHTML = product.DescriptionHtmlSimple;
    // add a listener to Add to Cart button
    document
    .getElementById("addToCart")
    .addEventListener("click", addToCartHandler);
}

function addProductToCart(product) {
    setLocalStorage("so-cart", product);
}

// add to cart button event handler
async function addToCartHandler(event) {
    const product = await findProductById(event.target.dataset.id);
    addProductToCart(product);
}

// add listener to Add to Cart button
document
    .getElementById("addToCart")
    .addEventListener("click", addToCartHandler);

//this will insert the product specifics into a string of markup.
// export function productDetailsTemplate(product) {
//     // document.getElementById("productName").innerText = product.Name;
//     return `${product.Name}`;
// }

//You will also need somewhere to store the product data that we will lookup. 
//You can just declare a variable in the module file for this.
