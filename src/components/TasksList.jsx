import React from "react";

function TasksList({ allTasks, handleDelete }) {
  const confirmDelete = (id, title) => {
    const confirmed = window.confirm(`Are you sure you want to delete "${title}"?`);
    if (confirmed) handleDelete(id);
  };

  return (
    <ul className="tasks-list">
      {allTasks.length === 0 && <p className="tasks-empty">No tasks found.</p>}
      {allTasks.map(({ title, description, id }) => (
        <li key={id}>
          <div className="tasks-list-row">
            <h2>{title}</h2>
            <button onClick={() => confirmDelete(id, title)}>Delete</button>
          </div>
          {!description ? null : <p>{description}</p>}
        </li>
      ))}
    </ul>
  );
}

export default TasksList;
