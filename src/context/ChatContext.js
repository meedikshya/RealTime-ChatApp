import React, { createContext, useState, useEffect } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser
      ? JSON.parse(savedUser)
      : { username: "Guest", profilePicture: "" };
  });

  const [chatRooms, setChatRooms] = useState(() => {
    const savedRooms = localStorage.getItem("chatRooms");
    return savedRooms ? JSON.parse(savedRooms) : ["Room1", "Room2"];
  });

  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("messages");
    return savedMessages ? JSON.parse(savedMessages) : { Room1: [], Room2: [] };
  });

  const sendMessage = (roomName, message) => {
    setMessages((prevMessages) => {
      const updatedMessages = {
        ...prevMessages,
        [roomName]: [...prevMessages[roomName], message],
      };
      localStorage.setItem("messages", JSON.stringify(updatedMessages));
      return updatedMessages;
    });
  };

  const addChatRoom = (roomName) => {
    if (!chatRooms.includes(roomName)) {
      setChatRooms((prevRooms) => {
        const updatedRooms = [...prevRooms, roomName];
        localStorage.setItem("chatRooms", JSON.stringify(updatedRooms));
        return updatedRooms;
      });
      setMessages((prevMessages) => ({
        ...prevMessages,
        [roomName]: [],
      }));
    }
  };

  return (
    <ChatContext.Provider
      value={{ user, setUser, chatRooms, messages, sendMessage, addChatRoom }}
    >
      {children}
    </ChatContext.Provider>
  );
};
