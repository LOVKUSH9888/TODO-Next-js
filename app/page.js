"use client";

import { useState } from "react";

const Page = () => {
  // Initialize task and description with empty strings
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  // Initialize mainTask as an empty array
  const [mainTask, setMainTask] = useState([]);

  // Define the submitHandler function with the event parameter (e)
  const submitHandler = (e) => {
    e.preventDefault();

    // Add a new task to the mainTask array
    setMainTask([...mainTask, { task, description }]);

    // Clear task and description fields after submission
    setTask("");
    setDescription("");
  };

  const deleteHandler = (index) => {
    // Create a new array without the task at the specified index
    const updatedMainTask = mainTask.filter((_, i) => i !== index);

    // Update the state with the updated array
    setMainTask(updatedMainTask);
  };

  let renderTask;

  if (mainTask.length === 0) {
    renderTask = <h2>No Task Available</h2>;
  } else {
    renderTask = mainTask.map((t, i) => (
      <div key={i}>
        <h5>{t.task}</h5>
        <h5>{t.description}</h5>
        <button onClick={() => deleteHandler(i)}>Delete</button>
      </div>
    ));
  }

  return (
    <>
      <h1 className="bg-dark">Todo-APP</h1>
      <form onSubmit={submitHandler}>
        {/* Task input with two-way binding */}
        <input
          type="text"
          placeholder="Enter tasks"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        {/* Description input with two-way binding */}
        <input
          type="text"
          placeholder="Enter Description here"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        {/* Button */}
        <button type="submit">Add Task</button>
      </form>

      <hr />
      {renderTask}
    </>
  );
};

export default Page;
