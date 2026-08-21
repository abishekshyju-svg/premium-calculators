import { CategoryMeta } from "./types";

export const categories: CategoryMeta[] = [
  {
    slug: "finance",
    name: "Finance Calculators",
    description: "Plan your finances with our comprehensive suite of calculators for loans, investments, taxes, and savings.",
    longDescription: "Take control of your financial future with our expert-designed finance calculators. Whether you're planning a home loan, evaluating investment returns, or managing day-to-day expenses, our tools provide accurate results with clear explanations. Each calculator includes step-by-step guidance, formula breakdowns, and practical examples to help you make informed financial decisions.",
    icon: "DollarSign",
    color: "#1A7A4C",
    calculators: [
      "emi-calculator", "sip-calculator", "compound-interest-calculator",
      "simple-interest-calculator", "fd-calculator", "rd-calculator",
      "gst-calculator", "loan-eligibility-calculator", "savings-goal-calculator",
      "discount-calculator"
    ]
  },
  {
    slug: "health",
    name: "Health Calculators",
    description: "Track and optimize your health with BMI, BMR, calorie, and nutrition calculators.",
    longDescription: "Your health journey starts with understanding your body. Our health calculators help you track vital metrics, set realistic goals, and make informed decisions about nutrition and fitness. From BMI and body fat calculations to pregnancy planning tools, each calculator is designed with scientifically-backed formulas and provides personalized insights to support your wellness goals.",
    icon: "Heart",
    color: "#0D8C5F",
    calculators: [
      "bmi-calculator", "bmr-calculator", "calorie-calculator",
      "water-intake-calculator", "ideal-weight-calculator", "body-fat-calculator",
      "pregnancy-due-date-calculator", "ovulation-calculator",
      "macro-calculator", "heart-rate-calculator"
    ]
  },
  {
    slug: "education",
    name: "Education Calculators",
    description: "Calculate grades, percentages, GPA, and academic performance with precision tools.",
    longDescription: "Academic success starts with understanding your performance. Our education calculators help students, parents, and educators track academic progress with precision. Whether you're calculating your GPA, predicting exam scores, or managing attendance records, our tools provide instant, accurate results along with helpful explanations to understand the underlying calculations.",
    icon: "GraduationCap",
    color: "#2D8B5E",
    calculators: [
      "percentage-calculator", "gpa-calculator", "cgpa-calculator",
      "grade-calculator", "attendance-calculator", "average-marks-calculator",
      "exam-score-calculator", "study-time-calculator",
      "rank-predictor-calculator", "age-calculator-admission"
    ]
  },
  {
    slug: "math",
    name: "Math Calculators",
    description: "Solve mathematical problems with our collection of math calculators and converters.",
    longDescription: "Make math effortless with our comprehensive collection of mathematical calculators. From basic percentage calculations to complex fraction operations, our tools help students, professionals, and anyone who works with numbers. Each calculator shows the complete working steps so you can learn the process while getting accurate answers.",
    icon: "Calculator",
    color: "#0D5C35",
    calculators: [
      "percentage-increase-calculator", "percentage-decrease-calculator",
      "profit-and-loss-calculator", "ratio-calculator", "fraction-calculator",
      "lcm-calculator", "hcf-calculator", "decimal-to-fraction-calculator",
      "square-root-calculator", "scientific-calculator"
    ]
  },
  {
    slug: "unit-conversion",
    name: "Unit Conversion Calculators",
    description: "Convert between measurement units for length, weight, temperature, and more.",
    longDescription: "Need to convert measurements quickly and accurately? Our unit conversion calculators handle length, weight, temperature, area, volume, speed, time, pressure, energy, and data storage conversions with precision. Whether you're working on a project, studying, or traveling, these tools make conversions effortless with instant results and clear formatting.",
    icon: "ArrowLeftRight",
    color: "#158A55",
    calculators: [
      "length-converter", "weight-converter", "temperature-converter",
      "area-converter", "volume-converter", "speed-converter",
      "time-converter", "pressure-converter", "energy-converter",
      "data-storage-converter"
    ]
  },
  {
    slug: "business",
    name: "Business Calculators",
    description: "Calculate profit margins, ROI, break-even points, and other business metrics.",
    longDescription: "Drive smarter business decisions with our professional calculators. From profit margin analysis to break-even calculations and payroll management, our tools help entrepreneurs, managers, and business students make data-driven decisions. Each calculator includes detailed explanations of business concepts to enhance your financial literacy and decision-making capabilities.",
    icon: "Briefcase",
    color: "#1F6F42",
    calculators: [
      "profit-margin-calculator", "break-even-calculator", "roi-calculator",
      "sales-tax-calculator", "commission-calculator", "pricing-calculator",
      "payroll-calculator", "inventory-turnover-calculator",
      "invoice-calculator", "markup-calculator"
    ]
  },
  {
    slug: "real-estate",
    name: "Real Estate Calculators",
    description: "Plan your property purchase with mortgage, EMI, stamp duty, and rental yield calculators.",
    longDescription: "Navigate the real estate market with confidence using our specialized calculators. Whether you're buying your first home, evaluating investment properties, or comparing rent vs. buy scenarios, our tools provide comprehensive financial analysis. Each calculator includes market-relevant formulas and detailed explanations to help you make the best property decisions.",
    icon: "Home",
    color: "#185C3A",
    calculators: [
      "home-loan-emi-calculator", "mortgage-calculator",
      "down-payment-calculator", "rent-vs-buy-calculator",
      "property-tax-calculator", "stamp-duty-calculator",
      "rental-yield-calculator", "construction-cost-calculator",
      "affordability-calculator", "land-area-converter"
    ]
  },
  {
    slug: "lifestyle",
    name: "Lifestyle Calculators",
    description: "Calculate tips, fuel costs, age, dates, and everyday lifestyle measurements.",
    longDescription: "Simplify your daily life with our practical lifestyle calculators. From calculating restaurant tips to planning trip budgets, tracking electricity bills, and managing your sleep schedule, these tools handle the everyday calculations that make life easier. Each calculator is designed for quick use with clear, easy-to-understand results and helpful tips.",
    icon: "Sparkles",
    color: "#3BA571",
    calculators: [
      "age-calculator", "date-difference-calculator", "tip-calculator",
      "fuel-cost-calculator", "trip-budget-calculator", "sleep-calculator",
      "birthday-countdown-calculator", "love-percentage-calculator",
      "electricity-bill-calculator", "time-zone-converter"
    ]
  },
  {
    slug: "tech",
    name: "Tech Calculators",
    description: "Calculate internet speed, download times, bandwidth, IP subnets, and more.",
    longDescription: "Empower your tech journey with our specialized technology calculators. Whether you're optimizing internet bandwidth, planning file transfers, working with screen resolutions, or managing network configurations, our tools provide precise calculations. Each calculator is designed for both tech enthusiasts and professionals, with clear explanations of technical concepts.",
    icon: "Monitor",
    color: "#249460",
    calculators: [
      "internet-speed-calculator", "download-time-calculator",
      "bandwidth-calculator", "file-size-calculator",
      "screen-size-calculator", "aspect-ratio-calculator",
      "binary-to-decimal-calculator", "decimal-to-binary-calculator",
      "ip-subnet-calculator", "compression-ratio-calculator"
    ]
  },
  {
    slug: "construction",
    name: "Construction Calculators",
    description: "Estimate materials, costs, and measurements for construction and renovation projects.",
    longDescription: "Plan your construction projects with precision using our comprehensive calculators. From concrete volume estimation to paint coverage calculations, our tools help contractors, architects, and DIY enthusiasts accurately estimate materials and costs. Each calculator uses industry-standard formulas and provides detailed breakdowns to ensure accurate project planning and budgeting.",
    icon: "Hammer",
    color: "#145E38",
    calculators: [
      "concrete-calculator", "cement-calculator", "brick-calculator",
      "paint-calculator", "tile-calculator", "steel-weight-calculator",
      "plaster-calculator", "flooring-calculator",
      "stair-calculator", "tank-volume-calculator"
    ]
  }
];

export const getCategoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const getAllCalculatorSlugs = () =>
  categories.flatMap((c) =>
    c.calculators.map((calc) => ({
      category: c.slug,
      calculator: calc,
    }))
  );
