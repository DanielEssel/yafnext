"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Testimonies() {
  const testimonies = [
    {
      name: "John Doe",
      testimony:
        "My life has been transformed through the teachings and community at Evangelical Youth Mission.",
      location: "Accra, Ghana",
      image: "/images/John.jpg", // Add your image paths here
    },
    {
      name: "Jane Smith",
      testimony:
        "The youth fellowship has helped me grow spiritually and find purpose in life.",
      location: "London, UK",
      image: "/images/Ama.jpg",
    },
  ];

  return (
    <section className="py-16 bg-blue-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">What People Are Saying</h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {testimonies.map((testimony, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white flex flex-col justify-between items-center p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              {/* Avatar */}
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden">
                <Image
                  src={testimony.image}
                  alt={testimony.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Testimony Text */}
              <p className="text-gray-700 italic mb-4">
                &quot;{testimony.testimony}&quot;
              </p>

              {/* Name and Location */}
              <div className="text-center">
                <p className="mt-4 font-semibold text-gray-900">{testimony.name}</p>
                <p className="text-gray-500 text-sm">{testimony.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
