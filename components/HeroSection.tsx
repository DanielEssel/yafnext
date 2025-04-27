"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const images = ["/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg"]; // Add images inside /public/images/

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length); // Rotate images every 5 seconds
    }, 5000);
    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-white">
      {/* Background Image Slider with fade effect */}
      <div className="absolute inset-0 transition-all duration-1000 opacity-100">
        <Image
          src={images[current]}
          alt="Hero Background"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-60 transition-all duration-1000 ease-in-out"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-blue-900/40"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 sm:px-10"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-white text-3xl sm:text-5xl font-bold mb-6 leading-tight drop-shadow-lg"
        >
          Hello, beloved followers of Christ Jesus!
        </motion.h1>

        <p className="text-blue-200 text-base sm:text-lg max-w-2xl mx-auto mb-10 drop-shadow-md">
          Welcome to the House of Jesus — where lives are transformed, burdens
          are lifted, and the Word of the Lord is preached with power,
          delivering and saving many souls.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
          {/* Join Us Button */}
          <Link href="/joinusform" passHref>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 cursor-pointer w-full sm:w-auto"
            >
              Join Us
            </motion.div>
          </Link>

          {/* Request A Prayer Button */}
          <Link href="/prayerrequest" passHref>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 cursor-pointer w-full sm:w-auto"
            >
              Request A Prayer
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
