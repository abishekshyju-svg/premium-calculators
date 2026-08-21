import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { Calculator, ChevronRight, ArrowLeft } from "lucide-react";
import { getCategoryBySlug } from "@/data/categories";
import { getCalculatorsByCategory } from "@/data/calculators";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug || "");
  const calculators = getCalculatorsByCategory(slug || "");

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex flex-col items-center justify-center py-32">
          <h1 className="text-2xl font-bold text-foreground">Category Not Found</h1>
          <p className="mt-2 text-muted-foreground">The category you're looking for doesn't exist.</p>
          <Link to="/" className="mt-6 text-sm font-medium text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="border-b border-border/60 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Categories
          </Link>
          <div className="flex items-center gap-4">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-xl text-white shadow-lg"
              style={{ backgroundColor: category.color }}
            >
              <Calculator className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {category.name}
              </h1>
              <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Long Description */}
      <section className="border-b border-border/60 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {category.longDescription}
          </p>
        </div>
      </section>

      {/* Calculator Grid */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-6 text-lg font-semibold text-foreground">
            All {category.name}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {calculators.map((calc, i) => (
              <motion.div
                key={calc.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <Link
                  to={`/calc/${calc.slug}`}
                  className="group block rounded-xl border border-border/60 bg-white p-5 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-black/5"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Calculator className="h-5 w-5" />
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-foreground">{calc.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                    {calc.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {calc.keywords.slice(0, 3).map((kw) => (
                      <span
                        key={kw}
                        className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
