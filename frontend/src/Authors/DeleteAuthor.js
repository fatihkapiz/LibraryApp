import { useRef, useState } from "react";
import { deleteAuthor } from "../Services/AuthorService";
import { isLoggedIn } from "../Services/AuthInfo";
import { useNavigate } from "react-router-dom";

export default function DeleteAuthor() {
  const navigate = useNavigate();
  const responses = {
    Ok: 0,
    isInt: 1,
    badRequest: 2,
    initial: 3
  }

  const [authorId, setAuthor] = useState("");
  const [error, setError] = useState(responses.initial);
  const inputRef = useRef(0);

  const handler = async(e) => {
    e.preventDefault();
    if (!isLoggedIn()) {
        navigate("/");
    }

    try {
      console.log(authorId);
      await deleteAuthor(authorId);
    }
    catch(error) {
      console.log(error);
    }
    inputRef.current.value = "";
  }

  return(
    <div className="outer">
      <h1>Delete Author</h1>
      <form onSubmit={handler}>
        <input
          id="authorName"
          name="author"
          placeholder="Enter author id"
          value={authorId}
          onChange={(e) => setAuthor(e.target.value)}
          ref={inputRef}
        />
        <button type="submit">Delete author</button>
        {(error === responses.isInt) && <div>Id is not an integer.</div>}
        {(error === responses.badRequest) && <div>Request failed.</div>}
        {(error === responses.Ok) && <div>Author successfully created.</div>}
      </form>
    </div>
  )
}