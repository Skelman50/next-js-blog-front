import { useState, Fragment } from "react";
import Link from "next/link";
import Router from "next/router";
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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prevOpen) => !prevOpen);

  return (
    <Navbar color="light" light expand="md">
      <Link href="/">
        <NavLink className="font-weight-bold">{APP_NAME}</NavLink>
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {!isAuth() && (
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
          {isAuth() && (
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
          {isAuth() && isAuth().role === 0 && (
            <NavItem>
              <Link href="/user">
                <NavLink style={{ cursor: "pointer" }}>
                  {`${isAuth().name}'s Dashboard`}
                </NavLink>
              </Link>
            </NavItem>
          )}
          {isAuth() && isAuth().role === 1 && (
            <NavItem>
              <Link href="/admin">
                <NavLink style={{ cursor: "pointer" }}>
                  {`${isAuth().name}'s Dashboard`}
                </NavLink>
              </Link>
            </NavItem>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
