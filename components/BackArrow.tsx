"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const BackArrow = () => {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="absolute top-4 left-4 p-2 cursor-pointer bg-white rounded-full shadow-md"
      onClick={() => router.back()} // This will go back to the previous page
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 text-blue-900"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </motion.div>
  );
};

export default BackArrow;
