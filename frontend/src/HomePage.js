import React from 'react'
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <a href="./login" style={{display: 'block'}}>Login</a>
      <a href="./authors" style={{display: 'block'}}>Authors</a>
    </div>
  )
}

export default HomePage;