"use client";

import Image from "next/image";

export default function SignIn() {
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

      {/* Sign In Card */}
      <div className="relative z-10 w-[90%] max-w-md bg-white bg-opacity-95 p-8 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center">
        {/* Logo and Heading */}
        <div className="mb-6">
          <Image src="/logos/logo.svg" alt="Logo" width={60} height={60} className="mx-auto mb-3" />
          <h2 className="text-3xl font-extrabold text-blue-900">Welcome Back</h2>
          <p className="text-gray-600 text-sm mt-2">Sign in to your YAFCA account</p>
        </div>

        {/* Sign In Form */}
        <form className="w-full space-y-5">
          <div className="text-left">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="text-left">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold transition-all duration-300 shadow-md"
          >
            Sign In
          </button>
        </form>

        {/* Links */}
        <div className="mt-6 space-y-2">
          <p className="text-sm text-gray-600">
            Forgot your password?{" "}
            <a href="/forgot-password" className="text-blue-500 hover:underline">
              Reset here
            </a>
          </p>
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
