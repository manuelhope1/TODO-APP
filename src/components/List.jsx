import React, { useState } from "react";
import { Col, Card, Button, Modal } from "react-bootstrap";
import EditToDo from "./EditToDo";

export default function List(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteList = (e) => {
    e.preventDefault();
    props.deleteList(props.EveryList.id);
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditToDo
            alertTog={props.alertTog}
            editList={props.editList}
            EveryList={props.EveryList}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>
      <Col lg="6" md="12" style={{ marginTop: "20px" }}>
        <Card className="cardd">
          <Card.Body className="cardd">
            <Card.Subtitle className="mb-2 text-muted ">
              <i className="bx bx-align-left"></i> Daily Remainder
            </Card.Subtitle>
            <Card.Text style={{ margin: "0", padding: "0" }}>
              <span className="what">{props.EveryList.details}</span>
            </Card.Text>
            <Card.Text>
              <span>
                <i className="bx bxs-calendar"></i>: {props.EveryList.date}
              </span>
              <br />
              <i className="bx bx-time-five"></i> : {props.EveryList.time}
            </Card.Text>
            <div className="butts">
              <Card.Link href="#" style={{ margin: "0", padding: "0" }}>
                <Button size="sm" onClick={handleShow}>
                  <i className="bx bx-edit"></i>
                </Button>
              </Card.Link>
              <Card.Link href="#">
                <button className="button" onClick={deleteList}>
                  <svg className="svgIcon" viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                  </svg>
                </button>
              </Card.Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
