import { Heart, Shield, Zap, Home } from "lucide-react"

export default function InsuranceCategories() {
  const categories = [
    {
      title: "Life Insurance",
      description: "Comprehensive life coverage for you and your loved ones",
      icon: Heart,
      color: "bg-lime-50 border-2 border-lime-200",
      iconColor: "text-lime-600",
    },
    {
      title: "Health Insurance",
      description: "Complete health coverage with preventive care",
      icon: Shield,
      color: "bg-teal-50 border-2 border-teal-200",
      iconColor: "text-teal-600",
    },
    {
      title: "Car Insurance",
      description: "Protection on the road with comprehensive coverage",
      icon: Zap,
      color: "bg-lime-50 border-2 border-lime-200",
      iconColor: "text-lime-600",
    },
    {
      title: "Home Insurance",
      description: "Safeguard your home and belongings",
      icon: Home,
      color: "bg-teal-50 border-2 border-teal-200",
      iconColor: "text-teal-600",
    },
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Discover Our Insurance Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of insurance products designed to meet your specific needs and provide peace of
            mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className={`${category.color} rounded-2xl p-8 text-center transition-transform hover:scale-105`}
              >
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 rounded-full bg-white flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 ${category.iconColor}`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{category.description}</p>
                <button className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center mx-auto hover:bg-gray-800 transition">
                  →
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
