import React, { createContext, useState, useEffect } from "react";
import useInput from "../Hooks/useInput";
import { auth, signInWithGoogle } from "../Firebase/firebase";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [name, setName] = useInput("");
  const [phone, setPhone] = useInput("");
  const [email, setEmail] = useInput("");

  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState();

  const login = () => {
    signInWithGoogle();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        phone,
        setPhone,
        email,
        setEmail,
        login,
        currentUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
