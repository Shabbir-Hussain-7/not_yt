import { useContext } from "react";
import React from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </Context.Provider>
  );
};
 const useGlobalContext = () => {
    return useContext(Context);
    };
export { ContextProvider, useGlobalContext };