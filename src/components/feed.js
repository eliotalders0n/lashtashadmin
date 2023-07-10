import { React, useState, useEffect } from "react";
import Head from "./template/head";
import {
  Container,
  Card,
  Row,
  Badge,
  Form,
  Button,
  ListGroup,
  Modal,
  Col,
  // Toast
} from "react-bootstrap";
import firebase from "./../firebase";
// import useGetPosts from "./hooks/useGetPosts";
// import useGetGroup from "./hooks/useGetOrders";
// import useGetProducts from "./hooks/useGetProducts";
// import useGetOrders from "./hooks/useGetOrders";

// fsq3U9h/vWVthiZ0bbPijl4uXjRlr2d0pzyFM3XjgGY2nP4=

function Feed(props) {
  // Post to merge

  const [user_id, setUserID] = useState([]);
  const [user_details, setUserDetails] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .onSnapshot((doc) => {
        setUserID(firebase.auth().currentUser.uid);
        setUserDetails(doc.data());
      });
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container
      fluid
      style={{ backgroundColor: "rgb(220,220,220)", marginBottom: "10vh" }}
    >
      {/* <p className="display-3 text-center">Hey {user_details.firstName}</p> */}
      <p className="display-3 text-center">Hey Marie</p>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="dark">Search</Button>
      </Form>
      <br />
      <ListGroup horizontal style={{ overflow: "auto", scrollX: "true" }}>
        <ListGroup.Item action variant="dark">
          Full
        </ListGroup.Item>
        <ListGroup.Item action variant="dark">
          Classical
        </ListGroup.Item>
        <ListGroup.Item action variant="dark">
          Volume
        </ListGroup.Item>
        <ListGroup.Item action variant="dark">
          Modern
        </ListGroup.Item>
        <ListGroup.Item action variant="dark">
          Mega_Volume
        </ListGroup.Item>
        <ListGroup.Item action variant="dark">
          Mixed_Hybrid
        </ListGroup.Item>
      </ListGroup>
      <Button variant="dark" onClick={handleShow} className="my-2" style={{width: "100%"}}>Custom Order</Button>
      <Head />
      <Container fluid className="d-flex justify-content-center">
        <Row>
          {/* {Posts.filter((post) => post.group === Group.GroupNumber).map(
              (post) => {
                  return ( */}

          <Card
            key="{post.id}"
            className="mx-auto my-2 animate__animated animate__bounceInLeft animate__slow animate__delay-1s"
            style={{
              maxWidth: "30rem",
              border: "none",
              padding: "0",
              boxShadow: "3px 3px 3px 3px rgba(0, 60, 60, 0.1)",
            }}
            onClick={handleShow}
          >
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1548902378-2ec44c906391?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            />
            <Card.Body>
              {/* {post.post_status === true && ( */}
              <Badge
                bg="primary"
                style={{ padding: "8px", marginBottom: "8px" }}
              >
                Available
              </Badge>
              {/* )} */}
              <Card.Title>Fill</Card.Title>
              <Card.Text>
                <p>Classical</p>
              </Card.Text>
            </Card.Body>
          </Card>

          {/* );
              }
            )} */}
          <Card
            key="{post.id}"
            className="mx-auto my-2 animate__animated animate__bounceInLeft animate__slow animate__delay-1s"
            style={{
              maxWidth: "30rem",
              border: "none",
              padding: "0",
              boxShadow: "3px 3px 3px 3px rgba(0, 60, 60, 0.1)",
            }}
          >
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1588398478692-d119ca406f7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            />
            <Card.Body>
              {/* {post.post_status === true && ( */}
              <Badge
                bg="primary"
                style={{ padding: "8px", marginBottom: "8px" }}
              >
                Available
              </Badge>
              {/* )} */}
              <Card.Title>Full Set</Card.Title>
              <Card.Text>
                <p>Mega Volume</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            key="{post.id}"
            className="mx-auto my-2 animate__animated animate__bounceInLeft animate__slow animate__delay-1s"
            style={{
              maxWidth: "30rem",
              border: "none",
              padding: "0",
              boxShadow: "3px 3px 3px 3px rgba(0, 60, 60, 0.1)",
            }}
          >
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1588683301867-c442a9ed1389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            />
            <Card.Body>
              {/* {post.post_status === true && ( */}
              <Badge
                bg="primary"
                style={{ padding: "8px", marginBottom: "8px" }}
              >
                Available
              </Badge>
              {/* )} */}
              <Card.Title>Removal</Card.Title>
              <Card.Text>
                <p>Mixed Hybrid</p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            key="{post.id}"
            className="mx-auto my-2 animate__animated animate__bounceInLeft animate__slow animate__delay-1s"
            style={{
              maxWidth: "30rem",
              border: "none",
              padding: "0",
              boxShadow: "3px 3px 3px 3px rgba(0, 60, 60, 0.1)",
            }}
          >
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            />
            <Card.Body>
              {/* {post.post_status === true && ( */}
              <Badge
                bg="primary"
                style={{ padding: "8px", marginBottom: "8px" }}
              >
                Available
              </Badge>
              {/* )} */}
              <Card.Title>Full Set</Card.Title>
              <Card.Text>
                <p>Volume</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Fill Classical</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Card.Img
                variant="top"
                style={{borderRadius: "5px"}}
                src="https://images.unsplash.com/photo-1548902378-2ec44c906391?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              />
              <Form.Group as={Row} className="mb-3 my-3" controlId="formGridState">
                <Form.Label>Session Type</Form.Label>
                <Col sm={10}>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Lash Extension Application</option>
                    <option>Lash Extension Fill/Touch-Up</option>
                    <option>Lash Lift</option>
                    <option>Lash Tinting</option>
                    <option>Lash Removal</option>
                    <option>Lash Consultation</option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formGridState">
                <Form.Label>Lash Type</Form.Label>
                <Col sm={10}>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Classical</option>
                    <option>Volume</option>
                    <option>Hybrid</option>
                    <option>Mega Volume</option>
                    <option>Colored</option>
                    <option>Lash Strips</option>
                    <option>Cluster Lashes</option>

                  </Form.Select>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formGridState">
                <Form.Label>Lash Prep</Form.Label>
                <Col sm={10}>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Cleansing</option>
                    <option>Priming</option>
                    <option>Lash lift</option>
                    <option>Lash tinting</option>
                    <option>Lash Serum</option>
                    <option>Lash Mask</option>
                    <option>Lash Comb/Brush</option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <Form.Group>
                <img src="/lashmap.jpg" style={{ width: "50vh" }} />
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formGridState">
                <Form.Label>Lash Style (choose one from image above)</Form.Label>
                <Col sm={10}>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Natural eye</option>
                    <option>Open eye</option>
                    <option>Cat eye</option>
                    <option>Doll eye</option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <p className="text-muted">
                Session Full-Set <br />
                ZMW 45.00
              </p>
              <p className="text-muted">
                Lash Type Classic Faux-Mink <br /> ZMW 45.00
              </p>
              <p className="lead">Sub-total : ZMW 90.00</p>
              <p className="text-muted">
                Taxes and Labor <br /> ZMW 30.00
              </p>
              <p className="lead">Total : ZMW 120.00</p>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalCheck"
              >
                <Col sm={{ span: 10, offset: 2 }}>
                  <Form.Check label="I agree to the terms and conditions of LashTash" />
                </Col>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-dark" onClick={handleClose}>
              Close
            </Button>
            <Button variant="dark">
              <a
                href="/booking"
                style={{ color: "white", textDecoration: "none" }}
              >
                {" "}
                Book Now
              </a>
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Container>
  );
}

export default Feed;
