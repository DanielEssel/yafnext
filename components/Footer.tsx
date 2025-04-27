"use client";

import Link from "next/link";
import { Facebook, InstagramIcon, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400 transition">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition">About</Link>
              </li>
              <li>
                <Link href="/ministries" className="hover:text-blue-400 transition">Ministries</Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-blue-400 transition">Events</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition">Blog</Link>
              </li>
              <li>
                <Link href="/connect" className="hover:text-blue-400 transition">Connect</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <span className="block">
                  Email: <a href="mailto:info@evangelicalyouth.org" className="text-blue-400 hover:text-blue-300">info@yafca.org</a>
                </span>
              </li>
              <li>
                <span className="block">
                  Phone: <a href="tel:+1234567890" className="text-blue-400 hover:text-blue-300">(+233) 567-43-8905</a>
                </span>
              </li>
              <li>
                <span className="block">
                  Address: 123 Mission Street, Accra, Ghana
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <Link href="https://facebook.com" className="text-blue-400 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                <Facebook size={24} />
              </Link>
              <Link href="https://instagram.com" className="text-blue-400 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                <InstagramIcon size={24} />
              </Link>
              <Link href="https://twitter.com" className="text-blue-400 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                <Twitter size={24} />
              </Link>
              <Link href="https://linkedin.com" className="text-blue-400 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
          <p className="text-gray-300 mb-4">
            Subscribe to our newsletter to get the latest updates and inspirational messages delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-x-0 sm:space-x-4 gap-4 sm:gap-0">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="py-2 border border-amber-50 px-4 rounded-md text-white w-64 bg-transparent placeholder-gray-400"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center border-t border-blue-700 pt-6">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} YAFCA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
