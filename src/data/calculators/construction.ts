import { CalculatorMeta } from "../types";

export const constructionCalculators: CalculatorMeta[] = [
  {
    slug: "concrete-calculator",
    title: "Concrete Calculator",
    category: "Construction",
    categorySlug: "construction",
    description: "Calculate the volume of concrete needed for slabs, footings, columns, and walls.",
    longDescription: "Our Concrete Calculator helps you estimate the exact amount of concrete required for various construction elements. Whether you're pouring a slab, footing, column, or wall, this tool calculates the volume in cubic meters and cubic feet, helping you order the right amount and avoid waste.",
    inputs: [
      { id: "shape", label: "Structure Type", type: "select", options: [
        { value: "slab", label: "Slab/Floor" },
        { value: "footing", label: "Footing" },
        { value: "column", label: "Column" },
        { value: "wall", label: "Wall" }
      ] },
      { id: "length", label: "Length", type: "number", placeholder: "e.g. 5", unit: "m", min: 0.1 },
      { id: "width", label: "Width", type: "number", placeholder: "e.g. 4", unit: "m", min: 0.1 },
      { id: "depth", label: "Depth/Thickness", type: "number", placeholder: "e.g. 0.15", unit: "m", min: 0.05 }
    ],
    formula: "Volume = Length × Width × Depth",
    formulaExplanation: "The volume of concrete is calculated by multiplying the three dimensions. For columns, width and depth are the same (square) or different (rectangular).",
    howToUse: ["Select the structure type", "Enter length, width, and depth in meters", "View volume in cubic meters and cubic feet", "Add 5-10% extra for wastage"],
    example: { description: "Slab 5m × 4m × 0.15m:", inputs: { shape: "slab", length: 5, width: 4, depth: 0.15 }, result: "Volume: 3.0 m³ (105.94 cu ft) | With 10% wastage: 3.3 m³" },
    benefits: ["Accurate concrete estimation", "Reduce material waste", "Plan deliveries efficiently", "Calculate costs in advance"],
    faqs: [
      { question: "How much extra concrete should I order?", answer: "Always order 5-10% extra to account for spillage, uneven ground, and minor measurement errors. For complex pours or difficult access, consider ordering 15% extra." },
      { question: "How many bags of cement for 1 cubic meter?", answer: "For a standard M20 mix (1:1.5:3), you need approximately 8 bags of 50kg cement per cubic meter of concrete." }
    ],
    relatedSlugs: ["cement-calculator", "brick-calculator", "plaster-calculator", "tank-volume-calculator"],
    icon: "Box",
    keywords: ["concrete calculator", "concrete volume calculator", "concrete needed", "cubic meter calculator"]
  },
  {
    slug: "cement-calculator",
    title: "Cement Calculator",
    category: "Construction",
    categorySlug: "construction",
    description: "Calculate the number of cement bags needed based on concrete volume and mix ratio.",
    longDescription: "Our Cement Calculator helps you determine exactly how many bags of cement you need for your construction project. Enter the volume of concrete required and the mix ratio to get the number of 50kg cement bags needed, along with the quantities of sand and aggregate.",
    inputs: [
      { id: "volume", label: "Concrete Volume", type: "number", placeholder: "e.g. 5", unit: "m³", min: 0.1 },
      { id: "mix", label: "Mix Ratio", type: "select", options: [
        { value: "1:1:2", label: "1:1:2 (M25 - High Strength)" },
        { value: "1:1.5:3", label: "1:1.5:3 (M20 - Standard)" },
        { value: "1:2:4", label: "1:2:4 (M15 - Medium)" },
        { value: "1:3:6", label: "1:3:6 (M10 - Lean)" },
        { value: "1:4:8", label: "1:4:8 (M7.5 - Foundation)" }
      ] },
      { id: "bagSize", label: "Cement Bag Size", type: "select", options: [
        { value: "50", label: "50 kg" },
        { value: "25", label: "25 kg" }
      ] }
    ],
    formula: "Cement (bags) = Volume × Cement Ratio Sum / (Sum of Ratios × Bag Weight)",
    formulaExplanation: "The formula divides the total volume according to the mix ratio and calculates the number of cement bags needed.",
    howToUse: ["Enter the total concrete volume in cubic meters", "Select the mix ratio for your application", "Choose your cement bag size", "View bags of cement, sand, and aggregate needed"],
    example: { description: "5 m³ concrete with 1:1.5:3 mix:", inputs: { volume: 5, mix: "1:1.5:3", bagSize: "50" }, result: "Cement: 68 bags | Sand: 3.6 m³ | Aggregate: 7.2 m³" },
    benefits: ["Accurate material estimation", "Different mix ratios supported", "Cost planning assistance", "Reduce material waste"],
    faqs: [
      { question: "Which mix ratio should I use?", answer: "M20 (1:1.5:3) is standard for most residential construction. M25 (1:1:2) for high-strength requirements. M10-M15 for plain concrete foundations. Consult your structural engineer for specific requirements." }
    ],
    relatedSlugs: ["concrete-calculator", "brick-calculator", "plaster-calculator", "steel-weight-calculator"],
    icon: "Package",
    keywords: ["cement calculator", "cement bags calculator", "concrete mix calculator", "cement requirement"]
  },
  {
    slug: "brick-calculator",
    title: "Brick Calculator",
    category: "Construction",
    categorySlug: "construction",
    description: "Calculate the number of bricks needed for walls based on dimensions and brick size.",
    longDescription: "Our Brick Calculator helps you estimate the exact number of bricks required for your wall construction. Enter wall dimensions and brick size to get the number of bricks needed, along with mortar requirements. Supports standard brick sizes and different wall thicknesses.",
    inputs: [
      { id: "wallLength", label: "Wall Length", type: "number", placeholder: "e.g. 10", unit: "m", min: 0.1 },
      { id: "wallHeight", label: "Wall Height", type: "number", placeholder: "e.g. 3", unit: "m", min: 0.1 },
      { id: "thickness", label: "Wall Thickness", type: "select", options: [
        { value: "single", label: "Single Brick (4.5\")" },
        { value: "double", label: "Double Brick (9\")" },
        { value: "onehalf", label: "One & Half (13.5\")" }
      ] },
      { id: "brickLength", label: "Brick Length", type: "number", placeholder: "e.g. 230", unit: "mm", min: 100, defaultValue: 230 },
      { id: "brickHeight", label: "Brick Height", type: "number", placeholder: "e.g. 75", unit: "mm", min: 30, defaultValue: 75 }
    ],
    formula: "Bricks = (Wall Area / Brick Area) × Thickness Factor + 5% Wastage",
    formulaExplanation: "The total wall area is divided by the face area of a single brick (including mortar joint). The thickness factor adjusts for wall type. 5% is added for breakage.",
    howToUse: ["Enter wall length and height", "Select wall thickness", "Enter brick dimensions (or use defaults)", "View total bricks and mortar required"],
    example: { description: "10m × 3m single brick wall:", inputs: { wallLength: 10, wallHeight: 3, thickness: "single", brickLength: 230, brickHeight: 75 }, result: "Bricks: ~1,800 (with 5% wastage) | Mortar: ~0.8 m³" },
    benefits: ["Accurate brick count", "Mortar estimation", "Support different wall thicknesses", "Account for wastage"],
    faqs: [
      { question: "How many bricks in a square meter?", answer: "For a standard brick (230mm × 75mm) single wall: approximately 60 bricks per square meter including mortar joints." },
      { question: "How much mortar per brick?", answer: "Approximately 1 kg of cement mortar per brick, or about 0.0015 m³ of mortar per brick for standard construction." }
    ],
    relatedSlugs: ["concrete-calculator", "cement-calculator", "plaster-calculator", "paint-calculator"],
    icon: "Layers",
    keywords: ["brick calculator", "bricks needed for wall", "wall brick calculator", "brick count calculator"]
  },
  {
    slug: "paint-calculator",
    title: "Paint Calculator",
    category: "Construction",
    categorySlug: "construction",
    description: "Calculate how much paint you need for walls, ceilings, and surfaces based on area.",
    longDescription: "Our Paint Calculator helps you determine exactly how much paint you need for your project. Enter room dimensions or wall area, and get the estimated paint quantity in liters, number of coats, and coverage area. Avoid buying too much or too little paint.",
    inputs: [
      { id: "length", label: "Room Length", type: "number", placeholder: "e.g. 5", unit: "m", min: 0.1 },
      { id: "width", label: "Room Width", type: "number", placeholder: "e.g. 4", unit: "m", min: 0.1 },
      { id: "height", label: "Room Height", type: "number", placeholder: "e.g. 3", unit: "m", min: 0.1 },
      { id: "coats", label: "Number of Coats", type: "select", options: [
        { value: "1", label: "1 Coat" },
        { value: "2", label: "2 Coats (Recommended)" },
        { value: "3", label: "3 Coats" }
      ], defaultValue: "2" },
      { id: "coverage", label: "Paint Coverage", type: "number", placeholder: "e.g. 10", unit: "m²/L", min: 1, defaultValue: 10 }
    ],
    formula: "Wall Area = 2 × (Length + Width) × Height | Paint = Area × Coats / Coverage",
    formulaExplanation: "The total wall area is calculated from room perimeter × height. Windows and doors are subtracted if specified. Paint needed = area × coats ÷ coverage rate.",
    howToUse: ["Enter room dimensions", "Select number of coats", "Adjust paint coverage rate", "View total wall area and paint required"],
    example: { description: "5m × 4m × 3m room, 2 coats:", inputs: { length: 5, width: 4, height: 3, coats: "2", coverage: 10 }, result: "Wall Area: 54 m² | Paint Needed: 10.8 liters (2 coats)" },
    benefits: ["Avoid overbuying paint", "Calculate exact quantities", "Multiple coats support", "Adjustable coverage rate"],
    faqs: [
      { question: "How much paint do I need for a ceiling?", answer: "Ceiling area = Length × Width. For a 5m × 4m room: 20 m² ceiling. At 10 m²/L coverage with 1 coat: 2 liters of ceiling paint." },
      { question: "How much area does 1 liter of paint cover?", answer: "Typically 10-12 m² per liter for smooth surfaces. Textured surfaces may need 30-50% more paint. Check the paint manufacturer's specifications." }
    ],
    relatedSlugs: ["tile-calculator", "plaster-calculator", "flooring-calculator", "brick-calculator"],
    icon: "PaintBucket",
    keywords: ["paint calculator", "how much paint do I need", "wall paint calculator", "room paint estimator"]
  },
  {
    slug: "tile-calculator",
    title: "Tile Calculator",
    category: "Construction",
    categorySlug: "construction",
    description: "Calculate the number of tiles needed for floors, walls, and backsplashes.",
    longDescription: "Our Tile Calculator helps you determine the exact number of tiles required for your flooring or wall project. Enter the area to be tiled and tile dimensions to get the tile count, including extra for cuts and wastage. Supports both metric and imperial measurements.",
    inputs: [
      { id: "area", label: "Area to Tile", type: "number", placeholder: "e.g. 20", unit: "m²", min: 0.1 },
      { id: "tileLength", label: "Tile Length", type: "number", placeholder: "e.g. 600", unit: "mm", min: 10 },
      { id: "tileWidth", label: "Tile Width", type: "number", placeholder: "e.g. 600", unit: "mm", min: 10 },
      { id: "wastage", label: "Wastage Allowance", type: "select", options: [
        { value: "5", label: "5% (Simple layout)" },
        { value: "10", label: "10% (Standard)" },
        { value: "15", label: "15% (Diagonal pattern)" }
      ], defaultValue: "10" }
    ],
    formula: "Tiles = (Area / Tile Area) × (1 + Wastage%)",
    formulaExplanation: "The total area is divided by the area of one tile, then increased by the wastage percentage to account for cuts and breakage.",
    howToUse: ["Enter the total area to be tiled", "Enter tile dimensions in mm", "Select wastage allowance based on layout", "View total tiles needed and total tile area"],
    example: { description: "20 m² floor, 600×600mm tiles, 10% wastage:", inputs: { area: 20, tileLength: 600, tileWidth: 600, wastage: "10" }, result: "Tiles Needed: 62 (tile area: 0.36 m² each)" },
    benefits: ["Exact tile count", "Different wastage levels", "Avoid buying extra tiles", "Plan tile layout efficiently"],
    faqs: [
      { question: "How much extra tile should I order?", answer: "For straight layouts: 10%. For diagonal patterns: 15%. For complex patterns like herringbone: 15-20%. Always keep a few extra tiles for future repairs." }
    ],
    relatedSlugs: ["paint-calculator", "flooring-calculator", "area-converter", "plaster-calculator"],
    icon: "Grid3x3",
    keywords: ["tile calculator", "how many tiles do I need", "floor tile calculator", "tile count calculator"]
  },
  {
    slug: "steel-weight-calculator",
    title: "Steel Weight Calculator",
    category: "Construction",
    categorySlug: "construction",
    description: "Calculate the weight of steel bars, rods, and plates based on dimensions and grade.",
    longDescription: "Our Steel Weight Calculator helps you estimate the weight of steel reinforcement bars (rebar), rods, and plates used in construction. Enter the dimensions and steel grade to get accurate weight estimates for structural planning and procurement.",
    inputs: [
      { id: "type", label: "Steel Type", type: "select", options: [
        { value: "bar", label: "Round Bar/Rebar" },
        { value: "plate", label: "Steel Plate" },
        { value: "channel", label: "Channel" },
        { value: "angle", label: "Angle" }
      ] },
      { id: "diameter", label: "Diameter/Width", type: "number", placeholder: "e.g. 12", unit: "mm", min: 1 },
      { id: "length", label: "Length", type: "number", placeholder: "e.g. 6", unit: "m", min: 0.1 },
      { id: "quantity", label: "Quantity", type: "number", placeholder: "e.g. 10", min: 1, defaultValue: 1 }
    ],
    formula: "Weight = Area × Length × Density (7850 kg/m³)",
    formulaExplanation: "For round bars: Area = π × (d/2)². The density of steel is approximately 7,850 kg/m³. Weight = Cross-section area × Length × Density × Quantity.",
    howToUse: ["Select the steel type", "Enter diameter or width in mm", "Enter length in meters", "Enter quantity", "View weight per piece and total weight"],
    example: { description: "10 bars of 12mm diameter, 6m length:", inputs: { type: "bar", diameter: 12, length: 6, quantity: 10 }, result: "Per Bar: 5.33 kg | Total: 53.3 kg" },
    benefits: ["Quick weight estimation", "Multiple steel types", "Accurate for procurement", "Plan material deliveries"],
    faqs: [
      { question: "What is the density of steel?", answer: "The standard density of steel is 7,850 kg/m³ (7.85 g/cm³). This can vary slightly based on the steel grade and alloy composition." }
    ],
    relatedSlugs: ["concrete-calculator", "cement-calculator", "stair-calculator", "construction-cost-calculator"],
    icon: "Ruler",
    keywords: ["steel weight calculator", "rebar weight calculator", "steel bar weight", "metal weight calculator"]
  },
  {
    slug: "plaster-calculator",
    title: "Plaster Calculator",
    category: "Construction",
    categorySlug: "construction",
    description: "Calculate cement and sand quantities needed for plastering walls and ceilings.",
    longDescription: "Our Plaster Calculator helps you determine the exact amounts of cement and sand required for plastering. Enter the area to be plastered, plaster thickness, and mix ratio to get precise material estimates. Essential for budgeting and procurement in construction projects.",
    inputs: [
      { id: "area", label: "Area to Plaster", type: "number", placeholder: "e.g. 100", unit: "m²", min: 1 },
      { id: "thickness", label: "Plaster Thickness", type: "number", placeholder: "e.g. 12", unit: "mm", min: 6, defaultValue: 12 },
      { id: "ratio", label: "Mix Ratio (Cement:Sand)", type: "select", options: [
        { value: "1:4", label: "1:4 (Internal walls)" },
        { value: "1:5", label: "1:5 (Standard)" },
        { value: "1:6", label: "1:6 (External walls)" }
      ], defaultValue: "1:6" }
    ],
    formula: "Volume = Area × Thickness | Cement = Volume / Ratio Sum | Sand = Cement × Ratio",
    formulaExplanation: "Total plaster volume is calculated from area × thickness. This is then divided according to the mix ratio to determine cement and sand quantities.",
    howToUse: ["Enter the area to be plastered", "Set the plaster thickness", "Select the mix ratio", "View cement bags and sand quantity needed"],
    example: { description: "100 m² area, 12mm thick, 1:6 ratio:", inputs: { area: 100, thickness: 12, ratio: "1:6" }, result: "Cement: 20 bags (50kg) | Sand: 1.8 m³" },
    benefits: ["Accurate material estimation", "Different mix ratios", "Cost-effective procurement", "Reduce material waste"],
    faqs: [
      { question: "What thickness should I plaster?", answer: "Internal walls: 12-15mm. External walls: 15-20mm. Ceiling: 8-12mm. The thickness depends on wall surface condition and type of plaster finish required." }
    ],
    relatedSlugs: ["cement-calculator", "paint-calculator", "brick-calculator", "concrete-calculator"],
    icon: "Paintbrush",
    keywords: ["plaster calculator", "cement sand calculator", "wall plaster estimate", "plastering material calculator"]
  },
  {
    slug: "flooring-calculator",
    title: "Flooring Calculator",
    category: "Construction",
    categorySlug: "construction",
    description: "Calculate flooring material requirements for wood, laminate, vinyl, or carpet installations.",
    longDescription: "Our Flooring Calculator helps you estimate the flooring material needed for any room. Enter room dimensions and plank/tile size to get the exact number of pieces needed, including wastage allowance. Supports multiple flooring types including hardwood, laminate, vinyl, and carpet.",
    inputs: [
      { id: "length", label: "Room Length", type: "number", placeholder: "e.g. 5", unit: "m", min: 0.1 },
      { id: "width", label: "Room Width", type: "number", placeholder: "e.g. 4", unit: "m", min: 0.1 },
      { id: "plankLength", label: "Plank/Piece Length", type: "number", placeholder: "e.g. 1200", unit: "mm", min: 100 },
      { id: "plankWidth", label: "Plank/Piece Width", type: "number", placeholder: "e.g. 190", unit: "mm", min: 50 },
      { id: "wastage", label: "Wastage Allowance", type: "select", options: [
        { value: "5", label: "5% (Simple rectangular room)" },
        { value: "10", label: "10% (Standard)" },
        { value: "15", label: "15% (Complex layout)" }
      ], defaultValue: "10" }
    ],
    formula: "Pieces = (Room Area / Plank Area) × (1 + Wastage%)",
    formulaExplanation: "The room area is divided by the area of a single plank, then increased by the wastage percentage.",
    howToUse: ["Enter room dimensions", "Enter plank/piece dimensions", "Select wastage level", "View total pieces needed and total area"],
    example: { description: "5m × 4m room, 1200×190mm planks, 10% wastage:", inputs: { length: 5, width: 4, plankLength: 1200, plankWidth: 190, wastage: "10" }, result: "Planks Needed: 116 | Room Area: 20 m²" },
    benefits: ["Accurate plank count", "Different wastage levels", "Support all flooring types", "Plan installation efficiently"],
    faqs: [
      { question: "How much wastage should I account for?", answer: "Simple rectangular rooms: 5-7%. Standard rooms with one doorway: 10%. Rooms with multiple doorways, bay windows, or diagonal laying: 15%." }
    ],
    relatedSlugs: ["tile-calculator", "paint-calculator", "area-converter", "construction-cost-calculator"],
    icon: "LayoutDashboard",
    keywords: ["flooring calculator", "floor planks calculator", "laminate calculator", "flooring material calculator"]
  },
  {
    slug: "stair-calculator",
    title: "Stair Calculator",
    category: "Construction",
    categorySlug: "construction",
    description: "Calculate rise, run, number of steps, and dimensions for staircase construction.",
    longDescription: "Our Stair Calculator helps you design stairs that meet building codes by calculating the number of steps, riser height, tread depth, and total stringer length based on your floor-to-floor height and available space.",
    inputs: [
      { id: "floorHeight", label: "Floor-to-Floor Height", type: "number", placeholder: "e.g. 3000", unit: "mm", min: 500 },
      { id: "maxRiser", label: "Max Riser Height", type: "number", placeholder: "e.g. 175", unit: "mm", min: 100, max: 250, defaultValue: 175 },
      { id: "minTread", label: "Min Tread Depth", type: "number", placeholder: "e.g. 250", unit: "mm", min: 200, max: 400, defaultValue: 250 },
      { id: "stairWidth", label: "Stair Width", type: "number", placeholder: "e.g. 900", unit: "mm", min: 600, defaultValue: 900 }
    ],
    formula: "Steps = Ceiling(Floor Height / Max Riser) | Actual Riser = Floor Height / Steps",
    formulaExplanation: "The number of steps is calculated by dividing the total height by the maximum allowed riser height, rounded up. The actual riser height is then computed to ensure equal steps.",
    howToUse: ["Enter the total floor-to-floor height", "Set maximum riser height (building code dependent)", "Set minimum tread depth", "View number of steps, actual dimensions, and stringer length"],
    example: { description: "3000mm floor height, 175mm max riser, 250mm tread:", inputs: { floorHeight: 3000, maxRiser: 175, minTread: 250, stairWidth: 900 }, result: "Steps: 18 | Actual Riser: 166.7mm | Tread: 250mm | Stringer: ~4243mm" },
    benefits: ["Code-compliant stair design", "Accurate dimensions", "Stringer length calculation", "Multiple step options"],
    faqs: [
      { question: "What are standard building code requirements?", answer: "Most codes require: riser height 100-175mm, tread depth 225-300mm. The rule: 2×riser + tread should be between 600-640mm. Always check local building codes." }
    ],
    relatedSlugs: ["concrete-calculator", "steel-weight-calculator", "construction-cost-calculator", "land-area-converter"],
    icon: "ArrowUpFromLine",
    keywords: ["stair calculator", "staircase calculator", "step calculator", "stair dimensions calculator"]
  },
  {
    slug: "tank-volume-calculator",
    title: "Tank Volume Calculator",
    category: "Construction",
    categorySlug: "construction",
    description: "Calculate the volume and capacity of cylindrical, rectangular, and custom tanks.",
    longDescription: "Our Tank Volume Calculator helps you determine the capacity of water tanks, storage tanks, and containers of various shapes. Whether you're planning a water storage tank, septic tank, or industrial container, this tool provides accurate volume calculations in liters and gallons.",
    inputs: [
      { id: "shape", label: "Tank Shape", type: "select", options: [
        { value: "cylinder", label: "Cylindrical" },
        { value: "rectangle", label: "Rectangular" },
        { value: "ellipse", label: "Elliptical" }
      ] },
      { id: "length", label: "Length/Diameter", type: "number", placeholder: "e.g. 2000", unit: "mm", min: 100 },
      { id: "width", label: "Width (for rectangle)", type: "number", placeholder: "e.g. 1500", unit: "mm", min: 100 },
      { id: "height", label: "Height", type: "number", placeholder: "e.g. 2000", unit: "mm", min: 100 }
    ],
    formula: "Cylinder: π × r² × h | Rectangle: L × W × H",
    formulaExplanation: "For cylindrical tanks, the volume is calculated using π × radius² × height. For rectangular tanks, it's length × width × height.",
    howToUse: ["Select the tank shape", "Enter dimensions in millimeters", "View volume in liters, gallons, and cubic meters"],
    example: { description: "Cylindrical tank, 2000mm diameter, 2000mm height:", inputs: { shape: "cylinder", length: 2000, width: 0, height: 2000 }, result: "Volume: 6,283 liters (1,660 gallons) | 6.28 m³" },
    benefits: ["Multiple tank shapes", "Precise volume calculation", "Multiple unit output", "Water storage planning"],
    faqs: [
      { question: "How do I calculate tank capacity in liters?", answer: "Volume in liters = (Dimensions in mm)³ / 1,000,000. For a cylinder: π × (d/2)² × h / 1,000,000 where d and h are in mm." }
    ],
    relatedSlugs: ["concrete-calculator", "volume-converter", "water-intake-calculator", "construction-cost-calculator"],
    icon: "Container",
    keywords: ["tank volume calculator", "water tank calculator", "capacity calculator", "tank size calculator"]
  }
];
