import { CalculatorMeta } from "../types";

export const unitConversionCalculators: CalculatorMeta[] = [
  {
    slug: "length-converter",
    title: "Length Converter",
    category: "Unit Conversion",
    categorySlug: "unit-conversion",
    description: "Convert between meters, kilometers, miles, feet, inches, and other length units.",
    longDescription: "Our Length Converter supports all common length measurement units including meters, kilometers, centimeters, millimeters, miles, yards, feet, and inches. Whether you're working on a construction project, studying geography, or traveling internationally, this tool provides instant, accurate conversions between any length units.",
    inputs: [
      { id: "value", label: "Value", type: "number", placeholder: "e.g. 100", min: 0 },
      { id: "from", label: "From", type: "select", options: [
        { value: "m", label: "Meters" }, { value: "km", label: "Kilometers" },
        { value: "cm", label: "Centimeters" }, { value: "mm", label: "Millimeters" },
        { value: "mi", label: "Miles" }, { value: "yd", label: "Yards" },
        { value: "ft", label: "Feet" }, { value: "in", label: "Inches" }
      ] },
      { id: "to", label: "To", type: "select", options: [
        { value: "m", label: "Meters" }, { value: "km", label: "Kilometers" },
        { value: "cm", label: "Centimeters" }, { value: "mm", label: "Millimeters" },
        { value: "mi", label: "Miles" }, { value: "yd", label: "Yards" },
        { value: "ft", label: "Feet" }, { value: "in", label: "Inches" }
      ] }
    ],
    formula: "1 meter = 3.28084 feet = 1.09361 yards = 0.000621371 miles",
    formulaExplanation: "All length units are converted through the base unit (meter). The value is first converted to meters, then to the target unit using appropriate conversion factors.",
    howToUse: ["Enter the value to convert", "Select the source unit", "Select the target unit", "View the converted result instantly"],
    example: { description: "Convert 100 meters to feet:", inputs: { value: 100, from: "m", to: "ft" }, result: "100 meters = 328.084 feet" },
    benefits: ["Instant length conversions", "Support for all major units", "Perfect for international projects", "Accurate to many decimal places"],
    faqs: [
      { question: "How many feet are in a meter?", answer: "1 meter equals approximately 3.28084 feet." },
      { question: "How do I convert inches to centimeters?", answer: "Multiply inches by 2.54. For example, 10 inches = 25.4 cm." }
    ],
    relatedSlugs: ["area-converter", "volume-converter", "weight-converter", "speed-converter"],
    icon: "Ruler",
    keywords: ["length converter", "meter to feet", "miles to km", "unit conversion"]
  },
  {
    slug: "weight-converter",
    title: "Weight Converter",
    category: "Unit Conversion",
    categorySlug: "unit-conversion",
    description: "Convert between kilograms, pounds, ounces, grams, and other weight units.",
    longDescription: "Our Weight Converter handles all common weight and mass units including kilograms, grams, milligrams, pounds, ounces, stones, and metric tons. Essential for cooking, shipping, fitness, and scientific calculations. Get instant, accurate conversions with a clean, easy-to-use interface.",
    inputs: [
      { id: "value", label: "Value", type: "number", placeholder: "e.g. 70", min: 0 },
      { id: "from", label: "From", type: "select", options: [
        { value: "kg", label: "Kilograms" }, { value: "g", label: "Grams" },
        { value: "mg", label: "Milligrams" }, { value: "lb", label: "Pounds" },
        { value: "oz", label: "Ounces" }, { value: "st", label: "Stone" },
        { value: "ton", label: "Metric Tons" }
      ] },
      { id: "to", label: "To", type: "select", options: [
        { value: "kg", label: "Kilograms" }, { value: "g", label: "Grams" },
        { value: "mg", label: "Milligrams" }, { value: "lb", label: "Pounds" },
        { value: "oz", label: "Ounces" }, { value: "st", label: "Stone" },
        { value: "ton", label: "Metric Tons" }
      ] }
    ],
    formula: "1 kg = 2.20462 lb = 35.274 oz = 1000 g",
    formulaExplanation: "Weight conversions go through kilograms as the base unit. Each unit is converted to kg first, then to the target unit using the appropriate conversion factor.",
    howToUse: ["Enter the weight value", "Select source and target units", "View the conversion instantly"],
    example: { description: "Convert 70 kg to pounds:", inputs: { value: 70, from: "kg", to: "lb" }, result: "70 kg = 154.324 lbs" },
    benefits: ["All major weight units supported", "Precise conversions", "Useful for cooking, fitness, shipping"],
    faqs: [
      { question: "How many pounds in a kilogram?", answer: "1 kilogram equals approximately 2.20462 pounds." }
    ],
    relatedSlugs: ["length-converter", "volume-converter", "temperature-converter", "speed-converter"],
    icon: "Weight",
    keywords: ["weight converter", "kg to pounds", "kilogram converter", "weight conversion"]
  },
  {
    slug: "temperature-converter",
    title: "Temperature Converter",
    category: "Unit Conversion",
    categorySlug: "unit-conversion",
    description: "Convert between Celsius, Fahrenheit, and Kelvin temperature scales instantly.",
    longDescription: "Our Temperature Converter supports Celsius, Fahrenheit, and Kelvin scales with instant conversion. Whether you're cooking, traveling, studying science, or checking weather in different countries, this tool provides accurate temperature conversions. See key temperature reference points like freezing and boiling points of water.",
    inputs: [
      { id: "value", label: "Temperature", type: "number", placeholder: "e.g. 100" },
      { id: "from", label: "From", type: "select", options: [
        { value: "C", label: "Celsius (°C)" }, { value: "F", label: "Fahrenheit (°F)" },
        { value: "K", label: "Kelvin (K)" }
      ] },
      { id: "to", label: "To", type: "select", options: [
        { value: "C", label: "Celsius (°C)" }, { value: "F", label: "Fahrenheit (°F)" },
        { value: "K", label: "Kelvin (K)" }
      ] }
    ],
    formula: "°F = °C × 9/5 + 32 | K = °C + 273.15",
    formulaExplanation: "Celsius to Fahrenheit: multiply by 9/5 and add 32. Fahrenheit to Celsius: subtract 32 and multiply by 5/9. Kelvin is Celsius + 273.15.",
    howToUse: ["Enter the temperature value", "Select the source scale", "Select the target scale", "View the converted temperature"],
    example: { description: "Convert 100°C to Fahrenheit:", inputs: { value: 100, from: "C", to: "F" }, result: "100°C = 212°F" },
    benefits: ["All three major scales", "Instant conversion", "Key reference points displayed", "Useful for travel and science"],
    faqs: [
      { question: "At what temperature are Celsius and Fahrenheit equal?", answer: "Celsius and Fahrenheit are equal at -40 degrees. So -40°C = -40°F." },
      { question: "What is absolute zero?", answer: "Absolute zero is 0 Kelvin (−273.15°C or −459.67°F). It's the theoretical lowest possible temperature where all molecular motion stops." }
    ],
    relatedSlugs: ["length-converter", "weight-converter", "area-converter", "volume-converter"],
    icon: "Thermometer",
    keywords: ["temperature converter", "celsius to fahrenheit", "fahrenheit to celsius", "temperature conversion"]
  },
  {
    slug: "area-converter",
    title: "Area Converter",
    category: "Unit Conversion",
    categorySlug: "unit-conversion",
    description: "Convert between square meters, acres, hectares, square feet, and other area units.",
    longDescription: "Our Area Converter supports square meters, square kilometers, hectares, acres, square feet, square inches, and square miles. Essential for real estate, construction, agriculture, and academic purposes. Convert any area measurement quickly and accurately.",
    inputs: [
      { id: "value", label: "Value", type: "number", placeholder: "e.g. 1000", min: 0 },
      { id: "from", label: "From", type: "select", options: [
        { value: "sqm", label: "Square Meters" }, { value: "sqkm", label: "Square Kilometers" },
        { value: "ha", label: "Hectares" }, { value: "acre", label: "Acres" },
        { value: "sqft", label: "Square Feet" }, { value: "sqmi", label: "Square Miles" },
        { value: "sqin", label: "Square Inches" }, { value: "sqyd", label: "Square Yards" }
      ] },
      { id: "to", label: "To", type: "select", options: [
        { value: "sqm", label: "Square Meters" }, { value: "sqkm", label: "Square Kilometers" },
        { value: "ha", label: "Hectares" }, { value: "acre", label: "Acres" },
        { value: "sqft", label: "Square Feet" }, { value: "sqmi", label: "Square Miles" },
        { value: "sqin", label: "Square Inches" }, { value: "sqyd", label: "Square Yards" }
      ] }
    ],
    formula: "1 sq m = 10.7639 sq ft = 0.0001 hectares = 0.000247 acres",
    formulaExplanation: "All area units convert through square meters as the base unit.",
    howToUse: ["Enter the area value", "Select source and target units", "View the conversion result"],
    example: { description: "Convert 1 acre to square meters:", inputs: { value: 1, from: "acre", to: "sqm" }, result: "1 acre = 4,046.86 square meters" },
    benefits: ["All major area units", "Real estate applications", "Construction planning", "Agricultural measurements"],
    faqs: [
      { question: "How many square feet in an acre?", answer: "1 acre equals 43,560 square feet." }
    ],
    relatedSlugs: ["length-converter", "volume-converter", "land-area-converter", "tile-calculator"],
    icon: "Square",
    keywords: ["area converter", "acre to sq ft", "hectare converter", "area conversion"]
  },
  {
    slug: "volume-converter",
    title: "Volume Converter",
    category: "Unit Conversion",
    categorySlug: "unit-conversion",
    description: "Convert between liters, gallons, cups, cubic meters, and other volume units.",
    longDescription: "Our Volume Converter supports liters, milliliters, gallons (US/UK), quarts, pints, cups, fluid ounces, cubic meters, and cubic feet. Essential for cooking, scientific experiments, fuel calculations, and any scenario requiring volume conversions between metric and imperial units.",
    inputs: [
      { id: "value", label: "Value", type: "number", placeholder: "e.g. 10", min: 0 },
      { id: "from", label: "From", type: "select", options: [
        { value: "l", label: "Liters" }, { value: "ml", label: "Milliliters" },
        { value: "gal", label: "Gallons (US)" }, { value: "galuk", label: "Gallons (UK)" },
        { value: "cup", label: "Cups" }, { value: "floz", label: "Fluid Ounces" },
        { value: "cbm", label: "Cubic Meters" }, { value: "cbft", label: "Cubic Feet" }
      ] },
      { id: "to", label: "To", type: "select", options: [
        { value: "l", label: "Liters" }, { value: "ml", label: "Milliliters" },
        { value: "gal", label: "Gallons (US)" }, { value: "galuk", label: "Gallons (UK)" },
        { value: "cup", label: "Cups" }, { value: "floz", label: "Fluid Ounces" },
        { value: "cbm", label: "Cubic Meters" }, { value: "cbft", label: "Cubic Feet" }
      ] }
    ],
    formula: "1 liter = 0.264172 US gallons = 33.814 US fl oz",
    formulaExplanation: "All volume units convert through liters as the base unit using standard conversion factors.",
    howToUse: ["Enter the volume value", "Select source and target units", "View the converted result"],
    example: { description: "Convert 10 liters to US gallons:", inputs: { value: 10, from: "l", to: "gal" }, result: "10 liters = 2.64172 US gallons" },
    benefits: ["Metric and imperial support", "Cooking measurements", "Scientific applications", "Fuel volume conversions"],
    faqs: [
      { question: "What is the difference between US and UK gallons?", answer: "1 US gallon = 3.785 liters. 1 UK (Imperial) gallon = 4.546 liters. The UK gallon is about 20% larger than the US gallon." }
    ],
    relatedSlugs: ["length-converter", "weight-converter", "area-converter", "tank-volume-calculator"],
    icon: "Beaker",
    keywords: ["volume converter", "liters to gallons", "cup converter", "volume conversion"]
  },
  {
    slug: "speed-converter",
    title: "Speed Converter",
    category: "Unit Conversion",
    categorySlug: "unit-conversion",
    description: "Convert between km/h, mph, m/s, knots, and other speed units.",
    longDescription: "Our Speed Converter supports kilometers per hour, miles per hour, meters per second, feet per second, and knots. Essential for driving, aviation, maritime, sports, and physics calculations. Get instant, accurate speed conversions with a clean interface.",
    inputs: [
      { id: "value", label: "Speed", type: "number", placeholder: "e.g. 100", min: 0 },
      { id: "from", label: "From", type: "select", options: [
        { value: "kmh", label: "km/h" }, { value: "mph", label: "mph" },
        { value: "ms", label: "m/s" }, { value: "fts", label: "ft/s" },
        { value: "knot", label: "Knots" }
      ] },
      { id: "to", label: "To", type: "select", options: [
        { value: "kmh", label: "km/h" }, { value: "mph", label: "mph" },
        { value: "ms", label: "m/s" }, { value: "fts", label: "ft/s" },
        { value: "knot", label: "Knots" }
      ] }
    ],
    formula: "1 km/h = 0.621371 mph = 0.27778 m/s",
    formulaExplanation: "Speed conversions use standard conversion factors between the different unit systems.",
    howToUse: ["Enter the speed value", "Select source and target units", "View the conversion"],
    example: { description: "Convert 100 km/h to mph:", inputs: { value: 100, from: "kmh", to: "mph" }, result: "100 km/h = 62.137 mph" },
    benefits: ["All common speed units", "Driving speed conversions", "Aviation and maritime support", "Physics calculations"],
    faqs: [
      { question: "What is the speed of light?", answer: "The speed of light in vacuum is exactly 299,792,458 m/s (approximately 1,079,252,849 km/h or 670,616,629 mph)." }
    ],
    relatedSlugs: ["time-converter", "fuel-cost-calculator", "distance-converter", "energy-converter"],
    icon: "Gauge",
    keywords: ["speed converter", "km to mph", "speed conversion", "kmh to mph"]
  },
  {
    slug: "time-converter",
    title: "Time Converter",
    category: "Unit Conversion",
    categorySlug: "unit-conversion",
    description: "Convert between hours, minutes, seconds, days, weeks, months, and years.",
    longDescription: "Our Time Converter helps you convert between any time units including seconds, minutes, hours, days, weeks, months, and years. Perfect for project planning, scheduling, and understanding time durations across different scales.",
    inputs: [
      { id: "value", label: "Value", type: "number", placeholder: "e.g. 48", min: 0 },
      { id: "from", label: "From", type: "select", options: [
        { value: "sec", label: "Seconds" }, { value: "min", label: "Minutes" },
        { value: "hr", label: "Hours" }, { value: "day", label: "Days" },
        { value: "week", label: "Weeks" }, { value: "month", label: "Months (30 days)" },
        { value: "year", label: "Years" }
      ] },
      { id: "to", label: "To", type: "select", options: [
        { value: "sec", label: "Seconds" }, { value: "min", label: "Minutes" },
        { value: "hr", label: "Hours" }, { value: "day", label: "Days" },
        { value: "week", label: "Weeks" }, { value: "month", label: "Months (30 days)" },
        { value: "year", label: "Years" }
      ] }
    ],
    formula: "1 hour = 60 minutes = 3600 seconds",
    formulaExplanation: "Time conversions use standard factors: 60 sec/min, 60 min/hr, 24 hr/day, 7 days/week.",
    howToUse: ["Enter the time value", "Select source and target units", "View the conversion result"],
    example: { description: "Convert 48 hours to days:", inputs: { value: 48, from: "hr", to: "day" }, result: "48 hours = 2 days" },
    benefits: ["All common time units", "Quick conversions", "Project planning support", "Scheduling helper"],
    faqs: [
      { question: "How many hours in a year?", answer: "There are 8,760 hours in a standard year (365 × 24). A leap year has 8,784 hours." }
    ],
    relatedSlugs: ["speed-converter", "date-difference-calculator", "study-time-calculator", "age-calculator"],
    icon: "Timer",
    keywords: ["time converter", "hours to minutes", "time conversion", "seconds to hours"]
  },
  {
    slug: "pressure-converter",
    title: "Pressure Converter",
    category: "Unit Conversion",
    categorySlug: "unit-conversion",
    description: "Convert between Pascal, bar, PSI, ATM, and other pressure units.",
    longDescription: "Our Pressure Converter supports Pascal (Pa), kilopascal (kPa), bar, millibar, PSI (pounds per square inch), ATM (atmosphere), mmHg (millimeters of mercury), and torr. Essential for engineering, meteorology, diving, and scientific applications.",
    inputs: [
      { id: "value", label: "Pressure", type: "number", placeholder: "e.g. 101325", min: 0 },
      { id: "from", label: "From", type: "select", options: [
        { value: "pa", label: "Pascal (Pa)" }, { value: "kpa", label: "Kilopascal (kPa)" },
        { value: "bar", label: "Bar" }, { value: "mbar", label: "Millibar" },
        { value: "psi", label: "PSI" }, { value: "atm", label: "Atmosphere (ATM)" },
        { value: "mmhg", label: "mmHg" }, { value: "torr", label: "Torr" }
      ] },
      { id: "to", label: "To", type: "select", options: [
        { value: "pa", label: "Pascal (Pa)" }, { value: "kpa", label: "Kilopascal (kPa)" },
        { value: "bar", label: "Bar" }, { value: "mbar", label: "Millibar" },
        { value: "psi", label: "PSI" }, { value: "atm", label: "Atmosphere (ATM)" },
        { value: "mmhg", label: "mmHg" }, { value: "torr", label: "Torr" }
      ] }
    ],
    formula: "1 ATM = 101,325 Pa = 14.696 PSI = 1.01325 bar",
    formulaExplanation: "All pressure units convert through Pascals (Pa) as the base unit.",
    howToUse: ["Enter the pressure value", "Select source and target units", "View the conversion"],
    example: { description: "Convert 1 ATM to PSI:", inputs: { value: 1, from: "atm", to: "psi" }, result: "1 ATM = 14.696 PSI" },
    benefits: ["All major pressure units", "Engineering applications", "Weather and meteorology", "Diving calculations"],
    faqs: [
      { question: "What is standard atmospheric pressure?", answer: "Standard atmospheric pressure is 101,325 Pa (101.325 kPa) = 1 ATM = 14.696 PSI = 1.01325 bar = 760 mmHg." }
    ],
    relatedSlugs: ["energy-converter", "volume-converter", "speed-converter", "temperature-converter"],
    icon: "Gauge",
    keywords: ["pressure converter", "bar to psi", "atm to kpa", "pressure conversion"]
  },
  {
    slug: "energy-converter",
    title: "Energy Converter",
    category: "Unit Conversion",
    categorySlug: "unit-conversion",
    description: "Convert between Joules, calories, kWh, BTU, and other energy units.",
    longDescription: "Our Energy Converter supports Joules, kilojoules, calories, kilocalories, kilowatt-hours (kWh), BTU, electron volts, and watt-hours. Essential for nutrition, physics, electrical engineering, and understanding energy consumption and output.",
    inputs: [
      { id: "value", label: "Energy", type: "number", placeholder: "e.g. 1000", min: 0 },
      { id: "from", label: "From", type: "select", options: [
        { value: "j", label: "Joules (J)" }, { value: "kj", label: "Kilojoules (kJ)" },
        { value: "cal", label: "Calories" }, { value: "kcal", label: "Kilocalories" },
        { value: "kwh", label: "Kilowatt-hours" }, { value: "btu", label: "BTU" },
        { value: "wh", label: "Watt-hours" }, { value: "ev", label: "Electron Volts" }
      ] },
      { id: "to", label: "To", type: "select", options: [
        { value: "j", label: "Joules (J)" }, { value: "kj", label: "Kilojoules (kJ)" },
        { value: "cal", label: "Calories" }, { value: "kcal", label: "Kilocalories" },
        { value: "kwh", label: "Kilowatt-hours" }, { value: "btu", label: "BTU" },
        { value: "wh", label: "Watt-hours" }, { value: "ev", label: "Electron Volts" }
      ] }
    ],
    formula: "1 kWh = 3,600,000 J = 860 kcal = 3412 BTU",
    formulaExplanation: "Energy units convert through Joules as the base unit using established conversion factors.",
    howToUse: ["Enter the energy value", "Select source and target units", "View the conversion result"],
    example: { description: "Convert 1 kWh to calories:", inputs: { value: 1, from: "kwh", to: "kcal" }, result: "1 kWh = 860.42 kcal" },
    benefits: ["All major energy units", "Nutrition and physics", "Electricity calculations", "Engineering applications"],
    faqs: [
      { question: "What is a food calorie?", answer: "A food calorie (kcal or Calorie with capital C) equals 1,000 scientific calories. When nutrition labels say 200 calories, they mean 200 kilocalories = 200,000 scientific calories." }
    ],
    relatedSlugs: ["pressure-converter", "data-storage-converter", "electricity-bill-calculator", "temperature-converter"],
    icon: "Zap",
    keywords: ["energy converter", "joules to calories", "kwh converter", "BTU converter"]
  },
  {
    slug: "data-storage-converter",
    title: "Data Storage Converter",
    category: "Unit Conversion",
    categorySlug: "unit-conversion",
    description: "Convert between bytes, KB, MB, GB, TB, PB, and other digital storage units.",
    longDescription: "Our Data Storage Converter supports bytes, kilobytes, megabytes, gigabytes, terabytes, petabytes, bits, and kibibytes/mebibytes (binary units). Essential for IT professionals, students, and anyone managing digital storage. Understand the difference between decimal and binary storage units.",
    inputs: [
      { id: "value", label: "Size", type: "number", placeholder: "e.g. 1024", min: 0 },
      { id: "from", label: "From", type: "select", options: [
        { value: "bit", label: "Bits" }, { value: "byte", label: "Bytes" },
        { value: "kb", label: "Kilobytes (KB)" }, { value: "mb", label: "Megabytes (MB)" },
        { value: "gb", label: "Gigabytes (GB)" }, { value: "tb", label: "Terabytes (TB)" },
        { value: "pb", label: "Petabytes (PB)" }
      ] },
      { id: "to", label: "To", type: "select", options: [
        { value: "bit", label: "Bits" }, { value: "byte", label: "Bytes" },
        { value: "kb", label: "Kilobytes (KB)" }, { value: "mb", label: "Megabytes (MB)" },
        { value: "gb", label: "Gigabytes (GB)" }, { value: "tb", label: "Terabytes (TB)" },
        { value: "pb", label: "Petabytes (PB)" }
      ] }
    ],
    formula: "1 GB = 1,024 MB = 1,048,576 KB = 1,073,741,824 bytes",
    formulaExplanation: "This calculator uses binary (1024-based) units commonly used in computing. Note: Some manufacturers use decimal (1000-based) units, which is why a 1TB drive shows ~931GB.",
    howToUse: ["Enter the data size value", "Select source and target units", "View the conversion"],
    example: { description: "Convert 1 GB to MB:", inputs: { value: 1, from: "gb", to: "mb" }, result: "1 GB = 1,024 MB" },
    benefits: ["All storage units", "Binary unit support", "Download time reference", "IT professionals tool"],
    faqs: [
      { question: "Why is my 1TB drive only 931GB?", answer: "Hard drive manufacturers use decimal (base-10) units where 1TB = 1,000GB. Operating systems use binary (base-2) where 1TB = 1,024GB. 1,000,000,000,000 / 1,073,741,824 ≈ 931 GB." }
    ],
    relatedSlugs: ["download-time-calculator", "bandwidth-calculator", "internet-speed-calculator", "compression-ratio-calculator"],
    icon: "HardDrive",
    keywords: ["data storage converter", "mb to gb", "data size converter", "storage conversion"]
  }
];
