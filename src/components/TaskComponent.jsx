import { useState } from "react";
import TaskForm from "./TaskForm";
import TasksList from "./TasksList";
import newTask from "./newTask";

function TaskComponent({ tasks, setTasks, handleDelete }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortedAlpha, setSortedAlpha] = useState(false);

  const handleAddTask = (title, description) => {
    setTasks((prev) => [...prev, newTask(title, description)]);
    setSortedAlpha(false);
  };

  const visibleTasks = [...tasks]
    .filter(
      (task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => (sortedAlpha ? a.title.localeCompare(b.title) : 0));

  return (
    <div className="task-component">
      <TaskForm onAddTask={handleAddTask} />

      <hr />

      <div className="task-controls">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Tasks"
        />
        <button onClick={() => setSortedAlpha((prev) => !prev)}>
          {sortedAlpha ? "Sorted A–Z ✓" : "Sort by Name"}
        </button>
      </div>

      <TasksList allTasks={visibleTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default TaskComponent;
