import { Star } from "lucide-react"
import Image from "next/image"

export default function CustomerStories() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Happy Customer",
      content:
        "The claims process was seamless and incredibly fast. I was impressed by how professionally everything was handled. Highly recommended!",
      avatar: "👩‍💼",
    },
    {
      name: "Michael Chen",
      role: "Verified Customer",
      content:
        "Outstanding customer service and competitive rates. They really listened to my needs and found the perfect plan for my family.",
      avatar: "👨‍💼",
    },
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Customer Stories: Real Experiences, Real Satisfaction
          </h2>
          <p className="text-gray-600">Join thousands of satisfied customers who trust us for their insurance needs</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Customer Image */}
          <div className="relative h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
            <Image src="/customer-story_section.png" alt="Description" layout="fill" objectFit="cover"/>
          </div>

          {/* Right - Testimonials */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime-400 to-teal-400 flex items-center justify-center text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
