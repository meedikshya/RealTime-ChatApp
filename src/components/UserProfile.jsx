import React, { useContext, useState, useEffect } from "react";
import { ChatContext } from "../context/ChatContext";

const UserProfile = () => {
  const { user, setUser } = useContext(ChatContext);
  const [username, setUsername] = useState(user.username);

  const handleSave = () => {
    const updatedUser = { username };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="text-lg mb-4">Hello, {username}</div>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="p-2 border border-gray-300 rounded mb-2 w-80"
      />

      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save
      </button>
    </div>
  );
};

export default UserProfile;
