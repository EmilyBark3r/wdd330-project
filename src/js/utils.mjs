import { element } from "svelte/internal";

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
// delete data from local storage
export function removeLocalStorage(key,data) {
  elements;
  const inStorage = getLocalStorage(key);

  if(inStorage) {
    inStorage.map((item) => {
      elements.removeItem(item);
    })
  }

  elements.removeItem(data);

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
  const product = urlParams.get('product');
  return product;
}