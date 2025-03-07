import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  //tasks should be empty array
  tasks: [],
  activeTask: 0,
  completedTask: 0,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(), //generate unique ID
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
