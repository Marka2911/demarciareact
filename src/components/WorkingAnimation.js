import React from 'react';
import './WorkingAnimation.css';

const WorkingAnimation = () => {
  return (
    <div className="working-container">
      <div className="construction-site">
        <div className="builder">
          <div className="builder-head"></div>
          <div className="builder-body"></div>
          <div className="builder-arm left"></div>
          <div className="builder-arm right"></div>
          <div className="builder-leg left"></div>
          <div className="builder-leg right"></div>
        </div>
        <div className="tools">
          <div className="hammer"></div>
          <div className="screwdriver"></div>
          <div className="wrench"></div>
        </div>
        <div className="materials">
          <div className="brick"></div>
          <div className="brick"></div>
          <div className="brick"></div>
        </div>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default WorkingAnimation; 