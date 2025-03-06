import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../assets/taskSlice";

const ToDo = () => {
  const [newTask, setNewTask] = useState("");
  const tasks = useSelector((state) => state.tasks.tasks);
  const activeTasks = useSelector((state) => state.tasks.activeTask);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTask) {
      dispatch(addTask(newTask));
      setNewTask("");
    }
  };
  return (
    <div className=" h-lg   flex justify-center mx-auto w-64 ">
      <div className=" p-6 text-white rounded-lg shadow-md">
        <div className="flex">
          <input
            type="text"
            placeholder="Add a task"
            className="outline-blue-500 outline-2 rounded h-8 w-[240px] m-1 p-1"
            onChange={(e) => setNewTask(e.target.value)}
          ></input>
          <button
            className=" outline-2 outline-blue-500 w-10 h-8 rounded p-1 m-1"
            onClick={handleAddTask}
          >
            Add
          </button>
        </div>

        <div className="text-base mt-4">
          <h2>Tasks to do: {activeTasks}</h2>
          {tasks.map((task) => {
            return <ul key={task.id}>{task.name}</ul>;
          })}
        </div>

        <div className="text-base mt-4">
          <h2>Completed Task : 0</h2>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
