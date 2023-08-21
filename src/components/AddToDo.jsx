import { Form } from "react-bootstrap";

import React, { Component } from "react";
import AlertList from "./AlertList";

export default class AddToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: "",
      date: "",
      time: "",
    };
  }
  inputChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.props.alertTog);
  };

  submitChange = (e) => {
    e.preventDefault();
    this.props.inputSubmit(this.state);
    this.setState({
      details: "",
      date: "",
      time: "",
    });
  };
  render(props) {
    return (
      <Form className="mainform">
        <AlertList alertTog={this.props.alertTog} />
        <div className="formm">
          <div className="form-left">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="What do you want to do ? "
                name="details"
                onChange={this.inputChange}
                value={this.state.details}
              />
            </Form.Group>
          </div>
          <div className="form-right">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="date"
                name="date"
                onChange={this.inputChange}
                value={this.state.date}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="time"
                name="time"
                onChange={this.inputChange}
                value={this.state.time}
              />
            </Form.Group>
          </div>
        </div>
        <button className="cssbuttons-io-button" onClick={this.submitChange}>
          <span style={{ fontWeight: "900" }}> ADD </span>
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{
                fill: "rgba(0, 0, 0, 1)",
                transform: "",
                msFilter: "",
                fontWeight: "900",
              }}>
              <path d="M19 15v-3h-2v3h-3v2h3v3h2v-3h3v-2h-.937zM4 7h11v2H4zm0 4h11v2H4zm0 4h8v2H4z"></path>
            </svg>
          </div>
        </button>
      </Form>
    );
  }
}
