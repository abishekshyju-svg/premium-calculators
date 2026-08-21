import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Clock, User, ChevronRight, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { categories } from "@/data/categories";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const allCategorySlugs = ["all", ...categories.map((c) => c.slug)];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((p) => p.categorySlug === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="border-b border-border/60 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <BookOpen className="h-4 w-4" />
              Calculator Blog
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Learn, Calculate, Succeed
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Expert guides, tutorials, and tips to help you understand
              calculations and make better financial, health, and business
              decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="border-b border-border/60 bg-white sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-3 no-scrollbar">
            {allCategorySlugs.map((slug) => {
              const cat = categories.find((c) => c.slug === slug);
              return (
                <button
                  key={slug}
                  onClick={() => setActiveCategory(slug)}
                  className={`shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === slug
                      ? "bg-primary text-white shadow-sm"
                      : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                  }`}
                >
                  {slug === "all" ? "All Articles" : cat?.name || slug}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-muted-foreground">No articles in this category yet.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group flex h-full flex-col rounded-xl border border-border/60 bg-white p-6 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-black/5"
                  >
                    <div className="mb-3 inline-flex w-fit rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                      {post.category}
                    </div>
                    <h2 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-4">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
