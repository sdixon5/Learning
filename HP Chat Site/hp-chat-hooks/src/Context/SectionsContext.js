import React, { useContext } from "react";

export const SectionsContext = useContext();

export function SectionsProvider({ children }) {
  return (
    <SectionsContext.Provider value={{}}>{children}</SectionsContext.Provider>
  );
}
