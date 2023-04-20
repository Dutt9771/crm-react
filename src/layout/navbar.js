import Client from "../components/client";
import Dashboard from "../components/dashboard";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <BrowserRouter>
        <div
          style={{
            display: "flex",
            background: "white",
            padding: "5px 0 5px 5px",
            fontSize: "20px",
          }}
        >
          <div style={{ margin: "10px" }}>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "green" : "black",
              })}
            >
              Client
            </NavLink>
          </div>
          <div style={{ margin: "10px" }}>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "green" : "black",
              })}
            >
              Dashboard
            </NavLink>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Client />} />
          <Route exact path="/about" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
