import MainHeader from "./components/MainHeader.svelte";
import MainFooter from "./components/MainFooter.svelte";

// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

//url param
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get('product');
  return product;
}

export function getCartCount(){
  const count = getLocalStorage("so-cart")?.length ?? 0;
  return count;
}

export function renderHeaderFooter(){
  new MainHeader({
    target: document.querySelector("#main-header"),
    props: {cartCount: getCartCount()},
  });
  new MainFooter({
    target: document.querySelector('#main-footer'),
  });
}