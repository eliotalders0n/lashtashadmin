import React from "react";
import { Container, Row, Col, Badge, Nav, Button, ListGroup } from "react-bootstrap";
import Head from "./template/head";

function History(props) {
  return (
    <Container
      fluid
      style={{ backgroundColor: "rgb(220,220,220)", marginBottom: "10vh" }}
    >
      <Row className="text-center">
        <Col>
          <h2>Payment and History</h2>
        </Col>
      </Row>

      <Row>
        <Col>
          <Nav defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="#">
                <Button variant="outline-dark">Pending</Button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">
                <Button variant="outline-dark">History</Button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>

      <Row className="my-3">
        <Col className="my-3">
        <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Lash Extension Application</div>
          Mega Volume <br/>
          <span className="text-muted">12/07/2023</span>
        </div>
        <Badge bg="primary" pill>
          Pending
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Lash Lift</div>
          Hybrid Lashes <br/>
          <span className="text-muted">12/07/2023</span>
        </div>
        <Badge bg="primary" pill>
        Pending
        </Badge>

      </ListGroup.Item>
      </ListGroup>
        </Col>
      </Row>
      <Head />
    </Container>
  );
}

export default History;
