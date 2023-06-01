import { renderHeaderFooter } from "./utils.mjs";
import CheckoutForm from "../js/components/CheckoutForm.svelte";

renderHeaderFooter();

new CheckoutForm({
    target: document.querySelector(".checkout-form"),
    props: { key: "so-cart" },
  });