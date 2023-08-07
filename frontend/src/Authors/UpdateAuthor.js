import { useRef, useState } from "react";
import { editAuthor } from "../Services/AuthorService";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../Services/AuthInfo";

export default function Update() {
  const navigate = useNavigate();

  const [authorName, setAuthor] = useState("");
  const [authorId, setId] = useState("");
  const [idError, setIdError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const input1 = useRef(0);
  const input2 = useRef(0);

  const handler = async(e) => {
    if (!isLoggedIn()) {
      navigate("/");
    }
    e.preventDefault();
    try {
      await editAuthor({id: authorId, name: authorName});
    }
    catch(error) {
      console.log(error);
    }
  }

  return(
    <div className="outer">
      <h1>Update Author</h1>
      <form onSubmit={handler}>
      <input
          id="authorId"
          name="authorId"
          placeholder="Enter author id"
          value={authorId}
          onChange={(e) => setId(e.target.value)}
          ref={input1}
        />
        <input
          id="authorName"
          name="author"
          placeholder="Enter author name"
          value={authorName}
          onChange={(e) => setAuthor(e.target.value)}
          ref={input1}
        />
        <button type="submit">Update author</button>
      </form>
    </div>
  )
}