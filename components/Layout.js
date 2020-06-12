import { Fragment } from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div className="container-fluid">{children}</div>
    </Fragment>
  );
};

export default Layout;
