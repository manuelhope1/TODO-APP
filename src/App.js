import "./App.css";
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddToDo from "./components/AddToDo";
import AllLists from "./components/AllLists";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          details: "Meet up with friends at a local restaurant ",
          date: "2023-05-20",
          time: "19:30",
          id: "328732982",
        },
        {
          details: "Hit the gym for a workout session ",
          date: "2023-06-01",
          time: "10:40",
          id: "0932932093290",
        },
      ],
      alert: {
        visible: false,
        color: "",
        info: "",
      },
    };
  }
  inputSubmit = (newList) => {
    newList.id = Math.random().toString();
    this.setState({
      list: [...this.state.list, newList],
    });
    this.setState({
      alert: {
        visible: true,
        color: "success",
        info: "Reminder has been added successfully 📝",
      },
    });
    setTimeout(() => {
      this.setState({
        alert: {
          visible: false,
        },
      });
    }, 1500);
  };

  deleteList = (listid) => {
    let unupdatedList = this.state.list.filter((list) => list.id !== listid);
    this.setState({
      list: unupdatedList,
    });
    this.setState({
      alert: {
        visible: true,
        color: "danger",
        info: "Reminder has been deleted 🗑️",
      },
    });
    setTimeout(() => {
      this.setState({
        alert: {
          visible: false,
        },
      });
    }, 1500);
  };

  editList = (id, updatedUser) => {
    this.setState({
      list: this.state.list.map((user) =>
        user.id === id ? updatedUser : user
      ),
    });
    this.setState({
      alert: {
        visible: true,
        color: "info",
        info: "Your changes have been updated ✍️",
      },
    });
    setTimeout(() => {
      this.setState({
        alert: {
          visible: false,
        },
      });
    }, 1500);
  };
  render() {
    return (
      <div className="holderr">
        <Container className="big-con col-md-6">
          <Row className="info-box">
            <Col className="input-info">
              <h2 className="header">TO-DO LIST</h2>
              <AddToDo
                inputSubmit={this.inputSubmit}
                alertTog={this.state.alert}
              />
            </Col>
            <Col md="12" className="output-info">
              <AllLists
                EveryList={this.state.list}
                deleteList={this.deleteList}
                editList={this.editList}
                alertTog={this.state.alert}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
