"use client";

import { useState } from "react";
import Image from "next/image";
import BackArrow from "@/components/BackArrow"; 
import { motion } from "framer-motion";

export default function About() {
  const [activeCategory, setActiveCategory] = useState("mission");

  const content = {
    mission: {
      title: "Our Mission",
      text: "Our mission is to inspire positive change by providing support and empowering individuals and communities to reach their full potential. We believe in fostering unity, growth, and compassion through our work and community-driven initiatives."
    },
    vision: {
      title: "Our Vision",
      text: "Our vision is to create a world where every individual has access to opportunities for growth, empowerment, and transformation. We are committed to building lasting relationships and impacting lives for the better."
    },
    story: {
      title: "Our Story",
      text: "We started with a simple vision: to make a difference in the lives of those who need it most. Over the years, our efforts have expanded to a wide range of projects and initiatives, all aimed at empowering individuals, building communities, and fostering lasting change."
    },
    coreValues: {
      title: "Our Core Values",
      text: (
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mx-auto text-left">
          <li><b>Integrity:</b> We uphold the highest standards of honesty and transparency.</li>
          <li><b>Compassion:</b> We support and care for others with empathy and understanding.</li>
          <li><b>Empowerment:</b> We provide communities with tools they need to thrive.</li>
          <li><b>Collaboration:</b> We believe working together is key to lasting change.</li>
          <li><b>Innovation:</b> We embrace creative solutions for today's challenges.</li>
        </ul>
      ),
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Arrow */}
      <BackArrow />

      {/* Founder Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Meet Our Founder</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our founder is a visionary leader who started this organization with a passion for change. 
              With a background in [insert background], they have dedicated their life to making a difference. 
              Under their guidance, we continue to grow and impact lives every day.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 flex justify-center"
          >
            <Image
              src="/images/founder.jpg"
              alt="Founder"
              width={400}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-10 bg-blue-900 text-white">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-4">
          {["mission", "vision", "story", "coreValues"].map((key) => (
            <button
              key={key}
              className={`py-2 px-6 rounded-full font-medium transition-all duration-300 ${
                activeCategory === key ? "bg-blue-500" : "bg-blue-700 hover:bg-blue-600"
              }`}
              onClick={() => setActiveCategory(key)}
            >
              {content[key as keyof typeof content].title}
            </button>
          ))}
        </div>
      </section>

      {/* Dynamic Content Section */}
      <section className="py-16 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 text-center max-w-4xl"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-6">{content[activeCategory].title}</h2>
          <div className="text-gray-700 text-lg leading-relaxed">
            {content[activeCategory].text}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-900 text-white">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6 text-center max-w-2xl"
        >
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg mb-8">
            Interested in learning more or getting involved? We'd love to hear from you!
          </p>
          <a
            href="mailto:info@yourorganization.com"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
    </div>
  );
}
