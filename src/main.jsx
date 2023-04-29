// Libraries
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
// Components
import App from "./App.jsx";
// Styles
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <div>Home</div> },
      {
        path: "/currencies",
        element: <div>All Currencies page</div>,
      },
      {
        path: "/currency-details/:id",
        element: <div>Currency details page</div>,
      },
      {
        path: "/news",
        element: <div>News page</div>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
