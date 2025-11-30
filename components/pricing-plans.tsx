"use client"

import Link from "next/link"
import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function PricingPlans() {
  const plans = [
    {
      price: 24,
      name: "Basic Plan",
      description: "Perfect for individuals",
      features: ["Basic coverage", "Online support", "Mobile app access", "Annual reviews"],
      bgColor: "bg-white border-2 border-gray-200",
      buttonColor: "bg-gray-900 hover:bg-gray-800",
      highlighted: false,
    },
    {
      price: 60,
      name: "Premium Plan",
      description: "Most popular choice",
      features: [
        "Comprehensive coverage",
        "24/7 priority support",
        "Mobile app access",
        "Monthly reviews",
        "Accident protection",
        "Family coverage",
      ],
      bgColor: "bg-gray-900 text-white border-2 border-lime-400",
      buttonColor: "bg-lime-400 hover:bg-lime-500 text-gray-900",
      highlighted: true,
    },
    {
      price: 70,
      name: "Elite Plan",
      description: "Maximum protection",
      features: [
        "Full coverage",
        "Dedicated agent",
        "Mobile app access",
        "Weekly reviews",
        "Premium support",
        "Family coverage",
      ],
      bgColor: "bg-white border-2 border-gray-200",
      buttonColor: "bg-gray-900 hover:bg-gray-800",
      highlighted: false,
    },
  ]

  return (
    <section className="bg-gradient-to-br from-lime-300 via-lime-200 to-lime-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Ideal Plan</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Select the perfect insurance plan that matches your needs and budget. All plans include our satisfaction
            guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-end">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${plan.bgColor} rounded-3xl p-8 relative transition-transform hover:scale-105`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-lime-500 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">POPULAR</span>
                </div>
              )}

              <div className="mb-6">
                <div className="text-5xl font-bold mb-2">
                  ${plan.price}
                  <span className="text-xl text-gray-600 font-normal">/month</span>
                </div>
                <h3 className={plan.highlighted ? "text-white text-xl font-bold" : "text-gray-900 text-xl font-bold"}>
                  {plan.name}
                </h3>
                <p className={plan.highlighted ? "text-gray-300 text-sm" : "text-gray-600 text-sm"}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.highlighted ? "text-lime-400" : "text-lime-600"}`} />
                    <span className={plan.highlighted ? "text-gray-200 text-sm" : "text-gray-700 text-sm"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href="/auth/signup" className="block">
                <Button className={`w-full ${plan.buttonColor} py-3 font-semibold`}>Get Started</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
