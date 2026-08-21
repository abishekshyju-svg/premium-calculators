import { Link } from "react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, MapPin, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">About CalcPro</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <p className="text-base leading-relaxed">
              CalcPro is a premium online calculator platform designed to provide accurate, reliable, and easy-to-use calculation tools for everyone — from students and professionals to business owners and homeowners.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">Our Mission</h2>
            <p>
              We believe that everyone deserves access to accurate calculation tools without the hassle of complex formulas or expensive software. Our mission is to simplify complex calculations and make them accessible to everyone, anywhere, for free.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">What We Offer</h2>
            <p>
              With over 100 calculators across 10 categories — Finance, Health, Education, Math, Unit Conversion, Business, Real Estate, Lifestyle, Tech, and Construction — we cover virtually every calculation need. Each calculator features:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Instant, accurate results powered by proven formulas</li>
              <li>Step-by-step explanations so you understand the process</li>
              <li>Practical examples with real-world values</li>
              <li>FAQs addressing common questions</li>
              <li>A clean, distraction-free interface</li>
            </ul>
          </section>
          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">Our Team</h2>
            <p>
              CalcPro is built by a team of developers, designers, and domain experts committed to quality and accuracy. We verify every formula against industry standards and continuously improve our tools based on user feedback.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">Contact Us</h2>
            <p>Have questions, suggestions, or feedback? We'd love to hear from you.</p>
            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@calcpro.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                <span>www.calcpro.com</span>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
