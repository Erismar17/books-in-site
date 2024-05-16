import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import BookDetail from './components/Books/Book-Detail/BookDetail';
import ListBooks from './components/Books/List-Books';
import Navbar from './components/Navigation/Navbar';
import Profile from './components/Users/Profile';

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Navigate to='/books' replace />} />
          <Route path="/books" element={<ListBooks />} />
          <Route path="/detail" element={<BookDetail />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;