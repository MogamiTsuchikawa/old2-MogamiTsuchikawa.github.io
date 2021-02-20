import React, { useEffect, useState } from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
const HeaderComponent: React.FC<Props> = (props) => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">mogami.dev</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#work">Work</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
type Props = {};
export default HeaderComponent;
