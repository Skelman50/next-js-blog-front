import Router from "next/router";
import { useEffect, Fragment } from "react";
import { isAuth } from "../../actions/auth";

const Private = ({ children }) => {
  useEffect(() => {
    if (!isAuth()) {
      Router.push("/signin");
    }
  }, []);
  return <Fragment>{children}</Fragment>;
};

export default Private;
