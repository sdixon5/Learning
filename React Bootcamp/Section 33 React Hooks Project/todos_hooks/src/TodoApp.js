import React, { useEffect } from "react";
import { AppBar, Paper, Toolbar, Typography, Grid } from "@material-ui/core";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import useTodoState from "./hooks/useTodoState";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Clean Fishtank", completed: false },
    { id: 2, task: "Wash car", completed: true },
    { id: 3, task: "Grow beard", completed: false },
  ];
  // const initialTodos = JSON.parse(window.localStorage.getItem("todos")) || [
  //   { id: 1, task: "Clean Fishtank", completed: false },
  //   { id: 2, task: "Wash car", completed: true },
  //   { id: 3, task: "Grow beard", completed: false },
  // ];

  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  );

  // const initialTodos = [
  //   { id: 1, task: "Clean Fishtank", completed: false },
  //   { id: 2, task: "Wash car", completed: true },
  //   { id: 3, task: "Grow beard", completed: false },
  // ];

  // useEffect(() => {
  //   window.localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

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
        <Grid container justify="center" style={{ marginTop: "1rem" }}>
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm addTodo={addTodo} />
            <TodoList
              todos={todos}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default TodoApp;
