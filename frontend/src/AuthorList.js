import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthorList() {

  const [authorList, setList] = useState([]);
  let authors = [];
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: "Bearer " + token
    }
  }

  function getAuthors(e) {
    if (token == null) {
      alert("You must login before using this interface.");
      navigate("/login");
    }
    else {
      axios.get("http://localhost:5025/Author/list", config)
      .then(response => {
        authors = response.data;
        console.log(response);
        setList(authors);
        console.log(authorList);
      })
      .catch(error => console.log(error));
    }
  }

  return (
    <div className="AuthorList">
      <ol>
        {authorList.map(function(author, i){
            return (
              <li obj={author} key={i}>{author.name}</li>
            );
        })}
      </ol>
      <button onClick={getAuthors}>List Authors</button>
    </div>
  );
}
  