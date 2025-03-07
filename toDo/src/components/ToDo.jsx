import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../assets/taskSlice";

const ToDo = () => {
  const [newTask, setNewTask] = useState("");
  const tasks = useSelector((state) => state.tasks.tasks);
  const activeTasks = useSelector((state) => state.tasks.activeTask);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTask.trim()) {
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
            className=" outline-2 outline-blue-500 w-10 h-8 rounded cursor-pointer p-1 m-1"
            onClick={handleAddTask}
          >
            Add
          </button>
        </div>

        <div className="text-base mt-4">
          <h2>Tasks to do: {activeTasks}</h2>
          {tasks.length > 0 &&
            tasks.map((task) => (
              <div
                key={task.id}
                className="text-blue-500 bg-[#2b2929] rounded mt-1.5 h-10 flex justify-between "
              >
                <span className="p-1 ml-2">{task.name}</span>
                <div>
                  <button className="p-1 ml-2 cursor-pointer">✅</button>
                  <button className="p-1 cursor-pointer">🗑️</button>
                </div>
              </div>
            ))}
        </div>

        <div className="text-base mt-4">
          <h2>Completed Task : 0</h2>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
