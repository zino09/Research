import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import Login from "./pages/Login";
import UploadPage from "./pages/Upload";
import GroupList from "./components/GroupList";
import CreateGroup from "./components/CreateGroup";

const App = () => {
  return (  
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/groups" element={<GroupList />} />
        <Route path="/create-group" element={<CreateGroup />} />
      </Routes>
    </Router>
  );
};

export default App;