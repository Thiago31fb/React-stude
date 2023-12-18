import { useState } from "react";

const Home = () => {
//   let name = "Mario";
const [name, setName]= useState("mario")
const [age, setAge]= useState(22)
  const handleClick = () => {
    setName("luige")
    setAge(30)
  };

  return (
    <div className="home">
      <h1>app content</h1>
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
