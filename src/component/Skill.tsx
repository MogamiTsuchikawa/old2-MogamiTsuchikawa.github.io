import React, { useEffect, useState } from "react";
import { Button, Navbar, Nav, Col, Card } from "react-bootstrap";
const Skill: React.FC<Props> = (props) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <Card>
        
        <i className={props.iClassName} style={{fontSize:"200px",margin:"5px auto"}}></i>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
          {props.content}
          </Card.Text>
          <Card.Text>
          {props.usedFor}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
type Props = {
  title: string;
  content: string;
  usedFor: string;
  iClassName: string;
};
export default Skill;
