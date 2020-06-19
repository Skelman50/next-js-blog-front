import fetch from "isomorphic-fetch";
import cookie from "js-cookie";
import { API } from "../config";
import Router from "next/router";

export const signup = async (token) => {
  try {
    const response = await fetch(`${API}/auth/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    console.log(response);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const preSignup = async (user) => {
  try {
    const response = await fetch(`${API}/auth/pre-signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const signin = async (user) => {
  try {
    const response = await fetch(`${API}/auth/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, { expires: 1 });
  }
};

export const removeCookie = (key) => {
  if (process.browser) {
    cookie.remove(key, { expires: 1 });
  }
};

export const getCookie = (key) => {
  if (process.browser) {
    return cookie.get(key);
  }
};

export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeLocalStorage = (key) => {
  if (process.browser) {
    localStorage.removeItem(key);
  }
};

export const authenticate = (data, next) => {
  setCookie("token", data.token);
  setLocalStorage("user", data.user);
  next();
};

export const isAuth = () => {
  if (process.browser) {
    const cookieChecked = getCookie("token");
    if (cookieChecked) {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};

export const signout = async (next) => {
  removeCookie("token");
  removeLocalStorage("user");
  next();
  try {
    const response = await fetch(`${API}/auth/signout`, { method: "GET" });
    await response.json();
    console.log("Signout success");
  } catch (error) {
    console.log(error);
  }
};

export const updateUserInLocalStorage = (user, next) => {
  if (process.browser) {
    if (localStorage.getItem("user")) {
      localStorage.setItem("user", JSON.stringify(user));
      next();
    }
  }
};

export const handleResponse = async (response) => {
  if (response.status === 401) {
    signout(() => {
      Router.push({
        pathname: "/signin",
        query: "Your session is expired! Please Signin!",
      });
    });
    return { error: "Your session is expired!" };
  } else {
    return await response.json();
  }
};

export const forgotPassword = async (email) => {
  try {
    const response = await fetch(`${API}/auth/forgot-password`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const resetPassword = async (data) => {
  try {
    const response = await fetch(`${API}/auth/reset-password`, {
      method: "PUT",
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
