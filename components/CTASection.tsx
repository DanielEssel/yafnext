export default function CTASection() {
  return (
    <section className="py-16 bg-gray-700 text-white text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Get Involved Today!
        </h2>
        <p className="mb-8 text-base sm:text-lg">
          Your support and participation can make a difference in many lives.
          Join us in spreading the Word and changing the world.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          <a
            href="/connect"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 w-full sm:w-auto"
          >
            Join Us
          </a>
          <a
            href="/donate"
            className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 w-full sm:w-auto"
          >
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );
}
