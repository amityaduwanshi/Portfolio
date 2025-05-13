import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Base square */}
      <rect
        x="4"
        y="4"
        width="32"
        height="32"
        rx="4"
        className="stroke-primary-600 dark:stroke-primary-400"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Inner structure */}
      <path
        d="M12 12 L28 12 M12 20 L28 20 M12 28 L28 28"
        className="stroke-primary-600 dark:stroke-primary-400"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Connection points */}
      <circle
        cx="12"
        cy="12"
        r="2"
        className="fill-primary-600 dark:fill-primary-400"
      />
      <circle
        cx="28"
        cy="12"
        r="2"
        className="fill-primary-600 dark:fill-primary-400"
      />
      <circle
        cx="12"
        cy="20"
        r="2"
        className="fill-primary-600 dark:fill-primary-400"
      />
      <circle
        cx="28"
        cy="20"
        r="2"
        className="fill-primary-600 dark:fill-primary-400"
      />
      <circle
        cx="12"
        cy="28"
        r="2"
        className="fill-primary-600 dark:fill-primary-400"
      />
      <circle
        cx="28"
        cy="28"
        r="2"
        className="fill-primary-600 dark:fill-primary-400"
      />
    </svg>
  );
};

export default Logo; 