"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-lime-500 flex items-center justify-center text-white font-bold text-sm">
              ◯
            </div>
            <span className="font-bold text-lg text-gray-900">Insure</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/products" className="text-gray-600 hover:text-gray-900 text-sm">
              Insurance Products
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-gray-900 text-sm">
              Resources
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm">
              Contact
            </Link>
          </nav>

          {/* Right section */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/auth/signin" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Sign in
            </Link>
            <Link href="/auth/signup">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 text-sm">Get Started</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-600 hover:text-gray-900">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link href="/products" className="block text-gray-600 hover:text-gray-900 text-sm py-2">
              Insurance Products
            </Link>
            <Link href="/resources" className="block text-gray-600 hover:text-gray-900 text-sm py-2">
              Resources
            </Link>
            <Link href="/about" className="block text-gray-600 hover:text-gray-900 text-sm py-2">
              About Us
            </Link>
            <Link href="/contact" className="block text-gray-600 hover:text-gray-900 text-sm py-2">
              Contact
            </Link>
            <div className="flex gap-3 pt-2">
              <Link href="/auth/signin" className="text-gray-600 text-sm font-medium flex-1">
                Sign in
              </Link>
              <Link href="/auth/signup" className="flex-1">
                <Button className="bg-gray-900 text-white w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
