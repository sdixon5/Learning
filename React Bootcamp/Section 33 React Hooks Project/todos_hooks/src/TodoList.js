import React, { useState, Fragment } from "react";
import { Divider, List, Paper } from "@material-ui/core";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleTodo }) {
  return (
    <Paper>
      <List></List>
      {todos.map((todo) => (
        <Fragment>
          <Todo
            task={todo.task}
            key={todo.id}
            completed={todo.completed}
            removeTodo={removeTodo}
            id={todo.id}
            toggleTodo={toggleTodo}
          />
          <Divider />
        </Fragment>
      ))}
    </Paper>
  );
}

export default TodoList;
