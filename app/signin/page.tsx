"use client";

export default function SignIn() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative">
      {/* Main Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/authback.jpg')", // Replace with your background image
        }}
      >
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
      </div>

      {/* Sign In Card */}
      <div className="relative z-10 flex bg-white w-full sm:w-[800px] p-8 rounded-lg shadow-lg overflow-hidden">
        {/* Left Side (Text Section) */}
        <div className="w-1/2 flex flex-col justify-center text-black p-6">
          <h2 className="text-4xl font-semibold mb-4">Welcome to YAFCA!</h2>
          <p className="text-lg">
            We’re thrilled to have you here. Sign in now to get started and be part of our amazing community!
          </p>
        </div>

        {/* Right Side (Sign In Form) */}
        <div className="w-1/2 flex flex-col justify-center p-6">
          {/* Logo */}
          <div className="text-center mb-6">
            <img className="h-12 mx-auto" src="/logos/logo.svg" alt="Logo" />
            <h2 className="text-3xl font-semibold text-blue-900 mt-4">
              Sign In to Your Account
            </h2>
          </div>

          {/* Sign In Form */}
          <form className="space-y-4">
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
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg transition-all duration-300"
            >
              Sign In
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
