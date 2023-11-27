import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contact from './Pages/Contact/Contact';
import Donate from './Pages/Donate/Donate';
import History from './Pages/History/History';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "contact",
    element: <Contact/>,
  },

  {
    path: "donate",
    element: <Donate/>,
  },

  {
    path: "history",
    element: <History/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router} />

);


