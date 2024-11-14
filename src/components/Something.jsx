import React, { useEffect, useRef } from 'react';

const AnimatedScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Define the animation frames
    const frames = [
      { src: 'image1.jpg', x: 0, y: 0 },
      { src: 'image2.jpg', x: 0, y: 0 },
      { src: 'image3.jpg', x: 0, y: 0 },
      { src: 'image4.jpg', x: 0, y: 0 },
    ];

    let currentFrame = 0;

    // Animation loop
    function animate() {
      // Clear the canvas
      ctx.clearRect(0, 0, width, height);

      // Draw the current frame
      const currentImage = new Image();
      currentImage.src = frames[currentFrame].src;
      currentImage.onload = () => {
        ctx.drawImage(currentImage, frames[currentFrame].x, frames[currentFrame].y, width, height);
      };

      // Move to the next frame
      currentFrame = (currentFrame + 1) % frames.length;

      // Request the next animation frame
      requestAnimationFrame(animate);
    }

    // Start the animation
    animate();
  }, []);

  return (
    <canvas ref={canvasRef} width={800} height={450} />
  );
};

export default AnimatedScene;