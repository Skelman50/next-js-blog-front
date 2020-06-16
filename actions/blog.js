import fetch from "isomorphic-fetch";
import queryString from "query-string";
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

export const list = async () => {
  try {
    const response = await fetch(`${API}/blog`, {
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

export const removeBlog = async (slug, token) => {
  try {
    const response = await fetch(`${API}/blog/${slug}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const updateBlog = async (blog, token, slug) => {
  try {
    const response = await fetch(`${API}/blog/${slug}`, {
      method: "PUT",
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

export const listSearch = async (params) => {
  try {
    const query = queryString.stringify(params);
    const response = await fetch(`${API}/blog/search?${query}`, {
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
