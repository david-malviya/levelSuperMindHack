import React, { useEffect, useState } from 'react';

const BreathJourney = () => {
  const [breathState, setBreathState] = useState('Inhale');
  const [scale, setScale] = useState(1);
  const [duration, setDuration] = useState(3);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let intervalId;
    let timeElapsed = 0;

    const cycleDuration = duration * 3000;

    const animateBreathing = () => {
      const startTime = Date.now();

      intervalId = setInterval(() => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        timeElapsed = elapsed % cycleDuration;
        
        // Calculate progress (0 to 1)
        const currentProgress = timeElapsed / cycleDuration;
        setProgress(currentProgress);
        
        // Determine breath state based on progress
        if (currentProgress < 0.5) {
          setBreathState('Inhale');
          setScale(1 + (currentProgress * 2 * 0.5)); // Gradually increase from 1 to 1.5
        } else {
          setBreathState('Exhale');
          const exhaleProgress = (currentProgress - 0.5) * 2;
          setScale(1.5 - (exhaleProgress * 0.5)); // Gradually decrease from 1.5 to 1
        }
      }, 100);

      return intervalId;
    };

    // Start the animation
    intervalId = animateBreathing();

    return () => {
      clearInterval(intervalId); // Cleanup on component unmount
    };
  }, [duration]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-50 p-6">
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Breath Journey</h1>
        <p className="text-gray-600">Regulate your breathing for relaxation and focus.</p>
      </div>

      {/* Container for the breathing circle */}
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Progress ring */}
        <svg className="absolute w-full h-full -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="48%"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="2"
          />
          <circle
            cx="50%"
            cy="50%"
            r="48%"
            fill="none"
            stroke={breathState === 'Inhale' ? '#75cde7' : '#eb7c7c'}
            strokeWidth="2"
            strokeDasharray={`${2 * Math.PI * 48}`}
            strokeDashoffset={2 * Math.PI * 48 * (1 - progress)}
            className="transition-all duration-200"
          />
        </svg>
        
        {/* Outer circle for maximum scale reference */}
        <div className="absolute w-full h-full rounded-full border-2 border-dashed border-gray-300 opacity-30" />
        
        {/* Animated breathing circle */}
        <div
          className="absolute w-full h-full rounded-full flex items-center justify-center transition-transform duration-200"
          style={{
            transform: `scale(${scale})`,
            backgroundColor: breathState === 'Inhale' ? '#75cde7' : '#eb7c7c',
          }}
        >
          <span className="text-xl font-semibold text-white select-none">
            {breathState}
          </span>
        </div>
      </div>

      {/* Controls section */}
      <div className="text-center mt-16 w-full max-w-md">
        <p className="text-gray-700 mb-6">
          {breathState === 'Inhale' ? 'Breathe in slowly...' : 'Release your breath...'}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <label className="text-gray-600 font-medium whitespace-nowrap">
            Breath Duration:
          </label>
          <input
            type="range"
            min="3"
            max="8"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-40"
          />
          <span className="text-gray-900 min-w-[80px]">
            {duration} seconds
          </span>
        </div>
      </div>
    </div>
  );
};

export default BreathJourney;