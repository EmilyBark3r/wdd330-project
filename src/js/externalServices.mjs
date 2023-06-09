//from activty 5
const baseURL = import.meta.env.VITE_SERVER_URL
// baseURL + "checkout/"

async function convertToJson(res) {
  const jsonResponse = await res.json(); 
  if (res.ok) {
      return jsonResponse;
  } else {
      throw { name: 'servicesError', message: jsonResponse };
  }
}

//from activity 5 
export async function getProductsByCategory(category) {
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

export async function checkout(payload) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  return await fetch(baseURL + "checkout/", options).then(convertToJson);
}