import React, { useMemo } from "react";

export const HeaderContext = React.createContext({});

export const Header = ({ children }) => {
  const value = useMemo(() => {
    return {
      name: "header-provider",
    };
  }, []);

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
};
