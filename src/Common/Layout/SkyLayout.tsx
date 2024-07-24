import React from 'react';

const SkyLayout = ({ children }:any) => {
  return (
    <div className="main-container">
      <div className="sub-container">
        <div className="sky">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
          <div className="comet"></div>
        </div>
        {children} 
      </div>
    </div>
  );
};


export default SkyLayout;
