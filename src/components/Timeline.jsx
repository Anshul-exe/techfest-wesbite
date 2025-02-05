import React, { useState, useEffect } from 'react';

const BranchingTimeline = ({
  events = [
    { id: 1, title: "Sacred Timeline", date: "Start", branch: 0 },
    { id: 2, title: "Nexus Event", date: "Variant detected", branch: 1 },
    { id: 3, title: "Branch Created", date: "Timeline split", branch: -1 },
    { id: 4, title: "Timeline Reset", date: "TVA Intervention", branch: 1 },
    { id: 5, title: "Timeline Reset", date: "TVA Intervention", branch: -1 },
    { id: 6, title: "Timeline Reset", date: "TVA Intervention", branch: 1 },
    { id: 7, title: "Main Timeline", date: "Restored", branch: 0 }
  ]
}) => {
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setAnimationProgress(1);
    }, 100);

    return () => clearTimeout(animationTimer);
  }, []);

  const centerY = 300;
  const branchLength = 120;
  const horizontalOffset = 200;
  const totalWidth = events.length * horizontalOffset;
  const totalHeight = 600;

  const getAnimatedLine = (x1, y1, x2, y2, progress) => {
    const currentX2 = x1 + (x2 - x1) * progress;
    const currentY2 = y1 + (y2 - y1) * progress;
    return { x2: currentX2, y2: currentY2 };
  };

  const getBranchEndPoint = (startX, branch, progress) => {
    if (branch === 0) return { x: startX, y: centerY };
    const endX = startX + horizontalOffset / 2 * progress;
    const endY = centerY + (branch * branchLength * progress);
    return { x: endX, y: endY };
  };

  const getBranchPath = (startX, branch, progress) => {
    if (branch === 0) return '';
    const endpoint = getBranchEndPoint(startX, branch, progress);
    const controlX1 = startX + horizontalOffset / 4;
    const controlY1 = centerY;
    const controlX2 = startX + horizontalOffset / 3;
    const controlY2 = centerY + (branch * branchLength * 0.5 * progress);
    return `M ${startX} ${centerY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endpoint.x} ${endpoint.y}`;
  };

  return (
    <div className="w-full p-8 rounded-lg overflow-x-auto">
      <div className="relative" style={{ width: totalWidth, height: totalHeight }}>
        <svg
          width={totalWidth}
          height={totalHeight}
          className="absolute inset-0"
        >
          <defs>
            <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="strongGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Animated Main timeline line with glow */}
          <g>
            <line
              x1="50"
              y1={centerY}
              x2={totalWidth - 50}
              y2={centerY}
              stroke="#f8861e"
              strokeWidth="10"
              strokeOpacity="0.3"
              filter="url(#strongGlow)"
              x2={(getAnimatedLine(50, centerY, totalWidth - 50, centerY, animationProgress)).x2}
            />
            <line
              x1="50"
              y1={centerY}
              x2={totalWidth - 50}
              y2={centerY}
              stroke="#f8861e"
              strokeWidth="6"
              strokeOpacity="0.5"
              filter="url(#neonGlow)"
              x2={(getAnimatedLine(50, centerY, totalWidth - 50, centerY, animationProgress)).x2}
            />
            <line
              x1="50"
              y1={centerY}
              x2={totalWidth - 50}
              y2={centerY}
              stroke="#f8861e"
              strokeWidth="4"
              className="transition-all duration-300"
              x2={(getAnimatedLine(50, centerY, totalWidth - 50, centerY, animationProgress)).x2}
            />
          </g>

          {/* Branches with glow */}
          {events.map((event, index) => (
            event.branch !== 0 && (
              <g key={`branch-${event.id}`}>
                <path
                  d={getBranchPath(index * horizontalOffset + 100, event.branch, animationProgress)}
                  stroke="#f8861e"
                  strokeWidth="6"
                  strokeOpacity="0.3"
                  fill="none"
                  filter="url(#strongGlow)"
                />
                <path
                  d={getBranchPath(index * horizontalOffset + 100, event.branch, animationProgress)}
                  stroke="#f8861e"
                  strokeWidth="4"
                  strokeOpacity="0.6"
                  fill="none"
                  filter="url(#neonGlow)"
                />
                <path
                  d={getBranchPath(index * horizontalOffset + 100, event.branch, animationProgress)}
                  stroke="#f8861e"
                  strokeWidth="2"
                  fill="none"
                />
              </g>
            )
          ))}
        </svg>

        {/* Event Nodes */}
        <div className="relative h-full">
          {events.map((event, index) => {
            const startX = index * horizontalOffset + 100;
            const endpoint = getBranchEndPoint(startX, event.branch, animationProgress);

            return (
              <div
                key={event.id}
                className="absolute transition-all duration-1000 ease-out"
                style={{
                  left: `${endpoint.x}px`,
                  top: `${endpoint.y}px`,
                  transform: `scale(${animationProgress})`,
                  opacity: animationProgress
                }}
              >
                <div className="relative">
                  <div
                    className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    onMouseEnter={() => setHoveredEvent(event.id)}
                    onMouseLeave={() => setHoveredEvent(null)}
                  >
                    <div
                      style={{
                        background: '#f8861e',
                        boxShadow: '0 0 10px #f8861e, 0 0 20px #f8861e'
                      }}
                      className="absolute w-6 h-6 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_#f8861e,0_0_30px_#f8861e]"
                    />
                  </div>

                  {hoveredEvent === event.id && (
                    <div className="absolute z-10 transform -translate-x-1/2 bg-gray-800/90 p-4 rounded-lg border border-[#f8861e] backdrop-blur-sm transition-all duration-300 w-48 shadow-lg mt-8">
                      <h3 className="text-[#f8861e] font-medium mb-1">{event.title}</h3>
                      <p className="text-gray-400 text-sm">{event.date}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BranchingTimeline;
