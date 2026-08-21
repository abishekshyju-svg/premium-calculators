import { CalculatorMeta } from "../types";

export const educationCalculators: CalculatorMeta[] = [
  {
    slug: "percentage-calculator",
    title: "Percentage Calculator",
    category: "Education",
    categorySlug: "education",
    description: "Calculate percentages, percentage changes, and find what percent one number is of another.",
    longDescription: "Our Percentage Calculator handles all common percentage calculations with ease. Whether you need to find the percentage of a number, calculate percentage increase or decrease, or determine what percentage one value is of another, this versatile tool provides instant, accurate results. Essential for students, professionals, and everyday calculations.",
    inputs: [
      { id: "mode", label: "Calculation Type", type: "select", options: [
        { value: "of", label: "What is X% of Y?" },
        { value: "is", label: "X is what % of Y?" },
        { value: "change", label: "Percentage Change (from X to Y)" }
      ] },
      { id: "value1", label: "Value 1", type: "number", placeholder: "e.g. 25", min: 0 },
      { id: "value2", label: "Value 2", type: "number", placeholder: "e.g. 200", min: 0 }
    ],
    formula: "Depends on mode selected",
    formulaExplanation: "Mode 1: Result = (X/100) × Y. Mode 2: Result = (X/Y) × 100. Mode 3: Result = ((Y-X)/X) × 100.",
    howToUse: [
      "Select the type of percentage calculation",
      "Enter the relevant values",
      "View the result instantly"
    ],
    example: {
      description: "What is 25% of 200?",
      inputs: { mode: "of", value1: 25, value2: 200 },
      result: "25% of 200 = 50"
    },
    benefits: [
      "Quick and accurate percentage calculations",
      "Multiple calculation modes",
      "Useful for exams, shopping, and work",
      "No manual formula needed"
    ],
    faqs: [
      { question: "How do I calculate percentage increase?", answer: "Use the formula: ((New Value - Old Value) / Old Value) × 100. For example, if a price increases from 80 to 100, the increase is ((100-80)/80) × 100 = 25%." },
      { question: "Can percentages be greater than 100%?", answer: "Yes. A percentage greater than 100% means the value exceeds the original reference. For example, if your electricity bill increased from ₹1000 to ₹1500, that's a 50% increase." }
    ],
    relatedSlugs: ["percentage-increase-calculator", "percentage-decrease-calculator", "discount-calculator", "gpa-calculator"],
    icon: "Percent",
    keywords: ["percentage calculator", "percentage formula", "percent calculator", "percentage change calculator"]
  },
  {
    slug: "gpa-calculator",
    title: "GPA Calculator",
    category: "Education",
    categorySlug: "education",
    description: "Calculate your Grade Point Average (GPA) based on your grades and credit hours.",
    longDescription: "Our GPA Calculator helps students quickly compute their Grade Point Average by entering courses, grades, and credit hours. Whether you're on a 4.0 or 10-point scale, this tool provides an accurate GPA calculation. Track your academic progress, set GPA goals, and understand where you stand academically.",
    inputs: [
      { id: "scale", label: "GPA Scale", type: "select", options: [
        { value: "4", label: "4.0 Scale" }, { value: "10", label: "10.0 Scale" }
      ], defaultValue: "4" },
      { id: "courses", label: "Number of Courses", type: "number", placeholder: "e.g. 5", min: 1, max: 20, defaultValue: 5 }
    ],
    formula: "GPA = Σ(Grade Points × Credits) / Σ(Credits)",
    formulaExplanation: "Multiply each course's grade points by its credit hours, sum all these products, then divide by the total credit hours. On a 4.0 scale: A=4, A-=3.7, B+=3.3, B=3, B-=2.7, C+=2.3, C=2, D=1, F=0.",
    howToUse: [
      "Select your GPA scale (4.0 or 10.0)",
      "Enter the number of courses",
      "For each course, enter the grade and credit hours",
      "View your calculated GPA"
    ],
    example: {
      description: "3 courses on 4.0 scale: A(4 credits), B+(3 credits), B(3 credits):",
      inputs: { scale: "4", courses: 3 },
      result: "GPA: (4×4 + 3.3×3 + 3×3) / 10 = 3.49"
    },
    benefits: [
      "Supports both 4.0 and 10.0 scales",
      "Calculate semester and cumulative GPA",
      "Plan grades needed for target GPA",
      "Track academic progress over time"
    ],
    faqs: [
      { question: "How do I improve my GPA?", answer: "Focus on courses with higher credit hours as they impact GPA more. Attend classes, complete assignments on time, seek tutoring for difficult subjects, and use study groups effectively." },
      { question: "What is a good GPA?", answer: "A GPA of 3.5+ (4.0 scale) is considered excellent. For graduate school, 3.0+ is typically the minimum requirement. However, requirements vary by program and institution." }
    ],
    relatedSlugs: ["cgpa-calculator", "grade-calculator", "percentage-calculator", "exam-score-calculator"],
    icon: "Award",
    keywords: ["GPA calculator", "grade point average", "college GPA calculator", "academic GPA"]
  },
  {
    slug: "cgpa-calculator",
    title: "CGPA Calculator",
    category: "Education",
    categorySlug: "education",
    description: "Calculate your Cumulative Grade Point Average (CGPA) across multiple semesters.",
    longDescription: "CGPA (Cumulative Grade Point Average) reflects your overall academic performance across all semesters. Our CGPA Calculator helps you compute both individual semester CGPA and cumulative CGPA by aggregating grades and credits. Essential for students tracking long-term academic performance for university admissions, scholarships, and job applications.",
    inputs: [
      { id: "semesters", label: "Number of Semesters", type: "number", placeholder: "e.g. 4", min: 1, max: 12, defaultValue: 4 },
      { id: "scale", label: "CGPA Scale", type: "select", options: [
        { value: "10", label: "10.0 Scale" }, { value: "4", label: "4.0 Scale" }
      ], defaultValue: "10" }
    ],
    formula: "CGPA = Σ(Total Grade Points) / Σ(Total Credits)",
    formulaExplanation: "Sum all grade points multiplied by credits across all semesters, then divide by total credits. On a 10-point scale: O=10, A+=9, A=8, B+=7, B=6, C=5, F=0.",
    howToUse: [
      "Enter the number of semesters",
      "Select your CGPA scale",
      "Enter GPA and total credits for each semester",
      "View your cumulative CGPA"
    ],
    example: {
      description: "Semester 1: 8.5 GPA, 20 credits | Semester 2: 8.8 GPA, 22 credits:",
      inputs: { semesters: 2, scale: "10" },
      result: "Semester 1 CGPA: 8.5 | Semester 2 CGPA: 8.8 | Cumulative CGPA: 8.66"
    },
    benefits: [
      "Track multi-semester academic progress",
      "Understand cumulative performance",
      "Essential for academic records",
      "Useful for graduate school applications"
    ],
    faqs: [
      { question: "What is the difference between GPA and CGPA?", answer: "GPA typically refers to a single semester's grade point average, while CGPA is the cumulative average across all semesters. CGPA provides a broader picture of academic performance." },
      { question: "How do I convert CGPA to percentage?", answer: "On a 10-point scale, multiply CGPA by 10 for percentage (e.g., 8.5 CGPA = 85%). On a 4.0 scale, multiply by 25 (e.g., 3.6 GPA = 90%). Conversion may vary by institution." }
    ],
    relatedSlugs: ["gpa-calculator", "grade-calculator", "percentage-calculator", "average-marks-calculator"],
    icon: "BookOpen",
    keywords: ["CGPA calculator", "cumulative GPA", "semester CGPA calculator", "GPA to percentage"]
  },
  {
    slug: "grade-calculator",
    title: "Grade Calculator",
    category: "Education",
    categorySlug: "education",
    description: "Calculate the grade needed on your final exam to achieve your desired course grade.",
    longDescription: "Our Grade Calculator helps you determine exactly what grade you need on your remaining assignments or final exam to achieve your target course grade. Enter your current grades and their weights, then specify your target to see what you need. Eliminate the guesswork and plan your study efforts effectively.",
    inputs: [
      { id: "currentGrade", label: "Current Grade (%)", type: "number", placeholder: "e.g. 80", unit: "%", min: 0, max: 100 },
      { id: "targetGrade", label: "Target Grade (%)", type: "number", placeholder: "e.g. 90", unit: "%", min: 0, max: 100 },
      { id: "finalWeight", label: "Final Exam Weight (%)", type: "number", placeholder: "e.g. 40", unit: "%", min: 1, max: 100 }
    ],
    formula: "Required = (Target - Current × (1 - FinalWeight/100)) / (FinalWeight/100)",
    formulaExplanation: "The formula accounts for the weight of completed work vs remaining work. It calculates the minimum grade needed on remaining assessments to reach the target course grade.",
    howToUse: [
      "Enter your current course grade",
      "Set your target/desired course grade",
      "Enter the weight of remaining assessments",
      "View the grade you need on remaining work"
    ],
    example: {
      description: "Current grade: 80%, target: 90%, final exam worth 40%:",
      inputs: { currentGrade: 80, targetGrade: 90, finalWeight: 40 },
      result: "You need at least 105% on the final — consider adjusting your target or maximizing all remaining work."
    },
    benefits: [
      "Know exactly what grades you need",
      "Prioritize study time effectively",
      "Set realistic academic goals",
      "Avoid last-minute surprises"
    ],
    faqs: [
      { question: "What if I need more than 100%?", answer: "If the required grade exceeds 100%, it means the target is mathematically unattainable with the current grades. Consider adjusting your target or maximizing points on all remaining work." },
      { question: "Can this calculate weighted average grades?", answer: "Yes, you can use this to work backwards from a desired weighted average. The tool accounts for both completed and remaining weighted components." }
    ],
    relatedSlugs: ["gpa-calculator", "cgpa-calculator", "percentage-calculator", "exam-score-calculator"],
    icon: "ClipboardCheck",
    keywords: ["grade calculator", "final grade calculator", "what grade do I need", "course grade calculator"]
  },
  {
    slug: "attendance-calculator",
    title: "Attendance Calculator",
    category: "Education",
    categorySlug: "education",
    description: "Calculate your attendance percentage and find how many classes you can still miss.",
    longDescription: "Maintaining good attendance is crucial for academic success. Our Attendance Calculator helps you track your attendance percentage, determine how many more classes you can miss while staying above a threshold, and plan your leave accordingly. Stay on top of your attendance requirements with instant calculations.",
    inputs: [
      { id: "total", label: "Total Classes Held", type: "number", placeholder: "e.g. 60", min: 1 },
      { id: "present", label: "Classes Attended", type: "number", placeholder: "e.g. 50", min: 0 },
      { id: "target", label: "Target Attendance (%)", type: "number", placeholder: "e.g. 75", unit: "%", min: 0, max: 100, defaultValue: 75 }
    ],
    formula: "Attendance % = (Attended / Total) × 100",
    formulaExplanation: "Attendance percentage is calculated by dividing classes attended by total classes held and multiplying by 100. To find allowable absences: Total × (1 - Target/100) - Already Absent.",
    howToUse: [
      "Enter total classes held so far",
      "Enter classes you've attended",
      "Set your required attendance percentage",
      "View current attendance and remaining allowed absences"
    ],
    example: {
      description: "60 classes held, 50 attended, 75% requirement:",
      inputs: { total: 60, present: 50, target: 75 },
      result: "Current: 83.33% | You can miss 0 more classes to stay at 75%"
    },
    benefits: [
      "Track attendance in real-time",
      "Plan leaves responsibly",
      "Avoid attendance shortage penalties",
      "Set attendance alerts"
    ],
    faqs: [
      { question: "What happens if attendance falls below 75%?", answer: "In many institutions, falling below 75% attendance may result in being barred from examinations, grade penalties, or other disciplinary actions. Some universities allow medical leave exceptions." },
      { question: "How can I calculate future attendance?", answer: "Use the formula: Required = (Target × Future Total - Present) / 1 where Future Total is the total classes after adding future classes." }
    ],
    relatedSlugs: ["percentage-calculator", "average-marks-calculator", "study-time-calculator", "rank-predictor-calculator"],
    icon: "CalendarCheck",
    keywords: ["attendance calculator", "attendance percentage", "classes attended calculator", "leave calculator"]
  },
  {
    slug: "average-marks-calculator",
    title: "Average Marks Calculator",
    category: "Education",
    categorySlug: "education",
    description: "Calculate the average marks across multiple subjects or exams with weighted support.",
    longDescription: "Our Average Marks Calculator helps you compute the average score across multiple subjects, tests, or assignments. Whether you need a simple average or a weighted average where some subjects carry more importance, this tool provides instant results. Useful for comparing performance across different assessments and tracking improvement over time.",
    inputs: [
      { id: "mode", label: "Calculation Type", type: "select", options: [
        { value: "simple", label: "Simple Average" },
        { value: "weighted", label: "Weighted Average" }
      ] },
      { id: "count", label: "Number of Subjects/Marks", type: "number", placeholder: "e.g. 5", min: 2, max: 20, defaultValue: 5 }
    ],
    formula: "Simple: Sum / Count | Weighted: Σ(Mark × Weight) / Σ(Weight)",
    formulaExplanation: "Simple average adds all marks and divides by the count. Weighted average multiplies each mark by its weight, sums those products, and divides by the total weight.",
    howToUse: [
      "Choose simple or weighted average",
      "Enter the number of subjects/marks",
      "Enter each mark (and weight if using weighted average)",
      "View the calculated average"
    ],
    example: {
      description: "Marks: 85, 78, 92, 88, 76:",
      inputs: { mode: "simple", count: 5 },
      result: "Simple Average: 83.8"
    },
    benefits: [
      "Quick average calculation",
      "Support for weighted averages",
      "Track performance across subjects",
      "Useful for academic planning"
    ],
    faqs: [
      { question: "What is a weighted average?", answer: "A weighted average gives more importance to certain items. For example, if your final exam is worth 40% and your midterm is 20%, those weights are used to calculate a more accurate average." }
    ],
    relatedSlugs: ["percentage-calculator", "gpa-calculator", "cgpa-calculator", "exam-score-calculator"],
    icon: "BarChart3",
    keywords: ["average marks calculator", "average score calculator", "weighted average calculator", "GPA average"]
  },
  {
    slug: "exam-score-calculator",
    title: "Exam Score Calculator",
    category: "Education",
    categorySlug: "education",
    description: "Calculate your exam score from marks obtained and total marks with percentage.",
    longDescription: "Our Exam Score Calculator quickly computes your exam score percentage, grade, and performance level. Enter your marks obtained and total marks to see your result with a letter grade and performance assessment. Whether you're checking results after an exam or estimating scores, this tool provides clear, instant feedback.",
    inputs: [
      { id: "obtained", label: "Marks Obtained", type: "number", placeholder: "e.g. 420", min: 0 },
      { id: "total", label: "Total Marks", type: "number", placeholder: "e.g. 500", min: 1 },
      { id: "passing", label: "Passing Marks (%)", type: "number", placeholder: "e.g. 40", unit: "%", min: 0, max: 100, defaultValue: 40 }
    ],
    formula: "Score % = (Obtained / Total) × 100",
    formulaExplanation: "The percentage score is calculated by dividing marks obtained by total marks and multiplying by 100. A grading system then assigns a letter grade based on the percentage ranges.",
    howToUse: [
      "Enter marks obtained in the exam",
      "Enter the total marks for the exam",
      "Set the passing percentage (default 40%)",
      "View score percentage, grade, and pass/fail status"
    ],
    example: {
      description: "420 marks obtained out of 500:",
      inputs: { obtained: 420, total: 500, passing: 40 },
      result: "Score: 84% | Grade: A | Status: Passed"
    },
    benefits: [
      "Instant score calculation",
      "Automatic grade assignment",
      "Pass/fail determination",
      "Performance assessment"
    ],
    faqs: [
      { question: "How is percentage calculated from marks?", answer: "Percentage = (Marks Obtained / Total Marks) × 100. For example, 420 out of 500 = (420/500) × 100 = 84%." },
      { question: "What is a distinction?", answer: "A distinction typically refers to scoring above 75% or 80% in an examination, depending on the institution. It signifies outstanding academic performance." }
    ],
    relatedSlugs: ["percentage-calculator", "gpa-calculator", "grade-calculator", "rank-predictor-calculator"],
    icon: "FileCheck",
    keywords: ["exam score calculator", "marks calculator", "percentage from marks", "grade calculator"]
  },
  {
    slug: "study-time-calculator",
    title: "Study Time Calculator",
    category: "Education",
    categorySlug: "education",
    description: "Plan your study schedule by calculating total study hours needed for each subject.",
    longDescription: "Effective time management is key to academic success. Our Study Time Calculator helps you plan your study schedule by estimating the total hours needed based on subject difficulty, chapters, and available time. Create balanced study plans that ensure thorough preparation for exams without burnout.",
    inputs: [
      { id: "subjects", label: "Number of Subjects", type: "number", placeholder: "e.g. 5", min: 1, max: 15 },
      { id: "daysLeft", label: "Days Until Exam", type: "number", placeholder: "e.g. 30", min: 1, max: 365 },
      { id: "hoursPerDay", label: "Study Hours Per Day", type: "number", placeholder: "e.g. 4", min: 1, max: 16, step: 0.5 }
    ],
    formula: "Hours Per Subject = (Days × Hours/Day) / Subjects",
    formulaExplanation: "The total available study time is distributed evenly across subjects. For weighted distribution, multiply hours by difficulty factor: Easy=0.8x, Medium=1.0x, Hard=1.2x.",
    howToUse: [
      "Enter the number of subjects to study",
      "Specify days remaining until the exam",
      "Set available study hours per day",
      "View the recommended study hours per subject and total plan"
    ],
    example: {
      description: "5 subjects, 30 days, 4 hours/day:",
      inputs: { subjects: 5, daysLeft: 30, hoursPerDay: 4 },
      result: "Total Study Hours: 120 | Hours Per Subject: 24"
    },
    benefits: [
      "Create structured study schedules",
      "Allocate time proportionally",
      "Avoid last-minute cramming",
      "Balance workload across subjects"
    ],
    faqs: [
      { question: "How many hours should I study daily?", answer: "For most students, 4-6 hours of focused study per day is effective. Quality matters more than quantity — use techniques like Pomodoro (25 min study, 5 min break) for maximum retention." },
      { question: "How should I distribute time among subjects?", answer: "Allocate more time to difficult or high-weightage subjects. A good rule is: Hard subjects get 1.5x time, medium subjects get standard time, and easy subjects get 0.75x time." }
    ],
    relatedSlugs: ["attendance-calculator", "percentage-calculator", "exam-score-calculator", "rank-predictor-calculator"],
    icon: "Clock",
    keywords: ["study time calculator", "study planner", "exam preparation calculator", "study schedule calculator"]
  },
  {
    slug: "rank-predictor-calculator",
    title: "Rank Predictor Calculator",
    category: "Education",
    categorySlug: "education",
    description: "Estimate your competitive exam rank based on marks scored and total candidates.",
    longDescription: "Our Rank Predictor Calculator provides an estimated rank in competitive exams based on your score and the total number of test-takers. Using statistical percentile estimation, it gives you a realistic picture of where you might stand among other candidates. Essential for planning your next steps in competitive exam preparation.",
    inputs: [
      { id: "score", label: "Your Score", type: "number", placeholder: "e.g. 180", min: 0 },
      { id: "total", label: "Total Marks", type: "number", placeholder: "e.g. 300", min: 1 },
      { id: "candidates", label: "Total Candidates", type: "number", placeholder: "e.g. 100000", min: 1 }
    ],
    formula: "Estimated Rank = Total Candidates × (1 - Percentile/100)",
    formulaExplanation: "The rank is estimated based on your score as a percentage of total marks, which gives an approximate percentile. The estimated rank is then calculated from the percentile and total number of candidates.",
    howToUse: [
      "Enter your exam score",
      "Enter the total possible marks",
      "Enter the approximate number of candidates",
      "View your estimated rank and percentile"
    ],
    example: {
      description: "Scored 180/300 with 100,000 candidates:",
      inputs: { score: 180, total: 300, candidates: 100000 },
      result: "Estimated Percentile: 60.0 | Estimated Rank: ~40,000"
    },
    benefits: [
      "Get a realistic rank estimate",
      "Understand your competitive standing",
      "Plan preparation strategy",
      "Set realistic target scores"
    ],
    faqs: [
      { question: "How accurate is this predictor?", answer: "This provides an approximation based on statistical models. Actual rank depends on many factors including exam difficulty, candidate preparation levels, and normalization processes. Use as a general guide." },
      { question: "What percentile do I need for top ranks?", answer: "For top 1000 ranks, you typically need 99+ percentile. For top 10,000, aim for 90+ percentile. These thresholds vary significantly by exam and year." }
    ],
    relatedSlugs: ["exam-score-calculator", "percentage-calculator", "gpa-calculator", "grade-calculator"],
    icon: "Trophy",
    keywords: ["rank predictor", "exam rank calculator", "competitive exam rank", "percentile calculator"]
  },
  {
    slug: "age-calculator-admission",
    title: "Age Calculator for Admission",
    category: "Education",
    categorySlug: "education",
    description: "Calculate exact age for school and college admission eligibility requirements.",
    longDescription: "Many educational institutions have strict age criteria for admissions. Our Age Calculator for Admission computes the exact age of a student as of a specific cutoff date, helping parents and students verify admission eligibility. This tool calculates age in years, months, and days for precise compliance with admission age requirements.",
    inputs: [
      { id: "dob", label: "Date of Birth", type: "date" },
      { id: "cutoff", label: "Admission Cutoff Date", type: "date" }
    ],
    formula: "Exact Age = Cutoff Date - Date of Birth",
    formulaExplanation: "The calculator computes the precise difference between the cutoff date and date of birth, accounting for varying month lengths and leap years to give accurate years, months, and days.",
    howToUse: [
      "Enter the student's date of birth",
      "Enter the admission cutoff date (usually June 1 or April 1)",
      "View exact age in years, months, and days",
      "Check against the institution's age criteria"
    ],
    example: {
      description: "Born July 15, 2015, cutoff date June 1, 2025:",
      inputs: { dob: "2015-07-15", cutoff: "2025-06-01" },
      result: "Exact Age: 9 years, 10 months, 17 days"
    },
    benefits: [
      "Verify admission eligibility",
      "Calculate exact age precisely",
      "Account for leap years and month lengths",
      "Useful for multiple admission applications"
    ],
    faqs: [
      { question: "What is the typical age cutoff for Class 1?", answer: "In India, the typical age cutoff for Class 1 admission is 5-6 years as of June 1 of the academic year. This varies by state and school board." },
      { question: "Do schools allow age relaxation?", answer: "Some schools allow a small age relaxation (usually 30 days to 3 months) based on policy. However, this varies widely by institution and regulatory guidelines." }
    ],
    relatedSlugs: ["age-calculator", "date-difference-calculator", "percentage-calculator", "gpa-calculator"],
    icon: "CalendarDays",
    keywords: ["age calculator for admission", "school admission age", "admission eligibility age", "exact age calculator"]
  }
];
