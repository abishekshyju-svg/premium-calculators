import { Link } from "react-router";
import { Calculator } from "lucide-react";
import { categories } from "@/data/categories";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                <Calculator className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">
                Calc<span className="text-primary">Pro</span>
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Premium online calculators for finance, health, education, math,
              and more. Accurate results with clear explanations to help you
              make informed decisions.
            </p>
          </div>

          {/* Calculator Categories */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">Calculators</h3>
            <ul className="space-y-2">
              {categories.slice(0, 5).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/category/${cat.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">More Calculators</h3>
            <ul className="space-y-2">
              {categories.slice(5).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/category/${cat.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CalcPro. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with precision. Designed for accuracy.
          </p>
        </div>
      </div>
    </footer>
  );
}
