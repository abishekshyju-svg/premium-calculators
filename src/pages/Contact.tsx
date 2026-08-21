import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Contact Us</h1>
        <p className="mt-2 text-muted-foreground">
          Have a question, suggestion, or need help? We're here to assist you.
        </p>
        <div className="mt-8 space-y-8">
          <div className="rounded-2xl border border-border/60 bg-white p-6 sm:p-8">
            <h2 className="mb-4 text-lg font-semibold text-foreground">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Email</div>
                  <div className="text-sm text-muted-foreground">contact@calcpro.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Website</div>
                  <div className="text-sm text-muted-foreground">www.calcpro.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-white p-6 sm:p-8">
            <h2 className="mb-4 text-lg font-semibold text-foreground">Send Us a Message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us more..."
                  className="w-full resize-none rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>
              <button
                type="submit"
                className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-colors hover:bg-primary/90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
