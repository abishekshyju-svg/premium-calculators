import { CalculatorMeta } from "./types";

export const realEstateCalculators: CalculatorMeta[] = [
  {
    slug: "home-loan-emi-calculator",
    title: "Home Loan EMI Calculator",
    category: "Real Estate",
    categorySlug: "real-estate",
    description: "Calculate your home loan EMI with detailed amortization and total interest breakdown.",
    longDescription: "Our Home Loan EMI Calculator provides a comprehensive analysis of your home loan payments including monthly EMI, total interest payable, and a year-by-year amortization schedule. Make informed decisions about your home purchase by understanding the true cost of your home loan.",
    inputs: [
      { id: "principal", label: "Loan Amount", type: "number", placeholder: "e.g. 5000000", unit: "₹", min: 10000 },
      { id: "rate", label: "Interest Rate", type: "number", placeholder: "e.g. 8.5", unit: "%", min: 1, max: 30, step: 0.1 },
      { id: "tenure", label: "Loan Tenure", type: "number", placeholder: "e.g. 20", unit: "years", min: 1, max: 30 }
    ],
    formula: "EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)",
    formulaExplanation: "Standard EMI formula where P is loan amount, r is monthly interest rate, and n is total months. The calculator also generates an amortization schedule showing principal and interest split for each payment.",
    howToUse: ["Enter the home loan amount", "Enter the interest rate", "Choose loan tenure in years", "View EMI, total interest, and amortization schedule"],
    example: { description: "₹50,00,000 at 8.5% for 20 years:", inputs: { principal: 5000000, rate: 8.5, tenure: 20 }, result: "Monthly EMI: ₹43,391 | Total Interest: ₹54,13,848 | Total Payment: ₹1,04,13,848" },
    benefits: ["Comprehensive home loan analysis", "Year-by-year amortization", "Compare different loan offers", "Plan prepayment strategies"],
    faqs: [
      { question: "Should I choose a longer tenure for lower EMI?", answer: "A longer tenure reduces EMI but significantly increases total interest. A ₹50L loan at 8.5% costs ₹54L more in interest over 20 years vs 15 years. Choose the highest EMI you can comfortably afford." },
      { question: "How does prepayment help?", answer: "Prepaying even small amounts regularly can save lakhs in interest and reduce tenure by years. Even ₹5,000 extra monthly can save 3-5 years on a 20-year home loan." }
    ],
    relatedSlugs: ["mortgage-calculator", "emi-calculator", "affordability-calculator", "down-payment-calculator"],
    icon: "Home",
    keywords: ["home loan EMI calculator", "home loan calculator", "housing loan EMI", "mortgage calculator"]
  },
  {
    slug: "mortgage-calculator",
    title: "Mortgage Calculator",
    category: "Real Estate",
    categorySlug: "real-estate",
    description: "Calculate monthly mortgage payments with principal, interest, taxes, and insurance (PITI).",
    longDescription: "Our Mortgage Calculator computes your total monthly housing payment including principal, interest, property taxes, and insurance (PITI). This comprehensive view helps you understand the true monthly cost of homeownership and plan your budget accordingly.",
    inputs: [
      { id: "loanAmount", label: "Loan Amount", type: "number", placeholder: "e.g. 300000", unit: "$", min: 1000 },
      { id: "rate", label: "Interest Rate", type: "number", placeholder: "e.g. 6.5", unit: "%", min: 1, max: 20, step: 0.1 },
      { id: "years", label: "Loan Term", type: "number", placeholder: "e.g. 30", unit: "years", min: 1, max: 50 },
      { id: "taxes", label: "Annual Property Tax", type: "number", placeholder: "e.g. 3000", unit: "$", min: 0, defaultValue: 0 },
      { id: "insurance", label: "Annual Insurance", type: "number", placeholder: "e.g. 1200", unit: "$", min: 0, defaultValue: 0 }
    ],
    formula: "P&I = P × r(1+r)^n / ((1+r)^n - 1)",
    formulaExplanation: "The calculator computes P&I using standard mortgage formula, then adds annual property tax and insurance divided by 12 for the total PITI payment.",
    howToUse: ["Enter the mortgage loan amount", "Enter interest rate and term", "Add property tax and insurance estimates", "View total monthly payment and breakdown"],
    example: { description: "$300,000 at 6.5% for 30 years, $3,000 tax, $1,200 insurance:", inputs: { loanAmount: 300000, rate: 6.5, years: 30, taxes: 3000, insurance: 1200 }, result: "P&I: $1,896 | Tax: $250 | Insurance: $100 | Total PITI: $2,246/month" },
    benefits: ["Complete payment breakdown", "PITI calculation", "Budget planning tool", "Compare mortgage options"],
    faqs: [
      { question: "What is PITI?", answer: "PITI stands for Principal, Interest, Taxes, and Insurance — the four components of your total monthly housing payment. Lenders use PITI to determine your debt-to-income ratio." }
    ],
    relatedSlugs: ["home-loan-emi-calculator", "down-payment-calculator", "affordability-calculator", "property-tax-calculator"],
    icon: "Building2",
    keywords: ["mortgage calculator", "PITI calculator", "monthly mortgage payment", "home mortgage calculator"]
  },
  {
    slug: "down-payment-calculator",
    title: "Down Payment Calculator",
    category: "Real Estate",
    categorySlug: "real-estate",
    description: "Calculate the down payment needed and resulting loan amount for your home purchase.",
    longDescription: "Our Down Payment Calculator helps you determine how much you need to save for a down payment and how it affects your loan amount, EMI, and total interest. Understand the impact of different down payment percentages on your overall home buying cost.",
    inputs: [
      { id: "homePrice", label: "Home Price", type: "number", placeholder: "e.g. 5000000", unit: "₹", min: 1 },
      { id: "percent", label: "Down Payment %", type: "number", placeholder: "e.g. 20", unit: "%", min: 5, max: 100, step: 5, defaultValue: 20 },
      { id: "rate", label: "Loan Interest Rate", type: "number", placeholder: "e.g. 8.5", unit: "%", min: 1, max: 30, step: 0.1 },
      { id: "tenure", label: "Loan Tenure", type: "number", placeholder: "e.g. 20", unit: "years", min: 1, max: 30 }
    ],
    formula: "Down Payment = Home Price × Percentage",
    formulaExplanation: "The down payment is calculated as a percentage of the home price. The remaining amount becomes the loan. Higher down payments reduce loan amount, EMI, and total interest.",
    howToUse: ["Enter the total home price", "Choose your down payment percentage", "Enter loan interest rate and tenure", "View down payment amount, loan amount, and EMI"],
    example: { description: "₹50,00,000 home, 20% down payment, 8.5% interest, 20 years:", inputs: { homePrice: 5000000, percent: 20, rate: 8.5, tenure: 20 }, result: "Down Payment: ₹10,00,000 | Loan: ₹40,00,000 | EMI: ₹34,713" },
    benefits: ["Plan your savings target", "Compare down payment scenarios", "Understand EMI impact", "Reduce total interest cost"],
    faqs: [
      { question: "What is the ideal down payment percentage?", answer: "20% is standard for conventional loans and helps avoid PMI (private mortgage insurance). However, many programs allow 3-10% down. Higher down payments mean lower EMIs and interest." }
    ],
    relatedSlugs: ["home-loan-emi-calculator", "mortgage-calculator", "affordability-calculator", "savings-goal-calculator"],
    icon: "Wallet",
    keywords: ["down payment calculator", "home down payment", "down payment savings", "mortgage down payment"]
  },
  {
    slug: "rent-vs-buy-calculator",
    title: "Rent vs Buy Calculator",
    category: "Real Estate",
    categorySlug: "real-estate",
    description: "Compare the total cost of renting versus buying a home over your planned stay.",
    longDescription: "The age-old question: should you rent or buy? Our Rent vs Buy Calculator provides a comprehensive financial comparison considering rent payments, home loan costs, property appreciation, maintenance, and investment returns on the down payment.",
    inputs: [
      { id: "monthlyRent", label: "Monthly Rent", type: "number", placeholder: "e.g. 25000", unit: "₹", min: 1 },
      { id: "homePrice", label: "Home Purchase Price", type: "number", placeholder: "e.g. 5000000", unit: "₹", min: 1 },
      { id: "downPayment", label: "Down Payment %", type: "number", placeholder: "e.g. 20", unit: "%", min: 5, max: 100, defaultValue: 20 },
      { id: "loanRate", label: "Loan Interest Rate", type: "number", placeholder: "e.g. 8.5", unit: "%", min: 1, max: 30, step: 0.1 },
      { id: "years", label: "Years You'll Stay", type: "number", placeholder: "e.g. 10", unit: "years", min: 1, max: 50 },
      { id: "rentIncrease", label: "Annual Rent Increase", type: "number", placeholder: "e.g. 5", unit: "%", min: 0, max: 20, step: 0.5, defaultValue: 5 }
    ],
    formula: "Total Rent Cost vs Total Buy Cost (including opportunity cost of down payment)",
    formulaExplanation: "The calculator compares total rent paid over the period vs total cost of buying (EMI, property tax, maintenance, minus property appreciation and equity built).",
    howToUse: ["Enter monthly rent and home price", "Set financial parameters", "Choose your expected stay duration", "See which option is more cost-effective"],
    example: { description: "₹25,000 rent vs ₹50L home, 8.5% rate, 10 years:", inputs: { monthlyRent: 25000, homePrice: 5000000, downPayment: 20, loanRate: 8.5, years: 10, rentIncrease: 5 }, result: "Total Rent: ~₹39L | Total Buy Cost: ~₹62L | Recommendation: Renting is cheaper for 10 years" },
    benefits: ["Data-driven decision making", "Consider all hidden costs", "Account for opportunity cost", "Personalized recommendation"],
    faqs: [
      { question: "When does buying become better than renting?", answer: "Generally, buying becomes more cost-effective than renting after 5-7 years of stay, depending on the market. The longer you stay, the more buying makes financial sense." }
    ],
    relatedSlugs: ["home-loan-emi-calculator", "affordability-calculator", "down-payment-calculator", "mortgage-calculator"],
    icon: "GitCompare",
    keywords: ["rent vs buy calculator", "should I rent or buy", "renting vs buying home", "home buying calculator"]
  },
  {
    slug: "property-tax-calculator",
    title: "Property Tax Calculator",
    category: "Real Estate",
    categorySlug: "real-estate",
    description: "Estimate your annual property tax based on property value and local tax rates.",
    longDescription: "Our Property Tax Calculator helps you estimate your annual property tax liability based on your property's assessed value and the applicable tax rate. Property tax rates vary significantly by location, so use local rates for accurate estimates.",
    inputs: [
      { id: "value", label: "Property Value", type: "number", placeholder: "e.g. 5000000", unit: "₹", min: 1 },
      { id: "rate", label: "Tax Rate", type: "number", placeholder: "e.g. 1.5", unit: "%", min: 0, max: 10, step: 0.1 }
    ],
    formula: "Annual Tax = Property Value × Tax Rate / 100",
    formulaExplanation: "Property tax is calculated as a percentage of the assessed property value. Rates vary by municipality and property type.",
    howToUse: ["Enter the property value", "Enter the applicable property tax rate", "View annual and monthly tax estimates"],
    example: { description: "Property valued at ₹50,00,000 at 1.5% tax rate:", inputs: { value: 5000000, rate: 1.5 }, result: "Annual Tax: ₹75,000 | Monthly: ₹6,250" },
    benefits: ["Estimate tax liability", "Budget for property taxes", "Compare properties in different areas", "Plan annual expenses"],
    faqs: [
      { question: "How is property tax calculated in India?", answer: "Property tax in India is typically 0.5%-2% of the property's annual value or capital value, depending on the municipal corporation. Some states use rental value as the basis." }
    ],
    relatedSlugs: ["stamp-duty-calculator", "rental-yield-calculator", "affordability-calculator", "home-loan-emi-calculator"],
    icon: "Landmark",
    keywords: ["property tax calculator", "house tax calculator", "property tax rate", "annual property tax"]
  },
  {
    slug: "stamp-duty-calculator",
    title: "Stamp Duty Calculator",
    category: "Real Estate",
    categorySlug: "real-estate",
    description: "Calculate stamp duty and registration charges for property purchase in your state.",
    longDescription: "Our Stamp Duty Calculator estimates the stamp duty and registration charges payable during property registration. Stamp duty rates vary by state and property value, and this tool helps you budget for these additional costs when buying property.",
    inputs: [
      { id: "propertyValue", label: "Property Value", type: "number", placeholder: "e.g. 5000000", unit: "₹", min: 1 },
      { id: "stampRate", label: "Stamp Duty Rate", type: "number", placeholder: "e.g. 5", unit: "%", min: 0, max: 15, step: 0.1 },
      { id: "regRate", label: "Registration Rate", type: "number", placeholder: "e.g. 1", unit: "%", min: 0, max: 5, step: 0.1, defaultValue: 1 }
    ],
    formula: "Stamp Duty = Property Value × Rate / 100",
    formulaExplanation: "Stamp duty is a percentage of the property value paid to the state government during registration. Registration charges are additional fees for registering the property.",
    howToUse: ["Enter the property value", "Enter the state stamp duty rate", "Enter registration charges rate", "View total stamp duty, registration, and total cost"],
    example: { description: "Property ₹50L, 5% stamp duty, 1% registration:", inputs: { propertyValue: 5000000, stampRate: 5, regRate: 1 }, result: "Stamp Duty: ₹2,50,000 | Registration: ₹50,000 | Total: ₹3,00,000" },
    benefits: ["Budget for registration costs", "State-specific calculations", "Transparent cost breakdown", "Plan additional expenses"],
    faqs: [
      { question: "Do women get a stamp duty concession?", answer: "Many Indian states offer a 1-2% concession on stamp duty for female property buyers. For example, Maharashtra charges 5% for men but 4% for women." }
    ],
    relatedSlugs: ["property-tax-calculator", "home-loan-emi-calculator", "affordability-calculator", "construction-cost-calculator"],
    icon: "FileSignature",
    keywords: ["stamp duty calculator", "registration charges", "property registration cost", "stamp duty rates"]
  },
  {
    slug: "rental-yield-calculator",
    title: "Rental Yield Calculator",
    category: "Real Estate",
    categorySlug: "real-estate",
    description: "Calculate the rental yield of a property to evaluate your real estate investment returns.",
    longDescription: "Rental yield measures the annual rental income as a percentage of the property's value — a key metric for real estate investors. Our Rental Yield Calculator helps you assess whether a property is a good investment and compare yields across different properties.",
    inputs: [
      { id: "propertyValue", label: "Property Value", type: "number", placeholder: "e.g. 5000000", unit: "₹", min: 1 },
      { id: "monthlyRent", label: "Monthly Rent", type: "number", placeholder: "e.g. 25000", unit: "₹", min: 1 },
      { id: "vacancy", label: "Vacancy Rate (%)", type: "number", placeholder: "e.g. 5", unit: "%", min: 0, max: 50, step: 1, defaultValue: 5 }
    ],
    formula: "Gross Yield = (Annual Rent / Property Value) × 100",
    formulaExplanation: "Gross rental yield = (Monthly Rent × 12 / Property Value) × 100. Net yield also accounts for expenses like maintenance, vacancy, and property tax.",
    howToUse: ["Enter the property value", "Enter expected monthly rent", "Set vacancy rate estimate", "View gross and net rental yield"],
    example: { description: "₹50L property, ₹25,000 monthly rent, 5% vacancy:", inputs: { propertyValue: 5000000, monthlyRent: 25000, vacancy: 5 }, result: "Gross Yield: 6.0% | Net Yield (after vacancy): 5.7%" },
    benefits: ["Evaluate investment potential", "Compare properties objectively", "Understand return on investment", "Factor in vacancy risks"],
    faqs: [
      { question: "What is a good rental yield?", answer: "In India, a rental yield of 2-4% is typical in metro cities, while smaller cities may offer 4-6%. Commercial properties often yield 6-10%. Higher is generally better." }
    ],
    relatedSlugs: ["rent-vs-buy-calculator", "property-tax-calculator", "roi-calculator", "mortgage-calculator"],
    icon: "Building",
    keywords: ["rental yield calculator", "property yield", "rental return", "investment property calculator"]
  },
  {
    slug: "construction-cost-calculator",
    title: "Construction Cost Calculator",
    category: "Real Estate",
    categorySlug: "real-estate",
    description: "Estimate the total construction cost of building a house based on area and cost per sq ft.",
    longDescription: "Our Construction Cost Calculator provides a quick estimate of the total cost to build a house based on the built-up area and cost per square foot. This helps you plan your construction budget and understand the financial requirements of building your dream home.",
    inputs: [
      { id: "area", label: "Built-Up Area", type: "number", placeholder: "e.g. 1500", unit: "sq ft", min: 100 },
      { id: "rate", label: "Cost per Sq Ft", type: "number", placeholder: "e.g. 2000", unit: "₹/sq ft", min: 500, max: 10000 },
      { id: "floors", label: "Number of Floors", type: "number", placeholder: "e.g. 2", min: 1, max: 10, defaultValue: 1 }
    ],
    formula: "Total Cost = Area × Rate × Floors",
    formulaExplanation: "The total construction cost is estimated by multiplying the built-up area by the cost per square foot, adjusted for the number of floors. Multi-story buildings may have additional structural costs.",
    howToUse: ["Enter the total built-up area", "Enter the construction cost per sq ft", "Specify number of floors", "View estimated total construction cost"],
    example: { description: "1500 sq ft, ₹2,000/sq ft, 2 floors:", inputs: { area: 1500, rate: 2000, floors: 2 }, result: "Estimated Cost: ₹60,00,000" },
    benefits: ["Quick construction budget estimate", "Compare cost scenarios", "Plan financing requirements", "Set realistic expectations"],
    faqs: [
      { question: "What is included in construction cost?", answer: "Basic construction cost typically includes foundation, structure, walls, roofing, flooring, plumbing, electrical, and basic finishing. Land, registration, interior design, and landscaping are usually additional." }
    ],
    relatedSlugs: ["concrete-calculator", "cement-calculator", "brick-calculator", "tile-calculator"],
    icon: "HardHat",
    keywords: ["construction cost calculator", "house construction cost", "building cost calculator", "construction estimate"]
  },
  {
    slug: "affordability-calculator",
    title: "Affordability Calculator",
    category: "Real Estate",
    categorySlug: "real-estate",
    description: "Determine the maximum home price you can afford based on income and expenses.",
    longDescription: "Our Affordability Calculator helps you determine the maximum home price you can comfortably afford based on your income, existing debts, and desired loan terms. This prevents overextending yourself financially and helps you find homes within your realistic budget.",
    inputs: [
      { id: "income", label: "Annual Income", type: "number", placeholder: "e.g. 1200000", unit: "₹", min: 1 },
      { id: "monthlyDebt", label: "Monthly Debt Payments", type: "number", placeholder: "e.g. 10000", unit: "₹", min: 0, defaultValue: 0 },
      { id: "rate", label: "Loan Interest Rate", type: "number", placeholder: "e.g. 8.5", unit: "%", min: 1, max: 30, step: 0.1 },
      { id: "tenure", label: "Loan Tenure", type: "number", placeholder: "e.g. 20", unit: "years", min: 1, max: 30 },
      { id: "dti", label: "Max DTI Ratio (%)", type: "number", placeholder: "e.g. 40", unit: "%", min: 20, max: 70, step: 5, defaultValue: 40 }
    ],
    formula: "Max EMI = (Monthly Income × DTI/100) - Existing EMIs",
    formulaExplanation: "The DTI (Debt-to-Income) ratio determines the maximum percentage of income that can go toward debt payments. The max affordable home price is then calculated by reversing the EMI formula.",
    howToUse: ["Enter your annual income", "Add existing monthly debt payments", "Set interest rate and tenure", "Adjust the DTI ratio if needed", "View maximum affordable home price"],
    example: { description: "₹12L annual income, ₹10K existing debt, 8.5%, 20 years:", inputs: { income: 1200000, monthlyDebt: 10000, rate: 8.5, tenure: 20, dti: 40 }, result: "Max Monthly EMI: ₹30,000 | Affordable Home Price: ~₹34,55,584" },
    benefits: ["Know your budget before house hunting", "Avoid overextending financially", "Plan down payment savings", "Realistic property search"],
    faqs: [
      { question: "What is the ideal DTI ratio?", answer: "Most financial advisors recommend keeping your DTI ratio below 36-40%. Some lenders allow up to 50%, but lower is better for financial health." }
    ],
    relatedSlugs: ["home-loan-emi-calculator", "down-payment-calculator", "rent-vs-buy-calculator", "mortgage-calculator"],
    icon: "Scale",
    keywords: ["affordability calculator", "home affordability", "how much house can I afford", "home budget calculator"]
  },
  {
    slug: "land-area-converter",
    title: "Land Area Converter",
    category: "Real Estate",
    categorySlug: "real-estate",
    description: "Convert between acres, hectares, sq ft, sq m, and local land measurement units.",
    longDescription: "Our Land Area Converter supports all common land measurement units including acres, hectares, square feet, square meters, bigha, guntha, and other regional units. Essential for real estate transactions, land measurement, and property documentation.",
    inputs: [
      { id: "value", label: "Area Value", type: "number", placeholder: "e.g. 1000", min: 0 },
      { id: "from", label: "From", type: "select", options: [
        { value: "sqft", label: "Square Feet" }, { value: "sqm", label: "Square Meters" },
        { value: "acre", label: "Acres" }, { value: "ha", label: "Hectares" },
        { value: "bigha", label: "Bigha" }, { value: "guntha", label: "Guntha" },
        { value: "sqyd", label: "Square Yards" }, { value: "marla", label: "Marla" }
      ] },
      { id: "to", label: "To", type: "select", options: [
        { value: "sqft", label: "Square Feet" }, { value: "sqm", label: "Square Meters" },
        { value: "acre", label: "Acres" }, { value: "ha", label: "Hectares" },
        { value: "bigha", label: "Bigha" }, { value: "guntha", label: "Guntha" },
        { value: "sqyd", label: "Square Yards" }, { value: "marla", label: "Marla" }
      ] }
    ],
    formula: "Varies by unit pair — uses sq ft as base",
    formulaExplanation: "All conversions go through square feet as the base unit using regional conversion factors.",
    howToUse: ["Enter the land area value", "Select the source unit", "Select the target unit", "View the converted result"],
    example: { description: "Convert 1 acre to square feet:", inputs: { value: 1, from: "acre", to: "sqft" }, result: "1 acre = 43,560 sq ft" },
    benefits: ["Support for Indian land units", "International unit support", "Real estate transactions", "Property documentation"],
    faqs: [
      { question: "How many square feet in 1 bigha?", answer: "1 bigha varies by state: In Uttar Pradesh it's 2,700 sq ft, in Rajasthan 2,722 sq ft, in Bihar 2,500 sq ft. Always verify the local standard." }
    ],
    relatedSlugs: ["area-converter", "tile-calculator", "flooring-calculator", "paint-calculator"],
    icon: "Map",
    keywords: ["land area converter", "acre to sq ft", "bigha converter", "land measurement"]
  }
];
