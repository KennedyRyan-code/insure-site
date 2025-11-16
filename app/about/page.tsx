"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-12 font-semibold">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Insure</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            At Insure, we believe that everyone deserves access to comprehensive, affordable insurance coverage. Founded
            in 2010, we've been committed to simplifying the insurance process and helping families and businesses protect
            what matters most.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Mission</h2>
          <p>
            To provide transparent, customer-centric insurance solutions that empower people to make informed decisions
            about their protection needs.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Industry-leading customer service</li>
            <li>Competitive pricing and flexible payment options</li>
            <li>Comprehensive coverage options</li>
            <li>Easy claims process</li>
            <li>24/7 support availability</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Track Record</h2>
          <p>
            Over 3.6 million customers trust Insure with their insurance needs. We've maintained a 4.8-star customer
            rating and have successfully processed over 500,000 claims annually.
          </p>
        </div>

        <div className="mt-12 bg-lime-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Protected?</h2>
          <Link href="/auth/signup">
            <Button className="bg-lime-500 hover:bg-lime-600 text-gray-900 px-8 py-3 font-semibold">
              Get Started Today
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
