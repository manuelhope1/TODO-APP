import { Form } from "react-bootstrap";

import React, { Component } from "react";

export default class AddToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: this.props.EveryList.details,
      date: this.props.EveryList.date,
      time: this.props.EveryList.time,
      id: this.props.EveryList.id,
    };
  }
  inputChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  submitChange = (e) => {
    e.preventDefault();
    this.props.editList(this.state.id, this.state);
    this.setState({
      details: "",
      date: "",
      time: "",
    });
    this.props.closeModal();
    console.log(this.state);
  };
  render(props) {
    return (
      <Form className="mainform">
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
        <button
          className="cssbuttons-io-button editcss"
          onClick={this.submitChange}>
          <span style={{ fontWeight: "900" }}> EDIT </span>
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
              <path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"></path>
            </svg>
          </div>
        </button>
      </Form>
    );
  }
}
