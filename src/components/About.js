import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }

  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is a Food App</h2>
        <UserClass name={"Aman Mittal (class)"} location={"Meerut (class)"} />
        <User name={"Aman Mittal (class)"} location={"Meerut (class)"} />
      </div>
    );
  }
}

export default About;
