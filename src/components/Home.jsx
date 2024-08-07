import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold mb-8">Welcome to Simple Chat App</h1>
    <Link to="/chat" className="text-blue-500 hover:underline text-xl">
      Go to Chat Room
    </Link>
  </div>
);

export default Home;
