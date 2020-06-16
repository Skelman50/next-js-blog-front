import { useState, Fragment, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import Nprogress from "nprogress";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { APP_NAME } from "../config";
import { isAuth, signout } from "../actions/auth";

Router.onRouteChangeStart = () => Nprogress.start();
Router.onRouteChangeComplete = () => Nprogress.done();
Router.onRouteChangeError = () => Nprogress.done();

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setisAuthenticated] = useState(null);

  const toggle = () => setIsOpen((prevOpen) => !prevOpen);
  useEffect(() => {
    setisAuthenticated(isAuth());
  }, []);

  return (
    <Navbar color="light" light expand="md">
      <Link href="/">
        <NavLink className="font-weight-bold">{APP_NAME}</NavLink>
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link href="/blogs">
              <NavLink style={{ cursor: "pointer" }}>Blogs</NavLink>
            </Link>
          </NavItem>
          {!isAuthenticated && (
            <Fragment>
              <NavItem>
                <Link href="/signin">
                  <NavLink style={{ cursor: "pointer" }}>Signin</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/signup">
                  <NavLink style={{ cursor: "pointer" }}>Signup</NavLink>
                </Link>
              </NavItem>
            </Fragment>
          )}

          {isAuthenticated && isAuthenticated.role === 0 && (
            <NavItem>
              <Link href="/user">
                <NavLink style={{ cursor: "pointer" }}>
                  {`${isAuthenticated.name}'s Dashboard`}
                </NavLink>
              </Link>
            </NavItem>
          )}
          {isAuthenticated && isAuthenticated.role === 1 && (
            <NavItem>
              <Link href="/admin">
                <NavLink style={{ cursor: "pointer" }}>
                  {`${isAuth().name}'s Dashboard`}
                </NavLink>
              </Link>
            </NavItem>
          )}
          {isAuthenticated && (
            <Fragment>
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  onClick={() => signout(() => Router.replace("/signin"))}
                >
                  Signout
                </NavLink>
              </NavItem>
            </Fragment>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
