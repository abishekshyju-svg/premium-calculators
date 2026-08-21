import { CalculatorMeta } from "../types";

export const financeCalculators: CalculatorMeta[] = [
  {
    slug: "emi-calculator",
    title: "EMI Calculator",
    category: "Finance",
    categorySlug: "finance",
    description: "Calculate your Equated Monthly Installment (EMI) for home, car, or personal loans instantly.",
    longDescription: "Our EMI Calculator helps you compute the monthly installment you need to pay towards repaying a loan. Whether you're planning a home loan, car loan, or personal loan, this tool gives you a clear picture of your monthly financial commitment. Understanding your EMI helps you plan your budget effectively and make informed borrowing decisions.",
    inputs: [
      { id: "principal", label: "Loan Amount", type: "number", placeholder: "e.g. 1000000", unit: "₹", min: 1 },
      { id: "rate", label: "Annual Interest Rate", type: "number", placeholder: "e.g. 8.5", unit: "%", min: 0.1, max: 50, step: 0.1 },
      { id: "tenure", label: "Loan Tenure", type: "number", placeholder: "e.g. 20", unit: "years", min: 1, max: 50 }
    ],
    formula: "EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)",
    formulaExplanation: "Where P is the principal loan amount, r is the monthly interest rate (annual rate divided by 12), and n is the total number of monthly payments (tenure in years multiplied by 12).",
    howToUse: [
      "Enter the total loan amount you plan to borrow",
      "Input the annual interest rate offered by your lender",
      "Specify the loan tenure in years",
      "Click 'Calculate' to see your monthly EMI, total interest, and total payment"
    ],
    example: {
      description: "For a home loan of ₹50,00,000 at 8.5% annual interest for 20 years:",
      inputs: { principal: 5000000, rate: 8.5, tenure: 20 },
      result: "Monthly EMI: ₹43,391 | Total Interest: ₹54,13,848 | Total Payment: ₹1,04,13,848"
    },
    benefits: [
      "Plan your monthly budget accurately",
      "Compare loan offers from different lenders",
      "Understand the total cost of borrowing",
      "Make informed decisions about loan tenure"
    ],
    faqs: [
      { question: "What is EMI?", answer: "EMI stands for Equated Monthly Installment. It is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs consist of both principal and interest components." },
      { question: "How can I reduce my EMI?", answer: "You can reduce your EMI by making a larger down payment, choosing a longer tenure, or negotiating a lower interest rate with your lender. You can also make prepayments to reduce the outstanding principal." },
      { question: "Is EMI calculated on reducing balance?", answer: "Yes, standard EMI calculation uses the reducing balance method, where interest is calculated on the outstanding principal amount each month, not on the original loan amount." }
    ],
    relatedSlugs: ["compound-interest-calculator", "loan-eligibility-calculator", "savings-goal-calculator", "home-loan-emi-calculator"],
    icon: "Banknote",
    keywords: ["EMI calculator", "loan EMI", "monthly installment", "home loan calculator", "car loan EMI"]
  },
  {
    slug: "sip-calculator",
    title: "SIP Calculator",
    category: "Finance",
    categorySlug: "finance",
    description: "Calculate returns on your Systematic Investment Plan (SIP) investments with estimated future value.",
    longDescription: "Our SIP Calculator helps you project the future value of your systematic investments. By entering your monthly investment amount, expected annual return rate, and investment duration, you can see how the power of compounding works in your favor. Start planning your wealth creation journey today with clear, projected returns.",
    inputs: [
      { id: "monthly", label: "Monthly Investment", type: "number", placeholder: "e.g. 5000", unit: "₹", min: 100 },
      { id: "rate", label: "Expected Annual Return", type: "number", placeholder: "e.g. 12", unit: "%", min: 1, max: 50, step: 0.5 },
      { id: "years", label: "Investment Period", type: "number", placeholder: "e.g. 10", unit: "years", min: 1, max: 50 }
    ],
    formula: "FV = P × ((1 + r)^n - 1) / r × (1 + r)",
    formulaExplanation: "Where P is the monthly investment amount, r is the monthly rate of return (annual rate / 12 / 100), and n is the total number of months. The formula accounts for the compounding effect on regular monthly investments.",
    howToUse: [
      "Enter the amount you plan to invest monthly",
      "Input your expected annual return rate",
      "Choose your investment duration in years",
      "View the projected future value of your investments"
    ],
    example: {
      description: "Investing ₹10,000 per month at 12% annual return for 15 years:",
      inputs: { monthly: 10000, rate: 12, years: 15 },
      result: "Total Invested: ₹18,00,000 | Future Value: ₹50,45,762 | Wealth Gained: ₹32,45,762"
    },
    benefits: [
      "Visualize the power of compounding",
      "Plan your investment goals effectively",
      "Compare different investment scenarios",
      "Start your wealth creation journey with clarity"
    ],
    faqs: [
      { question: "What is SIP?", answer: "SIP or Systematic Investment Plan is a method of investing in mutual funds where you invest a fixed amount regularly (usually monthly). It helps in rupee cost averaging and benefits from the power of compounding over time." },
      { question: "What returns can I expect from SIP?", answer: "Historical returns vary by fund type. Equity funds have averaged 12-15% annually over long periods, while debt funds typically return 6-8%. Past performance doesn't guarantee future returns." },
      { question: "Is SIP better than lump sum?", answer: "SIP is generally better for most investors as it averages out market volatility through rupee cost averaging. Lump sum investing may perform better in continuously rising markets but carries higher timing risk." }
    ],
    relatedSlugs: ["compound-interest-calculator", "fd-calculator", "rd-calculator", "savings-goal-calculator"],
    icon: "TrendingUp",
    keywords: ["SIP calculator", "mutual fund returns", "systematic investment", "investment planner"]
  },
  {
    slug: "compound-interest-calculator",
    title: "Compound Interest Calculator",
    category: "Finance",
    categorySlug: "finance",
    description: "Calculate compound interest and see how your money grows over time with reinvested returns.",
    longDescription: "Compound interest is the eighth wonder of the world — it helps your money grow exponentially over time. Our Compound Interest Calculator shows you exactly how your initial investment or deposit grows when interest is reinvested. Understand the difference between simple and compound interest and make smarter financial decisions.",
    inputs: [
      { id: "principal", label: "Principal Amount", type: "number", placeholder: "e.g. 100000", unit: "₹", min: 1 },
      { id: "rate", label: "Annual Interest Rate", type: "number", placeholder: "e.g. 10", unit: "%", min: 0.1, max: 50, step: 0.1 },
      { id: "time", label: "Time Period", type: "number", placeholder: "e.g. 5", unit: "years", min: 1, max: 50 },
      { id: "compound", label: "Compounding Frequency", type: "select", options: [
        { value: "1", label: "Annually" },
        { value: "2", label: "Semi-Annually" },
        { value: "4", label: "Quarterly" },
        { value: "12", label: "Monthly" },
        { value: "365", label: "Daily" }
      ], defaultValue: "1" }
    ],
    formula: "A = P (1 + r/n)^(nt)",
    formulaExplanation: "Where A is the final amount, P is the principal, r is the annual interest rate (as decimal), n is the number of times interest compounds per year, and t is the number of years.",
    howToUse: [
      "Enter the initial principal amount",
      "Input the annual interest rate",
      "Specify the time period in years",
      "Select the compounding frequency",
      "View the total amount, interest earned, and growth chart"
    ],
    example: {
      description: "₹1,00,000 invested at 10% for 5 years, compounded annually:",
      inputs: { principal: 100000, rate: 10, time: 5, compound: 1 },
      result: "Final Amount: ₹1,61,051 | Compound Interest: ₹61,051"
    },
    benefits: [
      "Understand how compounding frequency affects returns",
      "Compare different investment scenarios",
      "Plan long-term financial goals",
      "Make informed decisions about savings and investments"
    ],
    faqs: [
      { question: "How does compound interest differ from simple interest?", answer: "Simple interest is calculated only on the principal amount, while compound interest is calculated on the principal plus previously earned interest. This means compound interest grows faster over time." },
      { question: "What compounding frequency gives the best returns?", answer: "More frequent compounding generally results in higher returns. Daily compounding yields the most, followed by monthly, quarterly, semi-annually, and annually. However, the difference becomes smaller over shorter periods." },
      { question: "Is compound interest always better?", answer: "When earning interest, compound interest is always better than simple interest. When paying interest (like on loans), compound interest means you pay more, which is why understanding the difference is important." }
    ],
    relatedSlugs: ["simple-interest-calculator", "fd-calculator", "sip-calculator", "rd-calculator"],
    icon: "Percent",
    keywords: ["compound interest calculator", "interest calculator", "compound growth", "investment growth"]
  },
  {
    slug: "simple-interest-calculator",
    title: "Simple Interest Calculator",
    category: "Finance",
    categorySlug: "finance",
    description: "Calculate simple interest on your principal amount with our easy-to-use calculator.",
    longDescription: "Simple interest is the most straightforward way to calculate interest on a loan or investment. Our Simple Interest Calculator computes the interest earned or payable based on the principal amount, interest rate, and time period. Use this tool to quickly understand the basic cost or return of financial transactions.",
    inputs: [
      { id: "principal", label: "Principal Amount", type: "number", placeholder: "e.g. 100000", unit: "₹", min: 1 },
      { id: "rate", label: "Annual Interest Rate", type: "number", placeholder: "e.g. 8", unit: "%", min: 0.1, max: 50, step: 0.1 },
      { id: "time", label: "Time Period", type: "number", placeholder: "e.g. 3", unit: "years", min: 0.1, max: 50, step: 0.1 }
    ],
    formula: "SI = P × R × T / 100",
    formulaExplanation: "Where P is the principal amount, R is the annual interest rate in percentage, and T is the time in years. Simple interest is calculated only on the original principal amount.",
    howToUse: [
      "Enter the principal amount",
      "Input the annual interest rate percentage",
      "Specify the time period in years",
      "View the simple interest amount and total sum"
    ],
    example: {
      description: "₹50,000 at 8% simple interest for 3 years:",
      inputs: { principal: 50000, rate: 8, time: 3 },
      result: "Simple Interest: ₹12,000 | Total Amount: ₹62,000"
    },
    benefits: [
      "Quick and easy interest calculation",
      "Understand basic loan costs",
      "Compare simple vs compound interest scenarios",
      "Useful for short-term financial planning"
    ],
    faqs: [
      { question: "When is simple interest used?", answer: "Simple interest is commonly used for short-term loans, auto loans, and certain types of consumer credit. Some certificates of deposit and savings accounts also use simple interest calculations." },
      { question: "Can simple interest be negative?", answer: "No, simple interest cannot be negative. However, if the interest rate is negative (as seen in some European countries), you would effectively be paying to keep money deposited." }
    ],
    relatedSlugs: ["compound-interest-calculator", "emi-calculator", "discount-calculator", "fd-calculator"],
    icon: "Percent",
    keywords: ["simple interest calculator", "interest rate calculator", "SI calculator", "loan interest"]
  },
  {
    slug: "fd-calculator",
    title: "FD Calculator",
    category: "Finance",
    categorySlug: "finance",
    description: "Calculate the maturity amount and interest earned on your Fixed Deposit investment.",
    longDescription: "A Fixed Deposit (FD) is one of the safest investment options available. Our FD Calculator helps you determine the maturity amount and total interest earned on your fixed deposit based on the deposit amount, interest rate, and tenure. Plan your fixed deposit investments wisely with accurate projections.",
    inputs: [
      { id: "principal", label: "Deposit Amount", type: "number", placeholder: "e.g. 200000", unit: "₹", min: 1000 },
      { id: "rate", label: "Interest Rate", type: "number", placeholder: "e.g. 7", unit: "%", min: 1, max: 20, step: 0.1 },
      { id: "tenure", label: "Deposit Tenure", type: "number", placeholder: "e.g. 5", unit: "years", min: 0.5, max: 20, step: 0.5 },
      { id: "compound", label: "Compounding", type: "select", options: [
        { value: "1", label: "Annually" },
        { value: "4", label: "Quarterly" },
        { value: "12", label: "Monthly" }
      ], defaultValue: "4" }
    ],
    formula: "A = P (1 + r/n)^(nt)",
    formulaExplanation: "Where A is the maturity amount, P is the deposit amount, r is the annual interest rate, n is compounding frequency per year, and t is the tenure in years.",
    howToUse: [
      "Enter the amount you want to deposit",
      "Input the annual interest rate offered",
      "Choose the deposit tenure",
      "Select the compounding frequency",
      "View maturity amount and total interest earned"
    ],
    example: {
      description: "₹2,00,000 FD at 7% for 5 years, compounded quarterly:",
      inputs: { principal: 200000, rate: 7, tenure: 5, compound: 4 },
      result: "Maturity Amount: ₹2,82,892 | Interest Earned: ₹82,892"
    },
    benefits: [
      "Safe and guaranteed returns",
      "Plan your investment tenure wisely",
      "Compare different FD rates and tenures",
      "Calculate exact maturity dates and amounts"
    ],
    faqs: [
      { question: "What is the minimum amount for FD?", answer: "The minimum amount varies by bank, typically starting from ₹1,000 to ₹10,000. Some banks offer digital FDs with even lower minimum amounts." },
      { question: "Is FD interest taxable?", answer: "Yes, FD interest is taxable as per your income tax slab. Banks deduct TDS at 10% if interest exceeds ₹40,000 per year (₹50,000 for senior citizens). You can submit Form 15G/15H to avoid TDS if your income is below the taxable limit." }
    ],
    relatedSlugs: ["rd-calculator", "compound-interest-calculator", "sip-calculator", "savings-goal-calculator"],
    icon: "Landmark",
    keywords: ["FD calculator", "fixed deposit calculator", "maturity calculator", "FD maturity amount"]
  },
  {
    slug: "rd-calculator",
    title: "RD Calculator",
    category: "Finance",
    categorySlug: "finance",
    description: "Calculate the maturity amount and interest earned on your Recurring Deposit investment.",
    longDescription: "A Recurring Deposit (RD) allows you to invest a fixed amount monthly and earn interest similar to a Fixed Deposit. Our RD Calculator helps you project the maturity amount based on your monthly deposit, interest rate, and tenure. Perfect for building savings discipline while earning guaranteed returns.",
    inputs: [
      { id: "monthly", label: "Monthly Deposit", type: "number", placeholder: "e.g. 5000", unit: "₹", min: 100 },
      { id: "rate", label: "Interest Rate", type: "number", placeholder: "e.g. 6.5", unit: "%", min: 1, max: 20, step: 0.1 },
      { id: "tenure", label: "Tenure", type: "number", placeholder: "e.g. 3", unit: "years", min: 0.5, max: 10, step: 0.5 }
    ],
    formula: "M = R × n(n+1)/2 × (1 + i/100)^(1/12) / ((1 + i/100)^(1/12) - 1)",
    formulaExplanation: "Where M is the maturity amount, R is the monthly deposit, n is the number of months, and i is the annual interest rate. The formula calculates the future value of a series of equal monthly payments with compound interest.",
    howToUse: [
      "Enter the monthly deposit amount",
      "Input the annual interest rate",
      "Choose the RD tenure in years",
      "View the maturity amount and total interest earned"
    ],
    example: {
      description: "₹5,000 monthly RD at 6.5% for 3 years:",
      inputs: { monthly: 5000, rate: 6.5, tenure: 3 },
      result: "Total Deposited: ₹1,80,000 | Maturity Amount: ₹2,01,813 | Interest: ₹21,813"
    },
    benefits: [
      "Build savings with small monthly amounts",
      "Earn guaranteed fixed returns",
      "No market risk involved",
      "Ideal for goal-based savings"
    ],
    faqs: [
      { question: "What is a Recurring Deposit?", answer: "A Recurring Deposit is a savings scheme where you deposit a fixed amount monthly for a predetermined period. At maturity, you receive the total deposited amount plus compound interest earned." },
      { question: "Can I close my RD before maturity?", answer: "Yes, most banks allow premature withdrawal of RD, but they may charge a penalty of 0.5% to 1% on the applicable interest rate. Some banks don't allow premature closure for RDs opened online." }
    ],
    relatedSlugs: ["fd-calculator", "sip-calculator", "compound-interest-calculator", "savings-goal-calculator"],
    icon: "Repeat",
    keywords: ["RD calculator", "recurring deposit calculator", "monthly deposit calculator", "RD maturity"]
  },
  {
    slug: "gst-calculator",
    title: "GST Calculator",
    category: "Finance",
    categorySlug: "finance",
    description: "Calculate GST amount, net price, and gross price with different GST slabs instantly.",
    longDescription: "Goods and Services Tax (GST) is applicable on most products and services in India. Our GST Calculator helps you quickly compute the GST component on any amount. Whether you need to find the GST amount, add GST to get the gross price, or remove GST to find the net price, this tool handles all scenarios across different GST slabs.",
    inputs: [
      { id: "amount", label: "Amount", type: "number", placeholder: "e.g. 1000", unit: "₹", min: 1 },
      { id: "rate", label: "GST Rate", type: "select", options: [
        { value: "5", label: "5%" }, { value: "12", label: "12%" },
        { value: "18", label: "18%" }, { value: "28", label: "28%" }
      ], defaultValue: "18" },
      { id: "operation", label: "Calculate", type: "select", options: [
        { value: "add", label: "Add GST" }, { value: "remove", label: "Remove GST" }
      ], defaultValue: "add" }
    ],
    formula: "GST Amount = Amount × Rate / 100",
    formulaExplanation: "When adding GST: Total = Amount + (Amount × Rate / 100). When removing GST: Net = Amount / (1 + Rate / 100). CGST and SGST are each half of the total GST for intra-state transactions.",
    howToUse: [
      "Enter the base amount",
      "Select the applicable GST rate",
      "Choose whether to add or remove GST",
      "View total GST, CGST, SGST/IGST, and final amount"
    ],
    example: {
      description: "Adding 18% GST to ₹1,000:",
      inputs: { amount: 1000, rate: 18, operation: "add" },
      result: "GST Amount: ₹180 | CGST: ₹90 | SGST: ₹90 | Total: ₹1,180"
    },
    benefits: [
      "Quick GST computation for any amount",
      "Handle all GST slab rates",
      "Split into CGST and SGST automatically",
      "Useful for billing and invoicing"
    ],
    faqs: [
      { question: "What are the GST slabs in India?", answer: "India has four main GST slabs: 5%, 12%, 18%, and 28%. Essential items are taxed at lower rates, while luxury and non-essential items attract higher rates." },
      { question: "What is the difference between CGST, SGST, and IGST?", answer: "CGST (Central GST) and SGST (State GST) apply to intra-state transactions and are each half of the total GST. IGST (Integrated GST) applies to inter-state transactions and equals the full GST rate." }
    ],
    relatedSlugs: ["profit-and-loss-calculator", "sales-tax-calculator", "discount-calculator", "markup-calculator"],
    icon: "Receipt",
    keywords: ["GST calculator", "GST rate calculator", "add GST", "remove GST", "CGST SGST calculator"]
  },
  {
    slug: "loan-eligibility-calculator",
    title: "Loan Eligibility Calculator",
    category: "Finance",
    categorySlug: "finance",
    description: "Check how much loan you're eligible for based on your income, expenses, and existing EMIs.",
    longDescription: "Before applying for a loan, it's wise to know how much you're eligible for. Our Loan Eligibility Calculator estimates the maximum loan amount you can qualify for based on your income, existing obligations, interest rate, and desired tenure. This helps you plan your finances and choose the right loan amount without overextending.",
    inputs: [
      { id: "income", label: "Monthly Income", type: "number", placeholder: "e.g. 80000", unit: "₹", min: 1 },
      { id: "emi", label: "Existing EMIs", type: "number", placeholder: "e.g. 5000", unit: "₹", min: 0, defaultValue: 0 },
      { id: "rate", label: "Interest Rate", type: "number", placeholder: "e.g. 8.5", unit: "%", min: 1, max: 30, step: 0.1 },
      { id: "tenure", label: "Tenure", type: "number", placeholder: "e.g. 20", unit: "years", min: 1, max: 30 },
      { id: "foir", label: "FOIR (%)", type: "number", placeholder: "e.g. 50", unit: "%", min: 30, max: 70, step: 5, defaultValue: 50 }
    ],
    formula: "Eligible EMI = (Income × FOIR/100) - Existing EMIs",
    formulaExplanation: "FOIR (Fixed Obligation to Income Ratio) is the maximum percentage of income that can go towards EMI payments. Most banks use 40-60% FOIR. The loan amount is then calculated by reversing the EMI formula.",
    howToUse: [
      "Enter your total monthly income",
      "Add any existing EMI obligations",
      "Input the expected interest rate and tenure",
      "Adjust the FOIR percentage (default 50%)",
      "View your eligible loan amount and maximum EMI"
    ],
    example: {
      description: "Monthly income ₹80,000, no existing EMIs, 8.5% rate, 20 years tenure:",
      inputs: { income: 80000, emi: 0, rate: 8.5, tenure: 20, foir: 50 },
      result: "Maximum Eligible EMI: ₹40,000 | Eligible Loan Amount: ₹46,07,446"
    },
    benefits: [
      "Know your borrowing capacity before applying",
      "Avoid loan rejection due to overapplication",
      "Plan your finances with realistic expectations",
      "Compare scenarios with different income or tenure"
    ],
    faqs: [
      { question: "What is FOIR?", answer: "FOIR stands for Fixed Obligation to Income Ratio. It represents the maximum percentage of your monthly income that can be allocated to EMI payments. Banks typically allow 40-60% depending on the borrower's profile." },
      { question: "Does eligibility change for different loan types?", answer: "Yes, eligibility can vary. Home loans generally have higher eligibility (50-60% FOIR) compared to personal loans (40-50% FOIR) due to lower interest rates and the presence of collateral." }
    ],
    relatedSlugs: ["emi-calculator", "home-loan-emi-calculator", "mortgage-calculator", "affordability-calculator"],
    icon: "ShieldCheck",
    keywords: ["loan eligibility calculator", "how much loan can I get", "home loan eligibility", "FOIR calculator"]
  },
  {
    slug: "savings-goal-calculator",
    title: "Savings Goal Calculator",
    category: "Finance",
    categorySlug: "finance",
    description: "Calculate how much you need to save monthly to reach your financial goal.",
    longDescription: "Whether you're saving for a vacation, a new car, or a down payment on a house, our Savings Goal Calculator helps you determine exactly how much you need to set aside each month. Just enter your target amount, time frame, and expected interest rate to create a clear savings plan.",
    inputs: [
      { id: "goal", label: "Savings Goal", type: "number", placeholder: "e.g. 500000", unit: "₹", min: 1 },
      { id: "months", label: "Time to Goal", type: "number", placeholder: "e.g. 24", unit: "months", min: 1, max: 600 },
      { id: "rate", label: "Expected Return Rate", type: "number", placeholder: "e.g. 7", unit: "%", min: 0, max: 30, step: 0.5, defaultValue: 7 },
      { id: "existing", label: "Existing Savings", type: "number", placeholder: "e.g. 50000", unit: "₹", min: 0, defaultValue: 0 }
    ],
    formula: "PMT = (FV - PV × (1+r)^n) / (((1+r)^n - 1) / r)",
    formulaExplanation: "Where PMT is the required monthly savings, FV is the goal amount, PV is existing savings, r is the monthly interest rate, and n is the number of months.",
    howToUse: [
      "Enter your savings goal amount",
      "Specify the number of months to reach the goal",
      "Input the expected monthly return rate",
      "Add any existing savings you already have",
      "View the required monthly savings amount"
    ],
    example: {
      description: "Goal: ₹5,00,000 in 24 months with ₹50,000 existing savings at 7%:",
      inputs: { goal: 500000, months: 24, rate: 7, existing: 50000 },
      result: "Required Monthly Savings: ₹18,414"
    },
    benefits: [
      "Create a clear savings roadmap",
      "Set realistic financial goals",
      "Track progress toward your objective",
      "Adjust goals or timelines based on capacity"
    ],
    faqs: [
      { question: "What return rate should I assume?", answer: "For short-term goals (under 2 years), use 4-6% from savings accounts or liquid funds. For medium-term goals (2-5 years), 7-9% from debt funds or FDs. For long-term goals (5+ years), 10-12% from balanced mutual funds." }
    ],
    relatedSlugs: ["sip-calculator", "fd-calculator", "rd-calculator", "compound-interest-calculator"],
    icon: "Target",
    keywords: ["savings calculator", "savings goal planner", "how much to save", "savings plan calculator"]
  },
  {
    slug: "discount-calculator",
    title: "Discount Calculator",
    category: "Finance",
    categorySlug: "finance",
    description: "Calculate discounts, sale prices, and savings on any product or service instantly.",
    longDescription: "Never overpay again! Our Discount Calculator helps you quickly determine the final price after a discount, the actual savings amount, and the effective discount percentage. Whether you're shopping online, comparing deals, or negotiating prices, this tool gives you instant clarity on the real value of any offer.",
    inputs: [
      { id: "original", label: "Original Price", type: "number", placeholder: "e.g. 5000", unit: "₹", min: 1 },
      { id: "discount", label: "Discount Percentage", type: "number", placeholder: "e.g. 20", unit: "%", min: 0, max: 100, step: 0.5 }
    ],
    formula: "Sale Price = Original Price × (1 - Discount/100)",
    formulaExplanation: "The discount amount is calculated by multiplying the original price by the discount percentage divided by 100. The sale price is the original price minus the discount amount.",
    howToUse: [
      "Enter the original price of the product",
      "Input the discount percentage",
      "View the discount amount, sale price, and savings"
    ],
    example: {
      description: "20% off on a product priced at ₹5,000:",
      inputs: { original: 5000, discount: 20 },
      result: "Discount Amount: ₹1,000 | Sale Price: ₹4,000 | You Save: ₹1,000"
    },
    benefits: [
      "Quickly compare deals and offers",
      "Calculate final prices during sales",
      "Verify discount claims from retailers",
      "Budget shopping more effectively"
    ],
    faqs: [
      { question: "How do I calculate a discount if I know the sale price?", answer: "Use the formula: Discount % = ((Original - Sale Price) / Original) × 100. For example, if a ₹1,000 item sells for ₹750, the discount is ((1000-750)/1000) × 100 = 25%." },
      { question: "Can I stack multiple discounts?", answer: "Some retailers allow stacking discounts (e.g., 20% off plus an additional 10% coupon). In that case, apply each discount sequentially, not by adding percentages. Two sequential discounts of 20% and 10% result in a 28% total discount, not 30%." }
    ],
    relatedSlugs: ["percentage-calculator", "gst-calculator", "markup-calculator", "pricing-calculator"],
    icon: "Tag",
    keywords: ["discount calculator", "sale price calculator", "percentage off calculator", "savings calculator"]
  }
];
