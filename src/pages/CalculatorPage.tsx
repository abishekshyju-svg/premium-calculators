import { useParams, Link } from "react-router";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Info,
  Lightbulb,
  HelpCircle,
  ExternalLink,
  Share2,
} from "lucide-react";
import { getCategoryBySlug } from "@/data/categories";
import { getCalculatorBySlug, getCalculatorsByCategory } from "@/data/calculators";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { CalculatorMeta, CalculateFn, CalculatorInput } from "@/data/types";

/* ── Compute helpers ── */
function compute(meta: CalculatorMeta, inputs: Record<string, string | number>): { label: string; value: string }[] {
  const v = (id: string) => Number(inputs[id]) || 0;
  const s = (id: string) => String(inputs[id] || "");
  const slug = meta.slug;

  try {
    if (slug === "emi-calculator") {
      const P = v("principal"), r = v("rate") / 12 / 100, n = v("tenure") * 12;
      const emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
      const total = emi * n;
      const interest = total - P;
      return [
        { label: "Monthly EMI", value: `₹${emi.toLocaleString("en-IN", { maximumFractionDigits: 0 })}` },
        { label: "Total Interest", value: `₹${interest.toLocaleString("en-IN", { maximumFractionDigits: 0 })}` },
        { label: "Total Payment", value: `₹${total.toLocaleString("en-IN", { maximumFractionDigits: 0 })}` },
      ];
    }
    if (slug === "sip-calculator") {
      const P = v("monthly"), r = v("rate") / 12 / 100, n = v("years") * 12;
      const fv = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
      const invested = P * n;
      return [
        { label: "Future Value", value: `₹${fv.toLocaleString("en-IN", { maximumFractionDigits: 0 })}` },
        { label: "Invested Amount", value: `₹${invested.toLocaleString("en-IN", { maximumFractionDigits: 0 })}` },
        { label: "Wealth Gained", value: `₹${(fv - invested).toLocaleString("en-IN", { maximumFractionDigits: 0 })}` },
      ];
    }
    if (slug === "compound-interest-calculator") {
      const P = v("principal"), r = v("rate") / 100, t = v("time"), n = Number(inputs.compound) || 1;
      const A = P * Math.pow(1 + r / n, n * t);
      return [
        { label: "Final Amount", value: `₹${A.toLocaleString("en-IN", { maximumFractionDigits: 0 })}` },
        { label: "Interest Earned", value: `₹${(A - P).toLocaleString("en-IN", { maximumFractionDigits: 0 })}` },
      ];
    }
    if (slug === "simple-interest-calculator") {
      const P = v("principal"), R = v("rate"), T = v("time");
      const SI = P * R * T / 100;
      return [
        { label: "Simple Interest", value: `₹${SI.toLocaleString("en-IN", { maximumFractionDigits: 0 })}` },
        { label: "Total Amount", value: `₹${(P + SI).toLocaleString("en-IN", { maximumFractionDigits: 0 })}` },
      ];
    }
    if (slug === "bmi-calculator") {
      const w = v("weight"), h = v("height") / 100;
      const bmi = w / (h * h);
      const cat = bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : bmi < 30 ? "Overweight" : "Obese";
      return [
        { label: "BMI", value: bmi.toFixed(1) },
        { label: "Category", value: cat },
      ];
    }
    if (slug === "bmr-calculator") {
      const age = v("age"), w = v("weight"), h = v("height"), g = inputs.gender;
      const bmr = g === "male"
        ? 10 * w + 6.25 * h - 5 * age + 5
        : 10 * w + 6.25 * h - 5 * age - 161;
      return [
        { label: "BMR", value: `${Math.round(bmr)} cal/day` },
        { label: "Light Activity", value: `${Math.round(bmr * 1.375)} cal/day` },
        { label: "Moderate Activity", value: `${Math.round(bmr * 1.55)} cal/day` },
      ];
    }
    if (slug === "calorie-calculator") {
      const age = v("age"), w = v("weight"), h = v("height");
      const am = Number(inputs.activity) || 1.55;
      const bmr = inputs.gender === "male"
        ? 10 * w + 6.25 * h - 5 * age + 5
        : 10 * w + 6.25 * h - 5 * age - 161;
      const tdee = bmr * am;
      const goal = inputs.goal;
      const target = goal === "lose" ? tdee - 500 : goal === "gain" ? tdee + 300 : tdee;
      return [
        { label: "Daily Calories", value: `${Math.round(tdee)} cal` },
        { label: "Target (Goal)", value: `${Math.round(target)} cal` },
      ];
    }
    if (slug === "discount-calculator") {
      const orig = v("original"), disc = v("discount");
      const saved = orig * disc / 100;
      return [
        { label: "Sale Price", value: `₹${(orig - saved).toLocaleString("en-IN")}` },
        { label: "You Save", value: `₹${saved.toLocaleString("en-IN")}` },
      ];
    }
    if (slug === "gst-calculator") {
      const amt = v("amount"), rate = v("rate");
      const gst = amt * rate / 100;
      const cgst = gst / 2, sgst = gst / 2;
      const total = inputs.operation === "remove" ? amt / (1 + rate / 100) : amt + gst;
      return [
        { label: inputs.operation === "remove" ? "Base Price" : "GST Amount", value: `₹${inputs.operation === "remove" ? total.toLocaleString("en-IN", { maximumFractionDigits: 2 }) : gst.toLocaleString("en-IN", { maximumFractionDigits: 2 })}` },
        { label: "CGST / SGST", value: `₹${cgst.toLocaleString("en-IN", { maximumFractionDigits: 2 })} each` },
        { label: "Total", value: `₹${total.toLocaleString("en-IN", { maximumFractionDigits: 2 })}` },
      ];
    }
    if (slug === "roi-calculator") {
      const inv = v("invested"), ret = v("returned");
      const roi = ((ret - inv) / inv) * 100;
      return [
        { label: "ROI", value: `${roi.toFixed(1)}%` },
        { label: "Net Profit/Loss", value: `₹${(ret - inv).toLocaleString("en-IN")}` },
      ];
    }
    if (slug === "profit-margin-calculator") {
      const rev = v("revenue"), cogs = v("cogs"), exp = v("expenses"), tax = v("tax");
      const gm = ((rev - cogs) / rev) * 100;
      const om = ((rev - cogs - exp) / rev) * 100;
      const nm = ((rev - cogs - exp - tax) / rev) * 100;
      return [
        { label: "Gross Margin", value: `${gm.toFixed(1)}%` },
        { label: "Operating Margin", value: `${om.toFixed(1)}%` },
        { label: "Net Margin", value: `${nm.toFixed(1)}%` },
      ];
    }
    if (slug === "percentage-calculator") {
      const mode = inputs.mode;
      if (mode === "of") return [{ label: "Result", value: `${(v("value1") / 100 * v("value2")).toLocaleString()}` }];
      if (mode === "is") return [{ label: "Result", value: `${(v("value1") / v("value2") * 100).toFixed(2)}%` }];
      const ch = ((v("value2") - v("value1")) / v("value1")) * 100;
      return [{ label: "Change", value: `${ch.toFixed(2)}%` }];
    }
    if (slug === "length-converter" || slug === "weight-converter" || slug === "temperature-converter" || slug === "area-converter" || slug === "volume-converter" || slug === "speed-converter" || slug === "time-converter" || slug === "pressure-converter" || slug === "energy-converter" || slug === "data-storage-converter") {
      // Generic conversion
      return [{ label: "Converted Value", value: `${inputs.value} ${inputs.from} → ${inputs.to}` }];
    }
    if (slug === "internet-speed-calculator") {
      return [{ label: "Converted Speed", value: `${inputs.speed} ${inputs.from} → ${inputs.to}` }];
    }
    if (slug === "binary-to-decimal-calculator") {
      const bin = s("binary");
      const dec = parseInt(bin, 2);
      return isNaN(dec) ? [{ label: "Error", value: "Invalid binary" }] : [{ label: "Decimal", value: String(dec) }];
    }
    if (slug === "decimal-to-binary-calculator") {
      const dec = v("decimal");
      return [{ label: "Binary", value: dec.toString(2) }, { label: "Hexadecimal", value: dec.toString(16).toUpperCase() }];
    }
    if (slug === "tip-calculator") {
      const bill = v("bill") || v("amount") || v("price"), rate = v("rate") || 15;
      const tip = bill * rate / 100;
      return [
        { label: "Tip Amount", value: `₹${tip.toLocaleString("en-IN", { maximumFractionDigits: 2 })}` },
        { label: "Total", value: `₹${(bill + tip).toLocaleString("en-IN", { maximumFractionDigits: 2 })}` },
      ];
    }
    if (slug === "home-loan-emi-calculator" || slug === "mortgage-calculator") {
      const P = v("principal") || v("loanAmount"), r = v("rate") / 12 / 100, n = (v("tenure") || v("years")) * 12;
      if (r === 0 || n === 0) return [{ label: "EMI", value: "N/A" }];
      const emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
      return [
        { label: "Monthly Payment", value: `₹${Math.round(emi).toLocaleString("en-IN")}` },
        { label: "Total Interest", value: `₹${Math.round(emi * n - P).toLocaleString("en-IN")}` },
        { label: "Total Payment", value: `₹${Math.round(emi * n).toLocaleString("en-IN")}` },
      ];
    }
    if (slug === "down-payment-calculator") {
      const price = v("homePrice"), pct = v("percent"), r = v("rate") / 12 / 100, n = v("tenure") * 12;
      const dp = price * pct / 100;
      const loan = price - dp;
      const emi = loan * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
      return [
        { label: "Down Payment", value: `₹${dp.toLocaleString("en-IN")}` },
        { label: "Loan Amount", value: `₹${loan.toLocaleString("en-IN")}` },
        { label: "Monthly EMI", value: `₹${Math.round(emi).toLocaleString("en-IN")}` },
      ];
    }
    if (slug === "concrete-calculator") {
      const vol = v("length") * v("width") * v("depth");
      const volFt = vol * 35.3147;
      return [
        { label: "Volume", value: `${vol.toFixed(2)} m³` },
        { label: "Volume (ft³)", value: `${volFt.toFixed(1)} cu ft` },
        { label: "With 10% wastage", value: `${(vol * 1.1).toFixed(2)} m³` },
      ];
    }
    if (slug === "age-calculator") {
      // Use date difference
      const dob = s("dob") || s("date1");
      if (!dob) return [{ label: "Age", value: "Enter date of birth" }];
      const now = new Date();
      const birth = new Date(dob);
      let years = now.getFullYear() - birth.getFullYear();
      let months = now.getMonth() - birth.getMonth();
      if (months < 0) { years--; months += 12; }
      if (now.getDate() < birth.getDate()) months--;
      return [
        { label: "Age", value: `${years} years, ${months} months` },
      ];
    }
    if (slug === "date-difference-calculator") {
      const d1 = s("date1") || s("startDate"), d2 = s("date2") || s("endDate");
      if (!d1 || !d2) return [{ label: "Difference", value: "Enter both dates" }];
      const diff = Math.abs(new Date(d2).getTime() - new Date(d1).getTime());
      const days = Math.floor(diff / 86400000);
      return [
        { label: "Days", value: `${days} days` },
        { label: "Weeks", value: `${(days / 7).toFixed(1)} weeks` },
      ];
    }
    if (slug === "heart-rate-calculator") {
      const age = v("age") || v("value1");
      const maxHr = 220 - age;
      return [
        { label: "Max Heart Rate", value: `${maxHr} bpm` },
        { label: "Fat Burn Zone", value: `${Math.round(maxHr * 0.5)}–${Math.round(maxHr * 0.6)} bpm` },
        { label: "Cardio Zone", value: `${Math.round(maxHr * 0.6)}–${Math.round(maxHr * 0.7)} bpm` },
      ];
    }
    if (slug === "ip-subnet-calculator") {
      const ip = s("ip"), cidr = v("cidr");
      const hosts = Math.pow(2, 32 - cidr) - 2;
      return [
        { label: "Usable Hosts", value: String(hosts) },
        { label: "Subnet Mask", value: `/${cidr}` },
        { label: "Network Size", value: `2^(32-${cidr}) = ${hosts + 2}` },
      ];
    }
    // Default fallback for any calculator
    return [{ label: "Result", value: "Enter values to calculate" }];
  } catch {
    return [{ label: "Error", value: "Check your inputs" }];
  }
}

/* ── Input renderer ── */
function InputField({
  input,
  value,
  onChange,
}: {
  input: CalculatorInput;
  value: string | number;
  onChange: (val: string) => void;
}) {
  if (input.type === "select" && input.options) {
    return (
      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">{input.label}</label>
        <div className="relative">
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full appearance-none rounded-lg border border-border bg-white px-3 py-2.5 pr-10 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
          >
            {input.options.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">
        {input.label}
        {input.unit && <span className="ml-1 text-xs text-muted-foreground">({input.unit})</span>}
      </label>
      <input
        type={input.type === "date" ? "date" : input.type === "text" ? "text" : "number"}
        value={value}
        placeholder={input.placeholder}
        min={input.min}
        max={input.max}
        step={input.step}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/10"
      />
    </div>
  );
}

/* ── FAQ accordion ── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/60 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-foreground transition-colors hover:text-primary"
      >
        {q}
        <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-4 text-sm leading-relaxed text-muted-foreground">{a}</p>}
    </div>
  );
}

/* ── Main page ── */
export default function CalculatorPage() {
  const { slug } = useParams<{ slug: string }>();
  const calc = getCalculatorBySlug(slug || "");
  const [inputs, setInputs] = useState<Record<string, string | number>>(() => {
    if (!calc) return {};
    const defaults: Record<string, string | number> = {};
    calc.inputs.forEach((inp) => {
      if (inp.defaultValue !== undefined) defaults[inp.id] = inp.defaultValue;
      else defaults[inp.id] = "";
    });
    return defaults;
  });

  const results = useMemo(() => {
    if (!calc) return [];
    return compute(calc, inputs);
  }, [calc, inputs]);

  const set = (id: string) => (val: string) => setInputs((p) => ({ ...p, [id]: val }));

  if (!calc) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex flex-col items-center justify-center py-32">
          <h1 className="text-2xl font-bold text-foreground">Calculator Not Found</h1>
          <p className="mt-2 text-muted-foreground">The calculator you're looking for doesn't exist.</p>
          <Link to="/" className="mt-6 text-sm font-medium text-primary hover:underline">← Back to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const category = getCategoryBySlug(calc.categorySlug);
  const related = calc.relatedSlugs
    .map((rs) => getCalculatorBySlug(rs))
    .filter(Boolean) as CalculatorMeta[];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-border/60 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to={`/category/${calc.categorySlug}`} className="hover:text-primary">{calc.category}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">{calc.title}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          {/* Main */}
          <div>
            {/* Title */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <Link
                to={`/category/${calc.categorySlug}`}
                className="mb-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary"
              >
                <ArrowLeft className="h-3 w-3" />
                {calc.category} Calculators
              </Link>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                  style={{ backgroundColor: category?.color || "#B11226" }}
                >
                  <Calculator className="h-6 w-6" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{calc.title}</h1>
                  <p className="mt-0.5 text-sm text-muted-foreground">{calc.description}</p>
                </div>
              </div>
            </motion.div>

            {/* Calculator Card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {calc.inputs.map((inp) => (
                  <div key={inp.id} className={inp.type === "select" || inp.id === "operation" ? "" : ""}>
                    <InputField input={inp} value={inputs[inp.id] ?? ""} onChange={set(inp.id)} />
                  </div>
                ))}
              </div>

              {/* Results */}
              <div className="mt-6 rounded-xl bg-primary/5 border border-primary/10 p-5">
                <h3 className="mb-3 text-sm font-semibold text-primary flex items-center gap-2">
                  <Calculator className="h-4 w-4" /> Results
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {results.map((r) => (
                    <div key={r.label} className="rounded-lg bg-white p-3 shadow-sm">
                      <div className="text-xs text-muted-foreground">{r.label}</div>
                      <div className="mt-1 text-lg font-bold text-foreground">{r.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Long Description */}
            <div className="mt-8 rounded-2xl border border-border/60 bg-white p-6 sm:p-8">
              <h2 className="mb-3 text-lg font-semibold text-foreground">About This Calculator</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{calc.longDescription}</p>
            </div>

            {/* How to Use */}
            <div className="mt-6 rounded-2xl border border-border/60 bg-white p-6 sm:p-8">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                <Lightbulb className="h-5 w-5 text-primary" /> How to Use
              </h2>
              <ol className="space-y-2">
                {calc.howToUse.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Formula */}
            <div className="mt-6 rounded-2xl border border-border/60 bg-white p-6 sm:p-8">
              <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground">
                <Info className="h-5 w-5 text-primary" /> Formula
              </h2>
              <div className="rounded-lg bg-secondary/60 px-4 py-3 font-mono text-sm font-medium text-foreground">
                {calc.formula}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{calc.formulaExplanation}</p>
            </div>

            {/* Example */}
            <div className="mt-6 rounded-2xl border border-border/60 bg-white p-6 sm:p-8">
              <h2 className="mb-3 text-lg font-semibold text-foreground">Example</h2>
              <p className="text-sm text-muted-foreground">{calc.example.description}</p>
              <p className="mt-2 rounded-lg bg-primary/5 px-4 py-3 text-sm font-medium text-primary">
                {calc.example.result}
              </p>
            </div>

            {/* Benefits */}
            <div className="mt-6 rounded-2xl border border-border/60 bg-white p-6 sm:p-8">
              <h2 className="mb-4 text-lg font-semibold text-foreground">Benefits</h2>
              <ul className="space-y-2">
                {calc.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQs */}
            <div className="mt-6 rounded-2xl border border-border/60 bg-white p-6 sm:p-8">
              <h2 className="mb-2 flex items-center gap-2 text-lg font-semibold text-foreground">
                <HelpCircle className="h-5 w-5 text-primary" /> Frequently Asked Questions
              </h2>
              {calc.faqs.map((faq) => (
                <FAQItem key={faq.question} q={faq.question} a={faq.answer} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Ad Placeholder */}
            <div className="rounded-2xl border border-dashed border-border/80 bg-secondary/30 p-6 text-center">
              <p className="text-xs text-muted-foreground">Advertisement Space</p>
            </div>

            {/* Keywords */}
            <div className="rounded-2xl border border-border/60 bg-white p-5">
              <h3 className="mb-3 text-sm font-semibold text-foreground">Related Searches</h3>
              <div className="flex flex-wrap gap-1.5">
                {calc.keywords.map((kw) => (
                  <span key={kw} className="rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Calculators */}
            {related.length > 0 && (
              <div className="rounded-2xl border border-border/60 bg-white p-5">
                <h3 className="mb-3 text-sm font-semibold text-foreground">Related Calculators</h3>
                <div className="space-y-2">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      to={`/calc/${r.slug}`}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary/60"
                    >
                      <Calculator className="h-4 w-4 shrink-0 text-primary" />
                      <span className="truncate">{r.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Another Ad Placeholder */}
            <div className="rounded-2xl border border-dashed border-border/80 bg-secondary/30 p-6 text-center">
              <p className="text-xs text-muted-foreground">Advertisement Space</p>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
