import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

// Add ToastContainer import
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="md:flex">
      <Navbar />
      <Outlet />
      <ToastContainer />
    </div>
  );
}

export default App;
