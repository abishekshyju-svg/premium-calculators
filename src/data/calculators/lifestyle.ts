import { CalculatorMeta } from "./types";

export const lifestyleCalculators: CalculatorMeta[] = [
  {
    slug: "age-calculator",
    title: "Age Calculator",
    category: "Lifestyle",
    categorySlug: "lifestyle",
    description: "Calculate your exact age in years, months, days, hours, minutes, and seconds.",
    longDescription: "Our Age Calculator computes your precise age based on your date of birth. Get your age in years, months, days, and even hours, minutes, and seconds. Know your next birthday day of the week and count down to it. A fun and useful tool for everyone.",
    inputs: [
      { id: "dob", label: "Date of Birth", type: "date" },
      { id: "until", label: "Calculate Until (optional)", type: "date" }
    ],
    formula: "Exact age by calendar difference",
    formulaExplanation: "The calculator performs a precise calendar date subtraction accounting for varying month lengths and leap years.",
    howToUse: ["Enter your date of birth", "Optionally select a specific date to calculate age until", "View detailed age breakdown"],
    example: { description: "Born January 15, 1995, as of today:", inputs: { dob: "1995-01-15" }, result: "Age: 31 years, 7 months, 6 days | Days Lived: ~11,536" },
    benefits: ["Precise age calculation", "Multiple time units", "Fun birthday facts", "Useful for official purposes"],
    faqs: [
      { question: "How do I calculate age manually?", answer: "Subtract birth year from current year. If the birthday hasn't occurred yet this year, subtract 1. For exact age, also account for months and days." }
    ],
    relatedSlugs: ["date-difference-calculator", "birthday-countdown-calculator", "age-calculator-admission", "sleep-calculator"],
    icon: "Cake",
    keywords: ["age calculator", "exact age calculator", "birth date calculator", "age in days"]
  },
  {
    slug: "date-difference-calculator",
    title: "Date Difference Calculator",
    category: "Lifestyle",
    categorySlug: "lifestyle",
    description: "Calculate the exact number of days, weeks, and months between any two dates.",
    longDescription: "Our Date Difference Calculator computes the precise time between any two dates. Whether you're counting days until an event, calculating project duration, or measuring age, this tool provides exact results in days, weeks, months, and years.",
    inputs: [
      { id: "start", label: "Start Date", type: "date" },
      { id: "end", label: "End Date", type: "date" }
    ],
    formula: "Calendar date arithmetic",
    formulaExplanation: "The calculator computes the exact difference between two dates, accounting for varying month lengths and leap years.",
    howToUse: ["Enter the start date", "Enter the end date", "View the difference in days, weeks, months, and years"],
    example: { description: "Between January 1, 2024 and June 15, 2024:", inputs: { start: "2024-01-01", end: "2024-06-15" }, result: "166 days | 23 weeks, 5 days | ~5.5 months" },
    benefits: ["Precise date calculations", "Multiple time units", "Project duration tracking", "Event countdown"],
    faqs: [
      { question: "Does this account for leap years?", answer: "Yes, the calculator correctly handles leap years and varying month lengths for accurate results." }
    ],
    relatedSlugs: ["age-calculator", "birthday-countdown-calculator", "time-zone-converter", "study-time-calculator"],
    icon: "CalendarDays",
    keywords: ["date difference calculator", "days between dates", "time between dates", "date calculator"]
  },
  {
    slug: "tip-calculator",
    title: "Tip Calculator",
    category: "Lifestyle",
    categorySlug: "lifestyle",
    description: "Calculate the perfect tip amount and split bills evenly among any number of people.",
    longDescription: "Our Tip Calculator makes splitting restaurant bills effortless. Enter the bill amount, choose a tip percentage, and specify how many people are splitting. Get the tip amount and per-person total instantly. Never awkwardly calculate tips again.",
    inputs: [
      { id: "bill", label: "Bill Amount", type: "number", placeholder: "e.g. 2500", unit: "₹", min: 0 },
      { id: "tipPercent", label: "Tip Percentage", type: "number", placeholder: "e.g. 10", unit: "%", min: 0, max: 50, step: 1, defaultValue: 10 },
      { id: "people", label: "Number of People", type: "number", placeholder: "e.g. 4", min: 1, defaultValue: 1 }
    ],
    formula: "Tip = Bill × Tip% / 100 | Per Person = (Bill + Tip) / People",
    formulaExplanation: "The tip is calculated as a percentage of the bill amount. The total is split equally among all people.",
    howToUse: ["Enter the restaurant bill amount", "Select tip percentage", "Enter number of people splitting", "View tip amount and per-person total"],
    example: { description: "₹2,500 bill, 10% tip, 4 people:", inputs: { bill: 2500, tipPercent: 10, people: 4 }, result: "Tip: ₹250 | Total: ₹2,750 | Per Person: ₹687.50" },
    benefits: ["Quick tip calculation", "Bill splitting made easy", "Works for any group size", "Different tip percentages"],
    faqs: [
      { question: "What is the standard tip percentage?", answer: "In India, 10% is common for restaurants. In the US, 15-20% is standard. For exceptional service, 20-25% is appropriate." }
    ],
    relatedSlugs: ["trip-budget-calculator", "fuel-cost-calculator", "age-calculator", "electricity-bill-calculator"],
    icon: "Receipt",
    keywords: ["tip calculator", "bill splitter", "restaurant tip", "tip and split calculator"]
  },
  {
    slug: "fuel-cost-calculator",
    title: "Fuel Cost Calculator",
    category: "Lifestyle",
    categorySlug: "lifestyle",
    description: "Calculate the fuel cost for your trip based on distance, mileage, and fuel price.",
    longDescription: "Our Fuel Cost Calculator helps you estimate the fuel expenses for any trip. Enter your trip distance, vehicle mileage, and current fuel price to see exactly how much your journey will cost in fuel. Perfect for road trip planning and commute budgeting.",
    inputs: [
      { id: "distance", label: "Trip Distance", type: "number", placeholder: "e.g. 200", unit: "km", min: 1 },
      { id: "mileage", label: "Vehicle Mileage", type: "number", placeholder: "e.g. 15", unit: "km/l", min: 1 },
      { id: "fuelPrice", label: "Fuel Price", type: "number", placeholder: "e.g. 105", unit: "₹/L", min: 1 }
    ],
    formula: "Fuel Needed = Distance / Mileage | Cost = Fuel × Price",
    formulaExplanation: "The total fuel required is distance divided by mileage. The total cost is fuel quantity multiplied by the price per liter.",
    howToUse: ["Enter trip distance in km", "Enter your vehicle's fuel efficiency", "Enter current fuel price per liter", "View fuel needed and total cost"],
    example: { description: "200 km trip, 15 km/l mileage, ₹105/liter fuel:", inputs: { distance: 200, mileage: 15, fuelPrice: 105 }, result: "Fuel Needed: 13.33 L | Total Cost: ₹1,400" },
    benefits: ["Road trip cost planning", "Commute budgeting", "Compare vehicle efficiency", "Fuel expense tracking"],
    faqs: [
      { question: "How do I find my vehicle's mileage?", answer: "Fill your tank completely, reset the trip meter, drive normally until the next refill, and divide the km driven by liters filled. This gives your real-world mileage." }
    ],
    relatedSlugs: ["trip-budget-calculator", "electricity-bill-calculator", "tip-calculator", "speed-converter"],
    icon: "Fuel",
    keywords: ["fuel cost calculator", "petrol calculator", "fuel expense calculator", "trip fuel cost"]
  },
  {
    slug: "trip-budget-calculator",
    title: "Trip Budget Calculator",
    category: "Lifestyle",
    categorySlug: "lifestyle",
    description: "Plan your travel budget with estimated costs for transport, accommodation, food, and activities.",
    longDescription: "Our Trip Budget Calculator helps you plan a comprehensive travel budget by estimating costs across all major categories — transportation, accommodation, food, activities, and miscellaneous expenses. Never get caught off-guard by travel costs again.",
    inputs: [
      { id: "days", label: "Trip Duration", type: "number", placeholder: "e.g. 5", unit: "days", min: 1 },
      { id: "transport", label: "Daily Transport", type: "number", placeholder: "e.g. 2000", unit: "₹", min: 0 },
      { id: "accommodation", label: "Daily Accommodation", type: "number", placeholder: "e.g. 3000", unit: "₹", min: 0 },
      { id: "food", label: "Daily Food", type: "number", placeholder: "e.g. 1500", unit: "₹", min: 0 },
      { id: "activities", label: "Daily Activities", type: "number", placeholder: "e.g. 1000", unit: "₹", min: 0 },
      { id: "misc", label: "Daily Miscellaneous", type: "number", placeholder: "e.g. 500", unit: "₹", min: 0 }
    ],
    formula: "Total = (Transport + Accommodation + Food + Activities + Misc) × Days",
    formulaExplanation: "All daily cost categories are summed and multiplied by the number of days to get the total trip budget.",
    howToUse: ["Enter trip duration in days", "Enter estimated daily costs for each category", "View total trip budget with category breakdown"],
    example: { description: "5-day trip with daily costs:", inputs: { days: 5, transport: 2000, accommodation: 3000, food: 1500, activities: 1000, misc: 500 }, result: "Total Budget: ₹40,000 | Transport: ₹10K | Stay: ₹15K | Food: ₹7.5K | Activities: ₹5K | Misc: ₹2.5K" },
    benefits: ["Comprehensive trip planning", "Category-wise breakdown", "Never overspend on trips", "Compare different trip scenarios"],
    faqs: [
      { question: "How much should I budget for emergencies?", answer: "Add 10-15% as a contingency buffer on top of your calculated budget. This covers unexpected expenses like medical needs, lost items, or plan changes." }
    ],
    relatedSlugs: ["fuel-cost-calculator", "tip-calculator", "time-zone-converter", "savings-goal-calculator"],
    icon: "Plane",
    keywords: ["trip budget calculator", "travel budget planner", "vacation budget", "trip cost calculator"]
  },
  {
    slug: "sleep-calculator",
    title: "Sleep Calculator",
    category: "Lifestyle",
    categorySlug: "lifestyle",
    description: "Calculate optimal bedtime or wake-up time based on sleep cycles for better rest.",
    longDescription: "Our Sleep Calculator helps you plan your sleep schedule based on natural 90-minute sleep cycles. Waking up at the end of a sleep cycle makes you feel more refreshed. Enter your bedtime or wake-up time to get optimized recommendations for the best possible rest.",
    inputs: [
      { id: "mode", label: "I Want to", type: "select", options: [
        { value: "sleep", label: "Fall Asleep At" },
        { value: "wake", label: "Wake Up At" }
      ] },
      { id: "time", label: "Time", type: "text", placeholder: "e.g. 11:00 PM" },
      { id: "cycles", label: "Sleep Cycles", type: "select", options: [
        { value: "3", label: "3 Cycles (4.5 hrs)" },
        { value: "4", label: "4 Cycles (6 hrs)" },
        { value: "5", label: "5 Cycles (7.5 hrs)" },
        { value: "6", label: "6 Cycles (9 hrs)" }
      ], defaultValue: "5" }
    ],
    formula: "Wake/Sleep time ± (Cycles × 90 min + 15 min fall-asleep offset)",
    formulaExplanation: "Sleep cycles are approximately 90 minutes. It takes about 15 minutes to fall asleep. The calculator adds or subtracts the appropriate number of cycles from your target time.",
    howToUse: ["Choose whether you're setting bedtime or wake time", "Enter the time", "Select number of sleep cycles", "View optimal sleep times"],
    example: { description: "Want to wake at 7:00 AM with 5 cycles:", inputs: { mode: "wake", time: "7:00", cycles: "5" }, result: "Fall asleep by: 11:15 PM for 5 cycles (7.5 hours of sleep)" },
    benefits: ["Optimize sleep quality", "Wake up refreshed", "Understand sleep cycles", "Improve daily energy"],
    faqs: [
      { question: "How long is one sleep cycle?", answer: "One complete sleep cycle is approximately 90 minutes. It progresses through light sleep, deep sleep, and REM sleep. Waking at the end of a cycle helps you feel refreshed." },
      { question: "How many sleep cycles do I need?", answer: "Most adults need 4-6 cycles (6-9 hours). Teenagers need 5-6 cycles. Children need 6-8 cycles. 5 cycles (7.5 hours) is recommended for most adults." }
    ],
    relatedSlugs: ["age-calculator", "date-difference-calculator", "birthday-countdown-calculator", "time-zone-converter"],
    icon: "Moon",
    keywords: ["sleep calculator", "bedtime calculator", "sleep cycle calculator", "wake up calculator"]
  },
  {
    slug: "birthday-countdown-calculator",
    title: "Birthday Countdown Calculator",
    category: "Lifestyle",
    categorySlug: "lifestyle",
    description: "Count down the days, hours, and minutes until the next birthday.",
    longDescription: "Our Birthday Countdown Calculator shows exactly how many days, hours, minutes, and seconds remain until the next birthday. Track upcoming birthdays of friends and family, plan surprises, and never forget an important birthday again.",
    inputs: [
      { id: "birthday", label: "Birthday Date", type: "date" }
    ],
    formula: "Next Birthday = Next occurrence of the given month/day",
    formulaExplanation: "The calculator determines when the birthday next occurs and counts down from the current moment.",
    howToUse: ["Enter the birthday date", "View countdown to next birthday"],
    example: { description: "Birthday on August 15:", inputs: { birthday: "1995-08-15" }, result: "Next Birthday: August 15, 2026 | Days Remaining: —" },
    benefits: ["Never forget birthdays", "Plan surprises in advance", "Track multiple birthdays", "Fun and interactive tool"],
    faqs: [
      { question: "How many days until my birthday?", answer: "Our calculator shows the exact countdown from today to the next occurrence of your birthday, including days, hours, and minutes." }
    ],
    relatedSlugs: ["age-calculator", "date-difference-calculator", "love-percentage-calculator", "sleep-calculator"],
    icon: "PartyPopper",
    keywords: ["birthday countdown", "days until birthday", "birthday calculator", "birthday reminder"]
  },
  {
    slug: "love-percentage-calculator",
    title: "Love Percentage Calculator",
    category: "Lifestyle",
    categorySlug: "lifestyle",
    description: "Calculate the fun love compatibility percentage between two names.",
    longDescription: "Our Love Percentage Calculator is a fun, lighthearted tool that generates a love compatibility score based on two names. Perfect for sharing with friends and having fun. Remember — this is for entertainment only, not real relationship advice!",
    inputs: [
      { id: "name1", label: "Your Name", type: "text", placeholder: "Enter your name" },
      { id: "name2", label: "Partner's Name", type: "text", placeholder: "Enter partner's name" }
    ],
    formula: "Character sum hash algorithm",
    formulaExplanation: "The calculator uses a deterministic algorithm based on the character values of both names to generate a consistent compatibility percentage. Running the same names always produces the same result.",
    howToUse: ["Enter your name", "Enter your partner's name", "View your love compatibility percentage"],
    example: { description: "Alice and Bob:", inputs: { name1: "Alice", name2: "Bob" }, result: "Love Compatibility: 72% ❤️" },
    benefits: ["Fun entertainment tool", "Share with friends", "Deterministic results", "Great party conversation starter"],
    faqs: [
      { question: "Is this calculator accurate?", answer: "This is purely for entertainment and fun. Real relationships are built on communication, trust, and compatibility — not name calculations!" }
    ],
    relatedSlugs: ["age-calculator", "birthday-countdown-calculator", "date-difference-calculator", "trip-budget-calculator"],
    icon: "Heart",
    keywords: ["love calculator", "love percentage", "compatibility calculator", "love test"]
  },
  {
    slug: "electricity-bill-calculator",
    title: "Electricity Bill Calculator",
    category: "Lifestyle",
    categorySlug: "lifestyle",
    description: "Estimate your electricity bill based on appliance usage and power consumption.",
    longDescription: "Our Electricity Bill Calculator helps you estimate your monthly electricity bill by calculating the power consumption of your appliances. Enter each appliance's wattage and daily usage to see which devices consume the most energy and how much your electricity costs.",
    inputs: [
      { id: "units", label: "Monthly Units (kWh)", type: "number", placeholder: "e.g. 300", unit: "kWh", min: 1 },
      { id: "rate", label: "Rate per Unit", type: "number", placeholder: "e.g. 6", unit: "₹/kWh", min: 0.5, step: 0.5 }
    ],
    formula: "Bill = Units × Rate + Fixed Charges",
    formulaExplanation: "The electricity bill is calculated by multiplying consumed units (kWh) by the per-unit rate. Additional fixed charges, taxes, and surcharges may apply depending on the provider.",
    howToUse: ["Enter total monthly electricity consumption in kWh", "Enter your electricity rate per unit", "View estimated bill amount"],
    example: { description: "300 units at ₹6 per unit:", inputs: { units: 300, rate: 6 }, result: "Estimated Bill: ₹1,800" },
    benefits: ["Estimate monthly electricity cost", "Understand power consumption", "Budget for utility expenses", "Identify energy-saving opportunities"],
    faqs: [
      { question: "How do I calculate my electricity units?", answer: "Check your electricity meter reading at the start and end of the month. The difference is your monthly consumption. Alternatively, add up the wattage × hours of all appliances." },
      { question: "What uses the most electricity?", answer: "Air conditioning (1,000-3,000W), water heaters (1,500-3,000W), and washing machines (500-2,000W) are typically the biggest consumers. LED lights and fans use relatively little." }
    ],
    relatedSlugs: ["fuel-cost-calculator", "trip-budget-calculator", "age-calculator", "savings-goal-calculator"],
    icon: "Lightbulb",
    keywords: ["electricity bill calculator", "power consumption calculator", "electricity cost", "energy bill calculator"]
  },
  {
    slug: "time-zone-converter",
    title: "Time Zone Converter",
    category: "Lifestyle",
    categorySlug: "lifestyle",
    description: "Convert time between different time zones worldwide for scheduling and planning.",
    longDescription: "Our Time Zone Converter helps you convert time between any two time zones worldwide. Essential for international business meetings, travel planning, and staying connected across time zones. See the current time difference between locations instantly.",
    inputs: [
      { id: "time", label: "Time", type: "text", placeholder: "e.g. 14:30" },
      { id: "from", label: "From Time Zone", type: "select", options: [
        { value: "UTC", label: "UTC" }, { value: "IST", label: "IST (UTC+5:30)" },
        { value: "EST", label: "EST (UTC-5)" }, { value: "PST", label: "PST (UTC-8)" },
        { value: "GMT", label: "GMT (UTC+0)" }, { value: "CET", label: "CET (UTC+1)" },
        { value: "JST", label: "JST (UTC+9)" }, { value: "AEST", label: "AEST (UTC+10)" },
        { value: "CST", label: "CST (UTC-6)" }, { value: "MSK", label: "MSK (UTC+3)" }
      ] },
      { id: "to", label: "To Time Zone", type: "select", options: [
        { value: "UTC", label: "UTC" }, { value: "IST", label: "IST (UTC+5:30)" },
        { value: "EST", label: "EST (UTC-5)" }, { value: "PST", label: "PST (UTC-8)" },
        { value: "GMT", label: "GMT (UTC+0)" }, { value: "CET", label: "CET (UTC+1)" },
        { value: "JST", label: "JST (UTC+9)" }, { value: "AEST", label: "AEST (UTC+10)" },
        { value: "CST", label: "CST (UTC-6)" }, { value: "MSK", label: "MSK (UTC+3)" }
      ] }
    ],
    formula: "Target Time = Source Time + (Target Offset - Source Offset)",
    formulaExplanation: "The time difference between zones is calculated from their UTC offsets. The source time is converted by adding the difference in offsets.",
    howToUse: ["Enter the time to convert", "Select the source time zone", "Select the target time zone", "View the converted time and offset difference"],
    example: { description: "Convert 2:30 PM IST to PST:", inputs: { time: "14:30", from: "IST", to: "PST" }, result: "14:30 IST = 1:00 AM PST (next day) | Difference: 13.5 hours" },
    benefits: ["Global time conversion", "Schedule international meetings", "Travel time planning", "Real-time conversion"],
    faqs: [
      { question: "What is IST?", answer: "IST stands for Indian Standard Time, which is UTC+5:30. It's used throughout India and is 5 hours and 30 minutes ahead of Coordinated Universal Time." }
    ],
    relatedSlugs: ["date-difference-calculator", "sleep-calculator", "age-calculator", "trip-budget-calculator"],
    icon: "Clock",
    keywords: ["time zone converter", "time zone calculator", "timezone conversion", "world clock converter"]
  }
];
