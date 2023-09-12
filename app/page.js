'use client'

import { useState } from "react";

const Page = () => {


  // Initialize task and description with empty strings
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  /*For making containers of the task we need to make a new state array*/

  const [main, setMain] = useState([])

  // Define the submitHandler function with the event parameter (e)
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(task)
    // console.log(description)
    // Making again the both parameters empty
    setTask('')
    setDescription('')
  };

  let renderTask = <h2>No Task Available</h2>

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
      <ul>
        {renderTask}
      </ul>
    </>
  );
};

export default Page;
