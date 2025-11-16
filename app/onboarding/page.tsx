"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check } from 'lucide-react'

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [preferences, setPreferences] = useState({
    insuranceType: "",
    budget: "",
    coverage: "",
  })

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      console.log("[v0] Onboarding completed with preferences:", preferences)
      window.location.href = "/dashboard"
    }
  }

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-300 to-lime-200 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Progress bar */}
          <div className="flex justify-between mb-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-1">
                <div
                  className={`h-2 rounded-full ${
                    i <= step ? "bg-lime-500" : "bg-gray-300"
                  } ${i < step ? "mr-2" : i === step ? "mr-2" : "mr-2"}`}
                />
              </div>
            ))}
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {step === 1 && "What type of insurance do you need?"}
            {step === 2 && "What's your budget?"}
            {step === 3 && "Review Your Preferences"}
          </h1>

          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-4">
              {["Life Insurance", "Health Insurance", "Car Insurance", "Home Insurance"].map((type) => (
                <label
                  key={type}
                  className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-lime-500 hover:bg-lime-50 transition"
                >
                  <input
                    type="radio"
                    name="insuranceType"
                    value={type}
                    checked={preferences.insuranceType === type}
                    onChange={(e) => setPreferences({ ...preferences, insuranceType: e.target.value })}
                    className="w-5 h-5 text-lime-500"
                  />
                  <span className="ml-4 font-medium text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-4">
              {[
                { value: "under-50", label: "Under $50/month" },
                { value: "50-100", label: "$50 - $100/month" },
                { value: "100-200", label: "$100 - $200/month" },
                { value: "over-200", label: "Over $200/month" },
              ].map((budget) => (
                <label
                  key={budget.value}
                  className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-lime-500 hover:bg-lime-50 transition"
                >
                  <input
                    type="radio"
                    name="budget"
                    value={budget.value}
                    checked={preferences.budget === budget.value}
                    onChange={(e) => setPreferences({ ...preferences, budget: e.target.value })}
                    className="w-5 h-5 text-lime-500"
                  />
                  <span className="ml-4 font-medium text-gray-700">{budget.label}</span>
                </label>
              ))}
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="bg-lime-50 rounded-lg p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-lime-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Insurance Type</p>
                    <p className="text-gray-600">{preferences.insuranceType}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-lime-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Budget Range</p>
                    <p className="text-gray-600">
                      {preferences.budget === "under-50" && "Under $50/month"}
                      {preferences.budget === "50-100" && "$50 - $100/month"}
                      {preferences.budget === "100-200" && "$100 - $200/month"}
                      {preferences.budget === "over-200" && "Over $200/month"}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-center">Ready to get started? Click the button below to proceed.</p>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex gap-4 mt-12">
            {step > 1 && (
              <Button onClick={handlePrevious} variant="outline" className="flex-1">
                Previous
              </Button>
            )}
            <Button
              onClick={handleNext}
              className={`flex-1 ${step < 3 ? "bg-gray-900 hover:bg-gray-800" : "bg-lime-500 hover:bg-lime-600"} text-white py-3 font-semibold`}
            >
              {step === 3 ? "Complete Setup" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
