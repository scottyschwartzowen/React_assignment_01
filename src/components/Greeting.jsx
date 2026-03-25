// This is my Greeting function component for Task #1

import { useState } from "react";

function Greeting(props) {
  const [index, setIndex] = useState(0);
  const [date, setDate] = useState("");

  function handleClick() {
    setIndex((i) => (i + 1) % props.usernames.length);
    setDate(
      new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    );
  }

  return (
    <>
      <h3>Hello, {props.usernames[index]}!</h3>
      <h3>Today's date: {date}</h3>
      <button onClick={handleClick}>Change Greeting</button>
    </>
  );
}

export default Greeting;
