// Toyota by CFAO Zimbabwe — official Toyota dealership
// Single source of truth for all page content.

export const business = {
  name: "Toyota by CFAO Zimbabwe",
  shortName: "Toyota Zimbabwe",
  tagline: "Built for Zimbabwe. Driven by Quality.",
  established: 1968,
  city: "Harare",
  country: "Zimbabwe",
  website: "https://www.toyota.co.zw/",
  whatsapp: "+2638677000019",
  whatsappDisplay: "+263 8677 000019",
  email: "sales@toyota.co.zw",
  phone: "+263 8677 000019",
  phoneDisplay: "+263 8677 000019",
  address: "67 Mutare Rd, Harare, Zimbabwe",
  addressShort: "67 Mutare Rd, Harare",
  rating: 4.2,
  reviewCount: 362,
  hours: {
    weekdays: "08:00 – 17:00",
    saturday: "08:00 – 13:00",
    sunday: "Closed",
  },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.8!2d31.0985!3d-17.8323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4f0d0000000%3A0x0!2s67%20Mutare%20Rd%2C%20Harare!5e0!3m2!1sen!2szw!4v1700000000000",
  facebook: "https://www.facebook.com/ToyotaZimbabwe",
  instagram: "https://www.instagram.com/toyotazimbabwe",
  linkedin: "https://www.linkedin.com/company/cfao-motors-zimbabwe",
};

export const waHref = (msg) =>
  `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(msg)}`;
export const mailHref = (subject, body = "") =>
  `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

// ---------- HERO ----------
export const hero = {
  eyebrow: "Official Toyota Dealership · Zimbabwe",
  headline: "Built for Zimbabwe.",
  headlineLine2: "Driven by Quality.",
  sub: "From the rugged bush to the city morning commute — discover the complete Toyota range at CFAO Zimbabwe. Genuine parts, factory-trained technicians, and the legendary Toyota reliability that gets you there. And back.",
  ctaPrimary: { label: "Explore Fleet", to: "/showroom" },
  ctaSecondary: { label: "Book a Test Drive", to: "/book-test-drive" },
  image:
    "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1920&q=80",
  imageAlt: "Toyota 4x4 navigating African bush terrain",
};

// ---------- MARQUEE ----------
export const marquee = [
  "Official Toyota Dealership · Zimbabwe",
  "Genuine Toyota Parts · Factory-Trained Technicians",
  "Finance Available · Trade-In Welcome",
  "Nationwide Service Network",
  "4.2 ★ · 362+ Customer Reviews",
];

// ---------- VEHICLE RANGE ----------
// Body types help filter on showroom
export const vehicles = [
  {
    slug: "hilux",
    name: "Hilux",
    tagline: "The unbreakable workhorse.",
    bodyType: "Pick-up",
    category: "4x4 & Utility",
    startingPrice: "$42,500",
    priceDisplay: "From $42,500",
    heroImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "The Toyota Hilux is the indestructible truck that built Zimbabwe. Whether you're hauling tobacco, climbing mountain passes in Nyanga, or crossing flooded lowveld tracks — the Hilux delivers. Backed by a 5-year warranty and a nationwide service network, it's the pick-up every farmer, contractor and adventurer trusts.",
    highlights: [
      "2.8L turbodiesel, 150 kW",
      "6-speed manual / automatic",
      "Part-time 4WD with rear diff-lock",
      "3,500 kg braked towing",
      "Toyota Safety Sense",
    ],
    variants: [
      { name: "Single Cab 2.4 GD 4x2", price: "$42,500" },
      { name: "Double Cab 2.8 GD-6 4x4 SR", price: "$58,900" },
      { name: "Double Cab 2.8 GD-6 4x4 GR-Sport", price: "$72,400" },
      { name: "Legend RS 2.8 GD-6 4x4", price: "$79,900" },
    ],
    popular: true,
  },
  {
    slug: "fortuner",
    name: "Fortuner",
    tagline: "Seven seats. Zero compromise.",
    bodyType: "SUV · 7-seat",
    category: "4x4 & Utility",
    startingPrice: "$64,900",
    priceDisplay: "From $64,900",
    heroImage:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "Built on the legendary Hilux frame, the Fortuner is a family 7-seater that refuses to be left behind. From school runs in Borrowdale to weekend safaris in Hwange — it handles both in comfort. Command-position driving, raised ground clearance and full 4WD capability as standard.",
    highlights: [
      "2.8L turbodiesel, 150 kW",
      "7-seater with captain comfort",
      "220 mm ground clearance",
      "Drive-mode select (Eco/Normal/Sport)",
      "Downhill assist & crawl control",
    ],
    variants: [
      { name: "2.8 GD-6 4x2 Auto", price: "$64,900" },
      { name: "2.8 GD-6 4x4 Auto", price: "$71,400" },
      { name: "2.8 GD-6 4x4 VX", price: "$79,800" },
    ],
    popular: true,
  },
  {
    slug: "land-cruiser-300",
    name: "Land Cruiser 300",
    tagline: "The king of African roads.",
    bodyType: "SUV · Flagship",
    category: "4x4 & Utility",
    startingPrice: "$148,000",
    priceDisplay: "From $148,000",
    heroImage:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "Seventy years of 4x4 heritage. The all-new Land Cruiser 300 replaces the legendary 200 with a lighter GA-F platform, twin-turbo V6 diesel, and the most sophisticated off-road tech Toyota has ever built. Multi-terrain Select, crawl control, centre diff-lock — there is simply nowhere it cannot go.",
    highlights: [
      "3.3L twin-turbo V6 diesel, 227 kW",
      "10-speed automatic",
      "Full-time 4WD · centre diff-lock",
      "Multi-Terrain Select (6 modes)",
      "200 kg lighter than LC200",
    ],
    variants: [
      { name: "LC300 GX-R", price: "$148,000" },
      { name: "LC300 VX-R", price: "$168,500" },
      { name: "LC300 ZX", price: "$189,900" },
    ],
    popular: true,
  },
  {
    slug: "land-cruiser-prado",
    name: "Land Cruiser Prado",
    tagline: "Adventure, properly tailored.",
    bodyType: "SUV · Mid-size",
    category: "4x4 & Utility",
    startingPrice: "$94,500",
    priceDisplay: "From $94,500",
    heroImage:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "The Prado bridges the gap between daily civility and weekend wildness. More refined than the 300 but with the same Toyota 4x4 DNA — perfect for long-distance safaris, river crossings and school runs alike.",
    highlights: [
      "2.8L GD-6 turbodiesel, 150 kW",
      "Kinetic Dynamic Suspension (KDSS)",
      "Multi-Terrain Select",
      "7-seater option",
      "Wireless Apple CarPlay / Android Auto",
    ],
    variants: [
      { name: "Prado TX 2.8 GD", price: "$94,500" },
      { name: "Prado VX 2.8 GD", price: "$112,000" },
      { name: "Prado VX-L 2.8 GD", price: "$124,900" },
    ],
    popular: false,
  },
  {
    slug: "rav4",
    name: "RAV4",
    tagline: "Smart adventure for the city family.",
    bodyType: "Compact SUV",
    category: "SUV & Crossover",
    startingPrice: "$48,900",
    priceDisplay: "From $48,900",
    heroImage:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "Fifth-generation RAV4 with available hybrid powertrain — the sweet spot between daily efficiency and weekend escape. Bold, raised stance, refined cabin and Toyota Safety Sense 2.0 as standard.",
    highlights: [
      "2.5L petrol or 2.5L self-charging hybrid",
      "AWD available",
      "Toyota Safety Sense 2.0",
      "Wireless charging & 9\" touchscreen",
      "580 L boot",
    ],
    variants: [
      { name: "RAV4 2.0 GX 2WD", price: "$48,900" },
      { name: "RAV4 2.5 VX AWD", price: "$58,400" },
      { name: "RAV4 Hybrid 2.5 GR-S AWD", price: "$69,900" },
    ],
    popular: true,
  },
  {
    slug: "corolla",
    name: "Corolla",
    tagline: "The world's most trusted sedan.",
    bodyType: "Sedan",
    category: "Sedan & Hatch",
    startingPrice: "$32,800",
    priceDisplay: "From $32,800",
    heroImage:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "Over 50 million Corollas sold worldwide — and Zimbabwe knows why. The 12th-generation Corolla sedan combines sharp styling, excellent efficiency and the Toyota dependability that just keeps going. The fleet champion, the first-car hero.",
    highlights: [
      "1.8L hybrid or 2.0L Dynamic Force",
      "Toyota Safety Sense 3.0",
      "Wireless Apple CarPlay",
      "Class-leading fuel economy",
      "5-year / 90,000 km warranty",
    ],
    variants: [
      { name: "Corolla 1.8 XS CVT", price: "$32,800" },
      { name: "Corolla 2.0 XR CVT", price: "$38,500" },
      { name: "Corolla 1.8 Hybrid XR", price: "$44,900" },
    ],
    popular: true,
  },
  {
    slug: "corolla-cross",
    name: "Corolla Cross",
    tagline: "The crossover that just makes sense.",
    bodyType: "Compact Crossover",
    category: "SUV & Crossover",
    startingPrice: "$39,500",
    priceDisplay: "From $39,500",
    heroImage:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "Raised SUV stance, Corolla reliability, hybrid efficiency. The Corolla Cross is Toyota's smart new compact crossover — priced between the Corolla and the RAV4 and perfect for young families navigating Zimbabwe's mix of smooth and not-so-smooth roads.",
    highlights: [
      "1.8L petrol or 1.8L Hybrid",
      "Raised 161 mm ground clearance",
      "8-inch touchscreen, wireless CarPlay",
      "440 L cargo (petrol) / 390 L (hybrid)",
      "Toyota Safety Sense",
    ],
    variants: [
      { name: "Corolla Cross 1.8 Xi", price: "$39,500" },
      { name: "Corolla Cross 1.8 XS", price: "$44,800" },
      { name: "Corolla Cross Hybrid XR", price: "$51,900" },
    ],
    popular: false,
  },
  {
    slug: "hiace",
    name: "Hiace",
    tagline: "The workhorse of African business.",
    bodyType: "Commercial Van",
    category: "Commercial",
    startingPrice: "$56,400",
    priceDisplay: "From $56,400",
    heroImage:
      "https://images.unsplash.com/photo-1570733577524-3a047079e80d?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1570733577524-3a047079e80d?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "From corporate staff shuttles to cross-border logistics, the 6th-generation Hiace sets the commercial standard in Zimbabwe. Semi-bonnet design, more power, more safety and that legendary low total cost of ownership.",
    highlights: [
      "2.8L GD-6 turbodiesel, 115 kW",
      "9-seater GL-Bus or 14-seater Ses'fikile",
      "VSC, ABS, EBD, hill-start assist",
      "Pre-Collision System",
      "Large side-step, dual sliding doors",
    ],
    variants: [
      { name: "Hiace Panel Van 2.8", price: "$56,400" },
      { name: "Hiace GL Bus 2.8 (9-seat)", price: "$62,900" },
      { name: "Hiace Ses'fikile 2.8 (14-seat)", price: "$68,500" },
    ],
    popular: false,
  },
  {
    slug: "coaster",
    name: "Coaster",
    tagline: "Group transport, refined.",
    bodyType: "22/30-seat Bus",
    category: "Commercial",
    startingPrice: "$112,000",
    priceDisplay: "From $112,000",
    heroImage:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "The benchmark light-duty bus for schools, tourism operators, mining companies and church groups across Zimbabwe. Robust chassis, spacious seating, and the Toyota aftersales network that keeps it earning — every single day.",
    highlights: [
      "4.0L turbodiesel, 100 kW",
      "22 or 30 seater configuration",
      "Panoramic windows",
      "Auxiliary fuel tank option",
      "5-year warranty",
    ],
    variants: [
      { name: "Coaster 22-seater", price: "$112,000" },
      { name: "Coaster 30-seater Deluxe", price: "$128,500" },
    ],
    popular: false,
  },
];

// ---------- SERVICES ----------
export const services = [
  {
    slug: "service-and-parts",
    title: "Service & Genuine Parts",
    icon: "Wrench",
    summary:
      "Factory-trained technicians, diagnostic-grade equipment and genuine Toyota parts — every service done right, every time.",
    bullets: [
      "Scheduled services (15k / 30k / 60k / 90k km)",
      "Diagnostic scan & fault reporting",
      "Genuine Toyota parts & fluids",
      "Toyota-certified warranty work",
      "Courtesy wash with every service",
    ],
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "finance",
    title: "Toyota Finance",
    icon: "CurrencyDollar",
    summary:
      "Flexible finance packages through our partner banks — structured for Zimbabwe, approved fast.",
    bullets: [
      "Up to 60-month terms",
      "Balloon-payment options",
      "Business & personal finance",
      "Pre-approval in 48 hours",
      "Stanbic, CBZ and FBC partnerships",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "insurance",
    title: "Toyota Insurance",
    icon: "ShieldCheck",
    summary:
      "Comprehensive motor insurance bundled with your finance — one vehicle, one policy, one monthly payment.",
    bullets: [
      "Comprehensive, third-party & windscreen cover",
      "Roadside assistance 24/7",
      "Full Toyota panel repair",
      "No claims bonus protection",
      "Bundled with finance",
    ],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "trade-in",
    title: "Trade-In & Pre-Owned",
    icon: "Briefcase",
    summary:
      "Trade in your current vehicle and drive home something new. Certified pre-owned Toyotas with warranty.",
    bullets: [
      "Free trade-in valuation",
      "Any make, any model accepted",
      "Certified pre-owned Toyota inventory",
      "6-month/6,000 km warranty on CPO",
      "Same-day paperwork",
    ],
    image:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1600&q=80",
  },
];

// ---------- STATS ----------
export const stats = [
  { value: "57+", label: "Years in Zimbabwe" },
  { value: "25,000+", label: "Vehicles delivered" },
  { value: "48,000+", label: "Loyal customers" },
  { value: "18", label: "Service bays" },
];

// ---------- WHY TOYOTA (feature strip) ----------
export const whyToyota = [
  {
    icon: "ShieldCheck",
    title: "5-Year Warranty",
    body: "Every new Toyota sold in Zimbabwe comes with a 5-year / 90,000 km warranty — bumper to bumper.",
  },
  {
    icon: "Wrench",
    title: "Genuine Parts",
    body: "Only Toyota Genuine Parts — factory-engineered, factory-backed, factory-tested for African conditions.",
  },
  {
    icon: "MapPin",
    title: "Nationwide Network",
    body: "From Harare to Bulawayo to Mutare — you're never far from a Toyota-certified service centre.",
  },
  {
    icon: "Trophy",
    title: "Resale Value",
    body: "Toyota consistently leads Zimbabwe's resale-value tables. Buy smart today, sell smart tomorrow.",
  },
];

// ---------- TESTIMONIALS ----------
export const reviews = [
  {
    name: "Takudzwa Chiweshe",
    role: "Hilux Double Cab owner · Farmer, Mashonaland East",
    rating: 5,
    text: "Bought my Hilux here in 2019. Since then I've done 180,000 km across every farm road between Harare and Mutoko. Nothing has broken. Service is always on time, parts always in stock. The team treats you like family.",
    vehicle: "Hilux 2.8 GD-6 4x4",
  },
  {
    name: "Rumbidzai Moyo",
    role: "Corolla Hybrid owner · Harare",
    rating: 5,
    text: "My fuel bill dropped by almost half when I upgraded from my old sedan to the Corolla Hybrid. The showroom team walked me through every detail — even the trade-in on my old car was sorted in a single afternoon.",
    vehicle: "Corolla Hybrid XR",
  },
  {
    name: "Simbarashe Ndlovu",
    role: "Fortuner 4x4 owner · Tour operator, Victoria Falls",
    rating: 4,
    text: "We run three Fortuners in our safari fleet — they handle the Chobe and Hwange roads like nothing else. The service plan is the reason we keep coming back. Technicians know these vehicles inside out.",
    vehicle: "Fortuner 2.8 GD-6 4x4 VX",
  },
  {
    name: "Patience Dube",
    role: "RAV4 owner · Borrowdale",
    rating: 5,
    text: "The RAV4 Hybrid is perfect for school runs and weekend trips to Nyanga. Sales was honest, pressure-free — they let me test drive for an hour before I decided. Genuinely impressed.",
    vehicle: "RAV4 Hybrid GR-S",
  },
  {
    name: "Tapiwa Marimo",
    role: "Land Cruiser 300 owner · Mining Executive",
    rating: 5,
    text: "I've owned Land Cruisers for fifteen years. The new 300 is the best yet — and Toyota Zimbabwe's VIP aftercare makes owning one effortless. Calls returned, service slots honoured, problems solved.",
    vehicle: "LC300 ZX",
  },
];

// ---------- ABOUT ----------
export const about = {
  eyebrow: "About the Dealership",
  headline: "Toyota in Zimbabwe since 1968.",
  intro:
    "CFAO Motors Zimbabwe is the official Toyota distributor for the country — part of the CFAO Group, one of Africa's largest automotive networks, active in 35 African countries.",
  paragraphs: [
    "For over five decades, we've been putting Zimbabwe behind the wheel of Toyota. From the first Corollas on Samora Machel Avenue to today's twin-turbo Land Cruiser 300s on the Binga escarpment — the trust we've earned is built on one thing: keeping our word.",
    "Our Harare dealership at 67 Mutare Road is the flagship — a full-service facility with an 18-bay workshop, dedicated parts warehouse, body shop, finance arm and an inventory that covers every Toyota in the Zimbabwean lineup.",
    "When you buy a Toyota from us, you're not just buying a vehicle. You're buying into a nationwide network of certified service centres, a parts supply chain that stretches back to Toyota Japan, and a team that will still be here — servicing your Hilux — in twenty years' time.",
  ],
  image:
    "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?auto=format&fit=crop&w=1600&q=80",
  values: [
    {
      icon: "Target",
      title: "Mission",
      body: "Put every Zimbabwean behind the wheel of a vehicle they can trust — for work, family and adventure.",
    },
    {
      icon: "Eye",
      title: "Vision",
      body: "To be the automotive partner Zimbabwe relies on for the long haul — new, pre-owned, parts and service.",
    },
    {
      icon: "Heart",
      title: "Values",
      body: "Kaizen — continuous improvement. Genchi Genbutsu — go and see for yourself. Respect for people, always.",
    },
  ],
};

// ---------- FAQ ----------
export const faq = [
  {
    q: "Do you accept trade-ins from other makes?",
    a: "Absolutely. We accept any make and any model in trade. Bring your car in for a free valuation — most assessments take under an hour.",
  },
  {
    q: "What warranty comes with a new Toyota?",
    a: "Every new Toyota sold in Zimbabwe comes with a 5-year / 90,000 km comprehensive warranty, plus a 5-year roadside-assistance package.",
  },
  {
    q: "Do you offer vehicle finance?",
    a: "Yes. We partner with Stanbic, CBZ and FBC Bank for both personal and commercial vehicle finance, with terms up to 60 months.",
  },
  {
    q: "Where is your service centre?",
    a: "Our flagship service centre is at 67 Mutare Road, Harare — an 18-bay workshop with Toyota-certified technicians and a full genuine-parts warehouse.",
  },
  {
    q: "How often should I service my Toyota?",
    a: "Standard interval is every 15,000 km or 12 months, whichever comes first. We'll send you a reminder 30 days in advance.",
  },
];
