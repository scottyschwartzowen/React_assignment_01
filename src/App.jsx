import Greeting from "./components/Greeting.jsx";
import Counter from './components/Counter.jsx';


function App() {
  return (
    <div>
      <Greeting username="Alice"/>
      <Greeting username="Bob" />
      <hr></hr>
      <Counter />
    </div>
  );
}

export default App;
