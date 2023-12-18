const Home = () => {

    const handleClick01 = (name, e) =>{
        console.log("Hello ninjas " + name);
        console.log(e.target);
    }

     const handleClick = (e) => {
       console.log("hello ninjas", e);
     };

     const handleClickAgain = (name, e) => {
       console.log("hello " + name, e.target);
     };
    return (
      <div className="home">
        <h1>app content</h1>
        <button onClick={(e) => handleClick01("Yoshi", e)}>click me</button>
        <button onClick={handleClick}>Click me</button>
        <button onClick={(e) => handleClickAgain("mario", e)}>
          Click me again
        </button>
      </div>
    );
}
 
export default Home;