"use client";

import Image from "next/image";

export default function JoinUs() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative">
      {/* Main Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/background.jpg')", // Replace with your background image
        }}
      >
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
      </div>

      {/* Join Us Card */}
      <div className="relative z-10 flex w-full sm:w-[800px] p-8 rounded-lg shadow-lg overflow-hidden max-h-[85vh]">
        {/* Left Side (Scripture Section) */}
        <div className="w-1/2 flex flex-col justify-center text-white p-6">
          <h2 className="text-4xl font-semibold mb-6">Inspiration to Join</h2>
          <p className="text-lg mb-4">
          &quot;Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.&quot; – Matthew 28:19
          </p>
          <p className="text-lg mb-4">
          &quot;For where two or three are gathered in my name, there am I with them.&quot; – Matthew 18:20
          </p>
          <p className="text-lg mb-4">
          &quot;And let us consider how we may spur one another on toward love and good deeds&quot; – Hebrews 10:24
          </p>
          <p className="text-lg mb-4">
          &quot;But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.&quot; – Galatians 5:22-23
          </p>
        </div>

        {/* Right Side (Join Us Form) */}
        <div className="w-1/2 flex flex-col justify-center p-6 overflow-auto">
            <Image className="h-12 mx-auto" src="/logos/logo.svg" alt="Logo" width={48} height={48} priority />
            <div className="text-center mb-6">
            <Image className="h-12 mx-auto" src="/logos/logo.svg" alt="Logo" width={48} height={48} />
            <h2 className="text-3xl font-semibold text-blue-900 mt-4">
              Join Us Today
            </h2>
            </div>

          {/* Join Us Form */}
          <form className="space-y-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label
                htmlFor="reason"
                className="block text-sm font-medium text-gray-700"
              >
                Why Do You Want to Join?
              </label>
              <textarea
                id="reason"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tell us why you want to be part of this community"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg transition-all duration-300"
            >
              Join Us
            </button>
          </form>

          {/* Sign In Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already a member?{" "}
              <a href="/signin" className="text-blue-500 hover:underline">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
