"use client";

import { createContext, useContext, useState } from "react";
import { uuid } from "uuidv4";

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [language, setLanguage] = useState("En");
  const key = uuid();
  const key2 = uuid();

  const variants = {
    initial: { opacity: 0, x: "-20%" },
    animate: { opacity: 0.7, x: 0 },
    exit: { opacity: 0, x: "-20%" },
  };

  return (
    <TransitionContext.Provider
      value={{ isOpen, setIsOpen, language, setLanguage, variants, key, key2 }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => useContext(TransitionContext);
