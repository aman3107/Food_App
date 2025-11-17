import { useEffect, useState } from "react";
const User = (props) => {
  const { name, location } = props;
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("Time:");
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [[]]);
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Insta: mittal3107</h4>
      <button
        className="add-btn"
        onClick={() => {
          const add = count + 1;
          setCount(add);
        }}
      >
        +
      </button>
      <button
        className="sub-btn"
        onClick={() => {
          const sub = count - 1;
          setCount(sub);
        }}
      >
        -
      </button>
    </div>
  );
};

export default User;
