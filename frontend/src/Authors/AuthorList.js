import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthors } from "../Services/AuthorService"
import { config } from "../Services/AuthInfo";

export default function AuthorList() {

  const [authorList, setList] = useState([]);
  let token = localStorage.getItem("token");
  // let authors = [];
  const navigate = useNavigate();

  useEffect(() => {
    handler();
    if (token == null) {
      alert("You must login before using this interface.");
      navigate("/login");
    }
  }, [])

  const handler = async() => {
    try {
      const data = await getAuthors();
      setList(data);
      console.log(data);
    }
    catch(error) {
      console.log(error);
    }
  }

  const logout = () => {
    localStorage.clear();
    navigate("/");
  }

  function get() {
    axios.get("http://localhost:5025/Author/list", config())
    .then(response => {
      setList(response.data);
    })
    .catch(error => {
      console.log(error); 
    });
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