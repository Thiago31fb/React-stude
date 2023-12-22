import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState("mario");

  const handleDelete = (id) => {
    const newBLogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBLogs);
  };
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />}
    </div>
  );
};

export default Home;
