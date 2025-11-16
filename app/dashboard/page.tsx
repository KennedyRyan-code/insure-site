"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back!</h1>
            <p className="text-gray-600">Manage your insurance policies and account</p>
          </div>
          <Link href="/">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white">Back to Home</Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-lime-500">
            <h3 className="font-semibold text-gray-900 mb-2">Active Policies</h3>
            <p className="text-3xl font-bold text-lime-600">3</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-lime-500">
            <h3 className="font-semibold text-gray-900 mb-2">Monthly Premium</h3>
            <p className="text-3xl font-bold text-lime-600">$180</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-lime-500">
            <h3 className="font-semibold text-gray-900 mb-2">Next Payment Due</h3>
            <p className="text-3xl font-bold text-lime-600">Dec 15</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/quote">
              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6 flex items-center justify-center gap-2">
                Get New Quote
                <ArrowRight size={20} />
              </Button>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                className="w-full border-2 border-gray-300 text-gray-900 py-6 flex items-center justify-center gap-2 hover:bg-gray-50"
              >
                View Policies
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
