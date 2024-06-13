"use client";

import { createContext, useContext, useState } from "react";

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [language, setLanguage] = useState("en");

  return (
    <TransitionContext.Provider
      value={{ isOpen, setIsOpen, language, setLanguage }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => useContext(TransitionContext);
