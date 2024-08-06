import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { UserProfile } from "./pages/UserProfile";
import { Settings } from "./pages/Settings";
import { ChatRoomPage } from "./pages/ChatRoomPage";
// import { Footer } from "./components/Footer";

function App() {
  useEffect(() => {
    document.title = "Lets-Chat";
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat-room" element={<ChatRoomPage />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/userProfile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
