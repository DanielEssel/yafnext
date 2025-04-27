export default function Testimonies() {
    const testimonies = [
      {
        name: 'John Doe',
        testimony: 'My life has been transformed through the teachings and community at Evangelical Youth Mission.',
        location: 'Accra, Ghana',
      },
      {
        name: 'Jane Smith',
        testimony: 'The youth fellowship has helped me grow spiritually and find purpose in life.',
        location: 'London, UK',
      },
    ];
  
    return (
      <section className="py-16 bg-blue-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">What People Are Saying</h2>
          <div className="space-y-8">
            {testimonies.map((testimony, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 italic">&quot;{testimony.testimony}&quot;</p>
                <p className="mt-4 font-semibold text-gray-900">{testimony.name}</p>
                <p className="text-gray-500">{testimony.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  