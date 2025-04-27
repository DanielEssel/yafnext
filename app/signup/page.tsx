"use client";

export default function SignUp() {
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

      {/* Sign Up Card */}
      <div className="relative z-10 flex bg-white w-full sm:w-[800px] p-8 rounded-lg shadow-lg overflow-hidden max-h-[85vh]">
        {/* Left Side (Text Section) */}
        <div className="w-1/2 flex flex-col justify-center text-black p-6">
          <h2 className="text-4xl font-semibold mb-4">Join YAFCA Today!</h2>
          <p className="text-lg">
            We&apos;re excited to have you as part of our growing community. Start your journey with us by creating an account today.
          </p>
        </div>

        {/* Right Side (Sign Up Form) */}
        <div className="w-1/2 flex flex-col justify-center p-6 ">
          {/* Logo */}
          <div className="text-center mb-6">
            <img className="h-12 mx-auto" src="/logos/logo.svg" alt="Logo" />
            <h2 className="text-3xl font-semibold text-blue-900 mt-4">
              Create Your Account
            </h2>
          </div>

          {/* Sign Up Form */}
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

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirm your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg transition-all duration-300"
            >
              Sign Up
            </button>
          </form>

          {/* Sign In Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
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
