// ALL site content lives here. Change the name, phone and prices in this file only.

export const shop = {
  name: "Lumora Studio",
  tagline: "We turn your moments into stories that last.",
  type: "Photography & Videography",
  city: "Bole, Addis Ababa, Ethiopia",
  whatsapp: "251900000000", // digits only, replace with your real number
  phoneDisplay: "+251 90 000 0000",
  social: { label: "TikTok", url: "https://www.tiktok.com/@lumorastudio" },
  currency: "ETB",
  mapUrl: "https://maps.google.com/?q=Bole+Addis+Ababa",
  heroLine: "Weddings, portraits, events and films, shot with care.",
};

export const about = {
  title: "Hi, we are Lumora",
  body: "We are a small team of photographers and videographers based in Addis Ababa. We love honest, warm, cinematic images, and we make every shoot feel relaxed so the real you shows up on camera.",
  stats: [
    { value: "300+", label: "Shoots delivered" },
    { value: "7", label: "Years behind the lens" },
    { value: "48h", label: "Sneak peek delivery" },
  ],
};

// Marquee band and the contact form's "shoot type" dropdown
export const shootTypes = [
  "Wedding",
  "Portrait",
  "Event",
  "Commercial",
  "Video / Film",
  "Other",
];

// Grouped by category. price: null means "Get a quote". from: true shows "from".
export const services = [
  {
    category: "Photo",
    items: [
      { name: "Portrait Session", desc: "1 hour, 1 location, 20 edited photos.", price: 3500, from: true },
      { name: "Wedding Photography", desc: "Full day coverage, 400+ edited photos, online gallery.", price: 35000, from: true },
      { name: "Event Photography", desc: "Birthdays, graduations, corporate events.", price: 8000, from: true },
    ],
  },
  {
    category: "Video",
    items: [
      { name: "Wedding Film", desc: "Cinematic highlight film plus full ceremony edit.", price: 45000, from: true },
      { name: "Event Video", desc: "Recap video with music and colour grading.", price: 12000, from: true },
      { name: "Music Video", desc: "Concept, shoot and edit.", price: null, from: false },
    ],
  },
  {
    category: "Commercial",
    items: [
      { name: "Product Photography", desc: "Clean, bright shots for shops and social media.", price: 5000, from: true },
      { name: "Brand Video / Reels", desc: "Short vertical videos for TikTok and Instagram.", price: 9000, from: true },
      { name: "Full Brand Campaign", desc: "Photo and video package for your business.", price: null, from: false },
    ],
  },
];

// Portfolio. Replace a picture by changing the extension, e.g. 1.svg to 1.jpg.
export const gallery = [
  { id: 1, src: "/gallery/1.svg", alt: "Illustration of a bride and groom at golden hour", title: "Selam & Yonas", category: "Weddings" },
  { id: 2, src: "/gallery/2.svg", alt: "Illustration of a studio portrait with soft window light", title: "Window Light", category: "Portraits" },
  { id: 3, src: "/gallery/3.svg", alt: "Illustration of a crowd celebrating at an evening event", title: "Timkat Evening", category: "Events" },
  { id: 4, src: "/gallery/4.svg", alt: "Illustration of a product bottle on a coloured backdrop", title: "Coffee Brand Shoot", category: "Commercial" },
  { id: 5, src: "/gallery/5.svg", alt: "Illustration of a film camera on a tripod at sunset", title: "Behind the Scenes", category: "Video" },
  { id: 6, src: "/gallery/6.svg", alt: "Illustration of a couple walking through a garden", title: "Garden Vows", category: "Weddings" },
];

export const galleryCategories = ["All", "Weddings", "Portraits", "Events", "Commercial", "Video"];

export const team = [
  { name: "Selam Tadesse", role: "Lead Photographer", photo: "/team/person-1.svg", alt: "Illustration of Selam, lead photographer" },
  { name: "Dawit Bekele", role: "Cinematographer", photo: "/team/person-2.svg", alt: "Illustration of Dawit, cinematographer" },
  { name: "Meron Alemu", role: "Editor & Colourist", photo: "/team/person-3.svg", alt: "Illustration of Meron, editor and colourist" },
];

export const reviews = [
  { name: "Hanna & Abel", text: "Lumora made our wedding day feel effortless. The photos and film made us cry all over again.", rating: 5 },
  { name: "Ruth M.", text: "Relaxed, professional and fast. I got my portraits in two days and they were perfect.", rating: 5 },
  { name: "Kebede Coffee", text: "Our product photos finally match the quality of our coffee. Sales went up after the new reels.", rating: 5 },
];

export const hours = [
  { day: "Monday", open: "09:00", close: "18:00" },
  { day: "Tuesday", open: "09:00", close: "18:00" },
  { day: "Wednesday", open: "09:00", close: "18:00" },
  { day: "Thursday", open: "09:00", close: "18:00" },
  { day: "Friday", open: "09:00", close: "18:00" },
  { day: "Saturday", open: "10:00", close: "16:00" },
  { day: "Sunday", open: null, close: null }, // null = closed (shoots by appointment)
];

export const faqs = [
  { q: "How far ahead should I book?", a: "For weddings, 2 to 3 months ahead is best. Portraits and commercial shoots can often be booked within a week." },
  { q: "When will I receive my photos and videos?", a: "A sneak peek arrives within 48 hours. Full photo galleries take 2 weeks and wedding films take 4 to 6 weeks." },
  { q: "Do you travel outside Addis Ababa?", a: "Yes. Travel within the city is included. For other cities we add a small travel fee, which we will quote you." },
  { q: "How do I pay?", a: "A 30% deposit secures your date and the rest is paid on delivery, by bank transfer or mobile money." },
  { q: "Can I get the raw files?", a: "We deliver fully edited files. Raw files are available on request for an extra fee." },
];

export const steps = [
  { title: "Send an enquiry", text: "Message us on WhatsApp or fill in the form with your date and shoot type." },
  { title: "Plan together", text: "We agree on the package, price, locations and style, then you pay the deposit." },
  { title: "Shoot day", text: "We arrive early, keep things relaxed and capture the real moments." },
  { title: "Delivery", text: "You get a sneak peek in 48 hours, then your finished gallery or film." },
];

// icon = the lucide-react icon name
export const perks = [
  { icon: "Camera", title: "Cinematic quality", text: "Pro cameras, lenses and lighting on every shoot." },
  { icon: "Zap", title: "Fast delivery", text: "A sneak peek in 48 hours so you can share right away." },
  { icon: "Heart", title: "Relaxed and friendly", text: "We make you comfortable so your real self shows up." },
  { icon: "BadgeCheck", title: "Clear prices", text: "No hidden fees. You see the price before you book." },
];