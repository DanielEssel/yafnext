"use client";

import Image from "next/image";

export default function JoinUs() {
  return (
    <div className="min-h-screen flex items-center justify-center relative bg-white px-4 py-8">
      {/* Main Background Image and Blue Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
      </div>

      {/* Join Us Card - More compact and centered */}
      <div className="relative z-10 w-full max-w-md md:max-w-2xl bg-white rounded-xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left Side (Text and Inspiration) */}
        <div className="w-full lg:w-1/2 bg-blue-50 p-6 md:p-8">
          <div className="flex items-center mb-4">
            <Image 
              className="h-8 w-8 mr-2"
              src="/logos/logo.svg"
              alt="Logo"
              width={32}
              height={32}
            />
            <h1 className="text-xl font-bold text-blue-800">Join Our Community</h1>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-xs text-gray-700 italic">
                "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit."
              </p>
              <p className="text-xs text-blue-600 mt-1">– Matthew 28:19</p>
            </div>

            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-xs text-gray-700 italic">
                "For where two or three are gathered in my name, there am I with them."
              </p>
              <p className="text-xs text-blue-600 mt-1">– Matthew 18:20</p>
            </div>

            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-xs text-gray-700 italic">
                "And let us consider how we may spur one another on toward love and good deeds"
              </p>
              <p className="text-xs text-blue-600 mt-1">– Hebrews 10:24</p>
            </div>
          </div>
        </div>

        {/* Right Side (Join Us Form) */}
        <div className="w-full lg:w-1/2 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Account</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Why Join Us?</label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="Share your motivation..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-md font-medium text-sm transition-colors duration-200 shadow-md"
            >
              Join Now
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Already have an account?{" "}
              <a href="/signin" className="text-blue-600 hover:underline font-medium">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}