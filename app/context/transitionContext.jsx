"use client";

import { animate } from "framer-motion";
import { createContext, useContext, useState } from "react";

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [language, setLanguage] = useState("en");

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 0.7 },
    exit: { opacity: 0 },
    transition: { delay: 0, duration: 2 },
  };

  return (
    <TransitionContext.Provider
      value={{ isOpen, setIsOpen, language, setLanguage, variants }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => useContext(TransitionContext);
