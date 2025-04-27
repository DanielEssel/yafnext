"use client";

import { useState } from "react";
import BackArrow from "@/components/BackArrow";

export default function DonatePage() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("momo");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thank you for donating ₵${amount}!`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-white px-4 py-8">
      {/* Background and Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/authback.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
      </div>

      {/* Main Donate Card */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Back Arrow */}
        <div className="absolute top-4 left-4">
          <BackArrow />
        </div>

        {/* Header with Gradient */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-center">
          <h1 className="text-2xl font-bold text-white">Support Our Mission</h1>
          <p className="text-blue-100 text-sm mt-2">
            Your generosity helps us spread hope and love to those in need
          </p>
        </div>

        {/* Donation Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Name (Optional)</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Email (Optional)</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Donation Amount (GHS)</label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500">₵</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="0.00"
                required
                min="1"
              />
            </div>
            <div className="flex justify-between mt-2">
              {[10, 20, 50, 100].map((value) => (
                <button
                  type="button"
                  key={value}
                  onClick={() => setAmount(value.toString())}
                  className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-600 px-2 py-1 rounded"
                >
                  ₵{value}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            >
              <option value="momo">Mobile Money</option>
              <option value="bank">Bank Transfer</option>
              <option value="paypal">PayPal</option>
              <option value="card">Credit/Debit Card</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Message (Optional)</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="Your message of encouragement..."
              rows={3}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2.5 rounded-md font-medium text-sm transition-all duration-200 shadow-md"
          >
            Donate Now
          </button>
        </form>

        {/* Security Note */}
        <div className="px-6 pb-6">
          <p className="text-xs text-gray-500 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            All donations are securely processed
          </p>
        </div>
      </div>
    </div>
  );
}