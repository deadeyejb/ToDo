import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [
    {
      id: "",
      name: "",
    },
  ],
  activeTask: 0,
  completedTask: 0,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: state.tasks[state.tasks.length - 1] + 1,
        name: action.payload,
      };
      state.tasks.push(newTask);
      state.activeTask += 1;
    },
    removeTask: (state, action) => {},
  },
});
export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
