"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20" id="about">
      <div className="max-w-7xl mx-auto text-center">
        {/* Small heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-blue-600 font-bold text-sm uppercase mb-4 tracking-widest"
        >
          About Us
        </motion.h2>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900 mb-6 leading-tight"
        >
          Transforming Lives Through the Power of Jesus Christ
        </motion.h1>

        {/* Mission and Vision */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-700 text-left"
        >
          {/* Mission */}
          <div>
            <h3 className="text-xl font-bold text-blue-800 mb-4">Our Mission</h3>
            <p className="leading-relaxed">
              To preach the Gospel of Jesus Christ to all nations, nurture the spiritual growth of believers,
              and empower the youth to boldly live out their faith, bringing transformation to communities worldwide.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-xl font-bold text-blue-800 mb-4">Our Vision</h3>
            <p className="leading-relaxed">
              To see a generation on fire for God — a global family of believers rooted in truth,
              impacting every sphere of society with love, hope, and the Word of God.
            </p>
          </div>
        </motion.div>

        {/* Read More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-8"
        >
          <Link
            href="/about"
            className="inline-block py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md transition-all duration-300"
          >
            Read More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
