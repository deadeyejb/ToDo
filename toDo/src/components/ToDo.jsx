import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, finishTask, removeTask } from "../assets/taskSlice";

const ToDo = () => {
  const [newTask, setNewTask] = useState("");
  const tasks = useSelector((state) => state.tasks.tasks);
  const activeTasks = useSelector((state) => state.tasks.activeTask);
  const deletedTasks = useSelector((state) => state.tasks.deletedTasks);

  const completedTasks = useSelector((state) => state.tasks.completedTask);
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
            className="outline-blue-500 outline-2 rounded h-8 w-[340px] m-1 p-1"
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
                className="text-blue-500 bg-[#2b2929] rounded mt-1.5  h-10 flex justify-between  "
              >
                <span className=" m-2">{task.name}</span>
                <div className="flex justify-evenly">
                  <button
                    className=" cursor-pointer"
                    onClick={() => dispatch(finishTask(task.id))}
                  >
                    ✅
                  </button>
                  <button
                    className=" cursor-pointer"
                    onClick={() => dispatch(removeTask(task.id))}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className="text-base mt-4">
          <h2>Completed Task : {completedTasks}</h2>
          {deletedTasks.map((task) => (
            <div
              key={task.id}
              className="text-green-500 bg-[#2b2929] rounded mt-1.5 h-10 flex justify-between "
            >
              <span className="p-1 ml-2 line-through">{task.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
