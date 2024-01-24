import React from 'react';

interface CustomProgressBarProps {
  value: number;
  max: number;
  className?: string;
  barColor?: string;
  borderRadius?: number;
  height?: number;
}

const ProgressBar: React.FC<CustomProgressBarProps> = ({
  value,
  max,
  className = '',
  barColor = '',
  borderRadius = 4,
  height = 10,
}) => {
  const progressStyle = {
    width: `${(value / max) * 100}%`,
    backgroundColor: barColor,
    borderRadius: `${borderRadius}px`,
    height: `${height}px`,
  };

  return (
    <div className={`relative rounded-md overflow-hidden ${className}`}>
      <div className={`h-full ${barColor}`} style={progressStyle}></div>
    </div>
  );
};

export default ProgressBar;
