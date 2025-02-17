import "./index.css";
import Select_metaphor from "./pages/Select_metaphor.jsx";
import { Provider } from "@/components/ui/provider";

import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/app.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/select",
    element: <Select_metaphor />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      {" "}
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
