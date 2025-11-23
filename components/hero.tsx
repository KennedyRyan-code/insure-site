"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-lime-400 via-lime-300 to-lime-200 pt-12 pb-24 sm:pt-20 sm:pb-32 overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-20 -right-32 w-96 h-96 bg-lime-300 rounded-full opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Left column - Text */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Protect Today For A <span className="text-lime-700">Brighter Tomorrow</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Custom Insurance Plans tailored to your unique needs. Get comprehensive coverage with flexible payment
              options.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
              <span>👥 600,000+ customers trust us</span>
            </div>
          </div>

          {/* Right column - Image */}
          {/* <div className="relative h-96 hidden md:block">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              
              <div className="w-full h-full bg-gradient-to-br from-lime-200 to-lime-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍👩‍👧‍👦</div>
                  <p className="text-gray-600 font-medium">Family Protection</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Quote form */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Coverage Type</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-600 focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none">
                <option>Select coverage type...</option>
                <option>Life Insurance</option>
                <option>Health Insurance</option>
                <option>Car Insurance</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
          <Link href="/quote">
            <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 font-semibold rounded-lg">
              Get A Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
