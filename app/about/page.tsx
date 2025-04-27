"use client";

import { useState } from "react";
import Image from "next/image";
import BackArrow from "@/components/BackArrow"; // Import the BackArrowButton component

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
        <ul className="list-none text-lg text-gray-700 space-y-4 mx-auto">
          <li>Integrity: We uphold the highest standards of honesty and transparency in all our work.</li>
          <li>Compassion: We are committed to supporting and caring for others with empathy and understanding.</li>
          <li>Empowerment: We focus on providing individuals and communities with the tools and support they need to thrive.</li>
          <li>Collaboration: We believe that working together with others is the key to making lasting change.</li>
          <li>Innovation: We embrace creative solutions to solve the challenges facing our communities.</li>
        </ul>
      ),
    }
  };

  // Function to scroll to top
  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Arrow Button */}
      <BackArrow />

      {/* Founder Section */}
      <div className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-semibold text-blue-900 mb-6">Meet Our Founder</h2>
        <div className="flex justify-center items-center space-x-6">
          <Image
            src="/images/founder.jpg" // Replace with the founder's image
            alt="Founder"
            width={400}
            height={400}
            className="rounded-lg "
          />
          <div className="max-w-lg">
            <p className="text-lg text-blue-950 align-left mb-4">
              Our founder is a visionary leader who started this organization with a passion for change. With a background in [insert background], they have dedicated their life to making a difference. Under their guidance, we continue to grow and impact lives every day.
            </p>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="py-8 bg-blue-900 text-white text-center">
        <div className="flex justify-center space-x-6">
          <button
            className={`py-2 px-4 rounded-lg ${activeCategory === 'mission' ? 'bg-blue-500' : 'hover:bg-blue-700'}`}
            onClick={() => setActiveCategory('mission')}
          >
            Mission
          </button>
          <button
            className={`py-2 px-4 rounded-lg ${activeCategory === 'vision' ? 'bg-blue-500' : 'hover:bg-blue-700'}`}
            onClick={() => setActiveCategory('vision')}
          >
            Vision
          </button>
          <button
            className={`py-2 px-4 rounded-lg ${activeCategory === 'story' ? 'bg-blue-500' : 'hover:bg-blue-700'}`}
            onClick={() => setActiveCategory('story')}
          >
            Our Story
          </button>
          <button
            className={`py-2 px-4 rounded-lg ${activeCategory === 'coreValues' ? 'bg-blue-500' : 'hover:bg-blue-700'}`}
            onClick={() => setActiveCategory('coreValues')}
          >
            Core Values
          </button>
        </div>
      </div>

      {/* Dynamic Content Section */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-blue-900 mb-6">{content[activeCategory].title}</h2>
          <p className="text-lg text-gray-700 mb-4">
            {content[activeCategory].text}
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 px-6 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Get In Touch</h2>
          <p className="text-lg mb-4">
            If you’re interested in learning more about our work or getting involved, please don’t hesitate
            to reach out. We would love to hear from you.
          </p>
          <a
            href="mailto:info@yourorganization.com"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
