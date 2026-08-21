import { CalculatorMeta } from "../types";

export const healthCalculators: CalculatorMeta[] = [
  {
    slug: "bmi-calculator",
    title: "BMI Calculator",
    category: "Health",
    categorySlug: "health",
    description: "Calculate your Body Mass Index (BMI) to assess if your weight is in a healthy range.",
    longDescription: "Body Mass Index (BMI) is a widely used screening tool to categorize individuals based on their weight relative to their height. Our BMI Calculator helps you quickly determine your BMI category — underweight, normal weight, overweight, or obese — and provides guidance on what it means for your health. While BMI doesn't account for muscle mass or body composition, it serves as a useful starting point for understanding your weight status.",
    inputs: [
      { id: "weight", label: "Weight", type: "number", placeholder: "e.g. 70", unit: "kg", min: 1 },
      { id: "height", label: "Height", type: "number", placeholder: "e.g. 170", unit: "cm", min: 50, max: 300 }
    ],
    formula: "BMI = Weight (kg) / Height (m)²",
    formulaExplanation: "BMI is calculated by dividing your weight in kilograms by the square of your height in meters. The resulting number is then compared against standard BMI categories to determine your weight status.",
    howToUse: [
      "Enter your weight in kilograms",
      "Enter your height in centimeters",
      "View your BMI value and category",
      "Review the BMI range chart for reference"
    ],
    example: {
      description: "A person weighing 70 kg with a height of 175 cm:",
      inputs: { weight: 70, height: 175 },
      result: "BMI: 22.86 — Normal Weight (18.5 - 24.9)"
    },
    benefits: [
      "Quick assessment of weight status",
      "Understand health risk categories",
      "Track weight changes over time",
      "Compare against WHO/WHO standards"
    ],
    faqs: [
      { question: "What is a healthy BMI range?", answer: "A healthy BMI ranges from 18.5 to 24.9. Below 18.5 is underweight, 25-29.9 is overweight, and 30 or above is considered obese according to WHO standards." },
      { question: "Is BMI accurate for athletes?", answer: "BMI may not be accurate for athletes or very muscular individuals as it doesn't distinguish between muscle and fat. Athletes often have a higher BMI due to muscle mass despite being fit. Body fat percentage is a better measure for such individuals." },
      { question: "Does BMI differ for men and women?", answer: "The BMI calculation is the same for both men and women. However, women tend to have more body fat than men at the same BMI level. Some health organizations suggest different BMI cutoffs for Asian populations." }
    ],
    relatedSlugs: ["bmr-calculator", "calorie-calculator", "ideal-weight-calculator", "body-fat-calculator"],
    icon: "Activity",
    keywords: ["BMI calculator", "body mass index", "weight calculator", "BMI chart"]
  },
  {
    slug: "bmr-calculator",
    title: "BMR Calculator",
    category: "Health",
    categorySlug: "health",
    description: "Calculate your Basal Metabolic Rate to understand how many calories your body burns at rest.",
    longDescription: "Basal Metabolic Rate (BMR) is the number of calories your body needs to perform basic life-sustaining functions like breathing, circulation, and cell production. Our BMR Calculator uses the Mifflin-St Jeor equation, considered the most accurate formula, to help you understand your body's baseline energy needs. This is essential for creating effective diet and exercise plans.",
    inputs: [
      { id: "age", label: "Age", type: "number", placeholder: "e.g. 30", unit: "years", min: 15, max: 120 },
      { id: "gender", label: "Gender", type: "select", options: [
        { value: "male", label: "Male" }, { value: "female", label: "Female" }
      ] },
      { id: "weight", label: "Weight", type: "number", placeholder: "e.g. 70", unit: "kg", min: 30 },
      { id: "height", label: "Height", type: "number", placeholder: "e.g. 170", unit: "cm", min: 100, max: 250 }
    ],
    formula: "BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(years) + s",
    formulaExplanation: "Using the Mifflin-St Jeor equation, where s is +5 for males and -161 for females. This equation is widely regarded as the most accurate BMR estimation method for most adults.",
    howToUse: [
      "Enter your age in years",
      "Select your gender",
      "Input your weight in kilograms",
      "Enter your height in centimeters",
      "View your BMR and estimated daily calorie needs"
    ],
    example: {
      description: "A 30-year-old male, 75 kg, 175 cm:",
      inputs: { age: 30, gender: "male", weight: 75, height: 175 },
      result: "BMR: 1,714 calories/day | Estimated Daily Needs: ~2,357 calories (light activity)"
    },
    benefits: [
      "Understand your body's calorie needs",
      "Create personalized diet plans",
      "Set realistic weight loss or gain goals",
      "Optimize nutrition for fitness goals"
    ],
    faqs: [
      { question: "What is BMR vs TDEE?", answer: "BMR is the calories your body burns at complete rest. TDEE (Total Daily Energy Expenditure) includes BMR plus calories burned through daily activities and exercise. TDEE is more practical for diet planning." },
      { question: "Does BMR decrease with age?", answer: "Yes, BMR typically decreases by 1-2% per decade after age 20, primarily due to loss of muscle mass. Regular strength training can help maintain a higher BMR as you age." }
    ],
    relatedSlugs: ["bmi-calculator", "calorie-calculator", "macro-calculator", "ideal-weight-calculator"],
    icon: "Flame",
    keywords: ["BMR calculator", "basal metabolic rate", "metabolism calculator", "calorie calculator"]
  },
  {
    slug: "calorie-calculator",
    title: "Calorie Calculator",
    category: "Health",
    categorySlug: "health",
    description: "Calculate your daily calorie needs based on your activity level, goals, and body metrics.",
    longDescription: "Understanding your daily calorie needs is fundamental to achieving any health or fitness goal. Our Calorie Calculator estimates your Total Daily Energy Expenditure (TDEE) based on your body metrics, activity level, and goals. Whether you want to lose weight, maintain your current weight, or build muscle, this tool provides personalized calorie targets to guide your nutrition.",
    inputs: [
      { id: "age", label: "Age", type: "number", placeholder: "e.g. 28", unit: "years", min: 15, max: 120 },
      { id: "gender", label: "Gender", type: "select", options: [
        { value: "male", label: "Male" }, { value: "female", label: "Female" }
      ] },
      { id: "weight", label: "Weight", type: "number", placeholder: "e.g. 70", unit: "kg", min: 30 },
      { id: "height", label: "Height", type: "number", placeholder: "e.g. 170", unit: "cm", min: 100, max: 250 },
      { id: "activity", label: "Activity Level", type: "select", options: [
        { value: "1.2", label: "Sedentary (little/no exercise)" },
        { value: "1.375", label: "Light (1-3 days/week)" },
        { value: "1.55", label: "Moderate (3-5 days/week)" },
        { value: "1.725", label: "Active (6-7 days/week)" },
        { value: "1.9", label: "Very Active (athlete)" }
      ], defaultValue: "1.55" },
      { id: "goal", label: "Goal", type: "select", options: [
        { value: "lose", label: "Lose Weight" },
        { value: "maintain", label: "Maintain Weight" },
        { value: "gain", label: "Gain Weight" }
      ], defaultValue: "maintain" }
    ],
    formula: "TDEE = BMR × Activity Multiplier",
    formulaExplanation: "BMR is calculated using the Mifflin-St Jeor equation, then multiplied by the activity factor. For weight loss, subtract 500 calories; for weight gain, add 300-500 calories from the TDEE.",
    howToUse: [
      "Enter your personal details (age, gender, weight, height)",
      "Select your activity level",
      "Choose your fitness goal",
      "View your daily calorie recommendation"
    ],
    example: {
      description: "28-year-old male, 75 kg, 175 cm, moderate activity, maintain weight:",
      inputs: { age: 28, gender: "male", weight: 75, height: 175, activity: "1.55", goal: "maintain" },
      result: "BMR: 1,741 | Daily Calories Needed: 2,699 calories"
    },
    benefits: [
      "Personalized calorie targets",
      "Adjust for different activity levels",
      "Support weight loss, maintenance, or gain",
      "Foundation for any nutrition plan"
    ],
    faqs: [
      { question: "How accurate is this calculator?", answer: "This calculator provides an estimate based on well-established formulas. Individual metabolism can vary by ±10-15%. Use the result as a starting point and adjust based on actual results over 2-3 weeks." },
      { question: "What activity level should I choose?", answer: "Be honest about your actual activity level. Choose 'sedentary' if you have a desk job and rarely exercise, 'light' if you exercise 1-3 times per week, and 'moderate' for 3-5 sessions. When in doubt, choose one level lower." }
    ],
    relatedSlugs: ["bmr-calculator", "bmi-calculator", "macro-calculator", "water-intake-calculator"],
    icon: "Utensils",
    keywords: ["calorie calculator", "TDEE calculator", "daily calorie needs", "calorie deficit calculator"]
  },
  {
    slug: "water-intake-calculator",
    title: "Water Intake Calculator",
    category: "Health",
    categorySlug: "health",
    description: "Calculate your recommended daily water intake based on your body weight and activity level.",
    longDescription: "Staying properly hydrated is essential for optimal health, energy, and cognitive function. Our Water Intake Calculator provides a personalized daily water intake recommendation based on your body weight and activity level. Proper hydration supports digestion, circulation, temperature regulation, and countless other bodily functions.",
    inputs: [
      { id: "weight", label: "Body Weight", type: "number", placeholder: "e.g. 70", unit: "kg", min: 30 },
      { id: "activity", label: "Activity Level", type: "select", options: [
        { value: "sedentary", label: "Sedentary (desk job)" },
        { value: "moderate", label: "Moderately Active" },
        { value: "active", label: "Very Active" },
        { value: "athlete", label: "Athlete" }
      ], defaultValue: "moderate" },
      { id: "climate", label: "Climate", type: "select", options: [
        { value: "cold", label: "Cold" },
        { value: "moderate", label: "Moderate" },
        { value: "hot", label: "Hot/Humid" }
      ], defaultValue: "moderate" }
    ],
    formula: "Water (liters) = Weight (kg) × Factor × Climate Adjustment",
    formulaExplanation: "The base calculation uses 33ml per kg of body weight, adjusted for activity level (sedentary: 0.8x, moderate: 1.0x, active: 1.2x, athlete: 1.5x) and climate (cold: 0.9x, moderate: 1.0x, hot: 1.15x).",
    howToUse: [
      "Enter your body weight in kilograms",
      "Select your typical activity level",
      "Choose your climate conditions",
      "View your daily water intake recommendation"
    ],
    example: {
      description: "A 70 kg moderately active person in moderate climate:",
      inputs: { weight: 70, activity: "moderate", climate: "moderate" },
      result: "Daily Water Intake: ~2.3 liters (approximately 9 glasses)"
    },
    benefits: [
      "Personalized hydration targets",
      "Adjust for activity and climate",
      "Improve energy and concentration",
      "Support overall health and wellness"
    ],
    faqs: [
      { question: "Does coffee or tea count towards water intake?", answer: "Yes, caffeinated beverages do contribute to hydration, though slightly less than water due to mild diuretic effects. Fruits and vegetables with high water content also count." },
      { question: "What are signs of dehydration?", answer: "Common signs include dark yellow urine, dry mouth, headaches, fatigue, dizziness, and reduced skin elasticity. If you notice these signs, increase your water intake immediately." }
    ],
    relatedSlugs: ["calorie-calculator", "bmi-calculator", "bmr-calculator", "macro-calculator"],
    icon: "Droplets",
    keywords: ["water intake calculator", "daily water requirement", "hydration calculator", "how much water to drink"]
  },
  {
    slug: "ideal-weight-calculator",
    title: "Ideal Weight Calculator",
    category: "Health",
    categorySlug: "health",
    description: "Calculate your ideal body weight based on height, gender, and body frame using proven formulas.",
    longDescription: "Knowing your ideal weight range helps you set realistic health and fitness goals. Our Ideal Weight Calculator uses multiple proven formulas including Devine, Robinson, Miller, and Hamwi to give you a comprehensive ideal weight range based on your height, gender, and frame size. Use this as a guideline, not an absolute target — individual ideal weight varies based on muscle mass, bone density, and body composition.",
    inputs: [
      { id: "height", label: "Height", type: "number", placeholder: "e.g. 170", unit: "cm", min: 100, max: 250 },
      { id: "gender", label: "Gender", type: "select", options: [
        { value: "male", label: "Male" }, { value: "female", label: "Female" }
      ] },
      { id: "frame", label: "Body Frame", type: "select", options: [
        { value: "small", label: "Small" },
        { value: "medium", label: "Medium" },
        { value: "large", label: "Large" }
      ], defaultValue: "medium" }
    ],
    formula: "Multiple formulas (Devine, Robinson, Miller, Hamwi)",
    formulaExplanation: "Different formulas use different approaches. Devine formula: 50 + 2.3 × (height in inches - 60) for males, 45.5 + 2.3 × (height in inches - 60) for females. Results are averaged and adjusted for frame size.",
    howToUse: [
      "Enter your height in centimeters",
      "Select your gender",
      "Choose your body frame size",
      "View your ideal weight range"
    ],
    example: {
      description: "A male, 175 cm tall, medium frame:",
      inputs: { height: 175, gender: "male", frame: "medium" },
      result: "Ideal Weight Range: 64.5 - 73.5 kg"
    },
    benefits: [
      "Set realistic weight targets",
      "Compare multiple established formulas",
      "Adjust for body frame size",
      "Track progress toward healthy weight"
    ],
    faqs: [
      { question: "What if my current weight is above the ideal range?", answer: "Don't panic. Focus on gradual, sustainable changes — aim to lose 0.5-1 kg per week through a combination of balanced nutrition and regular exercise. Consult a healthcare professional for personalized advice." },
      { question: "Is there a single 'perfect' weight?", answer: "No. Ideal weight is a range, not a single number. Factors like muscle mass, bone density, age, and body composition all affect what's healthy for you. A BMI between 18.5-24.9 is generally considered healthy." }
    ],
    relatedSlugs: ["bmi-calculator", "bmr-calculator", "body-fat-calculator", "calorie-calculator"],
    icon: "Scale",
    keywords: ["ideal weight calculator", "perfect weight", "healthy weight range", "weight calculator"]
  },
  {
    slug: "body-fat-calculator",
    title: "Body Fat Calculator",
    category: "Health",
    categorySlug: "health",
    description: "Estimate your body fat percentage using the U.S. Navy method for a comprehensive fitness assessment.",
    longDescription: "Body fat percentage is one of the most important indicators of overall fitness. Our Body Fat Calculator uses the U.S. Navy method — a widely accepted technique that estimates body fat based on body measurements. Understanding your body fat percentage helps you set more accurate fitness goals than weight alone, as it distinguishes between fat mass and lean mass.",
    inputs: [
      { id: "gender", label: "Gender", type: "select", options: [
        { value: "male", label: "Male" }, { value: "female", label: "Female" }
      ] },
      { id: "waist", label: "Waist Circumference", type: "number", placeholder: "e.g. 80", unit: "cm", min: 50 },
      { id: "neck", label: "Neck Circumference", type: "number", placeholder: "e.g. 38", unit: "cm", min: 20 },
      { id: "height", label: "Height", type: "number", placeholder: "e.g. 175", unit: "cm", min: 100, max: 250 },
      { id: "hip", label: "Hip Circumference (female only)", type: "number", placeholder: "e.g. 100", unit: "cm", min: 50 }
    ],
    formula: "%BF = 495 / (1.0324 - 0.19077×log10(waist-neck) + 0.15456×log10(height)) - 450",
    formulaExplanation: "The U.S. Navy method uses waist, neck, and height measurements for males. For females, hip measurement is also included. The formula uses logarithmic calculations to estimate body fat percentage.",
    howToUse: [
      "Select your gender",
      "Measure your waist at the navel level",
      "Measure your neck below the Adam's apple",
      "Enter your height",
      "For females, also measure your hips at the widest point"
    ],
    example: {
      description: "Male, 80 cm waist, 38 cm neck, 175 cm height:",
      inputs: { gender: "male", waist: 80, neck: 38, height: 175 },
      result: "Estimated Body Fat: ~16.5% (Fitness category)"
    },
    benefits: [
      "More accurate than BMI for body composition",
      "Track fitness progress over time",
      "Set targeted body composition goals",
      "Widely accepted measurement method"
    ],
    faqs: [
      { question: "What are healthy body fat percentages?", answer: "For men: Essential 2-5%, Athletes 6-13%, Fitness 14-17%, Average 18-24%, Obese 25%+. For women: Essential 10-13%, Athletes 14-20%, Fitness 21-24%, Average 25-31%, Obese 32%+." },
      { question: "How do I measure accurately?", answer: "Use a flexible tape measure. For the waist, measure at the navel level. For the neck, measure just below the Adam's apple. For hips (women), measure at the widest point. Take measurements in the morning before eating." }
    ],
    relatedSlugs: ["bmi-calculator", "bmr-calculator", "ideal-weight-calculator", "macro-calculator"],
    icon: "PieChart",
    keywords: ["body fat calculator", "body fat percentage", "body composition", "navy method calculator"]
  },
  {
    slug: "pregnancy-due-date-calculator",
    title: "Pregnancy Due Date Calculator",
    category: "Health",
    categorySlug: "health",
    description: "Calculate your estimated due date based on your last menstrual period or conception date.",
    longDescription: "Our Pregnancy Due Date Calculator helps expecting parents estimate their baby's arrival date. Using standard obstetric calculations, it computes the expected due date based on either the last menstrual period (LMP) or conception date. The calculator also provides helpful information about each trimester and important milestones throughout your pregnancy journey.",
    inputs: [
      { id: "method", label: "Calculation Method", type: "select", options: [
        { value: "lmp", label: "Last Menstrual Period" },
        { value: "conception", label: "Conception Date" }
      ] },
      { id: "date", label: "Date", type: "date" }
    ],
    formula: "EDD = LMP + 280 days (40 weeks)",
    formulaExplanation: "The standard pregnancy calculation adds 280 days (40 weeks) to the first day of the last menstrual period. This assumes a 28-day menstrual cycle with ovulation on day 14. If using conception date, add 266 days (38 weeks).",
    howToUse: [
      "Choose your calculation method (LMP or conception date)",
      "Enter the relevant date",
      "View your estimated due date",
      "See your current pregnancy week and trimester"
    ],
    example: {
      description: "If LMP was January 1, 2024:",
      inputs: { method: "lmp", date: "2024-01-01" },
      result: "Estimated Due Date: October 8, 2024 | Current Week: — | Trimester: —"
    },
    benefits: [
      "Quick due date estimation",
      "Track pregnancy milestones",
      "Understand trimester timelines",
      "Plan for important appointments"
    ],
    faqs: [
      { question: "How accurate is the due date?", answer: "Only about 5% of babies are born on their exact due date. Most babies arrive within a window of 1-2 weeks before or after the estimated date. The calculation is a guideline, not a precise prediction." },
      { question: "What if I have irregular periods?", answer: "If you have irregular periods, an ultrasound dating scan (usually done between 8-13 weeks) is more accurate. Discuss your dates with your healthcare provider for the most reliable estimate." }
    ],
    relatedSlugs: ["ovulation-calculator", "age-calculator", "date-difference-calculator", "birthday-countdown-calculator"],
    icon: "Baby",
    keywords: ["due date calculator", "pregnancy calculator", "expected delivery date", "LMP calculator"]
  },
  {
    slug: "ovulation-calculator",
    title: "Ovulation Calculator",
    category: "Health",
    categorySlug: "health",
    description: "Find your most fertile days and ovulation date to optimize your chances of conception.",
    longDescription: "Our Ovulation Calculator helps you identify your most fertile window based on your menstrual cycle. Understanding when you ovulate is crucial for family planning — whether you're trying to conceive or want to better understand your cycle. The calculator estimates your ovulation date and the fertile window of 6 days each month when pregnancy is possible.",
    inputs: [
      { id: "lastPeriod", label: "First Day of Last Period", type: "date" },
      { id: "cycleLength", label: "Cycle Length", type: "number", placeholder: "e.g. 28", unit: "days", min: 20, max: 45, defaultValue: 28 }
    ],
    formula: "Ovulation = Last Period + (Cycle Length - 14) days",
    formulaExplanation: "Ovulation typically occurs 14 days before the next period, regardless of cycle length. The fertile window spans from 5 days before ovulation to 1 day after, as sperm can survive up to 5 days and the egg survives 12-24 hours.",
    howToUse: [
      "Enter the first day of your last menstrual period",
      "Input your average cycle length (default is 28 days)",
      "View your estimated ovulation date and fertile window",
      "Note the optimal days for conception"
    ],
    example: {
      description: "Last period started January 1 with a 28-day cycle:",
      inputs: { lastPeriod: "2024-01-01", cycleLength: 28 },
      result: "Estimated Ovulation: January 15 | Fertile Window: January 10 - 15"
    },
    benefits: [
      "Identify your fertile window",
      "Plan for conception timing",
      "Understand your menstrual cycle",
      "Track ovulation patterns"
    ],
    faqs: [
      { question: "How long can sperm survive?", answer: "Sperm can survive in the female reproductive tract for up to 5 days under optimal conditions. This is why the fertile window extends 5 days before ovulation." },
      { question: "Can I get pregnant outside my fertile window?", answer: "It's extremely unlikely but not impossible. The fertile window is when conception is most likely, but unusual cycle patterns or late ovulation can shift the timing." }
    ],
    relatedSlugs: ["pregnancy-due-date-calculator", "bmi-calculator", "calorie-calculator", "date-difference-calculator"],
    icon: "CalendarHeart",
    keywords: ["ovulation calculator", "fertile window calculator", "conception calculator", "period calculator"]
  },
  {
    slug: "macro-calculator",
    title: "Macro Calculator",
    category: "Health",
    categorySlug: "health",
    description: "Calculate your ideal daily intake of proteins, carbohydrates, and fats based on your goals.",
    longDescription: "Proper macronutrient balance is key to achieving your fitness goals. Our Macro Calculator helps you determine the optimal daily intake of proteins, carbohydrates, and fats based on your calorie needs, body composition, and fitness objectives. Whether you're cutting, maintaining, or bulking, this calculator provides a customized macro breakdown to support your nutrition plan.",
    inputs: [
      { id: "calories", label: "Daily Calories", type: "number", placeholder: "e.g. 2200", unit: "cal", min: 800 },
      { id: "goal", label: "Fitness Goal", type: "select", options: [
        { value: "lose", label: "Weight Loss" },
        { value: "maintain", label: "Maintain Weight" },
        { value: "gain", label: "Muscle Gain" }
      ] },
      { id: "activity", label: "Activity Level", type: "select", options: [
        { value: "sedentary", label: "Sedentary" },
        { value: "moderate", label: "Moderately Active" },
        { value: "active", label: "Very Active" }
      ], defaultValue: "moderate" }
    ],
    formula: "Protein: 1.6-2.2g/kg | Carbs: 45-65% | Fats: 20-35%",
    formulaExplanation: "Macro distribution follows evidence-based guidelines. Protein needs increase with activity and muscle-building goals. Carbohydrates fuel workouts and recovery. Fats support hormone production and nutrient absorption.",
    howToUse: [
      "Enter your target daily calorie intake",
      "Select your fitness goal",
      "Choose your activity level",
      "View your recommended macro breakdown in grams and percentages"
    ],
    example: {
      description: "2,200 calories, muscle gain, moderately active:",
      inputs: { calories: 2200, goal: "gain", activity: "moderate" },
      result: "Protein: 165g (30%) | Carbs: 248g (45%) | Fat: 82g (25%)"
    },
    benefits: [
      "Customized macro recommendations",
      "Support specific fitness goals",
      "Optimize nutrition for performance",
      "Simplify meal planning"
    ],
    faqs: [
      { question: "How much protein do I need?", answer: "For general health: 0.8g per kg of body weight. For active individuals: 1.2-1.6g/kg. For muscle building: 1.6-2.2g/kg. Endurance athletes need about 1.2-1.4g/kg." },
      { question: "Are low-carb diets effective?", answer: "Low-carb diets can be effective for weight loss, especially short-term. However, very low carb intake may reduce exercise performance and energy levels. A moderate approach works best for most people." }
    ],
    relatedSlugs: ["calorie-calculator", "bmr-calculator", "bmi-calculator", "water-intake-calculator"],
    icon: "Apple",
    keywords: ["macro calculator", "macronutrient calculator", "protein carbs fat calculator", "diet calculator"]
  },
  {
    slug: "heart-rate-calculator",
    title: "Heart Rate Calculator",
    category: "Health",
    categorySlug: "health",
    description: "Calculate your target heart rate zones for optimal cardiovascular training.",
    longDescription: "Training in the right heart rate zone is crucial for maximizing workout effectiveness. Our Heart Rate Calculator determines your maximum heart rate and optimal training zones based on your age. Whether you're doing fat-burning cardio, endurance training, or high-intensity intervals, knowing your target zones helps you train smarter, not just harder.",
    inputs: [
      { id: "age", label: "Age", type: "number", placeholder: "e.g. 30", unit: "years", min: 15, max: 120 }
    ],
    formula: "Max HR = 220 - Age",
    formulaExplanation: "The standard formula for maximum heart rate is 220 minus your age. Training zones are then calculated as percentages of this maximum: Light (50-60%), Moderate (60-70%), Vigorous (70-80%), Maximum (80-90%).",
    howToUse: [
      "Enter your age",
      "View your estimated maximum heart rate",
      "See all five training zones with BPM ranges",
      "Use these zones during your workouts"
    ],
    example: {
      description: "For a 30-year-old person:",
      inputs: { age: 30 },
      result: "Max Heart Rate: 190 BPM | Fat Burn Zone: 95-114 BPM | Cardio Zone: 114-133 BPM | Peak Zone: 133-152 BPM"
    },
    benefits: [
      "Optimize workout intensity",
      "Prevent overtraining",
      "Maximize fat burning or cardio benefits",
      "Track fitness improvements over time"
    ],
    faqs: [
      { question: "Is 220 - age accurate?", answer: "The 220 - age formula is a general estimate. Actual maximum heart rate can vary ±10-12 bpm from this prediction. For more accuracy, consider a supervised stress test. The Tanaka formula (208 - 0.7 × age) is considered slightly more accurate." },
      { question: "What zone burns the most fat?", answer: "The moderate zone (60-70% of max HR) burns the highest percentage of calories from fat. However, higher intensity zones burn more total calories, which can lead to greater overall fat loss." }
    ],
    relatedSlugs: ["bmi-calculator", "bmr-calculator", "calorie-calculator", "macro-calculator"],
    icon: "HeartPulse",
    keywords: ["heart rate calculator", "target heart rate", "heart rate zones", "max heart rate calculator"]
  }
];
