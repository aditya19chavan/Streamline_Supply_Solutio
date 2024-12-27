import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import router from "./projectroute"; // Import the router configuration
import { RouterProvider } from "react-router-dom"; // Import RouterProvider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Use RouterProvider to wrap App */}
  </React.StrictMode>
);
