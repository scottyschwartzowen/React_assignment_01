import Greeting from "./Greeting.jsx";
import UserInfo from "./UserInfo.jsx";
import TaskComponent from "./TaskComponent";

function App() {
  return (
    <div>
      <Greeting username="Alice"/>
      <Greeting username="Bob" />
      <hr></hr>
    </div>
  );
}

export default App;
