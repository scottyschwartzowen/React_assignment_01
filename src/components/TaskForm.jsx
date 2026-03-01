import { useState } from "react";

function TaskForm() {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Task submitted:", taskName);
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Task Name: </label>
      <input
        type='text'
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
        placeholder='Enter task here...'
      />
      <button type='submit'>Submit</button>
      <p>Task: {taskName}</p>
    </form>
  );
}

export default TaskForm;
