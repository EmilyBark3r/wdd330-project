import { setLocalStorage, getParam } from "./utils.mjs";
import { findProductById } from "./productData.mjs";
import { productDetails } from "./productDetails.mjs";

//
const productId = getParam('product');
productDetails(productId, ".product-detail");
console.log(findProductById(productId));
                