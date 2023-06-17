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

export async function loginRequest(creds){
  const options = {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds),
  };
  const response = await fetch(baseURL + "login", options).then(convertToJson);
  return response.accessToken;
}


export async function orderRequest(token){
  const options = {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${token}`
    }};
  const response = await fetch(baseURL + "orders", options).then(convertToJson);
  return response;
}