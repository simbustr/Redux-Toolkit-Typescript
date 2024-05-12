import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodosState = {
  todos: Todo[];
};

const initialState: TodosState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      const id = state.todos.length + 1;
      const newTodo = {
        id,
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodo() {},
    deleteTodo() {},
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
