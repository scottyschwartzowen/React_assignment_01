import Greeting from "./components/Greeting.jsx";
import Counter from "./components/Counter.jsx";
import UserInfo from "./components/UserInfo.jsx";
import TaskForm from "./components/TaskForm.jsx";

function App() {
  const tasks = [
    "Working from home",
    "Picking up kids",
    "Going to store",
    "Writing my screenplay",
    "Taking a walk",
  ];

  const handleAlert = () => {
    alert("You have added a user's info!");
  };

  return (
    <div>
      <h2 style={{ color: "darkblue" }}>
        <em>Task #1</em>
      </h2>
      <Greeting username='Alice' />
      <Greeting username='Bob' />
      <hr></hr>
      <h2 style={{ color: "darkblue" }}>
        <em>Task #2</em>
      </h2>
      <Counter />
      <hr></hr>
      <h2 style={{ color: "darkblue" }}>
        <em>Task #3</em>
      </h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <hr></hr>
      <h2 style={{ color: "darkblue" }}>
        <em>Task #4</em>
      </h2>
      <UserInfo
        name='Scott Schwartz-Owen'
        profession='Web Developer'
        handleClick={handleAlert} // passing handleAlert as function prop to UserInfo component
      />
      <hr></hr>
      <h2 style={{ color: "darkblue" }}>
        <em>Task #5</em>
      </h2>
      <TaskForm />
    </div>
  );
}

export default App;
