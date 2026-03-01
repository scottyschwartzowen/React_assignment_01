import Greeting from "./components/Greeting.jsx";
import Counter from "./components/Counter.jsx";

function App() {

  const tasks = [
    "Working from home",
    "Picking up kids",
    "Going to store",
    "Writing my screenplay",
    "Taking a walk",
  ];

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
    </div>
  );
}

export default App;
