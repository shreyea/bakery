/**
 * All site content lives here: contact details, hours, menu, reviews, FAQs.
 * Change it once and every section updates.
 *
 * Everything below is sample content for the design mock-up.
 * Photos are stock images (Unsplash), stored in /public/images.
 */

export const site = {
  name: "Humble Crumble",
  tagline: "Bakery & Café",
  phoneDisplay: "+91 94236 77206",
  phoneHref: "tel:+919423677206",
  /** WhatsApp number: country code + number, digits only. */
  whatsapp: "919423677206",
  email: "hello@humblecrumble.in",
  address: ["Shop 4, Rua de Ourém, Fontainhas", "Panaji, Goa 403001"],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Fontainhas+Panaji+Goa+403001",
  instagram: "@humblecrumble.goa",
  founded: 2014,
  fssai: "11524•••••••••",
};

/** Opens WhatsApp with a ready-typed message. */
export const waLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

/** Hash links start with "/" so they also work from the /menu page. */
export const nav = [
  { label: "Menu", href: "/#menu" },
  { label: "Cakes", href: "/#cakes" },
  { label: "Our story", href: "/#story" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Find us", href: "/#visit" },
];

export const img = (name: string) => `/images/${name}.webp`;

export type Category = "Breads" | "Pastries" | "Cakes" | "Cookies & more";

export type Product = {
  id: string;
  name: string;
  category: Category;
  /** Price in rupees. */
  price: number;
  /** Shown after the price, e.g. "/ ½ kg". */
  unit?: string;
  desc: string;
  image: string;
  alt: string;
  tag?: "Bestseller" | "New" | "Eggless" | "Seasonal";
};

export const categories: ("All" | Category)[] = [
  "All",
  "Breads",
  "Pastries",
  "Cakes",
  "Cookies & more",
];

export const products: Product[] = [
  {
    id: "sourdough",
    name: "Sourdough Loaf",
    category: "Breads",
    price: 320,
    desc: "Fermented for 36 hours. Chewy, a little tangy, very good with white butter.",
    image: img("p-sourdough"),
    alt: "Sourdough loaves dusted with flour",
    tag: "Bestseller",
  },
  {
    id: "multigrain",
    name: "Multigrain Seed Loaf",
    category: "Breads",
    price: 260,
    desc: "Atta, oats and four kinds of seeds. Stays fresh for about three days.",
    image: img("p-multigrain"),
    alt: "Dark multigrain breads on a rack",
  },
  {
    id: "baguette",
    name: "Goan Pão",
    category: "Breads",
    price: 140,
    desc: "Crusty outside, soft inside, the way a Goan padaria bakes it. Gone by noon most days.",
    image: img("p-baguette"),
    alt: "Golden baguettes and bread loaves",
  },
  {
    id: "milk-bread",
    name: "Milk Bread",
    category: "Breads",
    price: 120,
    desc: "Soft and slightly sweet. The loaf the kids actually finish.",
    image: img("p-milk-bread"),
    alt: "Sliced soft milk bread",
  },
  {
    id: "croissant",
    name: "Butter Croissant",
    category: "Pastries",
    price: 140,
    desc: "Real butter, three days of folding. Best eaten within a few hours.",
    image: img("p-croissant"),
    alt: "Golden butter croissants",
    tag: "Bestseller",
  },
  {
    id: "cinnamon-roll",
    name: "Cinnamon Roll",
    category: "Pastries",
    price: 160,
    desc: "Cinnamon, brown sugar and a cream cheese glaze. Sticky fingers guaranteed.",
    image: img("p-cinnamon-roll"),
    alt: "Tray of cinnamon rolls",
  },
  {
    id: "fruit-tart",
    name: "Fresh Fruit Tart",
    category: "Pastries",
    price: 180,
    desc: "Crisp base, vanilla custard and fruit that's in season: mango in summer, chikoo in winter.",
    image: img("p-fruit-tart"),
    alt: "Fruit tarts with berries and cream",
    tag: "Seasonal",
  },
  {
    id: "lemon-tart",
    name: "Lemon Meringue Tart",
    category: "Pastries",
    price: 190,
    desc: "Sharp lemon curd under a toasted meringue. Not too sweet.",
    image: img("p-lemon-tart"),
    alt: "Lemon meringue tart with a slice cut out",
    tag: "New",
  },
  {
    id: "truffle-cake",
    name: "Dark Chocolate Truffle Cake",
    category: "Cakes",
    price: 850,
    unit: "/ ½ kg",
    desc: "Dark chocolate sponge, ganache, nothing else. Birthday favourite.",
    image: img("p-truffle-cake"),
    alt: "Chocolate truffle cake with piped rosettes",
    tag: "Bestseller",
  },
  {
    id: "fruit-gateau",
    name: "Fresh Fruit Gateau",
    category: "Cakes",
    price: 900,
    unit: "/ ½ kg",
    desc: "Vanilla sponge, light whipped cream and seasonal fruit, Mankurad mango when it's in season.",
    image: img("p-fruit-gateau"),
    alt: "White cream cake topped with fresh berries",
    tag: "Eggless",
  },
  {
    id: "strawberry-cake",
    name: "Strawberry Drip Cake",
    category: "Cakes",
    price: 950,
    unit: "/ ½ kg",
    desc: "Strawberry cream with a pink chocolate drip. Big with the under-10s.",
    image: img("p-strawberry-cake"),
    alt: "Pink drip cake with a slice cut out",
  },
  {
    id: "blackberry-cake",
    name: "Blackberry Vanilla Cake",
    category: "Cakes",
    price: 1100,
    unit: "/ ½ kg",
    desc: "Vanilla sponge, berry compote and a few edible flowers on top.",
    image: img("p-blackberry-cake"),
    alt: "Cake topped with blackberries and lavender",
  },
  {
    id: "cookie",
    name: "Choco Chunk Cookie",
    category: "Cookies & more",
    price: 90,
    desc: "Big and soft in the middle, with a pinch of sea salt on top.",
    image: img("p-cookie"),
    alt: "Chocolate chunk cookies",
    tag: "Bestseller",
  },
  {
    id: "macarons",
    name: "Macarons, box of 6",
    category: "Cookies & more",
    price: 720,
    desc: "Pistachio, kokum, vanilla, raspberry, coffee and salted caramel.",
    image: img("p-macarons"),
    alt: "Stack of pastel macarons",
  },
  {
    id: "cupcake",
    name: "Salted Caramel Cupcake",
    category: "Cookies & more",
    price: 130,
    desc: "Moist chocolate base with a swirl of salted caramel frosting.",
    image: img("p-cupcake"),
    alt: "Chocolate cupcake with caramel frosting",
  },
  {
    id: "tiramisu",
    name: "Tiramisu Slice",
    category: "Cookies & more",
    price: 220,
    desc: "Coffee-soaked sponge and mascarpone cream. Made fresh every evening.",
    image: img("p-tiramisu"),
    alt: "Layered tiramisu slice with chocolate sticks",
  },
  {
    id: "donut",
    name: "Glazed Donut",
    category: "Cookies & more",
    price: 110,
    desc: "Yeast-raised and glazed the same morning. Rose or chocolate.",
    image: img("p-donut"),
    alt: "Pink glazed donut with sprinkles",
  },
];

/** Intro line for each photo category on the /menu page. */
export const categoryBlurbs: Record<Category, string> = {
  Breads: "Baked from 5 am and best the same day. Ask us to slice it for you.",
  Pastries: "Folded by hand and baked in small batches through the morning.",
  Cakes: "Priced per ½ kg. Eggless on request, and two days' notice please.",
  "Cookies & more": "Little things for tea time, gifting and sweet cravings.",
};

export type ExtraItem = { name: string; desc?: string; price: number; unit?: string };

/** Text-only menu sections shown below the photo categories on /menu. */
export const extraMenu: {
  id: string;
  title: string;
  blurb: string;
  items: ExtraItem[];
}[] = [
  {
    id: "goan",
    title: "Goan favourites",
    blurb: "The sweets we grew up with. Some are seasonal, so message us before you come.",
    items: [
      {
        name: "Dodol",
        desc: "Jaggery, coconut milk and rice flour, stirred slowly. Chewy and not too sweet.",
        price: 120,
        unit: "/ 100 g",
      },
      {
        name: "Coconut Bolinhas",
        desc: "Crumbly coconut and semolina cookies, made eggless.",
        price: 180,
        unit: "/ box of 6",
      },
      {
        name: "Neureos",
        desc: "Flaky pastry stuffed with coconut, jaggery and dry fruit. Christmas season.",
        price: 220,
        unit: "/ box of 6",
      },
      {
        name: "Plum Cake Slice",
        desc: "Rich fruit and spice cake, slow-baked. November to January.",
        price: 150,
      },
    ],
  },
  {
    id: "savoury",
    title: "Savoury",
    blurb: "For a quick lunch or something with your chai. All vegetarian.",
    items: [
      { name: "Veg Puff", desc: "Spiced vegetables in flaky pastry.", price: 60 },
      { name: "Paneer Tikka Puff", desc: "Tandoori-style paneer with peppers.", price: 90 },
      { name: "Mushroom & Cheese Quiche", desc: "Eggless tart, baked fresh each morning.", price: 180 },
      { name: "Garlic Cheese Toast", desc: "Thick sourdough slices, butter and cheese.", price: 140 },
      { name: "Grilled Veg Sandwich", desc: "On sourdough, with green chutney.", price: 220 },
    ],
  },
  {
    id: "cafe",
    title: "Café",
    blurb: "Hot and cold, to go with whatever you picked.",
    items: [
      { name: "Filter Coffee", price: 80 },
      { name: "Cappuccino", price: 140 },
      { name: "Café Latte", price: 160 },
      { name: "Masala Chai", price: 60 },
      { name: "Cold Coffee", price: 170 },
      { name: "Fresh Lime Soda", price: 90 },
    ],
  },
];

/** Shown first on the "All" tab so every category gets a look-in. */
export const featuredIds = [
  "sourdough",
  "croissant",
  "truffle-cake",
  "cookie",
  "cinnamon-roll",
  "fruit-gateau",
  "macarons",
  "lemon-tart",
];

export const productMessage = (p: Product) =>
  `Hi Humble Crumble! I'd like to know about the ${p.name}. Is it available today?`;

/**
 * Delivery partners. Replace the links with the bakery's own Zomato and
 * Swiggy restaurant pages once they are live.
 */
export const delivery = [
  {
    name: "Zomato",
    href: "https://www.zomato.com/goa",
    colour: "#CB202D",
    note: "Delivered from our Panaji kitchen",
  },
  {
    name: "Swiggy",
    href: "https://www.swiggy.com/city/goa",
    colour: "#E8650A",
    note: "Delivered from our Panaji kitchen",
  },
];

export const yearsBaking = new Date().getFullYear() - site.founded;

export const stats = [
  { value: String(yearsBaking), label: "Years of baking" },
  { value: "40+", label: "Fresh bakes every day" },
  { value: "1,100+", label: "Google reviews" },
  { value: "5 km", label: "Home delivery radius" },
];

/** Image used on each category tile in the menu. */
export const categoryImages: Record<Category, string> = {
  Breads: img("p-baguette"),
  Pastries: img("p-croissant"),
  Cakes: img("p-truffle-cake"),
  "Cookies & more": img("p-macarons"),
};

export const cakeOccasions = [
  "Birthday",
  "Anniversary",
  "Wedding / Engagement",
  "Baby shower",
  "Office celebration",
  "Just because",
];

export const cakeFlavours = [
  "Dark chocolate truffle",
  "Vanilla & fresh fruit",
  "Red velvet",
  "Butterscotch",
  "Pineapple",
  "Blackberry vanilla",
  "Mango (in season)",
  "Coconut & jaggery",
  "Not sure yet, suggest something",
];

export const cakeSizes = ["½ kg (serves 6–8)", "1 kg (serves 12–15)", "1.5 kg", "2 kg or more"];

export const testimonials = [
  {
    name: "Sneha Naik",
    detail: "Birthday cake for her mother",
    quote:
      "Ordered a truffle cake for my aai's 60th. Eggless, and nobody could tell. It reached us an hour before the party, still cold.",
  },
  {
    name: "Aaron D'Souza",
    detail: "Regular, Saturdays",
    quote:
      "Saturday pão and sourdough are a ritual at our place now. Pro tip: get to Fontainhas before 10 or it's gone.",
  },
  {
    name: "Isha Kamat",
    detail: "Office order",
    quote:
      "Took a box of croissants to work. Flaky, buttery, not greasy. Finished in ten minutes and three people asked where they were from.",
  },
  {
    name: "Simran Kaur",
    detail: "Custom cake",
    quote:
      "Booked over WhatsApp, sent a reference photo and the cake came out almost exactly like it. Very easy to deal with.",
  },
  {
    name: "Joaquim Fernandes",
    detail: "Christmas plum cake",
    quote:
      "Ordered the Christmas plum cake for the whole family. Rich, moist and not too sweet. We're ordering two this year.",
  },
];

/** Share of Google reviews by star rating (shown as bars). */
export const ratingBreakdown = [
  { stars: 5, percent: 92 },
  { stars: 4, percent: 5 },
  { stars: 3, percent: 2 },
  { stars: 2, percent: 1 },
  { stars: 1, percent: 0 },
];

/** First image is shown large. */
export const gallery = [
  { src: img("g-big"), alt: "Fresh croissants and pastries on a wooden counter" },
  { src: img("g-2"), alt: "Colourful fruit tarts" },
  { src: img("g-3"), alt: "Cupcakes with vanilla and chocolate frosting" },
  { src: img("g-4"), alt: "Decorated flower cookies on a wooden board" },
  { src: img("g-5"), alt: "A rainbow layer cake on a blue stand" },
];

export const faqs = [
  {
    q: "Do you make eggless cakes?",
    a: "Yes. Every cake on the menu can be made eggless at the same price. Just mention it when you message us.",
  },
  {
    q: "How early should I order a cake?",
    a: "Two days ahead for regular cakes. For tiered or fondant cakes, please give us 4 to 5 days so we can do it properly.",
  },
  {
    q: "Do you deliver?",
    a: "Yes. Within 5 km of the shop we deliver ourselves for a flat ₹80 (free above ₹1,500). You can also find us on Zomato and Swiggy. For cakes, message us directly so we can pack and time it properly.",
  },
  {
    q: "Can you write a name or message on the cake?",
    a: "Names and messages are free. Edible photo prints are ₹250 extra. Send us the picture on WhatsApp.",
  },
  {
    q: "Is there anything vegan or sugar-free?",
    a: "Our sourdough and multigrain loaves are vegan. We can also make a jaggery-sweetened cake if you ask a few days ahead.",
  },
  {
    q: "Do you make Christmas plum cake?",
    a: "Yes, from the first week of November. It's rich, soaked in fruit and spices, and it sells out early, so message us ahead to reserve yours.",
  },
  {
    q: "How do I pay?",
    a: "UPI, cards or cash at the shop. For cake orders we take 50% advance on UPI and the rest when you collect.",
  },
];

/** Opening hours. Index 0 = Sunday, to match Date#getDay(). Decimal hours, 24h clock. */
export const hours = [
  { day: "Sunday", open: 8, close: 22 },
  { day: "Monday", open: 8, close: 21.5 },
  { day: "Tuesday", open: 8, close: 21.5 },
  { day: "Wednesday", open: 8, close: 21.5 },
  { day: "Thursday", open: 8, close: 21.5 },
  { day: "Friday", open: 8, close: 21.5 },
  { day: "Saturday", open: 8, close: 22 },
];

export const formatTime = (h: number) => {
  const hr24 = Math.floor(h);
  const mins = Math.round((h - hr24) * 60);
  const suffix = hr24 >= 12 ? "pm" : "am";
  const hr = hr24 % 12 === 0 ? 12 : hr24 % 12;
  return `${hr}${mins ? `:${String(mins).padStart(2, "0")}` : ""} ${suffix}`;
};

export const rupees = (n: number) => `₹${n.toLocaleString("en-IN")}`;
