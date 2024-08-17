import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../../domains/user/pages/login/pageLogin";
import Home from "../../domains/money/pages/home/home";
import Register from "../../domains/user/pages/register/pageRegister";
import Settings from "../../domains/money/pages/settings/settings";
import Dashboard from "../../domains/money/pages/dashboard/dashboard";
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
