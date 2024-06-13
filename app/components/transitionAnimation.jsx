"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation.js";
import { useTransition } from "../context/transitionContext";

export default function TransitionPages() {
  const { isOpen } = useTransition();
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed z-50 bottom-0 right-0 top-0 left-0 w-screen bg-[#151542]"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ delay: 0, duration: 1 }}
          />
          <motion.div
            className="fixed z-40 bottom-0 right-0 top-0 left-0 w-screen bg-[#3333a4c0]"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ delay: 0, duration: 1.5 }}
          />
          <motion.div
            className="fixed z-30 bottom-0 right-0 top-0 left-0 w-screen bg-[#202064ab]"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ delay: 0, duration: 2 }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
