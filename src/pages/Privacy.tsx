import { Link } from "react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: January 2025</p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">1. Information We Collect</h2>
            <p>CalcPro ("we," "our," or "us") operates the website and provides calculator tools. We do not require user registration to use our calculators. We may automatically collect certain information when you visit our website, including:</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referring website addresses</li>
              <li>IP address (anonymized)</li>
            </ul>
          </section>
          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">2. Use of Cookies</h2>
            <p>We use cookies and similar tracking technologies to improve your experience, analyze site traffic, and understand usage patterns. You can control cookie settings through your browser preferences.</p>
          </section>
          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">3. Calculator Data</h2>
            <p>All calculations are performed locally in your browser. We do not store, transmit, or have access to any data you enter into our calculators. Your inputs remain completely private.</p>
          </section>
          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">4. Third-Party Services</h2>
            <p>We may use third-party services such as Google Analytics and Google AdSense. These services may collect information about your visits to our site and other websites. Please refer to their respective privacy policies for more information.</p>
          </section>
          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">5. Data Security</h2>
            <p>We implement appropriate security measures to protect the limited information we collect. However, no method of transmission over the Internet is 100% secure.</p>
          </section>
          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">6. Children's Privacy</h2>
            <p>Our website is not directed to children under 13. We do not knowingly collect personal information from children under 13.</p>
          </section>
          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">7. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated date.</p>
          </section>
          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">8. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please <Link to="/contact" className="text-primary hover:underline">contact us</Link>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
