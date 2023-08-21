import React from "react";
import { Container, Row } from "react-bootstrap";
import List from "./List";

export default function AllLists(props) {
  return (
    <Container>
      <Row>
        {props.EveryList.map((user, index) => {
          return (
            <List
              EveryList={user}
              key={index}
              deleteList={props.deleteList}
              editList={props.editList}
              alertTog={props.alertTog}
            />
          );
        })}
      </Row>
    </Container>
  );
}
