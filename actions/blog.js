import fetch from "isomorphic-fetch";
import { API } from "../config";

export const createTBlog = async (blog, token) => {
  try {
    const response = await fetch(`${API}/blog`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: blog,
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const listRelated = async (blog) => {
  const { _id, categories } = blog;
  try {
    const response = await fetch(`${API}/blog/related`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ blog: { _id, categories }, limit: 5 }),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const listBlogwithCategoriesAndTags = async (skip, limit) => {
  try {
    const response = await fetch(
      `${API}/blog/categories-tags?skip=${skip}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const singleBlog = async (slug) => {
  try {
    const response = await fetch(`${API}/blog/${slug}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
