import React, { useState, Fragment } from "react";
import { Divider, List, Paper } from "@material-ui/core";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  if (todos.length)
    return (
      <Paper>
        <List></List>
        {todos.map((todo, i) => (
          <Fragment>
            <Todo
              {...todo}
              key={todo.id}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            {i < todos.length - 1 && <Divider />}
          </Fragment>
        ))}
      </Paper>
    );
  return null;
}

export default TodoList;
