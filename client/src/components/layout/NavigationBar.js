import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Node Auth1 Project</NavbarBrand>

        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Register</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
