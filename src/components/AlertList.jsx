import React, { Component } from "react";
import { Alert } from "react-bootstrap";

export default class AlertList extends Component {
  render(props) {
    return (
      <Alert
        variant={this.props.alertTog.color}
        className="alertt"
        show={this.props.alertTog.visible}>
        {this.props.alertTog.info}
      </Alert>
    );
  }
}
