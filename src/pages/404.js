import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ZenNotFound = () => {
  const router = useRouter();
  const [breatheIn, setBreatheIn] = useState(true);

  // Breathing animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBreatheIn(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-500/10 transition-all duration-4000 ease-in-out ${breatheIn ? 'scale-100' : 'scale-150'}`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-500/10 transition-all duration-4000 ease-in-out delay-1000 ${breatheIn ? 'scale-150' : 'scale-100'}`} />
      </div>

      {/* Om Symbol */}
      <svg className="w-32 h-32 mb-8 text-purple-300" viewBox="0 0 100 100">
        <path 
          className="fill-current"
          d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"
        />
        <path 
          className="fill-current"
          d="M50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 50c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z"
        />
        <circle className="fill-current" cx="50" cy="50" r="10" />
      </svg>

      {/* 404 Message */}
      <h1 className="text-6xl md:text-8xl font-bold text-purple-300 mb-4">404</h1>
      <p className="text-2xl md:text-3xl text-purple-200 mb-8 text-center">
        Find your center. The page has transcended.
      </p>

      {/* Breathing Guide */}
      <div className="text-purple-200 text-lg md:text-xl mb-12 text-center">
        <p className={`transition-opacity duration-1000 ${breatheIn ? 'opacity-100' : 'opacity-0'}`}>
          Breathe in...
        </p>
        <p className={`transition-opacity duration-1000 ${breatheIn ? 'opacity-0' : 'opacity-100'}`}>
          Breathe out...
        </p>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <button 
          onClick={() => router.back()}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors duration-300"
        >
          Return to Previous Asana
        </button>
        <button 
          onClick={() => router.push('/')}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-colors duration-300"
        >
          Find Your Home Flow
        </button>
      </div>

      {/* Lotus Decoration */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between p-8 opacity-20">
        <svg className="w-16 h-16 text-purple-300" viewBox="0 0 100 100">
          <path 
            className="fill-current"
            d="M50 0c-5 10-15 20-30 25 15 5 25 15 30 25 5-10 15-20 30-25-15-5-25-15-30-25z"
          />
        </svg>
        <svg className="w-16 h-16 text-purple-300" viewBox="0 0 100 100">
          <path 
            className="fill-current"
            d="M50 0c-5 10-15 20-30 25 15 5 25 15 30 25 5-10 15-20 30-25-15-5-25-15-30-25z"
          />
        </svg>
      </div>

      {/* Meditation Tips */}
      <div className="absolute top-4 right-4 text-purple-200/60 text-sm max-w-xs text-right">
        <p className="mb-2">Take this moment to breathe...</p>
        <p>Everything is exactly where it needs to be.</p>
      </div>
    </div>
  );
};

export default ZenNotFound;