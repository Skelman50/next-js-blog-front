const { isAuth } = require("../actions/auth");
const { API } = require("../config");

export const createBlogUrl = () => {
  if (isAuth() && isAuth().role === 1) {
    return `${API}/blog`;
  }

  if (isAuth() && isAuth().role === 0) {
    return `${API}/blog/user`;
  }
};

export const listBlogUrl = (username) => {
  if (username) {
    return `${API}/blog/${username}/list`;
  } else {
    return `${API}/blog`;
  }
};

export const deleteUpdateBlogUrl = (slug) => {
  if (isAuth() && isAuth().role === 1) {
    return `${API}/blog/${slug}`;
  }

  if (isAuth() && isAuth().role === 0) {
    return `${API}/blog/${slug}/user`;
  }
};
