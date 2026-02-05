// This is my TaskComponent for Task #3

function TaskComponent() {
  const tasks = [
    { id: 1, task: "Finish Homework" },
    { id: 2, task: "Write Your Essays" },
    { id: 3, task: "Try To Make Dinner" },
    { id: 4, task: "Make Time to Exercise" },
    { id: 5, task: "Remember to Meditate" },
  ];

  const randomTask = () => {
    const index = Math.floor(Math.random() * tasks.length);
    return tasks[index].task;
  };

  return (
    <div>
      <h3>Today, your task is to:</h3>
      <h3>{randomTask()}</h3>
    </div>
  );
}

export default TaskComponent;
