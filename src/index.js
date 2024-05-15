import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import NotFound from './components/NotFound/NotFound';
import Profile from './components/Users/Profile';
import ListBooks from './components/Books/List-Books';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <Navigate to='libros' replace/>,
      },
      {
        path: "perfil",
        element: <Profile/>,
      },
      {
        path: "perfil",
        element: <Profile/>,
      },
      {
        path: "libros",
        element: <ListBooks/>,
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();