import { Link } from "react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: January 2025</p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>By accessing and using CalcPro ("the Website"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.</p>
          </section>
          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">2. Use of Calculators</h2>
            <p>Our calculators are provided for informational and educational purposes only. The results should not be considered as professional financial, medical, legal, or construction advice. Always consult qualified professionals for important decisions.</p>
          </section>
          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">3. Accuracy Disclaimer</h2>
            <p>While we strive for accuracy, we make no warranties about the completeness, reliability, or accuracy of the calculations. Results are based on standard formulas and may not account for all real-world variables.</p>
          </section>
          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">4. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, and software, is the property of CalcPro and is protected by applicable intellectual property laws.</p>
          </section>
          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">5. Limitation of Liability</h2>
            <p>CalcPro shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from the use of our website or calculators.</p>
          </section>
          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">6. Modifications</h2>
            <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this page.</p>
          </section>
          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">7. Contact</h2>
            <p>For questions about these Terms, please <Link to="/contact" className="text-primary hover:underline">contact us</Link>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
