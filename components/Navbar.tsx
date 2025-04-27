"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side: Logo and Name */}
          <div className="flex-shrink-0 flex items-center">
            <Image
              className="h-8 w-auto mr-2"
              src="/logos/logo.svg"
              alt="Logo"
              width={40}
              height={40}
            />

            <span className="font-bold text-lg tracking-wide">YAFCA</span>
          </div>

          {/* Center: Nav Links (Desktop only) */}
          <div className="hidden md:flex space-x-4 ">
            <Link href="/" className="hover:text-blue-400 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-400 transition">
              About
            </Link>
            <Link href="/ministries" className="hover:text-blue-400 transition">
              Ministries
            </Link>
            <Link href="/events" className="hover:text-blue-400 transition">
              Events
            </Link>
            <Link href="/blog" className="hover:text-blue-400 transition">
              Blog
            </Link>
            <Link href="/connect" className="hover:text-blue-400 transition">
              Connect
            </Link>
          </div>

          {/* Right side: Donate + Sign In/Sign Up */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/donate"
              className="px-4 py-2 m-20 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold rounded transition"
            >
              Donate Now
            </Link>
            <Link
              href="/signin"
              className="px-4 py-2 border border-white rounded hover:bg-blue-700 transition"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-blue-800">
          <Link href="/" className="block hover:text-blue-300">
            Home
          </Link>
          <Link href="/about" className="block hover:text-blue-300">
            About
          </Link>
          <Link href="/ministries" className="block hover:text-blue-300">
            Ministries
          </Link>
          <Link href="/events" className="block hover:text-blue-300">
            Events
          </Link>
          <Link href="/blog" className="block hover:text-blue-300">
            Blog
          </Link>
          <Link href="/connect" className="block hover:text-blue-300">
            Connect
          </Link>

          <div className="flex flex-col space-y-2 pt-2">
            <Link
              href="/donate"
              className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold rounded text-center"
            >
              Donate Now
            </Link>
            <Link
              href="/signin"
              className="px-4 py-2 border border-white rounded hover:bg-blue-700 text-center"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
