import React, { createContext } from "react";
import useInput from "../Hooks/useInput";
import { signInWithGoogle } from "../Firebase/firebase";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [name, setName] = useInput("");
  const [phone, setPhone] = useInput("");
  const [email, setEmail] = useInput("");

  const login = () => {
    signInWithGoogle();
  };

  return (
    <UserContext.Provider
      value={{ name, setName, phone, setPhone, email, setEmail, login }}
    >
      {children}
    </UserContext.Provider>
  );
}
