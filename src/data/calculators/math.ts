import { CalculatorMeta } from "./types";

export const mathCalculators: CalculatorMeta[] = [
  {
    slug: "percentage-increase-calculator",
    title: "Percentage Increase Calculator",
    category: "Math",
    categorySlug: "math",
    description: "Calculate the percentage increase between two values with step-by-step explanation.",
    longDescription: "Our Percentage Increase Calculator helps you determine the percentage growth between two values. Whether you're analyzing sales growth, price increases, population changes, or any metric that has gone up, this tool provides the exact percentage increase along with the amount of increase. Understanding percentage changes is fundamental in math, finance, and data analysis.",
    inputs: [
      { id: "original", label: "Original Value", type: "number", placeholder: "e.g. 50", min: 0 },
      { id: "new", label: "New Value", type: "number", placeholder: "e.g. 75", min: 0 }
    ],
    formula: "% Increase = ((New - Original) / Original) × 100",
    formulaExplanation: "The percentage increase is calculated by finding the difference between the new and original values, dividing by the original value, and multiplying by 100.",
    howToUse: [
      "Enter the original (starting) value",
      "Enter the new (final) value",
      "View the absolute increase and percentage increase"
    ],
    example: {
      description: "Price increased from ₹50 to ₹75:",
      inputs: { original: 50, new: 75 },
      result: "Absolute Increase: ₹25 | Percentage Increase: 50%"
    },
    benefits: [
      "Analyze growth trends",
      "Compare price changes",
      "Track performance improvements",
      "Essential for data analysis"
    ],
    faqs: [
      { question: "What if the original value is zero?", answer: "Percentage increase from zero is undefined because division by zero is not possible. In such cases, you can describe the change as an absolute amount or use alternative metrics." }
    ],
    relatedSlugs: ["percentage-decrease-calculator", "percentage-calculator", "profit-and-loss-calculator", "roi-calculator"],
    icon: "TrendingUp",
    keywords: ["percentage increase calculator", "percent increase", "growth rate calculator", "percentage change"]
  },
  {
    slug: "percentage-decrease-calculator",
    title: "Percentage Decrease Calculator",
    category: "Math",
    categorySlug: "math",
    description: "Calculate the percentage decrease between two values accurately.",
    longDescription: "Our Percentage Decrease Calculator determines the exact percentage drop between two values. Useful for analyzing price reductions, weight loss, sales decline, and any scenario where a value has decreased. Get instant results with clear step-by-step explanations of how the calculation works.",
    inputs: [
      { id: "original", label: "Original Value", type: "number", placeholder: "e.g. 100", min: 0 },
      { id: "new", label: "New Value", type: "number", placeholder: "e.g. 75", min: 0 }
    ],
    formula: "% Decrease = ((Original - New) / Original) × 100",
    formulaExplanation: "The percentage decrease is calculated by finding the difference between the original and new values, dividing by the original value, and multiplying by 100.",
    howToUse: [
      "Enter the original (starting) value",
      "Enter the new (current) value",
      "View the absolute decrease and percentage decrease"
    ],
    example: {
      description: "Price decreased from ₹100 to ₹75:",
      inputs: { original: 100, new: 75 },
      result: "Absolute Decrease: ₹25 | Percentage Decrease: 25%"
    },
    benefits: [
      "Track price reductions",
      "Analyze decline trends",
      "Measure efficiency improvements",
      "Essential for financial analysis"
    ],
    faqs: [
      { question: "How is percentage decrease different from percentage increase?", answer: "Percentage decrease uses the original value as the numerator (Original - New), while increase uses the difference divided by the original. Both divide by the original value but measure opposite directions of change." }
    ],
    relatedSlugs: ["percentage-increase-calculator", "percentage-calculator", "discount-calculator", "profit-and-loss-calculator"],
    icon: "TrendingDown",
    keywords: ["percentage decrease calculator", "percent decrease", "percentage drop", "decline calculator"]
  },
  {
    slug: "profit-and-loss-calculator",
    title: "Profit and Loss Calculator",
    category: "Math",
    categorySlug: "math",
    description: "Calculate profit, loss, profit percentage, and loss percentage on any transaction.",
    longDescription: "Our Profit and Loss Calculator helps you compute profit or loss amount and percentage on any business transaction. Enter the cost price and selling price to instantly see whether you made a profit or loss, and by how much. Essential for students learning profit & loss concepts and for business owners tracking their margins.",
    inputs: [
      { id: "costPrice", label: "Cost Price (CP)", type: "number", placeholder: "e.g. 500", unit: "₹", min: 0 },
      { id: "sellingPrice", label: "Selling Price (SP)", type: "number", placeholder: "e.g. 650", unit: "₹", min: 0 }
    ],
    formula: "Profit = SP - CP | Profit % = (Profit / CP) × 100",
    formulaExplanation: "If SP > CP, it's a profit. If CP > SP, it's a loss. The percentage is always calculated relative to the cost price.",
    howToUse: [
      "Enter the cost price (purchase price)",
      "Enter the selling price",
      "View profit/loss amount and percentage"
    ],
    example: {
      description: "Bought at ₹500, sold at ₹650:",
      inputs: { costPrice: 500, sellingPrice: 650 },
      result: "Profit: ₹150 | Profit %: 30%"
    },
    benefits: [
      "Quick profit/loss calculation",
      "Business transaction analysis",
      "Educational tool for students",
      "Margin tracking for sellers"
    ],
    faqs: [
      { question: "How do I find the selling price for a desired profit?", answer: "SP = CP × (1 + Profit%/100). For example, to make 20% profit on ₹500 cost: SP = 500 × 1.20 = ₹600." },
      { question: "Can profit percentage be more than 100%?", answer: "Yes. If you sell something for more than double the cost price, the profit percentage exceeds 100%. For example, CP ₹100 and SP ₹250 gives 150% profit." }
    ],
    relatedSlugs: ["percentage-calculator", "markup-calculator", "discount-calculator", "roi-calculator"],
    icon: "BadgeDollarSign",
    keywords: ["profit and loss calculator", "P&L calculator", "profit percentage", "loss calculator"]
  },
  {
    slug: "ratio-calculator",
    title: "Ratio Calculator",
    category: "Math",
    categorySlug: "math",
    description: "Simplify ratios, find equivalent ratios, and divide quantities in a given ratio.",
    longDescription: "Our Ratio Calculator helps you simplify ratios to their lowest terms, find equivalent ratios, and divide quantities proportionally. Whether you're solving math problems, dividing expenses, or scaling recipes, this tool makes ratio calculations effortless. Enter two or more values to get simplified ratios instantly.",
    inputs: [
      { id: "value1", label: "Value A", type: "number", placeholder: "e.g. 12", min: 0 },
      { id: "value2", label: "Value B", type: "number", placeholder: "e.g. 8", min: 0 },
      { id: "total", label: "Divide Total (optional)", type: "number", placeholder: "e.g. 100", unit: "₹", min: 0 }
    ],
    formula: "Ratio = A : B (simplified by GCD)",
    formulaExplanation: "Both values are divided by their Greatest Common Divisor (GCD) to get the simplest form. If a total is provided, each part is calculated as: Part = (Value / Sum) × Total.",
    howToUse: [
      "Enter the two values for the ratio",
      "Optionally enter a total amount to divide",
      "View the simplified ratio and proportional amounts"
    ],
    example: {
      description: "Ratio of 12:8, dividing ₹100:",
      inputs: { value1: 12, value2: 8, total: 100 },
      result: "Simplified Ratio: 3:2 | Part A: ₹60 | Part B: ₹40"
    },
    benefits: [
      "Simplify complex ratios",
      "Divide amounts proportionally",
      "Find equivalent ratios",
      "Useful for math and real-life problems"
    ],
    faqs: [
      { question: "How do I simplify a ratio?", answer: "Find the GCD of both numbers and divide both by it. For example, 12:8 → GCD is 4 → 3:2. Or use our calculator for instant simplification." }
    ],
    relatedSlugs: ["fraction-calculator", "percentage-calculator", "lcm-calculator", "hcf-calculator"],
    icon: "Divide",
    keywords: ["ratio calculator", "ratio simplifier", "proportion calculator", "divide in ratio"]
  },
  {
    slug: "fraction-calculator",
    title: "Fraction Calculator",
    category: "Math",
    categorySlug: "math",
    description: "Add, subtract, multiply, and divide fractions with step-by-step solutions.",
    longDescription: "Our Fraction Calculator performs all four basic operations on fractions with detailed step-by-step solutions. Enter two fractions and select the operation to see the result in both fraction and decimal form. Perfect for students learning fraction arithmetic and anyone who needs quick fraction calculations.",
    inputs: [
      { id: "num1", label: "Numerator 1", type: "number", placeholder: "e.g. 3", min: 0 },
      { id: "den1", label: "Denominator 1", type: "number", placeholder: "e.g. 4", min: 1 },
      { id: "operation", label: "Operation", type: "select", options: [
        { value: "add", label: "+" }, { value: "subtract", label: "−" },
        { value: "multiply", label: "×" }, { value: "divide", label: "÷" }
      ] },
      { id: "num2", label: "Numerator 2", type: "number", placeholder: "e.g. 2", min: 0 },
      { id: "den2", label: "Denominator 2", type: "number", placeholder: "e.g. 3", min: 1 }
    ],
    formula: "a/b + c/d = (ad + bc) / bd",
    formulaExplanation: "For addition/subtraction: find common denominator. For multiplication: multiply numerators and denominators. For division: multiply by the reciprocal of the second fraction.",
    howToUse: [
      "Enter the first fraction (numerator and denominator)",
      "Select the operation (+, −, ×, ÷)",
      "Enter the second fraction",
      "View the result as a fraction and decimal"
    ],
    example: {
      description: "3/4 + 2/3:",
      inputs: { num1: 3, den1: 4, operation: "add", num2: 2, den2: 3 },
      result: "3/4 + 2/3 = 17/12 = 1.4167"
    },
    benefits: [
      "Perform all fraction operations",
      "Step-by-step solutions",
      "Automatic simplification",
      "Shows fraction and decimal forms"
    ],
    faqs: [
      { question: "How do I add fractions with different denominators?", answer: "Find the Least Common Multiple (LCM) of the denominators. Convert both fractions to have this common denominator, then add the numerators. For example: 1/3 + 1/4 = 4/12 + 3/12 = 7/12." }
    ],
    relatedSlugs: ["decimal-to-fraction-calculator", "ratio-calculator", "lcm-calculator", "hcf-calculator"],
    icon: "Calculator",
    keywords: ["fraction calculator", "add fractions", "multiply fractions", "fraction math"]
  },
  {
    slug: "lcm-calculator",
    title: "LCM Calculator",
    category: "Math",
    categorySlug: "math",
    description: "Find the Least Common Multiple (LCM) of two or more numbers instantly.",
    longDescription: "Our LCM Calculator finds the smallest positive number that is divisible by two or more given numbers. The LCM is essential for adding fractions with different denominators, solving scheduling problems, and various mathematical applications. Enter any two numbers to get their LCM with a clear explanation.",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", placeholder: "e.g. 12", min: 1 },
      { id: "num2", label: "Number 2", type: "number", placeholder: "e.g. 18", min: 1 }
    ],
    formula: "LCM(a,b) = |a × b| / GCD(a,b)",
    formulaExplanation: "The LCM of two numbers is the smallest number that both divide into evenly. It can be calculated using the relationship: LCM = Product / GCD, where GCD is the Greatest Common Divisor.",
    howToUse: [
      "Enter the first positive integer",
      "Enter the second positive integer",
      "View the LCM and GCD of the two numbers"
    ],
    example: {
      description: "LCM of 12 and 18:",
      inputs: { num1: 12, num2: 18 },
      result: "LCM: 36 | GCD: 6"
    },
    benefits: [
      "Instant LCM calculation",
      "Also shows GCD for reference",
      "Useful for fraction operations",
      "Solves scheduling and timing problems"
    ],
    faqs: [
      { question: "What is LCM used for?", answer: "LCM is used to find common denominators for fractions, solve problems involving repeated events (like two trains departing at different intervals), and in various algebra and number theory applications." }
    ],
    relatedSlugs: ["hcf-calculator", "fraction-calculator", "ratio-calculator", "percentage-calculator"],
    icon: "Grid3x3",
    keywords: ["LCM calculator", "least common multiple", "LCM of two numbers", "LCM formula"]
  },
  {
    slug: "hcf-calculator",
    title: "HCF/GCD Calculator",
    category: "Math",
    categorySlug: "math",
    description: "Find the Highest Common Factor (HCF) or Greatest Common Divisor (GCD) of numbers.",
    longDescription: "Our HCF/GCD Calculator finds the largest number that divides two or more numbers without leaving a remainder. The HCF (also called GCD - Greatest Common Divisor) is fundamental in simplifying fractions, factoring expressions, and solving various mathematical problems.",
    inputs: [
      { id: "num1", label: "Number 1", type: "number", placeholder: "e.g. 24", min: 1 },
      { id: "num2", label: "Number 2", type: "number", placeholder: "e.g. 36", min: 1 }
    ],
    formula: "GCD using Euclidean algorithm",
    formulaExplanation: "The Euclidean algorithm repeatedly divides the larger number by the smaller and takes the remainder, continuing until the remainder is 0. The last non-zero remainder is the GCD.",
    howToUse: [
      "Enter the first positive integer",
      "Enter the second positive integer",
      "View the HCF/GCD and LCM"
    ],
    example: {
      description: "HCF of 24 and 36:",
      inputs: { num1: 24, num2: 36 },
      result: "HCF/GCD: 12 | LCM: 72"
    },
    benefits: [
      "Simplify fractions quickly",
      "Factor algebraic expressions",
      "Solve number theory problems",
      "Find common divisors"
    ],
    faqs: [
      { question: "What's the difference between HCF and GCD?", answer: "HCF (Highest Common Factor) and GCD (Greatest Common Divisor) are the same concept. HCF is commonly used in British/Indian English, while GCD is more common in American English." }
    ],
    relatedSlugs: ["lcm-calculator", "fraction-calculator", "ratio-calculator", "square-root-calculator"],
    icon: "LayoutGrid",
    keywords: ["HCF calculator", "GCD calculator", "greatest common divisor", "highest common factor"]
  },
  {
    slug: "decimal-to-fraction-calculator",
    title: "Decimal to Fraction Calculator",
    category: "Math",
    categorySlug: "math",
    description: "Convert any decimal number to its equivalent fraction in simplest form.",
    longDescription: "Our Decimal to Fraction Calculator converts decimal numbers to their fraction equivalents in simplest form. Enter any decimal — terminating or repeating — and see the conversion with a clear step-by-step explanation. Understand the relationship between decimals and fractions with this essential math tool.",
    inputs: [
      { id: "decimal", label: "Decimal Number", type: "number", placeholder: "e.g. 0.75", step: 0.0001 }
    ],
    formula: "Decimal = Numerator / Denominator",
    formulaExplanation: "The decimal is converted to a fraction by placing the decimal digits over the appropriate power of 10, then simplifying using GCD. For example, 0.75 = 75/100 = 3/4.",
    howToUse: [
      "Enter the decimal number",
      "View the fraction form and simplified fraction",
      "See the conversion steps"
    ],
    example: {
      description: "Convert 0.75 to fraction:",
      inputs: { decimal: 0.75 },
      result: "Fraction: 75/100 = 3/4"
    },
    benefits: [
      "Instant decimal to fraction conversion",
      "Automatic simplification",
      "Step-by-step conversion process",
      "Useful for math homework and cooking"
    ],
    faqs: [
      { question: "Can all decimals be converted to fractions?", answer: "Yes, all decimals can be expressed as fractions. Terminating decimals (like 0.75) are straightforward. Repeating decimals (like 0.333...) also convert to fractions but require a specific method." },
      { question: "How do I convert a repeating decimal to a fraction?", answer: "For 0.333..., let x = 0.333... Then 10x = 3.333... Subtracting: 10x - x = 3, so 9x = 3, therefore x = 3/9 = 1/3." }
    ],
    relatedSlugs: ["fraction-calculator", "ratio-calculator", "percentage-calculator", "square-root-calculator"],
    icon: "ArrowUpDown",
    keywords: ["decimal to fraction calculator", "decimal converter", "decimal to fraction", "0.75 as fraction"]
  },
  {
    slug: "square-root-calculator",
    title: "Square Root Calculator",
    category: "Math",
    categorySlug: "math",
    description: "Calculate the square root of any number with precision and see the step-by-step process.",
    longDescription: "Our Square Root Calculator computes the square root of any positive number with high precision. Whether you're solving math problems, working on geometry, or need quick square root calculations for any purpose, this tool provides instant results along with information about whether the result is a perfect square or irrational.",
    inputs: [
      { id: "number", label: "Number", type: "number", placeholder: "e.g. 144", min: 0 }
    ],
    formula: "√n = n^(1/2)",
    formulaExplanation: "The square root of a number n is the value that, when multiplied by itself, gives n. For example, √144 = 12 because 12 × 12 = 144.",
    howToUse: [
      "Enter the number you want to find the square root of",
      "View the square root result",
      "See whether it's a perfect square"
    ],
    example: {
      description: "Square root of 144:",
      inputs: { number: 144 },
      result: "√144 = 12 (Perfect Square)"
    },
    benefits: [
      "Calculate square roots instantly",
      "Identify perfect squares",
      "High precision results",
      "Useful for geometry and algebra"
    ],
    faqs: [
      { question: "Can you take the square root of a negative number?", answer: "In real numbers, no. The square root of a negative number involves imaginary numbers. √(-1) = i, the imaginary unit. Our calculator works with non-negative real numbers." },
      { question: "What are perfect squares?", answer: "Perfect squares are numbers that are the square of an integer: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, etc. Their square roots are whole numbers." }
    ],
    relatedSlugs: ["scientific-calculator", "decimal-to-fraction-calculator", "fraction-calculator", "ratio-calculator"],
    icon: "Hash",
    keywords: ["square root calculator", "sqrt calculator", "square root of", "find square root"]
  },
  {
    slug: "scientific-calculator",
    title: "Scientific Calculator",
    category: "Math",
    categorySlug: "math",
    description: "Perform advanced math operations including trigonometry, logarithms, and exponentials.",
    longDescription: "Our Scientific Calculator handles advanced mathematical operations including trigonometric functions (sin, cos, tan), logarithms, exponentials, roots, powers, and factorial calculations. Perfect for students studying advanced math, physics, and engineering. All results include the formula used for educational clarity.",
    inputs: [
      { id: "operation", label: "Operation", type: "select", options: [
        { value: "sin", label: "sin(x)" }, { value: "cos", label: "cos(x)" },
        { value: "tan", label: "tan(x)" }, { value: "log", label: "log₁₀(x)" },
        { value: "ln", label: "ln(x)" }, { value: "sqrt", label: "√x" },
        { value: "power", label: "x^y" }, { value: "factorial", label: "x!" },
        { value: "abs", label: "|x|" }, { value: "exp", label: "e^x" }
      ] },
      { id: "value1", label: "Value (x)", type: "number", placeholder: "e.g. 30", min: 0 },
      { id: "value2", label: "Value (y) for x^y", type: "number", placeholder: "e.g. 3", min: 0 }
    ],
    formula: "Various mathematical functions",
    formulaExplanation: "Each operation uses its respective mathematical formula. Trig functions accept degrees by default. Factorial is defined for non-negative integers only.",
    howToUse: [
      "Select the mathematical operation",
      "Enter the input value(s)",
      "View the result and the formula used"
    ],
    example: {
      description: "Calculate sin(30°):",
      inputs: { operation: "sin", value1: 30 },
      result: "sin(30°) = 0.5"
    },
    benefits: [
      "Advanced mathematical operations",
      "Trigonometric functions in degrees",
      "Logarithmic and exponential functions",
      "Factorial and power calculations"
    ],
    faqs: [
      { question: "What angle mode does the calculator use?", answer: "This calculator uses degrees by default. To convert: radians = degrees × π/180. For example, 90° = π/2 ≈ 1.5708 radians." },
      { question: "What is log vs ln?", answer: "log is the base-10 logarithm (common log), while ln is the base-e logarithm (natural log). log(100) = 2 because 10² = 100. ln(2.718) ≈ 1 because e¹ ≈ 2.718." }
    ],
    relatedSlugs: ["square-root-calculator", "fraction-calculator", "percentage-calculator", "lcm-calculator"],
    icon: "Microscope",
    keywords: ["scientific calculator", "trig calculator", "log calculator", "math calculator"]
  }
];
