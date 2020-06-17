import fetch from "isomorphic-fetch";
import { API } from "../config";

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
