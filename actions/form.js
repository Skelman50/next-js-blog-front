import fetch from "isomorphic-fetch";
import { emailFormUrl } from "../helpers/actionsForm";

export const emailContactFprm = async (data) => {
  try {
    const response = await fetch(emailFormUrl(data), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
