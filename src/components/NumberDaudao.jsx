import React, { useEffect, useState, useRef } from "react";

const Counter = ({
  targetNumber = 5000,
  duration = 2000,
  label = "Foot Fall",
  Icon,
  showPlus = false,
  textSize = "text-3xl",
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }, // Start animation when 50% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated || typeof targetNumber === "string") return;

    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const newCount = Math.floor(progress * targetNumber);
      setCount(newCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => setCount(0);
  }, [targetNumber, duration, hasAnimated]);

  return (
    <div ref={ref} className="flex items-center space-x-8">
      {Icon && <Icon className="w-12 h-12 text-pink-500" />}
      <div>
        <p className={`${textSize} font-bold text-white`}>
          {typeof targetNumber === "string"
            ? targetNumber
            : count.toLocaleString()}
          {count === targetNumber && showPlus && "+"}
        </p>
        <p className="text-lg text-gray-400">{label}</p>
      </div>
    </div>
  );
};

export default Counter;
