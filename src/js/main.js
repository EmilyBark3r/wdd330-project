import { renderHeaderFooter } from "./utils.mjs";
import ProductList from "./components/ProductList.svelte";

new ProductList({
    target: document.querySelector(".products"),
    props: { category: "tents" },
});

renderHeaderFooter();