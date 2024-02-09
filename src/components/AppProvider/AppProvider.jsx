import React, { useMemo } from "react";

export const AppContext = React.createContext({});

export const AppProvider = ({ children }) => {
  const value = useMemo(() => {
    return {
      name: "app-provider",
    };
  }, []);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
