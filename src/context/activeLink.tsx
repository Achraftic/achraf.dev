import React, { useState, createContext, ReactNode, FC } from "react";

export type HeaderContextType= {
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
}

// Create a context with a default value of `null` for TypeScript safety.
export const HeaderContext = createContext<HeaderContextType | null>(null);

interface HeaderLayoutProps {
  children: ReactNode;
}

const HeaderLayout: FC<HeaderLayoutProps> = ({ children }) => {
  const [activeLink, setActiveLink] = useState<string>("Home");

  return (
    <HeaderContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderLayout;
