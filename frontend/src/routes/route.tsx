import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login/login";
import Home from "../pages/home/home";
import Register from "../pages/register/register";
import Settings from "../pages/settings/settings";
import Dashboard from "../pages/dashboard/dashboard";
import { PrivateRoute } from "./protectRoute";
import { AuthProvider } from "../context/AuthContext";

function route() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<PrivateRoute component={<Home />} />}>
            <Route index element={<Dashboard />} />
            <Route path="dash" element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default route;
