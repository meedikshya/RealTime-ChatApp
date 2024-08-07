import React, { useContext, useState, useRef, useEffect } from "react";
import { ChatContext } from "../context/ChatContext";

const ChatRoom = () => {
  const { chatRooms, messages, sendMessage, addChatRoom } =
    useContext(ChatContext);
  const [currentRoom, setCurrentRoom] = useState(chatRooms[0]);
  const [newMessage, setNewMessage] = useState("");
  const [newRoomName, setNewRoomName] = useState("");
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      sendMessage(currentRoom, newMessage);
      setNewMessage("");
    }
  };

  const handleCreateRoom = () => {
    if (newRoomName.trim() !== "" && !chatRooms.includes(newRoomName)) {
      addChatRoom(newRoomName);
      setCurrentRoom(newRoomName);
      setNewRoomName("");
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages[currentRoom]]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Chat Room: {currentRoom}</h2>
      <div className="mb-4">
        {chatRooms.map((room) => (
          <button
            key={room}
            onClick={() => setCurrentRoom(room)}
            className={`px-4 py-2 m-1 rounded ${
              room === currentRoom
                ? "bg-blue-600 text-white"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {room}
          </button>
        ))}
      </div>
      <div className="mb-4">
        <input
          value={newRoomName}
          onChange={(e) => setNewRoomName(e.target.value)}
          placeholder="New Room Name"
          className="p-2 border border-gray-300 rounded-l"
        />
        <button
          onClick={handleCreateRoom}
          className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600"
        >
          Create Room
        </button>
      </div>
      <div className="bg-white p-4 rounded shadow-lg w-96 h-96 overflow-y-auto mb-4">
        {messages[currentRoom]?.map((msg, index) => (
          <div key={index} className="my-2">
            {msg}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex w-96">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow p-2 border border-gray-300 rounded-l"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
