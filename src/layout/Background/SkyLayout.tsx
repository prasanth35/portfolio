import React from 'react';


const SkyLayout = ({ children }: any) => {
  return (
    <div className="main-container">
      <div className="sky absolute inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="comet"></div>
      </div>
      <div className="mt-20 mb-12 relative  z-10">
        {children}
      </div>
    </div>
  );
};

export default SkyLayout;
