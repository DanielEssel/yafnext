export default function EventsSection() {
  const events = [
    {
      title: 'Youth Fellowship - May 2025',
      date: 'May 12, 2025',
      description: 'Join us for a night of fellowship, worship, and spiritual growth.',
      link: '/events/youth-fellowship',
    },
    {
      title: 'Missionary Outreach Program',
      date: 'June 6, 2025',
      description: 'Help us reach the unreached in rural areas. Volunteer for this noble cause.',
      link: '/events/missionary-outreach',
    },
  ];

  return (
    <section className="py-16 bg-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-500">{event.date}</p>
              <p className="mt-4 text-gray-700">{event.description}</p>
              <a
                href={event.link}
                className="mt-4 inline-block text-blue-600 font-semibold hover:text-blue-500"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
