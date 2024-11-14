import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Counter = ({
  targetNumber = 5000,
  duration = 2000,
  label = "Foot Fall",
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
        className="text-5xl font-bold"
        style={{ color: "#da0000" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      >
        {Math.floor(count).toLocaleString()}
      </motion.span>
      <p className="text-lg text-gray-300 mt-4">{label}</p>
    </div>
  );
};

export default Counter;

// Use Aese krna hai is bisi ko
// function App() {
//   return (
//     <div>
//       <Counter targetNumber={5000} duration={2000} label="Foot Fall" />
//       <Counter targetNumber={1000} duration={1500} label="Visitors" />
//       <Counter targetNumber={300} duration={1000} label="New Users" />
//     </div>
//   );
// }
