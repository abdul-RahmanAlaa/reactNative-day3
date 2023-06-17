import axios from 'axios';
import React, { createContext, useEffect, useState } from "react";

export const userContext = createContext();
const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <userContext.Provider value={{ users }}>{children}</userContext.Provider>
  );
}

export default UserContextProvider;
