import { useState, useEffect } from "react";
import Head from "./template/head";
import {
  Container,
  Button,
  Col,
  Card,
  Modal,
  Row,
  Form,
} from "react-bootstrap";
import firebase from "./../firebase";
import useGetPosts from "./hooks/useGetPosts";
import { useNavigate } from "react-router-dom";
// import jwt from "jsonwebtoken";
// import { v4 as uuid } from "uuid";

function Booking(props) {
  const Posts = useGetPosts().docs;
  const [show, setShow] = useState(false);
  const [user_, setdocs] = useState([]);
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    navigate("/feed", { replace: true });
  };
  const handleShow = () => setShow(true);

  const Logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigate("/", { replace: true });
        window.location.reload(false);
      });
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .onSnapshot((doc) => {
        setdocs(doc.data());
      });
  }, []);

  const user_id = firebase.auth().currentUser.uid;

  // const SEC_KEY = "d15cb9f424ce4835b9f2a6ee15871d90";
  // const PUB_KEY = "2db27726803549e09c7ce764132ba14d";

  // const payload = {
  //   amount: 1,
  //   currency: "ZMW",
  //   customerEmail: "mundia@getsparco.com",
  //   customerFirstName: "Mundia",
  //   customerLastName: "Mwala",
  //   customerPhone: "0961453688",
  //   merchantPublicKey: PUB_KEY,
  //   transactionName: "Service/Product Name",
  //   transactionReference: uuid(),
  //   wallet: "0961453688",
  //   chargeMe: false,
  // };

  // const encoded_payload = jwt.sign(payload, SEC_KEY);

  // console.log(encoded_payload);

  return (
    <Container fluid>
      <Head />

      <Container fluid className="d-flex justify-content-center">
        <Card
          className="mx-auto my-2"
          style={{
            maxWidth: "30rem",
            border: "none",
            padding: "0",
            boxShadow: "2px 2px 8px 4px rgba(0, 60, 60, 0.3)",
            backgroundColor: "rgb(220,220,220)",
            // backgroundImage: `url("https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")`,
            // filter: "grayscale(70%)",
            backgroundSize: "cover",
            color: "black",
            height: "auto",
          }}
        >
          <Card.Body>
            <Card.Title>Booking Summary</Card.Title>
            <p className="text-muted">
              Please confirm your booking summary before continuing to make part
              payment
            </p>
            <Form>
              <Form.Group>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1548902378-2ec44c906391?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                />
              </Form.Group>
              <br />
              <p className="text-muted">
                Session Full-Set <br />+ ZMW 45.00
              </p>
              <p className="text-muted">
                Lash Type Classic Faux-Mink <br /> + ZMW 45.00
              </p>
              <p className="lead">Sub-total : ZMW 90.00</p>
              <p className="text-muted">
                Taxes and Labor <br /> + ZMW 30.00
              </p>
              <p className="lead">Total : ZMW 120.00</p>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalCheck"
              >
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button variant="dark" onClick={handleShow}>
                    {" "}
                    Make Part Payment
                  </Button>
                </Col>
              </Form.Group>
            </Form>
            <br />
            <br />
          </Card.Body>
        </Card>
        <br />
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>
              Payment Successful <i class="bi bi-check-circle-fill"></i>
            </h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 variant="h3">
            Apointment has been set, please standby for confirmation
          </h3>
          <br />
          <p className="lead">
            <b>
              Please care to read the pre-session instructions before coming for
              your lash session.
            </b>
          </p>
          <br />
          <p>
            <b>Time Allocation</b>: Lash sessions, especially for lash
            extensions, can take a significant amount of time. Clients should
            consider the duration of the session and plan their schedule
            accordingly. It's advisable to allocate enough time to ensure a
            relaxed and comfortable experience without rushing.
          </p>
          <br />
          <p>
            <b>Makeup Removal</b>: It's generally recommended to arrive at the
            lash session with a clean face, especially the eye area. Removing
            any makeup, particularly eye makeup and mascara, before the session
            helps to ensure a clean surface for lash application and can save
            time during the appointment.
          </p>
          <br />
          <p>
            <b>Contact Lenses</b>: If the client wears contact lenses, they may
            need to remove them before the session. Lash technicians often
            prefer working with clients who are not wearing contact lenses to
            avoid any potential discomfort or complications during the
            application process. Clients should inquire with the technician
            about their specific requirements regarding contact lenses.
          </p>
          <br />
          <p>
            <b>Comfortable Clothing</b>: Lash sessions can take a while, so
            wearing comfortable clothing is advisable. Clients may be lying down
            for an extended period, so loose-fitting and comfortable attire can
            enhance relaxation during the session.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Booking;
