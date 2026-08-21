import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Calculator,
  ArrowRight,
  Shield,
  Zap,
  BookOpen,
  Star,
  TrendingUp,
  Heart,
  GraduationCap,
  Minus,
  ArrowLeftRight,
  Briefcase,
  Home,
  Sparkles,
  Monitor,
  Hammer,
  ChevronRight,
} from "lucide-react";
import { categories } from "@/data/categories";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const iconMap: Record<string, React.ReactNode> = {
  DollarSign: <TrendingUp className="h-6 w-6" />,
  Heart: <Heart className="h-6 w-6" />,
  GraduationCap: <GraduationCap className="h-6 w-6" />,
  Calculator: <Calculator className="h-6 w-6" />,
  ArrowLeftRight: <ArrowLeftRight className="h-6 w-6" />,
  Briefcase: <Briefcase className="h-6 w-6" />,
  Home: <Home className="h-6 w-6" />,
  Sparkles: <Sparkles className="h-6 w-6" />,
  Monitor: <Monitor className="h-6 w-6" />,
  Hammer: <Hammer className="h-6 w-6" />,
};

const features = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Instant Results",
    description: "Get accurate calculations instantly with our lightning-fast tools. No waiting, no loading.",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Step-by-Step Explanations",
    description: "Every calculator includes detailed formulas and explanations so you understand the math.",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Trusted & Accurate",
    description: "Built using industry-standard formulas and verified by experts for reliable results.",
  },
  {
    icon: <Star className="h-5 w-5" />,
    title: "100% Free to Use",
    description: "All calculators are completely free. No sign-up required. Start calculating right away.",
  },
];

const stats = [
  { value: "100+", label: "Calculators" },
  { value: "10", label: "Categories" },
  { value: "10K+", label: "Monthly Users" },
  { value: "99.9%", label: "Accuracy" },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Calculator className="h-4 w-4" />
              Premium Calculator Suite
            </div>
            <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Accurate Calculations.
              <br />
              <span className="text-primary">Clear Explanations.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              100+ professional calculators across 10 categories — from finance
              and health to construction and tech. Get instant, accurate results
              with step-by-step formulas and expert guidance.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/category/finance"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
              >
                Explore Calculators
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/20 hover:bg-secondary/40"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="border-t border-border/60 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              10 Calculator Categories
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Everything you need, from financial planning to construction
              estimation, organized into easy-to-navigate categories.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  to={`/category/${cat.slug}`}
                  className="group block rounded-xl border border-border/60 bg-background p-5 transition-all hover:border-primary/20 hover:bg-white hover:shadow-lg hover:shadow-black/5"
                >
                  <div
                    className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl text-white transition-transform group-hover:scale-110"
                    style={{ backgroundColor: cat.color }}
                  >
                    {iconMap[cat.icon] || <Calculator className="h-6 w-6" />}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{cat.name}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                    {cat.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-xs font-medium text-primary">
                    {cat.calculators.length} calculators
                    <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose CalcPro?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We combine accuracy with simplicity to deliver the best calculator experience online.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl border border-border/60 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {feat.icon}
                </div>
                <h3 className="text-base font-semibold text-foreground">{feat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Calculators */}
      <section className="border-t border-border/60 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Popular Calculators
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Start with our most-used tools trusted by thousands of users.
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { slug: "emi-calculator", name: "EMI Calculator", cat: "finance" },
              { slug: "bmi-calculator", name: "BMI Calculator", cat: "health" },
              { slug: "gpa-calculator", name: "GPA Calculator", cat: "education" },
              { slug: "percentage-calculator", name: "Percentage Calculator", cat: "education" },
              { slug: "compound-interest-calculator", name: "Compound Interest", cat: "finance" },
              { slug: "mortgage-calculator", name: "Mortgage Calculator", cat: "real-estate" },
              { slug: "sip-calculator", name: "SIP Calculator", cat: "finance" },
              { slug: "calorie-calculator", name: "Calorie Calculator", cat: "health" },
            ].map((calc) => (
              <Link
                key={calc.slug}
                to={`/calc/${calc.slug}`}
                className="flex items-center gap-3 rounded-lg border border-border/60 bg-background px-4 py-3 transition-all hover:border-primary/20 hover:bg-white hover:shadow-md hover:shadow-black/5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Calculator className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{calc.name}</div>
                  <div className="text-xs capitalize text-muted-foreground">{calc.cat}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/category/finance"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              View All Calculators
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-dark px-8 py-14 text-center shadow-2xl shadow-primary/20 sm:px-14">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Start Calculating Today
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-white/80">
              No sign-up needed. Pick a category, choose a calculator, and get
              instant, accurate results with expert explanations.
            </p>
            <Link
              to="/category/finance"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-primary shadow-lg transition-all hover:shadow-xl"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
