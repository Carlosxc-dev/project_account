import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login/login";
import Home from "../pages/home/home";
import Register from "../pages/register/register";

function route() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default route;
