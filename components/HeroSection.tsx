"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const images = ["/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg"]; // Add 3+ images inside /public/images/

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center bg-white">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        <Image
          src="/images/backimg.jpg" // Default image
          alt="Hero Background"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-60 transition-all duration-1000"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-blue-900/50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-white text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg"
        >
          Hello, beloved followers of Christ Jesus!
        </motion.h1>

        <p className="text-blue-200 text-lg md:text-2xl max-w-3xl mx-auto mb-8 drop-shadow-md">
          Welcome to the "House of Jesus" — where lives are transformed, burdens
          are lifted, and the Word of the Lord is preached with power,
          delivering and saving many souls.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {/* Join Us Button */}
          <Link href="/joinusform">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/connect"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 w-52 text-center rounded-full shadow-lg transition-all duration-300"
            >
              Join Us
            </motion.a>
          </Link>

          {/* Request A Prayer Button */}
          <Link href="/joinusform">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/connect"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 w-52 text-center rounded-full shadow-lg transition-all duration-300"
            >
              Request A Prayer
            </motion.a>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
