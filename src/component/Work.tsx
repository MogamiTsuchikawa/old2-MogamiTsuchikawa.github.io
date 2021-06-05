import React, { useEffect, useState } from "react";
import { Button, Navbar, Nav, Col, Card, Container, Row } from "react-bootstrap";
const WorkPage: React.FC<Props> = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={12}>
            <h2 style={{ textAlign: "center", margin: "40px 0 10px 0" }}>Work</h2>

            <Works jsonObj={require('../works.json')} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
type Props = {
};
export default WorkPage;

const Works: React.FC<WorksProps> = (props) => {
  return (
    <div>
      {console.log(props.jsonObj)}
      {props.jsonObj.map((work) => (
        <div>
          <Work work={work} />
        </div>
      ))}
    </div>
  );
}
type WorksProps = {
  jsonObj: WorkType[];
};
type WorkType = {
  title: string;
  content: string;
  urls: LinkType[];
  iframes: string[];
  images: string[];
  tags: string[];
};
type LinkType = {
  text: string;
  url: string;
}
type WorkProps = {
  work: WorkType;
}
const Work: React.FC<WorkProps> = (props) => {
  return (
    <div>
      <h3 style={{ margin: "30px 0 10px 0" }}>{props.work.title}</h3>
      <p>{props.work.content}</p>

      {props.work.iframes.map(iframe => (
        <iframe src={iframe} frameBorder="0" width={480} height={270} />
      ))}
      <br/>
      {props.work.images.map(image => (
        <div>
          <img src={image} />
        </div>
      ))}
      <br/>
      {props.work.urls.map(link => (
        <div>
          <a href={link.url}>{link.text}</a> <br />
        </div>
      ))}
      <br/>
      {props.work.tags.map(tag => (
        <span className="badge badge-primary" style={{marginRight: "3px"}}>{tag}</span>
      ))}

    </div>
  );
}