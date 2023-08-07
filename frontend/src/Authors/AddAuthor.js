import { useRef, useState } from "react";
import { addAuthor } from "../Services/AuthorService";

export default function AddAuthor() {
  const responses = {
    Ok: 0,
    empty: 1,
    badRequest: 2,
    initial: 3
  }

  const [author, setAuthor] = useState("");
  const [error, setError] = useState(responses.initial);
  const inputRef = useRef(0);

  const handler = async(e) => {
    e.preventDefault();
    if (author === '') {
      setError(responses.empty);
    }
    try {
      let response = await addAuthor(author);
      console.log(response);
      if (response.statusText === "OK") {
        setError(responses.Ok);
        console.log("Author successfully added");
      } 
      else {
        setError(responses.badRequest);
        console.log("Author could not be added, bad request.");
      }  
    }
    catch(error) {
      console.log(error);
    }
    inputRef.current.value = "";
  }

  return(
    <div className="outer">
      <h1>Add Author</h1>
      <form onSubmit={handler}>
        <input
          id="authorName"
          name="author"
          placeholder="Enter author name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          ref={inputRef}
        />
        <button type="submit">Add author</button>
        {(error === responses.empty) && <div>Empty author name.</div>}
        {(error === responses.badRequest) && <div>Request failed.</div>}
        {(error === responses.Ok) && <div>Author successfully created.</div>}
      </form>
    </div>
  )
}