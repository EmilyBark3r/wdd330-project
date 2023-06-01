//from activity 5
const baseURL = import.meta.env.VITE_SERVER_URL;

function convertToJson(res) {
  if (res.ok) {
      return res.json();
  } else {
      throw new Error("Bad Response");
  }
}

//from activity 5 
export async function getData(category) {
  console.log(baseURL + `products/search/${category}`);
  const response = await fetch(baseURL + `products/search/${category}`);
  const data = await convertToJson(response);
  return data.Result;
}

export async function findProductById(id) {
  const product = await fetch(baseURL + `product/${id}`);
  const data = await convertToJson(product);
  return data.Result;
}