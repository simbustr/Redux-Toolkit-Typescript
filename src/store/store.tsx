import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/counterSlice";
import todoReducer  from '../store/todosSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos:todoReducer
  },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
