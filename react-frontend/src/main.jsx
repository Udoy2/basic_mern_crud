import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ShowComponent from './components/ShowComponent.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/show",
    element: <ShowComponent />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
