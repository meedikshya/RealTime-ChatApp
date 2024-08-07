import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChatProvider } from "./context/ChatContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ChatRoom from "./components/ChatRoom";
import UserProfile from "./components/UserProfile";
import Settings from "./components/Settings";

const App = () => (
  <ChatProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatRoom />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  </ChatProvider>
);

export default App;
