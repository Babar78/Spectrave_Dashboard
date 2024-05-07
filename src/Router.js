import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import App from "./App";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            // Home
            {
                path: "",
                element: <Home />
            },
            {
                path: "dashboard",
                element: <Dashboard />
            },

        ]
    },
]);