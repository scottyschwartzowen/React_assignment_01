// This is my Greeting function component for Task #1
function Greeting() {
  const date = new Date();

  return (
    <>
      <h1>Hello, Welcome to React!</h1>
      <hr></hr>
      <p style={{ color: "dodgerblue", fontSize: "24px", fontWeight: "bold" }}>
        The current date is: {date.toLocaleDateString()}
      </p>
    </>
  );
}

export default Greeting;