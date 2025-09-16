import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent component Did Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div className="about-container mt-55">
        <h1 className="text-center text-5xl text-gray-100">About Us</h1>
        <div className="card flex justify-center items-center mt-24 text-gray-100">
          <UserClass />
        </div>
      </div>
    );
  }
}

export default About;
