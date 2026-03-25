// This is now my function component for Task #2
import { useState } from "react";

function UserInfo({ name, profession }) {
  const [luckyNumber, setLuckyNumber] = useState(0);

  function handleClick() {
    setLuckyNumber(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <div>
      <h3>
        <strong>Name:</strong> {name}
      </h3>
      <h3>
        <strong>Profession:</strong> {profession}
      </h3>
      <h3>Your lucky number is: {luckyNumber}</h3>
      <button onClick={handleClick}>Generate New Lucky Number</button>
    </div>
  );
}

export default UserInfo;
