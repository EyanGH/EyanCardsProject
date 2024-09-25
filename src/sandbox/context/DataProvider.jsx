import React, { createContext, useContext } from "react";

const MyContext = createContext();

export default function DataProvider({ children }) {
  const data = {
    data1: 100,
    data2: "something",
  };

  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
}

export const useData = () => {
  const contextValue = useContext(MyContext);
  if (!contextValue) {
    throw new Error("useData must be used within provider");
  }
  return contextValue;
};
