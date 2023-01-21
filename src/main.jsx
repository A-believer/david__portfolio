import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import ErrorPage from './ErrorPage';
import './index.css'
import { About } from './pages/About';
import { Hero } from './pages/Hero';
import {Blog} from './pages/Blog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "portfolio/:id",
        element: <About />
      },
      {
        path: "portfolio/:id",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)