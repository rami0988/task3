import React from 'react';

const Loader = () => {
  return (
    <div className="animate-pulse space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-4 bg-gray-300 rounded w-full max-w-lg mx-auto"></div>
      ))}
    </div>
  );
};

export default Loader;
