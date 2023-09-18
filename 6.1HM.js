import * as apiHelper from "./api_helper.js";

const baseUrl = "https://jsonplaceholder.typicode.com/posts/";

// Виконати GET-запит і отримати дані
async function fetchData() {
  try {
    const data = await apiHelper.get(baseUrl);
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Виконати POST-запит і отримати дані
async function postData() {
  const postBody = {
    a: 1
  };

  const headers = {
    "Content-Type": "application/json"
  };

  try {
    const data = await apiHelper.post(baseUrl, postBody, headers);
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Викликаємо функції для виконання запитів
fetchData();
postData();
