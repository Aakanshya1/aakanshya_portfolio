import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CircleShufflePreloader = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const shuffleInterval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 5);
    }, 500);

    const timeout = setTimeout(() => {
      clearInterval(shuffleInterval);
      setLoading(false);
      onComplete();
    }, 5000);

    return () => {
      clearInterval(shuffleInterval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex space-x-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: i === activeIndex ? "#3D539F" : "#ABABAB",
                }}
                animate={{
                  scale: i === activeIndex ? 1.5 : 1,
                  y: i === activeIndex ? -10 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CircleShufflePreloader;
