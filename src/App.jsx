import Greeting from "./components/Greeting.jsx";
import Counter from "./components/Counter.jsx";
import TasksList from "./components/TasksList.jsx";

function App() {
  return (
    <div>
      <Greeting username='Alice' />
      <Greeting username='Bob' />
      <hr></hr>
      <Counter />
      <hr></hr>
      <TasksList />
      <hr></hr>
    </div>
  );
}

export default App;
