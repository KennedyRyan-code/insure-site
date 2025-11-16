"use client"

import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

export default function ResourcesPage() {
  const resources = [
    {
      title: "Getting Started with Insurance",
      description: "Learn the basics of insurance coverage and how to choose the right plan for your needs.",
      category: "Guide",
    },
    {
      title: "Understanding Your Policy",
      description: "A comprehensive guide to reading and understanding your insurance policy documents.",
      category: "Guide",
    },
    {
      title: "Filing a Claim",
      description: "Step-by-step instructions on how to file and track your insurance claim.",
      category: "Tutorial",
    },
    {
      title: "Insurance Glossary",
      description: "Common insurance terms and definitions explained in simple language.",
      category: "Reference",
    },
    {
      title: "Budget Planning Tips",
      description: "How to plan your insurance budget and find coverage that fits your financial goals.",
      category: "Guide",
    },
    {
      title: "Frequently Asked Questions",
      description: "Answers to the most common questions about our insurance products and services.",
      category: "FAQ",
    },
  ]

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-12 font-semibold">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">Resources & Learning Center</h1>
        <p className="text-gray-600 text-lg mb-12">
          Explore our comprehensive collection of guides, tutorials, and resources to help you make the most of your
          insurance coverage.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-lime-500 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900">{resource.title}</h3>
                <span className="bg-lime-100 text-lime-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {resource.category}
                </span>
              </div>
              <p className="text-gray-600">{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
