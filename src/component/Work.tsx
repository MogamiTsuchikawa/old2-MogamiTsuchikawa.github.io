import React, { useEffect, useState } from "react";
import { Button, Navbar, Nav, Col, Card, Container, Row } from "react-bootstrap";
const Work: React.FC<Props> = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={12}>
            <h2 style={{ textAlign: "center", margin: "40px 0 10px 0" }}>Work</h2>
            <img src="img/ojigi_animal_neko.png" alt="" style={{width: "200px",margin: "0 auto"}}/>
            <h1>工事中</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
type Props = {
};
export default Work;
