import { API } from "../config";

export const emailFormUrl = (data) => {
  if (data.authorEmail) {
    return `${API}/form/contact-blog-author`;
  } else {
    return `${API}/form/contact`;
  }
};
