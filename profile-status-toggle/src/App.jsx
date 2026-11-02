import { useState, useEffect, useCallback } from "react";
import StatusBadge from "./StatusBadge";
import "./App.css";

function App() {
  //first value pick hogi localstorage se not found then show OFFLINE
  const [status, setStatus] = useState(() => {
    return localStorage.getItem("status") || "Offline";
  });

  // jab bhi status change ho toh console log + localstorage mai save karo

  useEffect (() => {
    console.log("Status changed to:", status);
    localStorage.setItem("status", status);
  }, [status]);

  // Toggle function (useCallback se function dobara nahi banta)

  const toggleStatus = useCallback(() => {
    setStatus((prev) => (prev === "Online" ? "Offline" : "Online"));
  }, []);

  const isOnline =status === "Online";

  return (
    <div className="page">
      <div className="card">
        <div className="avatar-wrapper">
          <img
          className="avatar"
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile"/>
          <span className={`dot ${isOnline ? "online" : "offline"}`}></span>
          </div>

          <h2 className="name">Jennifer</h2>
          <p className="role">React Developer </p>

          <StatusBadge status={status} />

          <button
          className={`toggle-btn ${isOnline ? "go-offline" : "go-online"}`}
          onClick={toggleStatus}
          >
            {isOnline ? "Go Offline" : "Go Online"}
          </button>

          <p className="bio">
            Passionate about learning React and building clean, modern web apps.
          </p>
        </div>
    </div>
  );

    
  
};

export default App;