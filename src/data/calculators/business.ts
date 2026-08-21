import { CalculatorMeta } from "./types";

export const businessCalculators: CalculatorMeta[] = [
  {
    slug: "profit-margin-calculator",
    title: "Profit Margin Calculator",
    category: "Business",
    categorySlug: "business",
    description: "Calculate gross, operating, and net profit margins to analyze your business profitability.",
    longDescription: "Our Profit Margin Calculator helps you determine your business's profitability at different levels — gross, operating, and net margin. Understanding these metrics is crucial for business owners, managers, and investors to assess financial health and make strategic decisions.",
    inputs: [
      { id: "revenue", label: "Revenue", type: "number", placeholder: "e.g. 500000", unit: "₹", min: 1 },
      { id: "cogs", label: "Cost of Goods Sold (COGS)", type: "number", placeholder: "e.g. 300000", unit: "₹", min: 0 },
      { id: "expenses", label: "Operating Expenses", type: "number", placeholder: "e.g. 100000", unit: "₹", min: 0 },
      { id: "tax", label: "Taxes & Interest", type: "number", placeholder: "e.g. 25000", unit: "₹", min: 0 }
    ],
    formula: "Gross Margin = ((Revenue - COGS) / Revenue) × 100",
    formulaExplanation: "Gross margin excludes operating expenses. Operating margin also deducts operating expenses. Net margin deducts all costs including taxes and interest.",
    howToUse: ["Enter your total revenue", "Enter cost of goods sold", "Enter operating expenses", "Enter taxes and interest", "View all three margin types"],
    example: { description: "Revenue ₹5,00,000, COGS ₹3,00,000, Expenses ₹1,00,000, Tax ₹25,000:", inputs: { revenue: 500000, cogs: 300000, expenses: 100000, tax: 25000 }, result: "Gross Margin: 40% | Operating Margin: 20% | Net Margin: 15%" },
    benefits: ["Understand business profitability", "Compare with industry benchmarks", "Track margin trends over time", "Support strategic pricing decisions"],
    faqs: [
      { question: "What is a good profit margin?", answer: "It varies by industry. Generally, 10% net margin is healthy, 20% is very good, and 30%+ is excellent. Retail typically has lower margins (2-5%), while software can have 20-40%." }
    ],
    relatedSlugs: ["break-even-calculator", "roi-calculator", "pricing-calculator", "markup-calculator"],
    icon: "PieChart",
    keywords: ["profit margin calculator", "gross margin", "net margin", "business profitability"]
  },
  {
    slug: "break-even-calculator",
    title: "Break-Even Calculator",
    category: "Business",
    categorySlug: "business",
    description: "Determine the sales volume needed to cover all costs and reach break-even point.",
    longDescription: "Our Break-Even Calculator tells you exactly how many units you need to sell (or how much revenue you need to generate) to cover all your costs. This is essential for business planning, pricing decisions, and understanding the viability of your business model.",
    inputs: [
      { id: "fixedCosts", label: "Fixed Costs (monthly)", type: "number", placeholder: "e.g. 50000", unit: "₹", min: 0 },
      { id: "variableCost", label: "Variable Cost per Unit", type: "number", placeholder: "e.g. 150", unit: "₹", min: 0 },
      { id: "sellingPrice", label: "Selling Price per Unit", type: "number", placeholder: "e.g. 300", unit: "₹", min: 1 }
    ],
    formula: "Break-Even Units = Fixed Costs / (Selling Price - Variable Cost per Unit)",
    formulaExplanation: "The contribution margin (selling price minus variable cost) must cover all fixed costs. Break-even is reached when total contribution equals total fixed costs.",
    howToUse: ["Enter your total monthly fixed costs", "Enter variable cost per unit", "Enter selling price per unit", "View break-even units and revenue"],
    example: { description: "Fixed costs ₹50,000, variable ₹150/unit, selling at ₹300/unit:", inputs: { fixedCosts: 50000, variableCost: 150, sellingPrice: 300 }, result: "Break-Even: 334 units | Break-Even Revenue: ₹1,00,000 | Contribution Margin: 50%" },
    benefits: ["Know minimum sales target", "Evaluate business viability", "Plan pricing strategy", "Set realistic revenue goals"],
    faqs: [
      { question: "How do I lower my break-even point?", answer: "Reduce fixed costs, lower variable costs per unit, or increase selling price. Each approach increases the contribution margin or reduces the amount needed to cover fixed costs." }
    ],
    relatedSlugs: ["pricing-calculator", "profit-margin-calculator", "roi-calculator", "markup-calculator"],
    icon: "Target",
    keywords: ["break-even calculator", "break even point", "break-even analysis", "business break even"]
  },
  {
    slug: "roi-calculator",
    title: "ROI Calculator",
    category: "Business",
    categorySlug: "business",
    description: "Calculate Return on Investment (ROI) to measure the profitability of your investments.",
    longDescription: "Our ROI Calculator measures the efficiency of an investment by comparing the return to the cost. Whether you're evaluating a business investment, marketing campaign, real estate purchase, or any financial commitment, ROI provides a clear percentage-based measure of success.",
    inputs: [
      { id: "invested", label: "Amount Invested", type: "number", placeholder: "e.g. 100000", unit: "₹", min: 1 },
      { id: "returned", label: "Amount Returned", type: "number", placeholder: "e.g. 150000", unit: "₹", min: 0 }
    ],
    formula: "ROI = ((Returned - Invested) / Invested) × 100",
    formulaExplanation: "ROI measures the net gain relative to the cost. A positive ROI means profit; negative means loss. The formula is expressed as a percentage.",
    howToUse: ["Enter the total amount invested", "Enter the total amount returned", "View ROI percentage and net profit/loss"],
    example: { description: "Invested ₹1,00,000, returned ₹1,50,000:", inputs: { invested: 100000, returned: 150000 }, result: "ROI: 50% | Net Profit: ₹50,000" },
    benefits: ["Quick investment evaluation", "Compare different investments", "Track marketing campaign performance", "Support business decisions"],
    faqs: [
      { question: "What is a good ROI?", answer: "ROI varies by investment type. Stock market average is 7-10% annually. Real estate typically 8-12%. Business investments should target 15%+ to be considered worthwhile." }
    ],
    relatedSlugs: ["profit-margin-calculator", "pricing-calculator", "sip-calculator", "compound-interest-calculator"],
    icon: "Percent",
    keywords: ["ROI calculator", "return on investment", "investment return calculator", "ROI formula"]
  },
  {
    slug: "sales-tax-calculator",
    title: "Sales Tax Calculator",
    category: "Business",
    categorySlug: "business",
    description: "Calculate sales tax amount and total price for any transaction quickly.",
    longDescription: "Our Sales Tax Calculator helps you quickly compute the applicable tax on any purchase or sale. Enter the pre-tax price and tax rate to see the tax amount and final total. Essential for businesses, shoppers, and anyone needing to include or extract tax from a price.",
    inputs: [
      { id: "price", label: "Pre-Tax Price", type: "number", placeholder: "e.g. 1000", unit: "₹", min: 0 },
      { id: "taxRate", label: "Sales Tax Rate", type: "number", placeholder: "e.g. 8", unit: "%", min: 0, max: 50, step: 0.1 }
    ],
    formula: "Tax = Price × Rate / 100 | Total = Price + Tax",
    formulaExplanation: "Sales tax is calculated by multiplying the pre-tax price by the tax rate. The total price includes both the original price and the tax.",
    howToUse: ["Enter the pre-tax price", "Enter the applicable tax rate", "View tax amount and total price"],
    example: { description: "₹1,000 with 8% sales tax:", inputs: { price: 1000, taxRate: 8 }, result: "Tax: ₹80 | Total: ₹1,080" },
    benefits: ["Quick tax calculation", "Handle any tax rate", "Include or exclude tax", "Business billing support"],
    faqs: [
      { question: "How do I remove tax from a total price?", answer: "Net Price = Total Price / (1 + Tax Rate/100). For example, if total is ₹1,080 with 8% tax: Net = 1080 / 1.08 = ₹1,000." }
    ],
    relatedSlugs: ["gst-calculator", "commission-calculator", "invoice-calculator", "pricing-calculator"],
    icon: "Receipt",
    keywords: ["sales tax calculator", "tax calculator", "add tax", "remove tax"]
  },
  {
    slug: "commission-calculator",
    title: "Commission Calculator",
    category: "Business",
    categorySlug: "business",
    description: "Calculate commission earned based on sales amount and commission rate.",
    longDescription: "Our Commission Calculator helps salespeople, agents, and businesses quickly compute commission amounts. Enter the sales value and commission rate to see the commission earned and net amount. Useful for real estate agents, insurance brokers, sales teams, and any commission-based roles.",
    inputs: [
      { id: "sales", label: "Sales Amount", type: "number", placeholder: "e.g. 500000", unit: "₹", min: 0 },
      { id: "rate", label: "Commission Rate", type: "number", placeholder: "e.g. 5", unit: "%", min: 0, max: 100, step: 0.1 }
    ],
    formula: "Commission = Sales × Rate / 100",
    formulaExplanation: "Commission is calculated by multiplying the sales amount by the commission rate percentage.",
    howToUse: ["Enter the total sales amount", "Enter the commission rate percentage", "View commission earned and net sales amount"],
    example: { description: "5% commission on ₹5,00,000 sales:", inputs: { sales: 500000, rate: 5 }, result: "Commission: ₹25,000 | Net to Company: ₹4,75,000" },
    benefits: ["Quick commission calculation", "Support for sales teams", "Real estate and insurance", "Tiered commission planning"],
    faqs: [
      { question: "How is commission different from profit margin?", answer: "Commission is a percentage of sales paid to a salesperson or agent. Profit margin is the percentage of revenue that remains as profit after all costs are deducted." }
    ],
    relatedSlugs: ["sales-tax-calculator", "pricing-calculator", "invoice-calculator", "profit-margin-calculator"],
    icon: "HandCoins",
    keywords: ["commission calculator", "sales commission", "commission rate calculator", "agent commission"]
  },
  {
    slug: "pricing-calculator",
    title: "Pricing Calculator",
    category: "Business",
    categorySlug: "business",
    description: "Set the right selling price for your product based on costs and desired profit margin.",
    longDescription: "Our Pricing Calculator helps you determine the optimal selling price for your products or services. Enter your costs and desired profit margin to calculate the selling price that ensures profitability while remaining competitive.",
    inputs: [
      { id: "cost", label: "Cost Price", type: "number", placeholder: "e.g. 500", unit: "₹", min: 1 },
      { id: "margin", label: "Desired Margin", type: "number", placeholder: "e.g. 30", unit: "%", min: 0, max: 100, step: 0.5 },
      { id: "quantity", label: "Quantity", type: "number", placeholder: "e.g. 100", min: 1, defaultValue: 1 }
    ],
    formula: "Selling Price = Cost / (1 - Margin/100)",
    formulaExplanation: "The selling price is calculated by dividing the cost by one minus the margin percentage. This ensures the specified percentage of the selling price is profit.",
    howToUse: ["Enter the cost price per unit", "Enter your desired profit margin percentage", "Optionally enter quantity for total revenue", "View the recommended selling price"],
    example: { description: "Cost ₹500, desired 30% margin:", inputs: { cost: 500, margin: 30, quantity: 1 }, result: "Selling Price: ₹714.29 | Profit per unit: ₹214.29" },
    benefits: ["Data-driven pricing", "Ensure profitability", "Quick markup calculations", "Volume pricing support"],
    faqs: [
      { question: "What's the difference between margin and markup?", answer: "Margin is profit as a percentage of selling price. Markup is profit as a percentage of cost. A 30% margin means selling price includes 30% profit. A 30% markup means adding 30% to cost." }
    ],
    relatedSlugs: ["markup-calculator", "profit-margin-calculator", "break-even-calculator", "discount-calculator"],
    icon: "DollarSign",
    keywords: ["pricing calculator", "price calculator", "markup calculator", "selling price calculator"]
  },
  {
    slug: "payroll-calculator",
    title: "Payroll Calculator",
    category: "Business",
    categorySlug: "business",
    description: "Calculate employee gross pay, deductions, and net salary with payroll tax estimates.",
    longDescription: "Our Payroll Calculator helps employers and employees understand the breakdown of salary payments. Calculate gross pay, applicable deductions, and net take-home pay based on salary structure and applicable tax rules.",
    inputs: [
      { id: "basic", label: "Basic Salary", type: "number", placeholder: "e.g. 40000", unit: "₹", min: 1 },
      { id: "allowances", label: "Allowances", type: "number", placeholder: "e.g. 15000", unit: "₹", min: 0, defaultValue: 0 },
      { id: "deductions", label: "Other Deductions", type: "number", placeholder: "e.g. 5000", unit: "₹", min: 0, defaultValue: 0 },
      { id: "taxRate", label: "Tax Rate", type: "number", placeholder: "e.g. 10", unit: "%", min: 0, max: 50, step: 0.5, defaultValue: 10 }
    ],
    formula: "Net Salary = Basic + Allowances - Deductions - Tax",
    formulaExplanation: "Gross salary is the sum of basic salary and allowances. Tax is calculated on gross salary. Net salary is gross minus all deductions and taxes.",
    howToUse: ["Enter basic salary", "Add allowances", "Enter any other deductions", "Set applicable tax rate", "View gross pay, deductions, and net salary"],
    example: { description: "Basic ₹40,000 + Allowances ₹15,000 - Deductions ₹5,000 at 10% tax:", inputs: { basic: 40000, allowances: 15000, deductions: 5000, taxRate: 10 }, result: "Gross: ₹55,000 | Tax: ₹5,500 | Net: ₹44,500" },
    benefits: ["Accurate salary computation", "Understand take-home pay", "Plan employee costs", "Simplified payroll management"],
    faqs: [
      { question: "What deductions are typically made from salary?", answer: "Common deductions include provident fund (PF), professional tax, income tax (TDS), health insurance premiums, and any loan repayments." }
    ],
    relatedSlugs: ["invoice-calculator", "profit-margin-calculator", "commission-calculator", "sales-tax-calculator"],
    icon: "Users",
    keywords: ["payroll calculator", "salary calculator", "net salary", "take home pay calculator"]
  },
  {
    slug: "inventory-turnover-calculator",
    title: "Inventory Turnover Calculator",
    category: "Business",
    categorySlug: "business",
    description: "Calculate how efficiently your business manages inventory with turnover ratio analysis.",
    longDescription: "Our Inventory Turnover Calculator measures how quickly a business sells and replaces its inventory over a given period. A higher turnover ratio generally indicates efficient inventory management, while a lower ratio may suggest overstocking or slow sales.",
    inputs: [
      { id: "cogs", label: "Cost of Goods Sold", type: "number", placeholder: "e.g. 500000", unit: "₹", min: 1 },
      { id: "avgInventory", label: "Average Inventory", type: "number", placeholder: "e.g. 100000", unit: "₹", min: 1 }
    ],
    formula: "Turnover Ratio = COGS / Average Inventory",
    formulaExplanation: "The inventory turnover ratio shows how many times inventory is sold and replaced during a period. Days in inventory = 365 / Turnover Ratio.",
    howToUse: ["Enter cost of goods sold", "Enter average inventory value", "View turnover ratio and days in inventory"],
    example: { description: "COGS ₹5,00,000, average inventory ₹1,00,000:", inputs: { cogs: 500000, avgInventory: 100000 }, result: "Turnover Ratio: 5.0x | Days in Inventory: 73 days" },
    benefits: ["Measure inventory efficiency", "Identify overstocking issues", "Benchmark against industry", "Optimize cash flow"],
    faqs: [
      { question: "What is a good inventory turnover ratio?", answer: "It varies by industry. Retail typically has 4-8x, while manufacturing might be 2-6x. Higher is generally better, but too high may indicate stockouts." }
    ],
    relatedSlugs: ["pricing-calculator", "profit-margin-calculator", "invoice-calculator", "markup-calculator"],
    icon: "RefreshCw",
    keywords: ["inventory turnover calculator", "inventory ratio", "stock turnover", "inventory efficiency"]
  },
  {
    slug: "invoice-calculator",
    title: "Invoice Calculator",
    category: "Business",
    categorySlug: "business",
    description: "Generate invoices with subtotal, tax, discounts, and final total calculations.",
    longDescription: "Our Invoice Calculator helps you create accurate invoices by computing line items, subtotals, discounts, applicable taxes, and final totals. Essential for freelancers, small businesses, and anyone who needs to generate professional invoices quickly.",
    inputs: [
      { id: "amount", label: "Line Item Amount", type: "number", placeholder: "e.g. 5000", unit: "₹", min: 0 },
      { id: "discount", label: "Discount (%)", type: "number", placeholder: "e.g. 5", unit: "%", min: 0, max: 100, step: 0.5, defaultValue: 0 },
      { id: "tax", label: "Tax Rate (%)", type: "number", placeholder: "e.g. 18", unit: "%", min: 0, max: 50, step: 0.1, defaultValue: 18 }
    ],
    formula: "Total = (Amount - Discount) + Tax on Discounted Amount",
    formulaExplanation: "The invoice total is calculated by first applying any discount to the amount, then adding tax on the discounted amount.",
    howToUse: ["Enter the service/product amount", "Apply any discount percentage", "Enter the applicable tax rate", "View subtotal, discount, tax, and final total"],
    example: { description: "Amount ₹5,000, 5% discount, 18% tax:", inputs: { amount: 5000, discount: 5, tax: 18 }, result: "Subtotal: ₹5,000 | Discount: -₹250 | After Discount: ₹4,750 | Tax: ₹855 | Total: ₹5,605" },
    benefits: ["Professional invoice generation", "Quick tax calculations", "Discount handling", "Freelancer and small business tool"],
    faqs: [
      { question: "Should tax be applied before or after discount?", answer: "Generally, tax is applied on the discounted amount (after discount). This is the standard practice in most jurisdictions." }
    ],
    relatedSlugs: ["sales-tax-calculator", "gst-calculator", "commission-calculator", "profit-margin-calculator"],
    icon: "FileText",
    keywords: ["invoice calculator", "bill calculator", "invoice total", "tax invoice"]
  },
  {
    slug: "markup-calculator",
    title: "Markup Calculator",
    category: "Business",
    categorySlug: "business",
    description: "Calculate markup percentage and selling price based on cost and desired markup.",
    longDescription: "Our Markup Calculator helps you determine the selling price and markup percentage for your products. Markup is the amount added to the cost price to determine the selling price, expressed as a percentage of the cost. Different from margin — markup is on cost, margin is on selling price.",
    inputs: [
      { id: "cost", label: "Cost Price", type: "number", placeholder: "e.g. 100", unit: "₹", min: 1 },
      { id: "markup", label: "Markup Percentage", type: "number", placeholder: "e.g. 50", unit: "%", min: 0, max: 500, step: 0.5 }
    ],
    formula: "Selling Price = Cost × (1 + Markup/100)",
    formulaExplanation: "Markup is added to the cost price as a percentage of cost. This differs from margin, which is a percentage of the selling price.",
    howToUse: ["Enter the cost price", "Enter the desired markup percentage", "View selling price, profit amount, and equivalent margin"],
    example: { description: "Cost ₹100 with 50% markup:", inputs: { cost: 100, markup: 50 }, result: "Selling Price: ₹150 | Profit: ₹50 | Equivalent Margin: 33.33%" },
    benefits: ["Quick markup calculations", "See equivalent margin", "Price products confidently", "Understand markup vs margin"],
    faqs: [
      { question: "What is the difference between markup and margin?", answer: "Markup is profit as % of cost price. Margin is profit as % of selling price. 50% markup = 33.3% margin. They measure the same profit differently." }
    ],
    relatedSlugs: ["pricing-calculator", "profit-margin-calculator", "discount-calculator", "break-even-calculator"],
    icon: "Plus",
    keywords: ["markup calculator", "markup percentage", "cost markup", "price markup calculator"]
  }
];
