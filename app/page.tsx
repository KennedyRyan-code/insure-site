import Header from "@/components/header"
import Hero from "@/components/hero"
import TrustBadges from "@/components/trust-badges"
import InsuranceCategories from "@/components/insurance-categories"
import TrustedPartner from "@/components/trusted-partner"
import ClientPersonas from "@/components/client-personas"
import PricingPlans from "@/components/pricing-plans"
import CustomerStories from "@/components/customer-stories"
import NewsletterSection from "@/components/newsletter-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustBadges />
      <InsuranceCategories />
      <TrustedPartner />
      <ClientPersonas />
      <PricingPlans />
      <CustomerStories />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
