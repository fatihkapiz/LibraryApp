import './App.css';
import AuthorList from './Authors/AuthorList';
import HomePage from './HomePage';
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logged from './Logged';
import NotLogged from './NotLogged';
import AddAuthor from './Authors/AddAuthor';
import DeleteAuthor from './Authors/DeleteAuthor';
import UpdateAuthor from './Authors/UpdateAuthor';


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NotLogged />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<Logged />}>
          <Route path="/author/list" element={<AuthorList />} />
          <Route path="/author/add" element={<AddAuthor />} />
          <Route path="/author/delete" element={<DeleteAuthor />} />
          <Route path="/author/update" element={<UpdateAuthor />} />
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}