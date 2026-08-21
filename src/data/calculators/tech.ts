import { CalculatorMeta } from "../types";

export const techCalculators: CalculatorMeta[] = [
  {
    slug: "internet-speed-calculator",
    title: "Internet Speed Calculator",
    category: "Tech",
    categorySlug: "tech",
    description: "Convert between Mbps, MB/s, and Kbps to understand your real internet speed.",
    longDescription: "Our Internet Speed Calculator helps you understand your internet connection speed by converting between different measurement units. Whether your ISP advertises speed in Mbps or you want to know the actual download speed in MB/s, this tool provides instant, accurate conversions and practical download time estimates.",
    inputs: [
      { id: "speed", label: "Speed", type: "number", placeholder: "e.g. 100", min: 0 },
      { id: "from", label: "From", type: "select", options: [
        { value: "mbps", label: "Megabits per second (Mbps)" },
        { value: "mbs", label: "Megabytes per second (MB/s)" },
        { value: "kbps", label: "Kilobits per second (Kbps)" },
        { value: "gbps", label: "Gigabits per second (Gbps)" }
      ] },
      { id: "to", label: "To", type: "select", options: [
        { value: "mbps", label: "Megabits per second (Mbps)" },
        { value: "mbs", label: "Megabytes per second (MB/s)" },
        { value: "kbps", label: "Kilobits per second (Kbps)" },
        { value: "gbps", label: "Gigabits per second (Gbps)" }
      ] }
    ],
    formula: "1 Byte = 8 bits | 1 MB = 8 Mb",
    formulaExplanation: "Internet speeds are typically advertised in megabits per second (Mbps), but download managers show megabytes per second (MB/s). To convert, divide Mbps by 8 to get MB/s.",
    howToUse: ["Enter your internet speed", "Select the source unit", "Select the target unit", "View the converted speed and practical download times"],
    example: { description: "Convert 100 Mbps to MB/s:", inputs: { speed: 100, from: "mbps", to: "mbs" }, result: "100 Mbps = 12.5 MB/s" },
    benefits: ["Understand your real internet speed", "Compare ISP plans accurately", "Estimate download times", "Know the difference between bits and bytes"],
    faqs: [
      { question: "Why is my download speed lower than advertised?", answer: "ISP speeds are in Mbps (megabits) while download tools show MB/s (megabytes). Divide your Mbps by 8 to get the expected MB/s. Also, network overhead and congestion can reduce actual speeds." },
      { question: "What is a good internet speed?", answer: "For basic browsing: 25 Mbps. For HD streaming: 50 Mbps. For 4K streaming or gaming: 100+ Mbps. For multiple users/devices: 200+ Mbps." }
    ],
    relatedSlugs: ["download-time-calculator", "bandwidth-calculator", "file-size-calculator", "data-storage-converter"],
    icon: "Wifi",
    keywords: ["internet speed calculator", "Mbps to MB/s", "internet speed converter", "bandwidth calculator"]
  },
  {
    slug: "download-time-calculator",
    title: "Download Time Calculator",
    category: "Tech",
    categorySlug: "tech",
    description: "Calculate how long it will take to download a file based on your internet speed.",
    longDescription: "Our Download Time Calculator estimates the time required to download files of any size at your given internet speed. Whether you're downloading games, software, videos, or large datasets, this tool gives you a realistic time estimate to help you plan your downloads efficiently.",
    inputs: [
      { id: "fileSize", label: "File Size", type: "number", placeholder: "e.g. 500", min: 0.01 },
      { id: "sizeUnit", label: "Size Unit", type: "select", options: [
        { value: "mb", label: "MB (Megabytes)" },
        { value: "gb", label: "GB (Gigabytes)" },
        { value: "kb", label: "KB (Kilobytes)" },
        { value: "tb", label: "TB (Terabytes)" }
      ] },
      { id: "speed", label: "Internet Speed", type: "number", placeholder: "e.g. 50", min: 0.1 },
      { id: "speedUnit", label: "Speed Unit", type: "select", options: [
        { value: "mbps", label: "Mbps" },
        { value: "mbs", label: "MB/s" }
      ] }
    ],
    formula: "Time = File Size / Speed",
    formulaExplanation: "The download time is calculated by dividing the file size by the internet speed, after converting both to the same unit (bytes and bytes per second).",
    howToUse: ["Enter the file size", "Select the size unit (MB, GB, etc.)", "Enter your internet speed", "Select the speed unit", "View estimated download time"],
    example: { description: "Download a 2 GB file at 50 Mbps:", inputs: { fileSize: 2, sizeUnit: "gb", speed: 50, speedUnit: "mbps" }, result: "Estimated Download Time: 5 minutes 28 seconds" },
    benefits: ["Plan large downloads", "Compare internet speed impacts", "Understand real download times", "Optimize download scheduling"],
    faqs: [
      { question: "Why is actual download time longer than estimated?", answer: "Network overhead, server limitations, Wi-Fi vs wired connection, and other devices using bandwidth can all reduce actual download speeds below the theoretical maximum." }
    ],
    relatedSlugs: ["internet-speed-calculator", "file-size-calculator", "bandwidth-calculator", "data-storage-converter"],
    icon: "Download",
    keywords: ["download time calculator", "how long to download", "download speed calculator", "file download time"]
  },
  {
    slug: "bandwidth-calculator",
    title: "Bandwidth Calculator",
    category: "Tech",
    categorySlug: "tech",
    description: "Calculate bandwidth requirements for streaming, video calls, and online activities.",
    longDescription: "Our Bandwidth Calculator helps you determine how much internet bandwidth you need based on your online activities. Whether you're planning for video streaming, video conferencing, online gaming, or running a website, this tool estimates the required bandwidth to ensure smooth performance.",
    inputs: [
      { id: "activity", label: "Primary Activity", type: "select", options: [
        { value: "web", label: "Web Browsing" },
        { value: "email", label: "Email" },
        { value: "sd-streaming", label: "SD Video Streaming" },
        { value: "hd-streaming", label: "HD Video Streaming" },
        { value: "4k-streaming", label: "4K Video Streaming" },
        { value: "video-call-hd", label: "HD Video Call" },
        { value: "video-call-4k", label: "4K Video Call" },
        { value: "gaming", label: "Online Gaming" },
        { value: "music", label: "Music Streaming" },
        { value: "download", label: "Large File Downloads" }
      ] },
      { id: "users", label: "Number of Users/Devices", type: "number", placeholder: "e.g. 4", min: 1, max: 100, defaultValue: 1 }
    ],
    formula: "Total Bandwidth = Per-User Requirement × Number of Users × Safety Factor (1.3)",
    formulaExplanation: "Each activity has a recommended minimum and optimal bandwidth. We multiply by the number of simultaneous users and add a 30% safety margin for network overhead.",
    howToUse: ["Select your primary online activity", "Enter the number of simultaneous users", "View recommended minimum and optimal bandwidth"],
    example: { description: "4 users streaming HD video:", inputs: { activity: "hd-streaming", users: 4 }, result: "Minimum: 50 Mbps | Recommended: 100 Mbps" },
    benefits: ["Choose the right internet plan", "Optimize network performance", "Plan for multiple users", "Avoid buffering and lag"],
    faqs: [
      { question: "How much bandwidth do I need for working from home?", answer: "For video conferencing (Zoom/Teams): 10-25 Mbps download, 3-5 Mbps upload. For general remote work with cloud apps: 25-50 Mbps. Add more if multiple people are working from home." }
    ],
    relatedSlugs: ["internet-speed-calculator", "download-time-calculator", "file-size-calculator", "screen-size-calculator"],
    icon: "Gauge",
    keywords: ["bandwidth calculator", "internet bandwidth needs", "how much bandwidth", "bandwidth requirement"]
  },
  {
    slug: "file-size-calculator",
    title: "File Size Calculator",
    category: "Tech",
    categorySlug: "tech",
    description: "Convert between file size units: bytes, KB, MB, GB, TB, and estimate storage needs.",
    longDescription: "Our File Size Calculator helps you convert between all digital storage units and estimate storage requirements for your files. Whether you're calculating how many photos fit on a USB drive or converting file sizes for upload limits, this tool provides instant, accurate results.",
    inputs: [
      { id: "value", label: "Value", type: "number", placeholder: "e.g. 1024", min: 0 },
      { id: "from", label: "From", type: "select", options: [
        { value: "bytes", label: "Bytes" },
        { value: "kb", label: "Kilobytes (KB)" },
        { value: "mb", label: "Megabytes (MB)" },
        { value: "gb", label: "Gigabytes (GB)" },
        { value: "tb", label: "Terabytes (TB)" }
      ] },
      { id: "to", label: "To", type: "select", options: [
        { value: "bytes", label: "Bytes" },
        { value: "kb", label: "Kilobytes (KB)" },
        { value: "mb", label: "Megabytes (MB)" },
        { value: "gb", label: "Gigabytes (GB)" },
        { value: "tb", label: "Terabytes (TB)" }
      ] }
    ],
    formula: "1 KB = 1,024 Bytes | 1 MB = 1,024 KB | 1 GB = 1,024 MB | 1 TB = 1,024 GB",
    formulaExplanation: "Digital storage uses binary (base-1024) units. Each unit is 1,024 times the previous one.",
    howToUse: ["Enter the file size value", "Select the source unit", "Select the target unit", "View the conversion"],
    example: { description: "Convert 5 GB to MB:", inputs: { value: 5, from: "gb", to: "mb" }, result: "5 GB = 5,120 MB" },
    benefits: ["Quick storage conversions", "Understand file sizes", "Plan storage needs", "Compare storage devices"],
    faqs: [
      { question: "Why do storage devices show less capacity than advertised?", answer: "Manufacturers use decimal (base-1000) units while operating systems use binary (base-1024). A 1TB drive has 1,000,000,000,000 bytes, which equals about 931 GB in binary." }
    ],
    relatedSlugs: ["data-storage-converter", "download-time-calculator", "internet-speed-calculator", "compression-ratio-calculator"],
    icon: "File",
    keywords: ["file size calculator", "file size converter", "mb to gb", "storage calculator"]
  },
  {
    slug: "screen-size-calculator",
    title: "Screen Size Calculator",
    category: "Tech",
    categorySlug: "tech",
    description: "Calculate the actual screen dimensions from diagonal size and aspect ratio.",
    longDescription: "Our Screen Size Calculator helps you determine the actual width and height of a display from its diagonal measurement and aspect ratio. Useful for comparing monitors, TVs, and laptop screens to understand their real dimensions before purchasing.",
    inputs: [
      { id: "diagonal", label: "Screen Diagonal", type: "number", placeholder: "e.g. 27", min: 1 },
      { id: "unit", label: "Unit", type: "select", options: [
        { value: "inches", label: "Inches" },
        { value: "cm", label: "Centimeters" }
      ] },
      { id: "ratioW", label: "Aspect Ratio Width", type: "number", placeholder: "e.g. 16", min: 1 },
      { id: "ratioH", label: "Aspect Ratio Height", type: "number", placeholder: "e.g. 9", min: 1 }
    ],
    formula: "Width = Diagonal × W / √(W² + H²) | Height = Diagonal × H / √(W² + H²)",
    formulaExplanation: "Using the Pythagorean theorem and aspect ratio, we calculate the width and height from the diagonal measurement.",
    howToUse: ["Enter the screen diagonal size", "Select the unit (inches or cm)", "Enter the aspect ratio (e.g., 16:9)", "View width, height, and pixel density estimates"],
    example: { description: "27-inch screen with 16:9 aspect ratio:", inputs: { diagonal: 27, unit: "inches", ratioW: 16, ratioH: 9 }, result: "Width: 23.53 inches (59.77 cm) | Height: 13.24 inches (33.62 cm)" },
    benefits: ["Compare screen sizes accurately", "Understand actual display dimensions", "Plan desk/room setup", "Make informed purchasing decisions"],
    faqs: [
      { question: "What is the most common aspect ratio?", answer: "16:9 is the most common for monitors and TVs. 16:10 is popular for productivity monitors. 21:9 (ultrawide) is used for immersive gaming and productivity." }
    ],
    relatedSlugs: ["aspect-ratio-calculator", "file-size-calculator", "bandwidth-calculator", "data-storage-converter"],
    icon: "Monitor",
    keywords: ["screen size calculator", "monitor size calculator", "display size calculator", "screen dimensions"]
  },
  {
    slug: "aspect-ratio-calculator",
    title: "Aspect Ratio Calculator",
    category: "Tech",
    categorySlug: "tech",
    description: "Calculate and convert between different screen aspect ratios and find matching resolutions.",
    longDescription: "Our Aspect Ratio Calculator helps you determine the aspect ratio of any screen resolution, find compatible resolutions, and convert between different aspect ratios. Essential for designers, video editors, and anyone working with display content.",
    inputs: [
      { id: "width", label: "Width (pixels)", type: "number", placeholder: "e.g. 1920", min: 1 },
      { id: "height", label: "Height (pixels)", type: "number", placeholder: "e.g. 1080", min: 1 }
    ],
    formula: "Aspect Ratio = Width / Height (simplified to smallest whole numbers)",
    formulaExplanation: "The aspect ratio is found by computing the GCD of width and height, then dividing both by it. For example, 1920×1080: GCD=120, so 16:9.",
    howToUse: ["Enter the screen width in pixels", "Enter the screen height in pixels", "View the aspect ratio and common name"],
    example: { description: "Resolution 1920×1080:", inputs: { width: 1920, height: 1080 }, result: "Aspect Ratio: 16:9 (Full HD)" },
    benefits: ["Identify aspect ratios from resolution", "Find compatible resolutions", "Standardize content dimensions", "Design responsive layouts"],
    faqs: [
      { question: "What is the difference between 16:9 and 16:10?", answer: "16:9 is wider and standard for TVs and most monitors. 16:10 is slightly taller, providing more vertical space, popular for productivity monitors. 16:10 at 1920×1200 vs 16:9 at 1920×1080." }
    ],
    relatedSlugs: ["screen-size-calculator", "binary-to-decimal-calculator", "file-size-calculator", "compression-ratio-calculator"],
    icon: "RectangleHorizontal",
    keywords: ["aspect ratio calculator", "screen ratio", "resolution ratio", "aspect ratio converter"]
  },
  {
    slug: "binary-to-decimal-calculator",
    title: "Binary to Decimal Calculator",
    category: "Tech",
    categorySlug: "tech",
    description: "Convert binary numbers to decimal (base-10) format instantly.",
    longDescription: "Our Binary to Decimal Calculator converts binary (base-2) numbers to decimal (base-10) format. Essential for computer science students, programmers, and anyone working with binary data. See the conversion process step by step.",
    inputs: [
      { id: "binary", label: "Binary Number", type: "text", placeholder: "e.g. 10101100" }
    ],
    formula: "Decimal = Σ(bit × 2^position) for each bit position",
    formulaExplanation: "Each digit in a binary number represents a power of 2. Starting from the right (position 0), multiply each bit by 2 raised to its position number and sum all values.",
    howToUse: ["Enter a binary number (only 0s and 1s)", "View the decimal equivalent", "See the step-by-step conversion"],
    example: { description: "Convert binary 10101100 to decimal:", inputs: { binary: "10101100" }, result: "Decimal: 172" },
    benefits: ["Instant binary conversion", "Step-by-step explanation", "Learn binary-to-decimal process", "Essential for CS students"],
    faqs: [
      { question: "What is binary?", answer: "Binary is a base-2 number system using only 0 and 1. It's the fundamental language of computers, where each bit represents an on/off state in digital circuits." }
    ],
    relatedSlugs: ["decimal-to-binary-calculator", "ip-subnet-calculator", "file-size-calculator", "screen-size-calculator"],
    icon: "Binary",
    keywords: ["binary to decimal calculator", "binary converter", "binary to number", "base 2 to base 10"]
  },
  {
    slug: "decimal-to-binary-calculator",
    title: "Decimal to Binary Calculator",
    category: "Tech",
    categorySlug: "tech",
    description: "Convert decimal (base-10) numbers to binary (base-2) format instantly.",
    longDescription: "Our Decimal to Binary Calculator converts decimal numbers to their binary equivalents. Useful for programming, computer science, and understanding how numbers are represented in computing systems.",
    inputs: [
      { id: "decimal", label: "Decimal Number", type: "number", placeholder: "e.g. 172", min: 0 }
    ],
    formula: "Repeated division by 2, collecting remainders from bottom to top",
    formulaExplanation: "Divide the decimal number by 2 repeatedly. The remainders, read from last to first, form the binary number.",
    howToUse: ["Enter a decimal number", "View the binary equivalent", "See hex and octal conversions as well"],
    example: { description: "Convert decimal 172 to binary:", inputs: { decimal: 172 }, result: "Binary: 10101100 | Hex: AC | Octal: 254" },
    benefits: ["Instant decimal to binary conversion", "Also shows hex and octal", "Step-by-step process", "Essential for programmers"],
    faqs: [
      { question: "Why is binary important in computing?", answer: "Computers process data using transistors that have two states (on/off), naturally represented as 1/0 in binary. All data—text, images, programs—is ultimately stored as binary numbers." }
    ],
    relatedSlugs: ["binary-to-decimal-calculator", "ip-subnet-calculator", "screen-size-calculator", "compression-ratio-calculator"],
    icon: "Binary",
    keywords: ["decimal to binary calculator", "number to binary", "base 10 to base 2", "decimal converter"]
  },
  {
    slug: "ip-subnet-calculator",
    title: "IP Subnet Calculator",
    category: "Tech",
    categorySlug: "tech",
    description: "Calculate subnet masks, network addresses, host ranges, and CIDR notation for IP networks.",
    longDescription: "Our IP Subnet Calculator helps network administrators and IT professionals quickly determine subnet details from an IP address and CIDR prefix. Calculate network address, broadcast address, usable host range, and total hosts for any subnet configuration.",
    inputs: [
      { id: "ip", label: "IP Address", type: "text", placeholder: "e.g. 192.168.1.100" },
      { id: "cidr", label: "CIDR Prefix (/)", type: "number", placeholder: "e.g. 24", min: 1, max: 32, defaultValue: 24 }
    ],
    formula: "Network Address = IP AND Subnet Mask | Broadcast = Network | Hosts = 2^(32-CIDR) - 2",
    formulaExplanation: "The subnet mask determines which bits of the IP address represent the network vs host portion. A /24 mask means 24 bits for network and 8 bits for hosts.",
    howToUse: ["Enter an IP address", "Enter the CIDR prefix length", "View network address, broadcast, host range, and total hosts"],
    example: { description: "192.168.1.100/24:", inputs: { ip: "192.168.1.100", cidr: 24 }, result: "Network: 192.168.1.0 | Broadcast: 192.168.1.255 | Hosts: 254 | Range: 192.168.1.1 - 192.168.1.254" },
    benefits: ["Quick subnet calculations", "Network planning tool", "Find host ranges instantly", "CIDR notation support"],
    faqs: [
      { question: "What is CIDR?", answer: "CIDR (Classless Inter-Domain Routing) is a method for allocating IP addresses. The /number after an IP (like /24) indicates how many bits are used for the network portion." },
      { question: "Why subtract 2 from total hosts?", answer: "Two addresses are reserved: the network address (all host bits 0) and the broadcast address (all host bits 1). These cannot be assigned to individual devices." }
    ],
    relatedSlugs: ["binary-to-decimal-calculator", "decimal-to-binary-calculator", "internet-speed-calculator", "bandwidth-calculator"],
    icon: "Network",
    keywords: ["IP subnet calculator", "subnet calculator", "CIDR calculator", "network calculator"]
  },
  {
    slug: "compression-ratio-calculator",
    title: "Compression Ratio Calculator",
    category: "Tech",
    categorySlug: "tech",
    description: "Calculate compression ratio, space saved, and percentage reduction for file compression.",
    longDescription: "Our Compression Ratio Calculator helps you understand how effective file compression is by computing the ratio between original and compressed file sizes. Useful for web developers optimizing assets, system administrators managing storage, and anyone interested in data compression efficiency.",
    inputs: [
      { id: "original", label: "Original File Size", type: "number", placeholder: "e.g. 100", min: 0.01 },
      { id: "originalUnit", label: "Unit", type: "select", options: [
        { value: "mb", label: "MB" }, { value: "gb", label: "GB" }, { value: "kb", label: "KB" }, { value: "bytes", label: "Bytes" }
      ] },
      { id: "compressed", label: "Compressed File Size", type: "number", placeholder: "e.g. 35", min: 0.01 },
      { id: "compressedUnit", label: "Unit", type: "select", options: [
        { value: "mb", label: "MB" }, { value: "gb", label: "GB" }, { value: "kb", label: "KB" }, { value: "bytes", label: "Bytes" }
      ] }
    ],
    formula: "Ratio = Original / Compressed | Saved = Original - Compressed | Percentage = (Saved / Original) × 100",
    formulaExplanation: "The compression ratio compares original and compressed sizes. A ratio of 3:1 means the compressed file is 3 times smaller.",
    howToUse: ["Enter the original file size and unit", "Enter the compressed file size and unit", "View ratio, space saved, and compression percentage"],
    example: { description: "Original: 100 MB, Compressed: 35 MB:", inputs: { original: 100, originalUnit: "mb", compressed: 35, compressedUnit: "mb" }, result: "Ratio: 2.86:1 | Saved: 65 MB (65% reduction)" },
    benefits: ["Measure compression effectiveness", "Compare compression algorithms", "Optimize web assets", "Plan storage requirements"],
    faqs: [
      { question: "What is a good compression ratio?", answer: "It depends on file type. Text files can achieve 10:1 or higher. Images typically 2:1 to 5:1. Already-compressed formats like JPEG or MP3 compress very little. Lossless compression of raw data often achieves 2:1 to 3:1." }
    ],
    relatedSlugs: ["file-size-calculator", "data-storage-converter", "download-time-calculator", "internet-speed-calculator"],
    icon: "Shrink",
    keywords: ["compression ratio calculator", "file compression calculator", "data compression", "compression percentage"]
  }
];
