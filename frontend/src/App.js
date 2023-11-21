import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Yoga from "./pages/Yoga/Yoga";
import About from "./pages/About/About";
import Tutorials from "./pages/Tutorials/Tutorials";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ProtectedRoutes from "./ProtectedRoutes";

import Cookies from "universal-cookie";

import "./App.css";

export default function App() {
  const cookies = new Cookies();
  const token = cookies.get("TOKEN");
  // const navigate = useNavigate();

  console.log(token);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {token ? (
          <>
            <Route path="/start" element={<Yoga />} />
          </>
        ) : (
          <Route path="/" element={<Home />} />
        )}
        <ProtectedRoutes path="/start" element={<Yoga />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tutorials" element={<Tutorials />} />
      </Routes>
    </Router>
  );
}
