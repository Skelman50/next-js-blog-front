import fetch from "isomorphic-fetch";
import { API } from "../config";
import { handleResponse } from "./auth";

export const createTag = async (tag, token) => {
  try {
    const response = await fetch(`${API}/tag`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(tag),
    });
    return await handleResponse(response);
  } catch (error) {
    console.log(error);
  }
};

export const getTags = async () => {
  try {
    const response = await fetch(`${API}/tag`, {
      method: "GET",
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getTag = async (slug) => {
  try {
    const response = await fetch(`${API}/tag/${slug}`, {
      method: "GET",
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const removetag = async (slug, token) => {
  try {
    const response = await fetch(`${API}/tag/${slug}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return await handleResponse(response);
  } catch (error) {
    console.log(error);
  }
};
