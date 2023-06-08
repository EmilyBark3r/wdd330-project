import { setLocalStorage, getParam } from "./utils.mjs";
import { findProductById } from "./externalServices.mjs";
import { productDetails } from "./productDetails.mjs";
import { renderHeaderFooter } from "./utils.mjs";

//
const productId = getParam('product');
productDetails(productId, ".product-detail");
renderHeaderFooter();
                