import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
      },
    };
    // console.lg("Child Constructor");
  }

  async componentDidMount() {
    // console.log("Child component Did Mount");
    const data = await fetch("https://api.github.com/users/TusharJetagi");
    const response = await data.json();
    console.log(response);

    this.setState({
      userInfo: response,
    });
  }

  render() {
    const { name, location, bio, avatar_url } = this.state.userInfo;
    // console.log("Child Render");
    return (
      <div className="user-card text-lg w-80 flex flex-col gap-5 border border-gray-700 p-5 bg-[#1F2937] rounded-lg shadow hover:border-blue-500 transition">
        <img className="w-50 m-auto" src={avatar_url}></img>
        <h2 className="mt-6">Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Bio: {bio}</h4>
      </div>
    );
  }
}

export default UserClass;
