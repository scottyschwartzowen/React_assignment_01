// This is my class component for Task #4
import React, { Component } from "react";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Scott Schwartz-Owen",
      profession: "Producer/Screenwriter",
    };
  }

  render() {
    const randNumber = Math.floor(Math.random() * 7);

    return (
      <div>
        <h2>User's Name:</h2>
        <h3>{this.state.name}</h3>
        <h3>User's Profession:</h3>
        <h4>{this.state.profession}</h4>
        <p>Your lucky number is: {randNumber}</p>
      </div>
    );
  }
}

export default UserInfo;
