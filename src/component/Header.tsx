import React, { useEffect, useState } from "react";
import { Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
const HeaderComponent: React.FC<Props> = (props) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src="img/myicon.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
            style={{ marginRight: "5px", borderRadius: "50%" }}
          />
      mogami.dev</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item><Link to="/" style={{color:"white",marginRight:"10px"}}>Home</Link></Nav.Item>
            <Nav.Item><Link to="/work" style={{color:"white",marginRight:"10px"}}>Work</Link></Nav.Item>
            <Nav.Item><Link to="/terminal" style={{color:"white",marginRight:"10px"}}>Terminal</Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
type Props = {};
export default HeaderComponent;
