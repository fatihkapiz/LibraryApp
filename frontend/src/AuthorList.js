import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthorList() {

  const [authorList, setList] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  let authors = [];
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect in authors working.");
    setToken(localStorage.getItem("token"));
    if (token == null) {
      alert("You must login before using this interface.");
      navigate("/login");
    }
    console.log(token);
  }, [])

  const logout = () => {
    localStorage.clear();
    navigate("/");
  }

  const config = {
    headers: {
      Authorization: "Bearer " + token
    }
  }

  function getAuthors(e) {
    axios.get("http://localhost:5025/Author/list", config)
    .then(response => {
      authors = response.data;
      console.log(response);
      setList(authors);
      console.log(authorList);
    })
    .catch(error => console.log(error));
  }

  return (
    <div className="AuthorList">
      <button onClick={logout}>Logout</button>
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