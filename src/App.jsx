import { useState } from "react";
import Greeting from "./components/Greeting.jsx";
import UserInfo from "./components/UserInfo.jsx";
import TaskComponent from "./components/TaskComponent.jsx";
import newTask from "./components/newTask.js";

const initial_tasks = [
  newTask("Buy groceries", "Pick up milk, eggs, and bread"),
  newTask("Buy office supplies", "Pens, notebooks, and sticky notes"),
  newTask("Complete homework", "PHP midterm, Informatics essay"),
];

function App() {
  const [tasks, setTasks] = useState(initial_tasks);

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h2 style={{ color: "darkblue" }}>
        <em>Task #1</em>
      </h2>
      <Greeting usernames={["Scotty", "Alice", "Jonas"]} />
      <hr />
      <h2 style={{ color: "darkblue" }}>
        <em>Task #2</em>
      </h2>
      <UserInfo name="Scott Schwartz-Owen" profession="Web Developer" />
      <hr />
      <h2 style={{ color: "darkblue" }}>
        <em>Tasks #3, #4, #5</em>
      </h2>
      <TaskComponent tasks={tasks} setTasks={setTasks} handleDelete={handleDelete} />
      <hr />
    </div>
  );
}

export default App;
