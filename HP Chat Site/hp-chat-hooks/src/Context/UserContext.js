import React, { createContext } from "react";
import useInput from "../Hooks/useInput";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [name, setName] = useInput("");
  const [phone, setPhone] = useInput("");
  const [email, setEmail] = useInput("");

  return (
    <UserContext.Provider
      value={{ name, setName, phone, setPhone, email, setEmail }}
    >
      {children}
    </UserContext.Provider>
  );
}
