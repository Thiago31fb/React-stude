import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");

  return (
    <div className="create">
      <h2>Add new Blog</h2>
      <form>
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
        <button>Add Blog</button>
      </form>
      <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p>
    </div>
  );
};

export default Create;
