import Router from "next/router";
import { useEffect, Fragment } from "react";
import { isAuth } from "../../actions/auth";

const Admin = ({ children }) => {
  useEffect(() => {
    if (!isAuth()) {
      Router.push("/signin");
    } else if (isAuth().role !== 1) {
      Router.push("/");
    }
  }, []);
  return <Fragment>{children}</Fragment>;
};

export default Admin;
