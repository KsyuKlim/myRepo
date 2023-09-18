import { get } from "./api_helper/api_helper.js";

async function getPostsByUserId(url, userId) {
  try {
    const posts = await get(url);
    if (!Array.isArray(posts)) {
      throw new Error("Response is not an array");
    }

    const filteredPosts = posts
      .filter((post) => post.userId === userId)
      .map((post) => {
        const { title, ...rest } = post;
        return rest;
      });

    return filteredPosts;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

const baseUrl = "https://jsonplaceholder.typicode.com/posts";
const userId = 5;

getPostsByUserId(baseUrl, userId)
  .then((posts) => {
    console.log(posts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
