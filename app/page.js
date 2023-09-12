'use client'

import { useState } from "react";

const Page = () => {


  // Initialize task and description with empty strings
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  // Define the submitHandler function with the event parameter (e)
  const submitHandler = (e) => {
    e.preventDefault();
    // Add logic to handle form submission here
  };

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
    </>
  );
};

export default Page;
