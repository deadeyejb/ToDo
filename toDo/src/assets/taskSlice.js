import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  //tasks should be empty array
  tasks: [],
  activeTask: 0,
  completedTask: 0,
  deletedTasks: [],
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
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      state.activeTask -= 1;
    },
    finishTask: (state, action) => {
      //finding tasks to remove so that we can store
      const taskToRemove = state.tasks.find(
        (task) => task.id === action.payload
      );
      if (taskToRemove) {
        state.deletedTasks.push(taskToRemove);
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        state.completedTask += 1;
        state.activeTask -= 1;
      }
    },
  },
});
export const { addTask, removeTask, finishTask } = taskSlice.actions;
export default taskSlice.reducer;
