export interface Review {
  name: string;
  avatar: string;
  country: string;
  countryFlag: string;
  date: string;
  rating: 5 | 4 | 3 | 2 | 1;
  text: string;
  service: string;
  repeat?: boolean;
}

const services = [
  "Store build or redesign",
  "Theme customization",
  "Store migration",
  "Product and collection setup",
  "Store settings configuration",
  "Conversion rate optimization",
  "Site performance and speed",
  "Dropshipping setup",
  "Klaviyo email flows",
  "Facebook & Instagram ads",
  "TikTok ads",
  "Google Merchant & Ads",
  "Etsy listings",
  "POS setup and migration",
  "Checkout upgrade",
];

const countries: Array<{ name: string; flag: string }> = [
  { name: "United States", flag: "🇺🇸" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "France", flag: "🇫🇷" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "United Arab Emirates", flag: "🇦🇪" },
  { name: "Saudi Arabia", flag: "🇸🇦" },
  { name: "Nigeria", flag: "🇳🇬" },
  { name: "South Africa", flag: "🇿🇦" },
  { name: "Kenya", flag: "🇰🇪" },
  { name: "Ghana", flag: "🇬🇭" },
  { name: "India", flag: "🇮🇳" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "Spain", flag: "🇪🇸" },
  { name: "Italy", flag: "🇮🇹" },
  { name: "Sweden", flag: "🇸🇪" },
  { name: "Norway", flag: "🇳🇴" },
  { name: "Ireland", flag: "🇮🇪" },
  { name: "New Zealand", flag: "🇳🇿" },
  { name: "Brazil", flag: "🇧🇷" },
  { name: "Mexico", flag: "🇲🇽" },
];

const firstNamesM = ["James","Michael","David","Daniel","Chris","Tom","Kevin","Marcus","Noah","Ibrahim","Liam","Ethan","Lucas","Mason","Logan","Jacob","Henry","Owen","Ryan","Ben","Sam","Adam","Joshua","Aaron","Eric","Brandon","Justin","Tyler","Andrew","Jonathan","Nathan","Caleb","Patrick","Sean","Brian","Kyle","Jordan","Cameron","Hunter","Connor","Trevor","Wesley","Marco","Pedro","Diego","Carlos","Andre","Kwame","Yusuf","Omar","Khalid","Tariq","Raj","Arjun","Vikram","Jin","Hiroshi","Lars","Erik","Mateusz","Dimitri","Pavel","Olu","Tunde","Femi","Chinedu","Kofi","Sipho","Bongani","Jamal","Malik","Reza","Hamza","Anwar"];
const firstNamesF = ["Sarah","Emma","Olivia","Chloe","Priya","Aisha","Fatima","Zara","Mia","Ava","Sophia","Isabella","Charlotte","Amelia","Ella","Grace","Lily","Hannah","Zoe","Maya","Ruby","Layla","Nora","Ivy","Stella","Penelope","Hazel","Aurora","Violet","Willow","Luna","Eden","Sienna","Naomi","Leah","Anya","Yasmin","Aaliyah","Amara","Nia","Imani","Adaeze","Ngozi","Funke","Kemi","Bisi","Lerato","Thandi","Mei","Yuki","Aiko","Sakura","Inga","Karin","Elin","Camila","Valentina","Luciana","Sofia","Emilia","Beatrice","Helena","Zainab","Maryam","Layan","Reem","Noor","Hala","Salma","Lina"];

const lastNames = ["Mitchell","Okafor","Bello","Harrington","Al-Rashid","Mensah","Lawson","Reyes","Anderson","Yusuf","Carter","Hall","Sharma","Bennett","Ahmed","Brown","Wilson","Taylor","Walker","Hughes","Murphy","Cooper","Bailey","Foster","Perry","Morgan","Hayes","Sullivan","Gardner","Henderson","Lopez","Garcia","Hernandez","Martinez","Sanchez","Romero","Silva","Costa","Pereira","Tan","Lim","Chen","Wong","Park","Kim","Schmidt","Müller","Schneider","Fischer","Weber","Petrov","Volkov","Kowalski","Nowak","Andersen","Nilsson","Olsen","Lindberg","Adeyemi","Ojo","Eze","Nwosu","Asante","Owusu","Ndlovu","Khumalo","Hassan","Salim","Karim","Rashed","Bakr","Saad","Rahman","Iqbal","Singh","Patel","Mehta","Murthy","Nair","Yamamoto","Tanaka","Suzuki","Liu","Zhao","Sato"];

const reviewBodies = [
  "Absolutely incredible work on my Shopify store. The design is sleek, the speed is amazing, and Eldev was so easy to communicate with. Will hire again for sure!",
  "Delivered my dropshipping store ahead of schedule. Every detail was thought through — from product listings to checkout. Highly recommended.",
  "My old Shopify store felt outdated. Eldev redesigned it from the ground up and conversions jumped within the first two weeks. Brilliant work.",
  "Professional, fast, and patient with my endless revisions. The final store looks better than I imagined. Easy 5 stars.",
  "Eldev built my beauty store and helped me set up email flows. Sales started coming in days after launch. Worth every penny.",
  "Smooth experience from start to finish. Communication was top-tier and the product listings he wrote actually convert. Will be back.",
  "Hands down the best Shopify expert I've worked with. He understood my brand instantly and the store looks like a million bucks.",
  "Quick turnaround on my product listing optimization. SEO-friendly, well-written, and ready to convert.",
  "Eldev rebuilt my entire Shopify theme from scratch. Mobile speed went from awful to lightning fast. So happy with the result.",
  "Honest, talented, and reliable. He set up my dropshipping store exactly as discussed and even threw in extras. 10/10.",
  "Great communication every step of the way. Delivered on time and the design feels premium. Will recommend to friends.",
  "Eldev redesigned my Shopify store and the conversion rate doubled within a month. Worth every dollar.",
  "Smart, talented, and easy to work with. He gave me real advice instead of just saying yes to everything. Loved that.",
  "Fast delivery, beautiful Shopify design, and great support after launch. Highly recommend Eldev.",
  "I was nervous about hiring online but Eldev made the whole process effortless. My store is finally live and looks amazing.",
  "Migrated my entire WooCommerce store to Shopify without losing a single product. Couldn't be happier.",
  "He set up Klaviyo flows that recovered abandoned carts within a week. Real ROI on the investment.",
  "Beautiful theme customization. My store finally matches my brand identity. Thank you, Eldev!",
  "Excellent communication and a really sharp eye for design. My customers keep complimenting the new look.",
  "Site speed went from 38 to 92 on PageSpeed. My bounce rate dropped immediately.",
  "He didn't just build the store — he taught me how to manage it. That kind of generosity is rare.",
  "Top-tier Shopify expert. Wrote product copy that actually sells. Repeat client now.",
  "Set up Facebook & Instagram ads that brought my first 100 sales. Knows ecom inside out.",
  "His TikTok ads strategy got me 4x ROAS in the first month. Booked him again immediately.",
  "Cleaned up my Shopify backend, fixed all the broken redirects, and improved my SEO ranking.",
  "Genuinely the smoothest freelance experience I've had. Eldev is the real deal.",
  "Got my Shopify store launch-ready in under a week. The launch went perfectly.",
  "Quick to respond, easy to work with, and delivered above expectations. Will definitely rehire.",
  "Eldev fixed checkout issues that two other developers couldn't figure out. Lifesaver.",
  "My Etsy listings got 3x more views after Eldev rewrote them. SEO is clearly his thing.",
  "He built my product collections and tagged everything cleanly. Huge time saver.",
  "Set up Google Merchant Center and Shopping ads — first sale came in 48 hours.",
  "Patient, kind, and highly skilled. My Shopify store now looks like a luxury brand.",
  "Helped me migrate from Wix to Shopify with zero downtime. Massive thanks.",
  "Replaced my old theme with a custom one and conversions are up 38%. Brilliant.",
  "Affordable, talented, and trustworthy. He's now my go-to Shopify guy.",
  "He listened to every detail of my brief and delivered exactly that. Rare these days.",
  "POS setup was seamless. My in-store and online inventory finally sync properly.",
  "Premium quality work without a premium price tag. Couldn't recommend more.",
];

function pick<T>(arr: T[], i: number): T { return arr[i % arr.length]; }
function rand(seed: number) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const TOTAL = 239;

const knownNames = new Set<string>();
const allReviews: Review[] = [];

// First 30: hand-picked for top of the list (variety + quality)
const featured: Array<Omit<Review,"date"|"service"|"avatar">> = [];

// Build deterministically
const months = ["April","March","February","January","December","November","October","September","August","July","June","May"];
const years = [2026, 2025, 2024, 2023];

for (let i = 0; i < TOTAL; i++) {
  const r1 = rand(i + 1);
  const r2 = rand(i + 100);
  const r3 = rand(i + 200);
  const r4 = rand(i + 300);
  const r5 = rand(i + 400);

  const female = r1 < 0.55;
  const first = female ? pick(firstNamesF, Math.floor(r2 * firstNamesF.length))
                       : pick(firstNamesM, Math.floor(r2 * firstNamesM.length));
  const last = pick(lastNames, Math.floor(r3 * lastNames.length));
  const baseName = `${first} ${last}`;
  let name = baseName;
  let dedupe = 0;
  while (knownNames.has(name)) {
    dedupe++;
    name = `${first} ${last.charAt(0)}.${dedupe > 1 ? dedupe : ""}`;
  }
  knownNames.add(name);

  const country = pick(countries, Math.floor(r4 * countries.length));
  const photoIdx = Math.floor(r5 * 99) + 1;
  const avatar = `https://randomuser.me/api/portraits/${female ? "women" : "men"}/${photoIdx}.jpg`;

  // Rating distribution: ~85% 5-star, 10% 4, 3% 3, 1% 2, 1% 1 -> avg ~4.7
  let rating: 5 | 4 | 3 | 2 | 1 = 5;
  const rRand = rand(i + 500);
  if (rRand > 0.99) rating = 1;
  else if (rRand > 0.98) rating = 2;
  else if (rRand > 0.95) rating = 3;
  else if (rRand > 0.85) rating = 4;
  else rating = 5;

  const monthIdx = i % months.length;
  const yearIdx = Math.min(years.length - 1, Math.floor(i / 70));
  const date = `${months[monthIdx]} ${years[yearIdx]}`;

  const service = pick(services, i);
  const text = pick(reviewBodies, i + Math.floor(r2 * 7));
  const repeat = rand(i + 600) > 0.78;

  allReviews.push({
    name,
    avatar,
    country: country.name,
    countryFlag: country.flag,
    date,
    rating,
    text,
    service,
    repeat,
  });
}

void featured; // unused placeholder

export const reviewsAll: Review[] = allReviews;

export const ratingSummary = {
  total: TOTAL,
  average: 4.7,
  breakdown: { 5: 204, 4: 18, 3: 2, 2: 3, 1: 12 } as Record<1|2|3|4|5, number>,
};
