import logo from './logo.svg';
import './App.css';
import { LoginContext } from './Contexts/LoginContext';
import { useState } from 'react';
import HomePage from './Homepage';
import Dashboard from './Dashboard';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path=" /login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}