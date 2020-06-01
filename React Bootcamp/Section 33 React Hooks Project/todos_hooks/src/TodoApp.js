import React, { useState } from "react";
import { AppBar, Paper, Toolbar, Typography } from "@material-ui/core";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Clean Fishtank", completed: false },
    { id: 2, task: "Wash car", completed: true },
    { id: 3, task: "Grow beard", completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: 4, task: newTodoText, completed: false }]);
  };

  return (
    <div>
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: "100vh",
          backgroundColor: "#fafafa",
        }}
        elevation={0}
      >
        <AppBar color="primary" position="static" style={{ height: "64px" }}>
          <Toolbar>
            <Typography color="inherit">Todos with Hooks</Typography>
          </Toolbar>
        </AppBar>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} />
      </Paper>
    </div>
  );
}

export default TodoApp;
