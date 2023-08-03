import './App.css';
import AuthorList from './AuthorList';
import HomePage from './HomePage';
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/authors" element={<AuthorList />} />
      </Routes>
    </BrowserRouter>
  );
}