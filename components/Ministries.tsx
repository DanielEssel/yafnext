"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ministriesData = [
  {
    name: "Youth Ministry",
    description: "Empowering young people to embrace their faith and make an impact in their communities.",
    link: "/ministries/youth",
    image: "/images/ymin.jpg",
  },
  {
    name: "Evangelism Ministry",
    description: "Spreading the Good News of Jesus Christ to every corner of the globe.",
    link: "/ministries/evangelism",
    image: "/images/mmin.jpg",
  },
  {
    name: "Worship Ministry",
    description: "Leading people into the presence of God through heartfelt worship and praise.",
    link: "/ministries/worship",
    image: "/images/wmin.jpg",
  },
  {
    name: "Missionary Ministry",
    description: "Equipping missionaries to go out into the world and serve where they are most needed.",
    link: "/ministries/missionary",
    image: "/images/emin.jpg",
  },
];

const Ministries = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20" id="ministries">
      <div className="max-w-7xl mx-auto text-center">
        {/* Small heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-blue-600 font-bold text-sm uppercase mb-4 tracking-widest"
        >
          Our Ministries
        </motion.h2>

        {/* Main heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 leading-tight"
        >
          Empowering the Body of Christ Through Our Ministries
        </motion.h1>

        {/* Ministries grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10"
        >
          {ministriesData.map((ministry, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image with responsive aspect ratio */}
              <div className="relative w-full h-40">
                <Image 
                  src={ministry.image} 
                  alt={ministry.name} 
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-t-lg"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">{ministry.name}</h3>
                <p className="text-gray-600 mb-4">{ministry.description}</p>
                <Link 
                  href={ministry.link} 
                  className="inline-block py-2 px-6 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Ministries;
