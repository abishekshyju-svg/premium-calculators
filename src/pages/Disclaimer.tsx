import { Link } from "react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AlertTriangle } from "lucide-react";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="mb-6 flex items-center gap-2 text-amber-600">
          <AlertTriangle className="h-5 w-5" />
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Disclaimer</h1>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: January 2025</p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">General Information</h2>
            <p>
              The information provided by CalcPro ("we," "our," or "us") on our website is for general informational and educational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, or completeness of any information on the site.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">Financial Calculators</h2>
            <p>
              Financial calculators on this site provide estimates only and should not be considered as financial advice. Actual results may vary based on market conditions, individual circumstances, and other factors. Always consult a qualified financial advisor before making investment or lending decisions.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">Health Calculators</h2>
            <p>
              Health calculators are based on general formulas and population averages. They are not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">Construction Calculators</h2>
            <p>
              Construction calculators provide estimates for planning purposes only. Actual material requirements may vary based on site conditions, waste, design specifications, and local building codes. Always consult a qualified engineer or contractor for professional estimates.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">External Links</h2>
            <p>
              Our site may contain links to external websites. We have no control over the content and practices of these sites and cannot accept responsibility for their privacy policies or content.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">Consent</h2>
            <p>
              By using our website, you hereby consent to our disclaimer and agree to its terms. If you have any questions about this disclaimer, please <Link to="/contact" className="text-primary hover:underline">contact us</Link>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
