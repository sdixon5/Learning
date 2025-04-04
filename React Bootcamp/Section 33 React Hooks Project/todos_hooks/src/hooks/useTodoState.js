import { v4 as uuid } from "uuid";
import UseLocalStorageState from "./useLocalStorageState";

export default (initialTodos) => {
  const [todos, setTodos] = UseLocalStorageState("todos", initialTodos);

  return {
    todos,

    addTodo: (newTodoText) => {
      setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    },

    removeTodo: (todoId) => {
      //filter out removed todo
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      //call setTodos with new todos array
      setTodos(updatedTodos);
    },

    toggleTodo: (todoId) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    },

    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedTodos);
    },
  };
};

// const addTodo = (newTodoText) => {
//   setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
// };

// const removeTodo = (todoId) => {
//   //filter out removed todo
//   const updatedTodos = todos.filter((todo) => todo.id !== todoId);
//   //call setTodos with new todos array
//   setTodos(updatedTodos);
// };

// const toggleTodo = (todoId) => {
//   const updatedTodos = todos.map((todo) =>
//     todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
//   );
//   setTodos(updatedTodos);
// };

// const editTodo = (todoId, newTask) => {
//   const updatedTodos = todos.map((todo) =>
//     todo.id === todoId ? { ...todo, task: newTask } : todo
//   );
//   setTodos(updatedTodos);
// };
