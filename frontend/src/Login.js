import { useState } from "react";
import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    let _token;

    function handleSubmit(e) {
        e.preventDefault(); // avoid page refresh
        axios
        .post('http://localhost:5025/api/Authenticate/login', {
            username,
            password
        })
        .then(response => {
          console.log(response);
          _token = response.data.token;
          localStorage.setItem("token", _token);
          navigate("/");
          console.log(localStorage);
          console.log(_token);
        })
        .catch(error => {
          setError(true);
          console.log(error);
        });
    }
    
    return (
        <div className="Login">
          {/* when form is submitted, handleSubmit will be executed */}
          <form onSubmit={handleSubmit}>
            <div>
              <input
                name="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
  
            <div>
              <input
                name="password"
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">submit</button>
            {error && <div>Incorrect username or password</div>}
            {/* <input type = "submit"/> */}
          </form>
        </ div>
    );
}
