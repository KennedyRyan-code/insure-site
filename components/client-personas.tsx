export default function ClientPersonas() {
  const personas = [
    {
      title: "Young Professional",
      description: "Starting their career and building financial security",
      icon: "👨‍💼",
      bgColor: "bg-lime-50 border-2 border-lime-200",
    },
    {
      title: "Family Provider",
      description: "Protecting loved ones with comprehensive coverage",
      icon: "👨‍👩‍👧‍👦",
      bgColor: "bg-green-50 border-2 border-green-200",
    },
    {
      title: "Retiree",
      description: "Securing retirement with smart insurance planning",
      icon: "👴",
      bgColor: "bg-teal-50 border-2 border-teal-200",
    },
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Insurance For Clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're just starting out or planning for the future, we have the perfect insurance solution for
            every stage of life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <div
              key={persona.title}
              className={`${persona.bgColor} rounded-3xl p-8 text-center transition-transform hover:scale-105`}
            >
              <div className="text-7xl mb-4">{persona.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{persona.title}</h3>
              <p className="text-gray-600 mb-6">{persona.description}</p>
              <button className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition text-sm font-medium">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
