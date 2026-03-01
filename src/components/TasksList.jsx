// This is my TasksList function component for Task #3
function TasksList() {
  const tasks = [
    "Working from home",
    "Picking up kids",
    "Going to store",
    "Writing my screenplay",
    "Taking a walk",
  ];

  return (
    <>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  );
}

export default TasksList;
