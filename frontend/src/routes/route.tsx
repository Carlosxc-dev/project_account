import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "../pages/register/register";
import Login from "../pages/login/login";
import Home from "../pages/home/home";

function route() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default route;
