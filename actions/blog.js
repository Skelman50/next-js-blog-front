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
