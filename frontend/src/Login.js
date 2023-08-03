import { useState } from "react";
import * as React from "react";
import axios from "axios";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
          console.log(localStorage);
          console.log(_token);
        })
        .catch(error => {
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
            {/* <input type = "submit"/> */}
          </form>
        </ div>
    );
}
