import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const VenomSymbioteEffect = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth interpolation for mouse movement
  const springX = useSpring(mouseX, {
    stiffness: 300,
    damping: 20,
  });
  const springY = useSpring(mouseY, {
    stiffness: 300,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  // Array of fluid layers with unique styles and added rotation
  const fluidLayers = [
    {
      image: "url('/src/assets/venom/1Default.png')",
      animation: "move1",
      speed: 100,
      opacity: 1,
      rotation: '100deg', // Rotation angle for layer 1
    },
    {
      image: "url('/src/assets/venom/Property1Variant2.png')",
      animation: "move2",
      speed: 80,
      opacity: 1,
      rotation: '-150deg', // Rotation angle for layer 2
    },
    {
      image: "url('/src/assets/venom/Property1Variant2.png')",
      animation: "move3",
      speed: 100,
      opacity: 1,
      rotation: '270deg', // Rotation angle for layer 3
    },
  ];

  return (
    <motion.div
      ref={containerRef}
      className="relative w-[400px] h-[600px] overflow-hidden rounded-2xl bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Fluid Background Layers with Rotation */}
      {fluidLayers.map((layer, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: layer.image,
            animation: `${layer.animation} ${layer.speed}s linear infinite`,
            opacity: layer.opacity,
            scale: isHovered ? 1.1 + index * 0.05 : 1,
            transform: `rotate(${layer.rotation}) translateY(0)`, // Apply both rotation and translation
            transition: { duration: 0.3 },
          }}
        />
      ))}

      {/* Venom Splash Effect */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
              type: "spring",
              stiffness: 200,
            },
          }}
          className="absolute inset-0 bg-cover bg-center mix-blend-screen"
          style={{
            backgroundImage: "url('/src/assets/venom/PropertyVariant2-1.png')",
            x: springX.get() * 0.15,
            y: springY.get() * 0.15,
          }}
        />
      )}

      {/* Interactive Cursor Effect */}
      <motion.div
        className="absolute w-20 h-20 bg-black/30 rounded-full blur-2xl pointer-events-none"
        style={{
          x: springX,
          y: springY,
          opacity: isHovered ? 0.7 : 0,
          transition: { duration: 0.2 },
        }}
      />

      <style jsx>{`
        @keyframes move1 {
  0% { transform: rotate(0deg) translateY(0); }
  100% { transform: rotate(360deg) translateY(0); }
}
        @keyframes move2 {
          0% { transform: rotate(0deg) translateY(0); }
          50% { transform: rotate(180deg) translateY(10px); }
          100% { transform: rotate(360deg) translateY(0); }
        }
        @keyframes move3 {
          0% { transform: rotate(0deg) translateY(0); }
          50% { transform: rotate(180deg) translateY(-20px); }
          100% { transform: rotate(360deg) translateY(0); }
        }
      `}</style>
    </motion.div>
  );
};

export default VenomSymbioteEffect;
