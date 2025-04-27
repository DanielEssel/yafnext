"use client";

interface BackArrowProps {
  className?: string;
}

export default function BackArrow({ className = "" }: BackArrowProps) {
  return (
    <button 
      onClick={() => window.history.back()}
      className={`w-10 h-10 flex items-center justify-center ${className}`}
      aria-label="Go back"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
    </button>
  );
}