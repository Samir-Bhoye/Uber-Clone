import React, { createContext, useState } from "react";

export const UserDataContext = createContext(null);

export const UserDataProvider = ({ children }) => {
 
  const [user, setUser] = useState({
    // _id: null,
    email: "",
    fullName: {
      firstName: "",
      lastName: "",
    },
    password: "",
  });

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
};
