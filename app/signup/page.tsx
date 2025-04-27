"use client";

import Image from "next/image";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center relative bg-white overflow-hidden">
      {/* Background Image and Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/authback.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
      </div>

      {/* Sign Up Card */}
      <div className="relative z-10 w-[90%] max-w-md bg-white bg-opacity-95 p-6 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center">
        {/* Logo and Heading */}
        <div className="mb-4">
          <Image src="/logos/logo.svg" alt="Logo" width={50} height={50} className="mx-auto mb-2" />
          <h2 className="text-2xl font-extrabold text-blue-900">Create Account</h2>
          <p className="text-gray-600 text-xs mt-1">Join YAFCA and start your journey!</p>
        </div>

        {/* Sign Up Form */}
        <form className="w-full space-y-3">
          <div className="text-left">
            <label htmlFor="fullName" className="block text-xs font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
              placeholder="Full name"
              required
            />
          </div>

          <div className="text-left">
            <label htmlFor="email" className="block text-xs font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="text-left">
            <label htmlFor="password" className="block text-xs font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
              placeholder="Password"
              required
            />
          </div>

          <div className="text-left">
            <label htmlFor="confirmPassword" className="block text-xs font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
              placeholder="Confirm password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full font-semibold transition-all duration-300 shadow-md text-sm"
          >
            Sign Up
          </button>
        </form>

        {/* Sign In Link */}
        <div className="mt-4">
          <p className="text-xs text-gray-600">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-500 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
