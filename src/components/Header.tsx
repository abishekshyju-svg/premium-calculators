import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Calculator, ChevronDown } from "lucide-react";
import { categories } from "@/data/categories";


export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white shadow-sm shadow-primary/20 transition-transform group-hover:scale-105">
            <Calculator className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Calc<span className="text-primary">Pro</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                location.pathname.startsWith("/category")
                  ? "bg-secondary text-secondary-foreground"
                  : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
              }`}
            >
              Categories
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute left-1/2 top-full z-50 mt-1 w-[520px] -translate-x-1/2 rounded-xl border border-border/60 bg-white p-4 shadow-xl shadow-black/5">
                <div className="grid grid-cols-2 gap-1">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/category/${cat.slug}`}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-secondary/60"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-md text-white"
                        style={{ backgroundColor: cat.color }}
                      >
                        <Calculator className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{cat.name}</div>
                        <div className="text-xs text-muted-foreground">{cat.calculators.length} calculators</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link
            to="/blog"
            className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
          >
            Blog
          </Link>
          <Link
            to="/about"
            className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="rounded-lg p-2 text-muted-foreground hover:bg-secondary md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border/60 bg-white px-4 py-4 md:hidden">
          <div className="space-y-1">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary/60"
                onClick={() => setMobileOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2 border-t border-border/60 pt-4">
            <Link
              to="/blog"
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary/60"
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary/60"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary/60"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}
