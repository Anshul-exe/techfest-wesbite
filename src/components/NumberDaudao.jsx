import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Counter = ({
  targetNumber = 5000,
  duration = 2000,
  label = "Foot Fall",
  showPlus = false,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = targetNumber / (duration / 50);

    const counter = setInterval(() => {
      setCount((prev) => {
        if (prev + increment >= targetNumber) {
          clearInterval(counter);
          return targetNumber;
        }
        return prev + increment;
      });
    }, 50);

    return () => clearInterval(counter);
  }, [targetNumber, duration]);

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.span
        className="text-5xl font-bold text-blue-500"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      >
        {Math.floor(count).toLocaleString()}
        {count === targetNumber && showPlus && "+"}
      </motion.span>
      <p className="text-lg text-gray-300 mt-4">{label}</p>
    </div>
  );
};

export default Counter;

// Aese use krna hai ise
//   return (
//     <div>
//       <Counter targetNumber={5000} duration={2000} label="Foot Fall" showPlus={true} />
//       <Counter targetNumber={1000} duration={1500} label="Visitors" />
//       <Counter targetNumber={300} duration={1000} label="New Users" showPlus={true} />
//     </div>
//   );
