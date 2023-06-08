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
  const elements = [];
  const inStorage = getLocalStorage(key);

  if(inStorage){
    inStorage.map((item) =>{
      elements.push(item);
    })
  }
  
  elements.push(data);

  localStorage.setItem(key, JSON.stringify(elements));
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
  const product = urlParams.get(param);
  return product;
}

export function renderHeaderFooter(){
  // console.log(MainHeader);
  // <MainHeader></MainHeader>
  // document.querySelector("#main-header").innerHTML = `<MainHeader></MainHeader>`;
  // document.querySelector("#main-footer").innerHTML = MainFooter;
  new MainHeader({
    target: document.querySelector("#main-header"),
    // props: {cartCount: 1},
  });

  new MainFooter({
    target: document.querySelector('#main-footer'),
  });
}
// Cart Count Code
export function getCartCount(){
  // let cart_list = JSON.parse(localStorage.getItem("so-cart"));
  // console.log(cart_list.length);
  if ("so-cart" in localStorage){
    let cart_list = JSON.parse(localStorage.getItem("so-cart"));
    console.log(cart_list.length);
    return cart_list.length;
  } else {
    return 0;
  }
}

//activity 6
// takes a form element and returns an object where the key is the "name" of the form input.
export function formDataToJSON(formElement) {
  const formData = new FormData(formElement),
    convertedJSON = {};

  formData.forEach(function (value, key) {
    convertedJSON[key] = value;
  });

  return convertedJSON;
}



getCartCount();