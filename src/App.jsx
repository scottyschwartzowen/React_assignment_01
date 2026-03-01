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
      <Greeting username='Alice' />
      <Greeting username='Bob' />
      <hr></hr>
      <Counter />
      <hr></hr>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <hr></hr>
      <UserInfo
        name='Scott Schwartz-Owen'
        profession='Web Developer'
        handleClick={handleAlert} // passing handleAlert as function prop to UserInfo component
      />
      <hr></hr>
      <TaskForm />
    </div>
  );
}

export default App;
