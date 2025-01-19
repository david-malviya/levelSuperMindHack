import React from 'react';
import Moon from './Moon';

const Planet = ({ name, image, orbitSize, speed, size }) => {
  const sizeInPixels = parseInt(size.replace(/[^\d]/g, '')) * 4; // Convert Tailwind size to pixels

  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        width: `${orbitSize * 2}px`,
        height: `${orbitSize * 2}px`,
      }}
    >
      <div className="absolute w-full h-full rounded-full border border-gray-700 opacity-20" />
      <div
        className="absolute"
        style={{
          animation: `orbit ${speed}s linear infinite`,
          width: '100%',
          height: '100%',
        }}
      >
        <div
          className={`absolute ${size} left-0 top-1/2 -translate-y-1/2 overflow-hidden rounded-full`}
          title={name}
        >
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
          {name === 'Earth' && <Moon parentSize={sizeInPixels} speed={3} />}
        </div>
      </div>
    </div>
  );
};

export default Planet;
