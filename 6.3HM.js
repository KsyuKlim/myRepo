import { post } from "./api_helper/api_helper.js";

async function createNewPost(url, body) {
  try {
    const response = await post(url, body);
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

const baseUrl = "https://jsonplaceholder.typicode.com/posts";
const body = {
  userId: 155,
  title: "New title",
  body: "New body",
};

createNewPost(baseUrl, body)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
