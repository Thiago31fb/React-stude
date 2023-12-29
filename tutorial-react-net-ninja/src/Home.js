import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  
  const [isPending, setIsPending] = useState(true);

  const [erro, setErro] = useState(null);

  const handleDelete = (id) => {
    const newBLogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBLogs);
  };
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
    
          if(!res.ok){
            throw Error("Nao foi possivel buscar os dados para esse recurso...")
          }
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          setBlogs(data);
          setIsPending(false);
          setErro(null)

        })
        .catch((erro) => {
          console.log(erro.message);
          setErro(erro.message);
          setIsPending(false)
        });
    }, 1200);
  }, []);

  return (
    <div className="home">

      {erro && <div>{erro}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Home;
