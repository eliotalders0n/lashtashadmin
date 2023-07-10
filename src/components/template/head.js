import { React } from "react";
import { Container, Col, Navbar, Nav, Button } from "react-bootstrap";

function Head(props) {

  return (
    <Navbar fixed="bottom" style={{backgroundColor : "white"}}>
      <Container className="text-center" >
        <Navbar.Collapse className="justify-content-center">
          <Col md={2} className="mx-auto">
            <Nav.Link
              href="/history"
              style={{
                fontSize: "3vh",
                textDecoration: "underline",
                textDecorationColor: "cyan",
              }}
            >
              <i className="bi bi-map-fill"></i>
            </Nav.Link>
          </Col>
          <Col md={2} className="mx-auto">
            <Nav.Link
              href="/feed"
              style={{
                fontSize: "3vh",
                textDecoration: "underline",
                textDecorationColor: "cyan",
              }}
            >
              <Button variant="dark">
                Home
              </Button>
              
            </Nav.Link>
          </Col>

          <Col md={2} className="mx-auto">
            <Nav.Link
              href="/profile"
              style={{
                fontSize: "3vh",

                textDecoration: "underline",
                textDecorationColor: "cyan",
              }}
            >
              <i className="bi bi-person-fill"></i>
            </Nav.Link>
          </Col>

        </Navbar.Collapse>
      </Container>
      <hr />
    </Navbar>
  );
}

export default Head;
