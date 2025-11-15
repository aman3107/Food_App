import React from "react";

// We use super(props) so our class component can access this.props and properly inherit from React.Component
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count1: 1,
      userInfo: {
        name: "Dummy",
        location: "Dummy",
        avatar_url: "Dummy",
      },
    };
    // console.log("Child Constructor");
  }

  async componentDidMount() {
    // console.log("Child Component Did Mount");
    // Api Call
    const data = await fetch("https://api.github.com/users/aman3107");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });

    // this.timer = setInterval(() => {
    //   console.log("Time : ");
    // }, 1000);
  }

  componentDidUpdate() {
    console.log("Update");
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("Hello");
  }

  render() {
    const { name, location } = this.props;
    const { count, count1, userInfo } = this.state;
    // console.log("Child Render");
    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1> */}
        <img src={userInfo.avatar_url} className="user-img" />
        <h2>Name: {userInfo.name}</h2>
        <h3>Location: {userInfo.location}</h3>
        <h4>Insta: mittal3107</h4>

        {/* <button
          className="add-btn"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          +
        </button>
        <button
          className="sub-btn"
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          -
        </button> */}
      </div>
    );
  }
}

export default UserClass;
