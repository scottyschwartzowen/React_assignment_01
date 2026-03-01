// This is now my function component for Task #4

function UserInfo({ name, profession, handleClick }) {
  return (
    <div>
      <h3>
        <strong>Name:</strong> {name}
      </h3>
      <h3>
        <strong>Profession:</strong> {profession}
      </h3>
      <button onClick={handleClick}>Show Alert</button>
    </div>
  );
}

export default UserInfo;
