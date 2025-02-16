import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

 export const SocketContext = createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`${import.meta.env.VITE_BASE_URL}`);

    newSocket.on("connect", () => {
      console.log("Connected to socket server");
    });

    newSocket.on("disconnect", () => {
      console.log("Disconnected from socket server");
    });

    setSocket(newSocket);

    // return () => {
    //   newSocket.close();
    // };
  }, []);

  // const sendMessage = (eventName, message) => {
  //      console.log(`Sending message ${message} to  ${eventName}`)
  //     socket.emit(eventName, message);
    
  // };

  // const receiveMessage = (eventName, callback) => {
  //   if (socket) {
  //     socket.on(eventName, callback);
  //   }
  // };

  return (
    <SocketContext.Provider value={{  socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;