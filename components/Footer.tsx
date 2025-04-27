import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-blue-400 transition">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-400 transition">About</a>
              </li>
              <li>
                <a href="/ministries" className="hover:text-blue-400 transition">Ministries</a>
              </li>
              <li>
                <a href="/events" className="hover:text-blue-400 transition">Events</a>
              </li>
              <li>
                <a href="/blog" className="hover:text-blue-400 transition">Blog</a>
              </li>
              <li>
                <a href="/connect" className="hover:text-blue-400 transition">Connect</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <span className="block">Email: <a href="mailto:info@evangelicalyouth.org" className="text-blue-400 hover:text-blue-300">info@evangelicalyouth.org</a></span>
              </li>
              <li>
                <span className="block">Phone: <a href="tel:+1234567890" className="text-blue-400 hover:text-blue-300">+1 (234) 567-890</a></span>
              </li>
              <li>
                <span className="block">Address: 123 Mission Street, Accra, Ghana</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" className="text-blue-400 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" className="text-blue-400 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} />
              </a>
              <a href="https://twitter.com" className="text-blue-400 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                <Twitter size={24} />
              </a>
              <a href="https://linkedin.com" className="text-blue-400 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
          <p className="text-gray-300 mb-4">Subscribe to our newsletter to get the latest updates and inspirational messages delivered straight to your inbox.</p>
          <div className="flex justify-center items-center space-x-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="py-2 border border-amber-50 px-4 rounded-md text-white w-64"
            />
            <button className="bg-blue-500 hover:bg-blue-600 border text-white px-6 py-2 rounded-full transition duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center border-t border-blue-700 pt-6">
          <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} YAFCA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
