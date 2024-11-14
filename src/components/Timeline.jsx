import React, { useState } from 'react';

const BranchingTimeline = ({
  events = [
    { id: 1, title: "Sacred Timeline", date: "Start", branch: 0 },
    { id: 2, title: "Nexus Event", date: "Variant detected", branch: 1 },
    { id: 3, title: "Branch Created", date: "Timeline split", branch: -1 },
    { id: 4, title: "Timeline Reset", date: "TVA Intervention", branch: 1 },
    { id: 5, title: "Main Timeline", date: "Restored", branch: 0 }
  ]
}) => {
  const [hoveredEvent, setHoveredEvent] = useState(null);

  const centerY = 300;
  const branchLength = 120;
  const horizontalOffset = 200;
  const totalWidth = events.length * horizontalOffset;
  const totalHeight = 600;

  const getBranchEndPoint = (startX, branch) => {
    if (branch === 0) return { x: startX, y: centerY };
    const endX = startX + horizontalOffset / 2;
    const endY = centerY + (branch * branchLength);
    return { x: endX, y: endY };
  };

  const getBranchPath = (startX, branch) => {
    if (branch === 0) return '';
    const endpoint = getBranchEndPoint(startX, branch);
    const controlX1 = startX + horizontalOffset / 4;
    const controlY1 = centerY;
    const controlX2 = startX + horizontalOffset / 3;
    const controlY2 = centerY + (branch * branchLength * 0.5);
    return `M ${startX} ${centerY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endpoint.x} ${endpoint.y}`;
  };

  return (
    <div className="w-full p-8 rounded-lg overflow-x-auto" style={{ border: '1px solid #f8861e', background: '#160C0C' }}>
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

          {/* Enhanced main timeline with stronger glow */}
          <g>
            {/* Outermost glow layer */}
            <line
              x1="50"
              y1={centerY}
              x2={totalWidth - 50}
              y2={centerY}
              stroke="#f8861e"
              strokeWidth="8"
              strokeOpacity="0.3"
              filter="url(#strongGlow)"
            />

            {/* Middle glow layer */}
            <line
              x1="50"
              y1={centerY}
              x2={totalWidth - 50}
              y2={centerY}
              stroke="#f8861e"
              strokeWidth="6"
              strokeOpacity="0.6"
              filter="url(#neonGlow)"
            />

            {/* Core line */}
            <line
              x1="50"
              y1={centerY}
              x2={totalWidth - 50}
              y2={centerY}
              stroke="#f8861e"
              strokeWidth="2"
              className="transition-all duration-300"
            />
          </g>

          {/* Branches with glow */}
          {events.map((event, index) => (
            event.branch !== 0 && (
              <g key={`branch-${event.id}`}>
                {/* Branch outer glow */}
                <path
                  d={getBranchPath(index * horizontalOffset + 100, event.branch)}
                  stroke="#f8861e"
                  strokeWidth="6"
                  strokeOpacity="0.3"
                  fill="none"
                  filter="url(#strongGlow)"
                />

                {/* Branch inner glow */}
                <path
                  d={getBranchPath(index * horizontalOffset + 100, event.branch)}
                  stroke="#f8861e"
                  strokeWidth="4"
                  strokeOpacity="0.6"
                  fill="none"
                  filter="url(#neonGlow)"
                />

                {/* Branch base line */}
                <path
                  d={getBranchPath(index * horizontalOffset + 100, event.branch)}
                  stroke="#f8861e"
                  strokeWidth="2"
                  fill="none"
                />

                {/* Branch connection point */}
                <circle
                  cx={index * horizontalOffset + 100}
                  cy={centerY}
                  r="4"
                  fill="#f8861e"
                  filter="url(#strongGlow)"
                />
              </g>
            )
          ))}
        </svg>

        <div className="relative h-full">
          {events.map((event, index) => {
            const startX = index * horizontalOffset + 100;
            const endpoint = getBranchEndPoint(startX, event.branch);

            return (
              <div
                key={event.id}
                className="absolute"
                style={{
                  left: `${endpoint.x}px`,
                  top: `${endpoint.y}px`,
                }}
              >
                <div className="relative">
                  {/* Circle node with enhanced glow */}
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
                      className="
                        absolute w-6 h-6
                        rounded-full
                        transition-all duration-300
                        hover:shadow-[0_0_15px_#f8861e,0_0_30px_#f8861e]
                      "
                    />
                  </div>

                  {/* Event card */}
                  {hoveredEvent === event.id && (
                    <div className="
                      absolute z-10
                      transform -translate-x-1/2
                      bg-gray-800/90 p-4 rounded-lg
                      border border-[#f8861e]
                      backdrop-blur-sm
                      transition-all duration-300
                      w-48
                      shadow-lg
                      mt-8
                    " style={{
                      fontFamily: 'IBM Plex Mono',
                      boxShadow: '0 0 10px rgba(248, 134, 30, 0.3)'
                    }}>
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
