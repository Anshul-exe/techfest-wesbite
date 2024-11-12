import React from 'react';

const BranchingTimeline = ({ events = [
  { id: 1, title: "Sacred Timeline", date: "Start", branch: 0 },
  { id: 2, title: "Nexus Event", date: "Variant detected", branch: 1 },
  { id: 3, title: "Branch Created", date: "Timeline split", branch: -1 },
  { id: 4, title: "Timeline Reset", date: "TVA Intervention", branch: 1 },
  { id: 5, title: "Main Timeline", date: "Restored", branch: 0 }
] }) => {
  const centerY = 300;  // Increased to provide more room
  const branchLength = 120;
  const horizontalOffset = 200;  // Increased spacing between events
  const totalWidth = events.length * horizontalOffset;
  const totalHeight = 600;  // Explicit height to ensure visibility

  const getBranchEndPoint = (startX, branch) => {
    if (branch === 0) return { x: startX, y: centerY };
    
    const endX = startX + horizontalOffset/2;
    const endY = centerY + (branch * branchLength);
    
    return { x: endX, y: endY };
  };

  const getBranchPath = (startX, branch) => {
    if (branch === 0) return '';
    
    const endpoint = getBranchEndPoint(startX, branch);
    return `M ${startX} ${centerY} Q ${endpoint.x} ${centerY} ${endpoint.x} ${endpoint.y}`;
  };

  return (
    <div className="w-full bg-gray-900 p-8 rounded-lg overflow-x-auto">
      <div className="relative" style={{ width: totalWidth, height: totalHeight }}>
        {/* SVG container for paths */}
        <svg 
          width={totalWidth} 
          height={totalHeight} 
          className="absolute inset-0"
        >
          {/* Glowing effects */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Main timeline glow effect */}
          <line
            x1="50"
            y1={centerY}
            x2={totalWidth - 50}
            y2={centerY}
            stroke="#ea580c"
            strokeWidth="6"
            strokeOpacity="0.3"
            filter="url(#glow)"
          />
          
          {/* Main timeline line */}
          <line
            x1="50"
            y1={centerY}
            x2={totalWidth - 50}
            y2={centerY}
            stroke="#d97706"
            strokeWidth="2"
            className="transition-all duration-300"
          />
          
          {/* Branch lines with glow */}
          {events.map((event, index) => (
            event.branch !== 0 && (
              <g key={`branch-${event.id}`}>
                {/* Glow effect */}
                <path
                  d={getBranchPath(index * horizontalOffset + 100, event.branch)}
                  stroke="#ea580c"
                  strokeWidth="6"
                  strokeOpacity="0.3"
                  fill="none"
                  filter="url(#glow)"
                />
                {/* Main branch line */}
                <path
                  d={getBranchPath(index * horizontalOffset + 100, event.branch)}
                  stroke="#d97706"
                  strokeWidth="2"
                  fill="none"
                  className="transition-all duration-300 hover:stroke-amber-500"
                />
              </g>
            )
          ))}
        </svg>

        {/* Events container */}
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
                <div className={`
                  relative group
                  transform -translate-x-1/2 -translate-y-1/2
                `}>
                  {/* Node with glow */}
                  <div className="
                    absolute left-1/2 top-1/2 
                    w-4 h-4 
                    -translate-x-1/2 -translate-y-1/2
                    bg-amber-600 rounded-full 
                    group-hover:bg-amber-500 
                    transition-all duration-300
                    shadow-[0_0_10px_#ea580c]
                  " />

                  {/* Content card */}
                  <div className={`
                    bg-gray-800/90 p-4 rounded-lg
                    border border-amber-600/20 
                    hover:border-amber-600/40
                    backdrop-blur-sm
                    transition-all duration-300 
                    w-48
                    ${event.branch >= 0 ? 'mt-8' : '-mb-32'}
                    shadow-lg
                  `}>
                    <h3 className="text-amber-500 font-medium mb-1">{event.title}</h3>
                    <p className="text-gray-400 text-sm">{event.date}</p>
                  </div>
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