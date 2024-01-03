import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {
      title,
      body,
      author,
    };
    setIsPending(true);
    setTimeout(() => {
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then(() => {
        console.log("new blog added");
        setIsPending(false);
      });
      history("/");
    }, 800);
  };

  return (
    <div className="create">
      <h2>Add new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          required
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            console.log(title);
          }}
        />

        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
            console.log(body);
          }}
        ></textarea>

        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
            console.log(author);
          }}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
