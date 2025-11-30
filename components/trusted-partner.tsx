"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function TrustedPartner() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Free consultation request:", formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Your Trusted Partner For Comprehensive</h2>
          <p className="text-xl text-gray-300">Insurance Solutions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative h-11/12 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
            <Image src="/insurance_trusted_section.png" alt="Familypic" layout="fill" objectFit="cover"/>
          </div>

          {/* Right - Form */}
          <div>
            <div className="bg-lime-400 text-gray-900 rounded-2xl p-6 mb-6">
              <h3 className="font-bold text-lg mb-2">✓ Full Coverage</h3>
              <p className="text-sm">
                Comprehensive protection that covers all your insurance needs with transparent pricing and no hidden
                fees.
              </p>
            </div>

            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-800 px-6 py-4 rounded-lg">
                Thank you! We'll contact you soon to discuss your consultation.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white rounded-lg text-gray-900 focus:ring-2 focus:ring-lime-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white rounded-lg text-gray-900 focus:ring-2 focus:ring-lime-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 bg-white rounded-lg text-gray-900 focus:ring-2 focus:ring-lime-400 outline-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold py-3"
                >
                  Get Free Consultation
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
