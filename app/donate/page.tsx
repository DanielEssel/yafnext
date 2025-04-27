"use client";

import BackArrow from "@/components/BackArrow";
import { useState } from "react";

export default function DonatePage() {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can connect to payment gateway here later
    alert(`Thank you for donating ₵${amount}!`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      {/* Hero */}
      <BackArrow />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Support Our Mission</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Your donation helps us reach more lives with the message of hope and love.
        </p>
      </div>

      {/* Donation Form */}
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6">Make a Donation</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name (Optional)</label>
            <input
              type="text"
              className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-blue-300"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
            <input
              type="email"
              className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-blue-300"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Donation Amount (GHS)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-blue-300"
              placeholder="Enter amount"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
            <select className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-blue-300">
              <option value="momo">Mobile Money</option>
              <option value="bank">Bank Transfer</option>
              <option value="paypal">PayPal</option>
              <option value="card">Credit/Debit Card</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
            <textarea
              className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-blue-300"
              placeholder="Write a message..."
              rows={3}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md text-lg font-semibold transition duration-300"
          >
            Donate Now
          </button>
        </form>
      </div>
    </div>
  );
}
