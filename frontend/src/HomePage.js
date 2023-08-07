import React from 'react'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const signout = () => {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <div>
      <h1>HomePage</h1>
      <a href="./author/list" style={{display: 'block'}}>List Authors</a>
      <a href="./author/add" style={{display: 'block'}}>Add Authors</a>
      <a href="./author/delete" style={{display: 'block'}}>Delete Authors</a>
      <a href="./author/delete" style={{display: 'block'}}>Update Authors</a>
      <button onClick={signout}>Logout</button>
    </div>
  )
}

export default HomePage;