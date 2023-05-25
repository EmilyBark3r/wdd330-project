//from main.js (Team Activity 5)
import ProductList from "./components/ProductList.svelte";
import { getParam } from "./utils.mjs";

const productCategory = getParam("category");

new ProductList({
    target: document.querySelector(".products"),
    props: { category: productCategory },
});
