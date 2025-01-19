import React from 'react';

const Moon = ({ parentSize, speed }) => {
  const moonOrbitSize = parentSize / 2;
  const moonSize = parentSize / 4;

  return (
    <div
      className="absolute"
      style={{
        width: `${moonOrbitSize * 2}px`,
        height: `${moonOrbitSize * 2}px`,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className="absolute w-full h-full"
        style={{
          animation: `orbit ${speed}s linear infinite`,
        }}
      >
        <div
          className="absolute w-2 h-2 bg-gray-200 rounded-full left-0 top-1/2 -translate-y-1/2"
          style={{
            width: `${moonSize}px`,
            height: `${moonSize}px`,
          }}
        />
      </div>
    </div>
  );
};

export default Moon;
