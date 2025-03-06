import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../assets/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
