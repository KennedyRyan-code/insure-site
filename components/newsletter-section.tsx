"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Newsletter subscription:", { email })
    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="bg-gradient-to-br from-lime-300 to-lime-200 py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Stay Informed: Subscribe to Our Newsletter</h2>
        <p className="text-gray-700 mb-8">
          Get the latest insurance tips, updates, and exclusive offers delivered to your inbox.
        </p>

        {submitted ? (
          <div className="bg-green-100 border border-green-400 text-green-800 px-6 py-3 rounded-lg inline-block">
            Thank you for subscribing! Check your email for confirmation.
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-gray-900 outline-none"
            />
            <Button
              type="submit"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 font-semibold"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
