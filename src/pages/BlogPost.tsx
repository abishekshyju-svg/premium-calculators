import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, ChevronRight, Tag, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex flex-col items-center justify-center py-32">
          <h1 className="text-2xl font-bold text-foreground">Article Not Found</h1>
          <p className="mt-2 text-muted-foreground">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="mt-6 text-sm font-medium text-primary hover:underline">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.categorySlug === post.categorySlug)
    .slice(0, 3);

  // If not enough related in same category, fill from others
  const moreRelated =
    related.length < 3
      ? [...related, ...blogPosts.filter((p) => p.slug !== post.slug && p.categorySlug !== post.categorySlug).slice(0, 3 - related.length)]
      : related;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-border/60 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-3 sm:px-6">
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/blog" className="hover:text-primary">Blog</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="truncate text-foreground font-medium">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <Link
            to="/blog"
            className="mb-6 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-3 w-3" />
            All Articles
          </Link>

          <div className="mb-4 inline-flex rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
            {post.category}
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
            <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose-custom mt-10 space-y-6 text-[15px] leading-relaxed text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Keywords */}
        <div className="mt-10 flex flex-wrap gap-2 border-t border-border/60 pt-6">
          <Tag className="h-4 w-4 text-muted-foreground" />
          {post.keywords.map((kw) => (
            <span
              key={kw}
              className="rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
            >
              {kw}
            </span>
          ))}
        </div>

        {/* Ad Placeholder */}
        <div className="mt-10 rounded-2xl border border-dashed border-border/80 bg-secondary/30 p-8 text-center">
          <p className="text-xs text-muted-foreground">Advertisement Space</p>
        </div>
      </article>

      {/* Related Articles */}
      {moreRelated.length > 0 && (
        <section className="border-t border-border/60 bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="mb-6 text-lg font-semibold text-foreground">
              Related Articles
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {moreRelated.map((rp) => (
                <Link
                  key={rp.slug}
                  to={`/blog/${rp.slug}`}
                  className="group block rounded-xl border border-border/60 bg-background p-5 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-black/5"
                >
                  <div className="mb-2 inline-flex rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                    {rp.category}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {rp.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">
                    {rp.excerpt}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {rp.readTime}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
