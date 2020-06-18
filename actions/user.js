import fetch from "isomorphic-fetch";
import { API } from "../config";
import { handleResponse } from "./auth";

export const getPublicProfile = async (username) => {
  try {
    const response = await fetch(`${API}/user/${username}`, {
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

export const getProfile = async (token) => {
  try {
    const response = await fetch(`${API}/user/profile`, {
      method: "GET",
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

export const update = async (token, user) => {
  try {
    const response = await fetch(`${API}/user/update`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: user,
    });
    return await handleResponse(response);
  } catch (error) {
    console.log(error);
  }
};
