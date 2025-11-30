

export default function TrustBadges() {
  const badges = [
    { name: "Britam", icon: "image" },
    { name: "Jubilee", icon: "image" },
    { name: "Madison", icon: "image" },
    { name: "Alliance", icon: "image" },
  ]

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 text-sm font-medium mb-8">We are trusted by</p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {badges.map((badge) => (
            <div key={badge.name} className="flex items-center gap-2 text-gray-600">
              <span className="text-2xl">{badge.icon}</span>
              <span className="text-sm font-medium hidden sm:inline">{badge.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
