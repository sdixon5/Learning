import React, { useState, Fragment } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@material-ui/core";

function TodoList(props) {
  return (
    <Paper>
      <List></List>
      {props.todos.map((todo) => (
        <Fragment>
          <ListItem>
            <ListItemText>{todo.task}</ListItemText>
          </ListItem>
          <Divider />
        </Fragment>
      ))}
    </Paper>
  );
}

export default TodoList;
