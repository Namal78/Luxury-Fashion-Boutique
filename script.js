/**
 * ÉLÉGANCE — Luxury Fashion & Designer Atelier
 * Pure Vanilla JavaScript (ES6+)
 * Completely framework-free implementation
 */

// ==========================================
// 1. PRODUCTS DATA STORE
// ==========================================
const PRODUCTS = [
  // --- MEN'S CLOTHING & ACCESSORIES (6 items) ---
  {
    id: "m-01",
    name: "Milano Tailored Wool Blazer",
    department: "men",
    category: "clothing",
    price: 480,
    oldPrice: 550,
    rating: 4.9,
    reviewsCount: 34,
    badge: "Bestseller",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["#1a1a24", "#2c3e50", "#3e2723"],
    sizes: ["S", "M", "L", "XL"],
    description: "Hand-finished in Milan from 100% Super 130s Italian wool with silk lining. Built with structured shoulder padding, genuine horn buttons, and a double-vented back.",
    stock: 6
  },
  {
    id: "m-02",
    name: "Chronos Automatic Leather Watch",
    department: "men",
    category: "accessories",
    price: 320,
    rating: 5.0,
    reviewsCount: 52,
    badge: "Atelier Piece",
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["#3e2723", "#000000", "#d4af37"],
    sizes: ["One Size"],
    description: "Precision automatic Swiss movement timepiece protected by sapphire crystal glass. Paired with a hand-stitched vegetable-tanned Tuscan calfskin leather strap.",
    stock: 4
  },
  {
    id: "m-03",
    name: "Mongolian Cashmere Crewneck",
    department: "men",
    category: "clothing",
    price: 290,
    oldPrice: 340,
    rating: 4.8,
    reviewsCount: 19,
    badge: "New Arrival",
    images: [
      "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["#708090", "#1a1a24", "#f5f5dc"],
    sizes: ["S", "M", "L", "XL"],
    description: "Spun from 100% Grade-A Mongolian cashmere fibers for supreme softness. Features ribbed cuffs, refined seamwork, and an effortless tailored silhouette.",
    stock: 12
  },
  {
    id: "m-04",
    name: "Italian Calfskin Oxford Shoes",
    department: "men",
    category: "accessories",
    price: 360,
    rating: 4.9,
    reviewsCount: 27,
    badge: "Handcrafted",
    images: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["#3e2723", "#000000"],
    sizes: ["40", "41", "42", "43", "44"],
    description: "Handcrafted in Florence using full-grain Italian leather with Goodyear welted soles. Offers timeless sartorial elegance and all-day comfort for formal occasions.",
    stock: 8
  },
  {
    id: "m-05",
    name: "Silk Monogram Evening Shirt",
    department: "men",
    category: "clothing",
    price: 240,
    oldPrice: 280,
    rating: 4.8,
    reviewsCount: 16,
    badge: "Silk Collection",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["#ffffff", "#000000", "#1a1a24"],
    sizes: ["S", "M", "L", "XL"],
    description: "Woven from 100% pure Mulberry silk with a subtle jacquard weave and mother-of-pearl buttons. Designed for black-tie galas and evening soirées.",
    stock: 10
  },
  {
    id: "m-06",
    name: "Heritage Leather Wallet & Cardholder",
    department: "men",
    category: "accessories",
    price: 150,
    rating: 5.0,
    reviewsCount: 41,
    badge: "Essential",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["#3e2723", "#000000", "#d4af37"],
    sizes: ["One Size"],
    description: "Hand-finished saddle leather bifold wallet with RFID shielding and hand-burnished edges. Features 8 card slots and a silk-lined bill compartment.",
    stock: 18
  },

  // --- WOMEN'S CLOTHING & ACCESSORIES (6 items) ---
  {
    id: "w-01",
    name: "Silk Evening Gown",
    department: "women",
    category: "clothing",
    price: 650,
    oldPrice: 780,
    rating: 5.0,
    reviewsCount: 46,
    badge: "Couture",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["#800020", "#000000", "#191970"],
    sizes: ["XS", "S", "M", "L"],
    description: "Floor-sweeping 100% Mulberry silk charmeuse gown with a delicate cowl neckline, fluid bias cut, and an open cross-back silhouette.",
    stock: 3
  },
  {
    id: "w-02",
    name: "Monogram Leather Tote Bag",
    department: "women",
    category: "accessories",
    price: 520,
    rating: 4.9,
    reviewsCount: 68,
    badge: "Iconic",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["#3e2723", "#d4af37", "#000000"],
    sizes: ["One Size"],
    description: "Handcrafted in Florence from full-grain calfskin with gold-plated hardware and suede lining. Includes an interior zip pouch and shoulder strap.",
    stock: 8
  },
  {
    id: "w-03",
    name: "Double-Breasted Trench Coat",
    department: "women",
    category: "clothing",
    price: 430,
    oldPrice: 490,
    rating: 4.8,
    reviewsCount: 22,
    badge: "Classic",
    images: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["#f5f5dc", "#000000"],
    sizes: ["S", "M", "L"],
    description: "Water-repellent cotton gabardine trench coat with storm flaps, belted waist, and horn buckle hardware. Designed for effortless sophistication.",
    stock: 9
  },
  {
    id: "w-04",
    name: "18K Gold Pearl Drop Earrings",
    department: "women",
    category: "accessories",
    price: 240,
    rating: 5.0,
    reviewsCount: 31,
    badge: "Fine Jewelry",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["#d4af37"],
    sizes: ["One Size"],
    description: "Natural AAA-grade freshwater cultured pearls suspended from handcrafted 18K solid yellow gold posts. Radiates radiant luster and timeless grace.",
    stock: 7
  },
  {
    id: "w-05",
    name: "Tuscan Suede Stiletto Pumps",
    department: "women",
    category: "accessories",
    price: 380,
    oldPrice: 420,
    rating: 4.9,
    reviewsCount: 29,
    badge: "Bespoke Footwear",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["#800020", "#000000", "#d4af37"],
    sizes: ["36", "37", "38", "39", "40"],
    description: "Crafted in Milan from velvety Italian goat suede with leather soles and a sleek 85mm stiletto heel. Features memory foam insoles for divine comfort.",
    stock: 5
  },
  {
    id: "w-06",
    name: "Pleated Silk Wrap Blouse",
    department: "women",
    category: "clothing",
    price: 260,
    rating: 4.8,
    reviewsCount: 23,
    badge: "Atelier Highlight",
    images: [
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["#ffffff", "#f5f5dc", "#1a1a24"],
    sizes: ["XS", "S", "M", "L"],
    description: "Fluid silk crepe de chine blouse styled with sunray pleating and a draped wrap front. Radiates effortless luxury from day meetings to candlelight dinner.",
    stock: 11
  },

  // --- KIDS' CLOTHING & ACCESSORIES (6 items) ---
  {
    id: "k-01",
    name: "Organic Cotton Knit Cardigan",
    department: "kids",
    category: "clothing",
    price: 95,
    oldPrice: 120,
    rating: 4.9,
    reviewsCount: 15,
    badge: "Eco-Friendly",
    images: [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["#f5f5dc", "#87ceeb", "#ffb6c1"],
    sizes: ["2Y", "4Y", "6Y", "8Y"],
    description: "GOTS-certified 100% organic cotton rib-knit cardigan with natural wooden button closures. Ultra-gentle and hypoallergenic for sensitive skin.",
    stock: 14
  },
  {
    id: "k-02",
    name: "Junior Leather Mini Backpack",
    department: "kids",
    category: "accessories",
    price: 140,
    rating: 4.8,
    reviewsCount: 18,
    badge: "Junior Luxe",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["#3e2723", "#ffb6c1", "#2c3e50"],
    sizes: ["One Size"],
    description: "Lightweight, supple full-grain leather backpack designed for young trendsetters. Equipped with ergonomic padded shoulder straps and water-resistant lining.",
    stock: 10
  },
  {
    id: "k-03",
    name: "Linen Summer Overalls",
    department: "kids",
    category: "clothing",
    price: 85,
    rating: 4.7,
    reviewsCount: 12,
    badge: "Summer Essential",
    images: [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["#d2b48c", "#87ceeb"],
    sizes: ["2Y", "4Y", "6Y"],
    description: "Breezy French flax linen overall set with adjustable button straps and snap bottom closures. Breathable, durable, and stylish for playtime.",
    stock: 11
  },
  {
    id: "k-04",
    name: "Merino Wool Beanie & Scarf Set",
    department: "kids",
    category: "accessories",
    price: 75,
    rating: 5.0,
    reviewsCount: 9,
    badge: "Cozy Warmth",
    images: [
      "https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["#708090", "#ffb6c1"],
    sizes: ["One Size"],
    description: "Ultra-fine non-itchy Australian merino wool set with ribbing and pom-pom detail. Delivers cozy warmth during chilly autumn and winter outings.",
    stock: 16
  },
  {
    id: "k-05",
    name: "Miniature Suede Loafers",
    department: "kids",
    category: "accessories",
    price: 110,
    oldPrice: 135,
    rating: 4.9,
    reviewsCount: 14,
    badge: "Party Luxe",
    images: [
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["#3e2723", "#000000", "#d4af37"],
    sizes: ["26", "28", "30", "32"],
    description: "Handmade velvet suede loafers with flexible rubber pebble soles and soft leather lining. Designed for ring-bearers, birthday parties, and family galas.",
    stock: 9
  },
  {
    id: "k-06",
    name: "Tailored Celebration Suit Set",
    department: "kids",
    category: "clothing",
    price: 160,
    rating: 5.0,
    reviewsCount: 21,
    badge: "Formal Attire",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["#1a1a24", "#2c3e50"],
    sizes: ["4Y", "6Y", "8Y", "10Y"],
    description: "Lined wool-blend jacket and matching trousers crafted for young gentlemen. Features adjustable inner waistband and satin lapel accents.",
    stock: 7
  }
];

// REVIEWS INITIAL DATA
let REVIEWS = [
  {
    id: "r1",
    author: "Duchess Beatrice H.",
    rating: 5,
    role: "Patron • London, UK",
    text: "The Milano Tailored Wool Blazer fits as though it was measured by a bespoke Savile Row tailor. The fabric drape and horn buttons are exquisite."
  },
  {
    id: "r2",
    author: "Julian Vance",
    rating: 5,
    role: "Collector • Zurich, CH",
    text: "The Chronos watch exceeded my expectations. The Tuscan leather strap smells rich and the timekeeping precision is flawless."
  },
  {
    id: "r3",
    author: "Elena Rostova",
    rating: 5,
    role: "Verified Buyer • Paris, FR",
    text: "I wore the Silk Evening Gown to the Opera Gala in Paris. The weight of the Mulberry silk and the bias-cut silhouette drew compliments all evening."
  }
];

// ==========================================
// 2. APP STATE MANAGEMENT
// ==========================================
let state = {
  cart: JSON.parse(localStorage.getItem("elegance_cart")) || [],
  wishlist: JSON.parse(localStorage.getItem("elegance_wishlist")) || [],
  filterDept: "all", // "all", "men", "women", "kids", "clothing", "accessories"
  filterSubCat: "all",
  searchQuery: "",
  maxPrice: 1000,
  sortBy: "featured",
  promoDiscount: 0, // fraction e.g. 0.20
  promoCode: "",
  theme: localStorage.getItem("elegance_theme") || "dark"
};

// ==========================================
// 3. INITIALIZATION & EVENT LISTENERS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initHeroSlider();
  renderProducts();
  renderReviews();
  updateCartUI();
  updateWishlistUI();
  initStatsCounter();
  initEventListeners();
});

// ==========================================
// 4. THEME SWITCHER (DARK / LIGHT)
// ==========================================
function initTheme() {
  document.documentElement.setAttribute("data-theme", state.theme);
  updateThemeIcon();
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem("elegance_theme", state.theme);
  document.documentElement.setAttribute("data-theme", state.theme);
  updateThemeIcon();
  showToast(`Switched to ${state.theme.toUpperCase()} theme`);
}

function updateThemeIcon() {
  const sun = document.querySelector(".icon-sun");
  const moon = document.querySelector(".icon-moon");
  if (!sun || !moon) return;
  if (state.theme === "light") {
    sun.classList.remove("hidden");
    moon.classList.add("hidden");
  } else {
    sun.classList.add("hidden");
    moon.classList.remove("hidden");
  }
}

// ==========================================
// 5. HERO SLIDER CONTROLLER
// ==========================================
let currentSlide = 0;
let slideInterval;

function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".slider-dots .dot");
  if (!slides.length) return;

  function goToSlide(index) {
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
    currentSlide = index;
  }

  document.getElementById("sliderNext")?.addEventListener("click", () => {
    goToSlide((currentSlide + 1) % slides.length);
    resetAutoSlide();
  });

  document.getElementById("sliderPrev")?.addEventListener("click", () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
    resetAutoSlide();
  });

  dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
      const idx = parseInt(e.target.dataset.slide, 10);
      goToSlide(idx);
      resetAutoSlide();
    });
  });

  function startAutoSlide() {
    slideInterval = setInterval(() => {
      goToSlide((currentSlide + 1) % slides.length);
    }, 6000);
  }

  function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
  }

  startAutoSlide();
}

// ==========================================
// 6. PRODUCT FILTERING & RENDERING ENGINE
// ==========================================
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  const emptyState = document.getElementById("emptyProducts");
  if (!grid) return;

  // Filter products
  let filtered = PRODUCTS.filter(p => {
    // Category / Department check
    let deptMatch = true;
    if (state.filterDept === "men") deptMatch = p.department === "men";
    else if (state.filterDept === "women") deptMatch = p.department === "women";
    else if (state.filterDept === "kids") deptMatch = p.department === "kids";
    else if (state.filterDept === "clothing") deptMatch = p.category === "clothing";
    else if (state.filterDept === "accessories") deptMatch = p.category === "accessories";

    // Subcategory check
    let subMatch = true;
    if (state.filterSubCat !== "all") {
      subMatch = p.category === state.filterSubCat;
    }

    // Search query check
    let searchMatch = true;
    if (state.searchQuery.trim() !== "") {
      const q = state.searchQuery.toLowerCase();
      searchMatch = p.name.toLowerCase().includes(q) || 
                  p.description.toLowerCase().includes(q) ||
                  p.department.toLowerCase().includes(q) ||
                  p.category.toLowerCase().includes(q);
    }

    // Price range check
    let priceMatch = p.price <= state.maxPrice;

    return deptMatch && subMatch && searchMatch && priceMatch;
  });

  // Sort products
  if (state.sortBy === "price-low") filtered.sort((a, b) => a.price - b.price);
  else if (state.sortBy === "price-high") filtered.sort((a, b) => b.price - a.price);
  else if (state.sortBy === "rating") filtered.sort((a, b) => b.rating - a.rating);
  else if (state.sortBy === "name") filtered.sort((a, b) => a.name.localeCompare(b.name));

  // Trigger grid animation
  grid.classList.remove("grid-fade-in");
  void grid.offsetWidth; // force reflow for smooth animation restart
  grid.classList.add("grid-fade-in");

  // Handle empty state
  if (filtered.length === 0) {
    grid.innerHTML = "";
    emptyState?.classList.remove("hidden");
    return;
  } else {
    emptyState?.classList.add("hidden");
  }

  // Render product cards
  grid.innerHTML = filtered.map(p => createProductCardHTML(p)).join("");
}

// ==========================================
// CARD IMAGE SLIDER / CAROUSEL ENGINE
// ==========================================
function changeCardSlide(productId, direction) {
  const slider = document.getElementById(`slider-${productId}`);
  if (!slider) return;
  const imgs = slider.querySelectorAll('.product-img');
  const dots = slider.parentElement.querySelectorAll('.card-dot');
  if (!imgs.length) return;

  let activeIdx = 0;
  imgs.forEach((img, idx) => {
    if (img.classList.contains('active')) activeIdx = idx;
  });

  let nextIdx = (activeIdx + direction + imgs.length) % imgs.length;

  imgs.forEach((img, idx) => img.classList.toggle('active', idx === nextIdx));
  dots.forEach((dot, idx) => dot.classList.toggle('active', idx === nextIdx));
}

function setCardSlide(productId, index) {
  const slider = document.getElementById(`slider-${productId}`);
  if (!slider) return;
  const imgs = slider.querySelectorAll('.product-img');
  const dots = slider.parentElement.querySelectorAll('.card-dot');

  imgs.forEach((img, idx) => img.classList.toggle('active', idx === index));
  dots.forEach((dot, idx) => dot.classList.toggle('active', idx === index));
}

function createProductCardHTML(p) {
  const isWishlisted = state.wishlist.some(item => item.id === p.id);
  const stars = "★".repeat(Math.floor(p.rating)) + (p.rating % 1 !== 0 ? "½" : "");

  return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img-wrap">
        ${p.badge ? `<span class="badge-tag ${p.oldPrice ? 'sale' : ''}">${p.badge}</span>` : ""}
        <button class="wishlist-toggle-btn ${isWishlisted ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist('${p.id}')" aria-label="Save to Wishlist">
          ♥
        </button>

        <div class="card-slider" id="slider-${p.id}">
          ${p.images.map((img, idx) => `
            <img src="${img}" alt="${p.name} - view ${idx + 1}" class="product-img ${idx === 0 ? 'active' : ''}" loading="lazy" referrerPolicy="no-referrer" />
          `).join("")}
        </div>

        ${p.images.length > 1 ? `
          <button class="card-slider-btn prev-btn" onclick="event.stopPropagation(); changeCardSlide('${p.id}', -1)" aria-label="Previous Image">❮</button>
          <button class="card-slider-btn next-btn" onclick="event.stopPropagation(); changeCardSlide('${p.id}', 1)" aria-label="Next Image">❯</button>
          <div class="card-slider-dots">
            ${p.images.map((_, idx) => `
              <span class="card-dot ${idx === 0 ? 'active' : ''}" onclick="event.stopPropagation(); setCardSlide('${p.id}', ${idx})"></span>
            `).join("")}
          </div>
        ` : ""}

        <button class="quick-view-trigger" onclick="event.stopPropagation(); openQuickView('${p.id}')">Quick View</button>
      </div>

      <div class="product-info" onclick="openQuickView('${p.id}')">
        <span class="product-category">${p.department} • ${p.category}</span>
        <h3 class="product-title">${p.name}</h3>
        
        <p class="product-short-desc">${p.description}</p>

        <div class="rating-stars">
          <span>${stars}</span>
          <span class="rating-count">(${p.reviewsCount})</span>
        </div>

        <div class="color-swatches">
          ${p.colors.map((c, i) => `<span class="swatch ${i===0?'active':''}" style="background-color: ${c};"></span>`).join("")}
        </div>

        <div class="product-footer">
          <div class="price-box">
            <span class="current-price">${p.price}.00</span>
            ${p.oldPrice ? `<span class="old-price">${p.oldPrice}.00</span>` : ""}
          </div>
          <button class="add-cart-btn" onclick="event.stopPropagation(); addToCart('${p.id}')">
            <span>+ Add</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

function filterCategory(cat) {
  state.filterDept = cat;
  state.filterSubCat = "all";
  
  // Update active tab UI
  document.querySelectorAll(".filter-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.filter === cat);
  });

  renderProducts();

  // Smooth scroll to products
  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
}

function filterCategoryAndSub(dept, sub) {
  state.filterDept = dept;
  state.filterSubCat = sub;

  document.querySelectorAll(".filter-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.filter === dept);
  });

  renderProducts();
  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
}

function resetFilters() {
  state.filterDept = "all";
  state.filterSubCat = "all";
  state.searchQuery = "";
  state.maxPrice = 1000;
  state.sortBy = "featured";

  document.getElementById("productSearchInput").value = "";
  document.getElementById("priceRange").value = 1000;
  document.getElementById("priceRangeValue").innerText = "$1,000";
  document.getElementById("sortSelect").value = "featured";

  document.querySelectorAll(".filter-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.filter === "all");
  });

  renderProducts();
}

function switchDept(dept) {
  document.querySelectorAll(".dept-pill").forEach(p => p.classList.remove("active"));
  event.target.classList.add("active");
  filterCategory(dept);
}

// ==========================================
// 7. CART ENGINE & DRAWER CONTROLLER
// ==========================================
function addToCart(productId, size = null, color = null) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  const selectedSize = size || p.sizes[0];
  const selectedColor = color || p.colors[0];

  const existingIdx = state.cart.findIndex(
    item => item.id === productId && item.size === selectedSize && item.color === selectedColor
  );

  if (existingIdx > -1) {
    state.cart[existingIdx].quantity += 1;
  } else {
    state.cart.push({
      id: p.id,
      name: p.name,
      price: p.price,
      image: p.images[0],
      size: selectedSize,
      color: selectedColor,
      quantity: 1
    });
  }

  saveCart();
  updateCartUI();
  openCartDrawer();
  showToast(`Added "${p.name}" to your bag`);
}

function updateCartQuantity(index, delta) {
  if (!state.cart[index]) return;
  state.cart[index].quantity += delta;
  if (state.cart[index].quantity <= 0) {
    state.cart.splice(index, 1);
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(index) {
  if (!state.cart[index]) return;
  const name = state.cart[index].name;
  state.cart.splice(index, 1);
  saveCart();
  updateCartUI();
  showToast(`Removed "${name}" from bag`);
}

function clearCart() {
  state.cart = [];
  saveCart();
  updateCartUI();
  showToast("Your shopping bag is now empty");
}

function saveCart() {
  localStorage.setItem("elegance_cart", JSON.stringify(state.cart));
}

function updateCartUI() {
  const totalItems = state.cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartBadge = document.getElementById("cartBadge");
  const drawerCount = document.getElementById("cartDrawerCount");
  
  if (cartBadge) cartBadge.innerText = totalItems;
  if (drawerCount) drawerCount.innerText = totalItems;

  const container = document.getElementById("cartItemsContainer");
  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="empty-products">
        <p>🛍️ Your shopping bag is empty.</p>
        <button class="btn btn-gold btn-sm mt-3" onclick="closeCartDrawer(); filterCategory('all');">Explore Atelier</button>
      </div>
    `;
  } else {
    container.innerHTML = state.cart.map((item, i) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" referrerPolicy="no-referrer" />
        <div class="cart-item-details">
          <div>
            <h4 class="cart-item-title">${item.name}</h4>
            <div class="cart-item-meta">Size: ${item.size} • Color: <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${item.color}"></span></div>
          </div>
          <div class="cart-item-controls">
            <div class="qty-btn-group">
              <button class="qty-btn" onclick="updateCartQuantity(${i}, -1)">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="updateCartQuantity(${i}, 1)">+</button>
            </div>
            <strong>$${item.price * item.quantity}.00</strong>
            <button class="remove-item-btn" onclick="removeFromCart(${i})">Remove</button>
          </div>
        </div>
      </div>
    `).join("");
  }

  // Calculate pricing
  const subtotal = state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discount = subtotal * state.promoDiscount;
  const shipping = subtotal >= 150 || subtotal === 0 ? 0 : 25;
  const total = Math.max(0, subtotal - discount + shipping);

  document.getElementById("cartSubtotal").innerText = `$${subtotal.toFixed(2)}`;
  
  const discountLine = document.getElementById("discountLine");
  const cartDiscount = document.getElementById("cartDiscount");
  if (state.promoDiscount > 0) {
    discountLine?.classList.remove("hidden");
    if (cartDiscount) cartDiscount.innerText = `-$${discount.toFixed(2)}`;
  } else {
    discountLine?.classList.add("hidden");
  }

  document.getElementById("cartShipping").innerText = shipping === 0 ? "FREE" : `$${shipping}.00`;
  document.getElementById("cartTotal").innerText = `$${total.toFixed(2)}`;

  // Free shipping progress bar
  const freeShipText = document.getElementById("freeShippingText");
  const freeShipProgress = document.getElementById("freeShippingProgress");
  const remaining = 150 - subtotal;
  if (remaining <= 0) {
    if (freeShipText) freeShipText.innerHTML = "🎉 You unlocked <strong>FREE Express Shipping!</strong>";
    if (freeShipProgress) freeShipProgress.style.width = "100%";
  } else {
    const percent = Math.min(100, (subtotal / 150) * 100);
    if (freeShipText) freeShipText.innerHTML = `Add <strong>$${remaining.toFixed(2)}</strong> more to unlock FREE Express Shipping!`;
    if (freeShipProgress) freeShipProgress.style.width = `${percent}%`;
  }
}

function openCartDrawer() {
  document.getElementById("cartDrawer")?.classList.add("open");
  document.getElementById("drawerOverlay")?.classList.add("open");
}

function closeCartDrawer() {
  document.getElementById("cartDrawer")?.classList.remove("open");
  document.getElementById("drawerOverlay")?.classList.remove("open");
}

// ==========================================
// 8. WISHLIST CONTROLLER
// ==========================================
function toggleWishlist(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  const idx = state.wishlist.findIndex(item => item.id === productId);
  if (idx > -1) {
    state.wishlist.splice(idx, 1);
    showToast(`Removed "${p.name}" from wishlist`);
  } else {
    state.wishlist.push(p);
    showToast(`Saved "${p.name}" to wishlist`);
  }

  localStorage.setItem("elegance_wishlist", JSON.stringify(state.wishlist));
  updateWishlistUI();
  renderProducts(); // Refresh heart icon state
}

function updateWishlistUI() {
  const badge = document.getElementById("wishlistBadge");
  const count = document.getElementById("wishlistModalCount");
  if (badge) badge.innerText = state.wishlist.length;
  if (count) count.innerText = state.wishlist.length;

  const container = document.getElementById("wishlistItemsContainer");
  if (!container) return;

  if (state.wishlist.length === 0) {
    container.innerHTML = `<p class="text-center text-muted">No items in your wishlist yet.</p>`;
  } else {
    container.innerHTML = state.wishlist.map(p => `
      <div class="cart-item">
        <img src="${p.images[0]}" alt="${p.name}" class="cart-item-img" referrerPolicy="no-referrer" />
        <div class="cart-item-details">
          <div>
            <h4 class="cart-item-title">${p.name}</h4>
            <div class="cart-item-meta">$${p.price}.00 • ${p.department}</div>
          </div>
          <div class="cart-item-controls">
            <button class="btn btn-sm btn-gold" onclick="addToCart('${p.id}'); toggleWishlist('${p.id}');">Move to Bag</button>
            <button class="remove-item-btn" onclick="toggleWishlist('${p.id}')">Remove</button>
          </div>
        </div>
      </div>
    `).join("");
  }
}

function openWishlistModal() {
  document.getElementById("wishlistModal")?.classList.add("open");
  document.getElementById("wishlistModalOverlay")?.classList.add("open");
}

function closeWishlistModal() {
  document.getElementById("wishlistModal")?.classList.remove("open");
  document.getElementById("wishlistModalOverlay")?.classList.remove("open");
}

// ==========================================
// 9. QUICK VIEW MODAL
// ==========================================
function openQuickView(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  const content = document.getElementById("quickViewContent");
  if (!content) return;

  let selectedSize = p.sizes[0];
  let selectedColor = p.colors[0];

  content.innerHTML = `
    <div class="quick-view-gallery">
      <img id="qvMainImg" src="${p.images[0]}" alt="${p.name}" referrerPolicy="no-referrer" />
    </div>
    <div class="quick-view-details">
      <span class="product-category">${p.department} • ${p.category}</span>
      <h2 class="section-title" style="font-size: 1.8rem;">${p.name}</h2>
      <div class="price-box mt-1">
        <span class="current-price" style="font-size: 1.5rem;">$${p.price}.00</span>
        ${p.oldPrice ? `<span class="old-price">$${p.oldPrice}.00</span>` : ""}
      </div>
      <p class="mt-2 text-muted" style="font-size:0.9rem;">${p.description}</p>
      
      <div class="mt-3">
        <label style="font-size:0.8rem;font-weight:700;">SELECT SIZE:</label>
        <div class="size-selector">
          ${p.sizes.map((s, i) => `<button class="size-btn ${i===0?'active':''}" onclick="selectQVSize(this, '${s}')">${s}</button>`).join("")}
        </div>
      </div>

      <div class="mt-2">
        <label style="font-size:0.8rem;font-weight:700;">AVAILABILITY:</label>
        <p style="font-size:0.85rem;color:var(--accent-gold);font-weight:600;">In Stock (${p.stock} units remaining)</p>
      </div>

      <div class="mt-4 flex-row" style="display:flex;gap:1rem;">
        <button class="btn btn-gold flex-1" onclick="addToCart('${p.id}', selectedQVSizeVal, selectedQVColorVal); closeQuickView();">Add to Bag &rarr;</button>
        <button class="btn btn-outline-gold" onclick="toggleWishlist('${p.id}')">♥ Wishlist</button>
      </div>
    </div>
  `;

  window.selectedQVSizeVal = p.sizes[0];
  window.selectedQVColorVal = p.colors[0];

  document.getElementById("quickViewModal")?.classList.add("open");
  document.getElementById("quickViewOverlay")?.classList.add("open");
}

function selectQVSize(btn, size) {
  document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  window.selectedQVSizeVal = size;
}

function closeQuickView() {
  document.getElementById("quickViewModal")?.classList.remove("open");
  document.getElementById("quickViewOverlay")?.classList.remove("open");
}

// ==========================================
// 10. REVIEWS & TESTIMONIALS ENGINE
// ==========================================
function renderReviews() {
  const grid = document.getElementById("reviewsGrid");
  if (!grid) return;

  grid.innerHTML = REVIEWS.map(r => `
    <div class="review-card">
      <div class="review-stars">${"★".repeat(r.rating)}</div>
      <p class="review-quote">"${r.text}"</p>
      <div class="review-author-wrap">
        <div class="author-avatar">${r.author.charAt(0)}</div>
        <div>
          <h4 class="author-name">${r.author}</h4>
          <span class="author-role">${r.role}</span>
        </div>
      </div>
    </div>
  `).join("");
}

// ==========================================
// 11. CHECKOUT MODAL & ORDER PROCESSOR
// ==========================================
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast("Your bag is empty. Add items before checking out.");
    return;
  }

  const subtotal = state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discount = subtotal * state.promoDiscount;
  const shipping = subtotal >= 150 ? 0 : 25;
  const total = Math.max(0, subtotal - discount + shipping);

  document.getElementById("checkoutFinalTotal").innerText = `$${total.toFixed(2)}`;

  closeCartDrawer();
  document.getElementById("checkoutModal")?.classList.add("open");
  document.getElementById("checkoutModalOverlay")?.classList.add("open");
}

function closeCheckoutModal() {
  document.getElementById("checkoutModal")?.classList.remove("open");
  document.getElementById("checkoutModalOverlay")?.classList.remove("open");
}

// ==========================================
// 12. STATS ANIMATED COUNTER
// ==========================================
function initStatsCounter() {
  const stats = document.querySelectorAll(".stat-number");
  if (!stats.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = +entry.target.getAttribute("data-target");
        let count = 0;
        const speed = target / 30;
        const updateCount = () => {
          count += speed;
          if (count < target) {
            entry.target.innerText = Math.ceil(count);
            setTimeout(updateCount, 30);
          } else {
            entry.target.innerText = target;
          }
        };
        updateCount();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(s => observer.observe(s));
}

// ==========================================
// 13. TOAST NOTIFICATIONS
// ==========================================
function showToast(message, duration = 3000) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>✨</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ==========================================
// 14. GLOBAL EVENT LISTENERS BINDING
// ==========================================
function initEventListeners() {
  // Navigation & Menu
  document.getElementById("mobileMenuBtn")?.addEventListener("click", () => {
    document.getElementById("navLinks")?.classList.toggle("open");
  });

  document.getElementById("themeToggleBtn")?.addEventListener("click", toggleTheme);

  // Announcement Bar Close
  document.getElementById("closeAnnouncement")?.addEventListener("click", () => {
    document.getElementById("announcementBar")?.classList.add("hidden");
  });

  // Cart Drawer
  document.getElementById("cartBtn")?.addEventListener("click", openCartDrawer);
  document.getElementById("closeCartBtn")?.addEventListener("click", closeCartDrawer);
  document.getElementById("drawerOverlay")?.addEventListener("click", closeCartDrawer);
  document.getElementById("clearCartBtn")?.addEventListener("click", clearCart);

  // Promo Code
  document.getElementById("applyPromoBtn")?.addEventListener("click", () => {
    const input = document.getElementById("promoInput").value.trim().toUpperCase();
    const feedback = document.getElementById("promoFeedback");
    
    if (input === "ELEGANCE20") {
      state.promoDiscount = 0.20;
      feedback.style.color = "var(--badge-green)";
      feedback.innerText = "✓ Promo code ELEGANCE20 applied! 20% discount.";
      showToast("Applied 20% discount code!");
    } else if (input === "WELCOME15") {
      state.promoDiscount = 0.15;
      feedback.style.color = "var(--badge-green)";
      feedback.innerText = "✓ Promo code WELCOME15 applied! 15% discount.";
      showToast("Applied 15% discount code!");
    } else {
      feedback.style.color = "var(--badge-red)";
      feedback.innerText = "✕ Invalid promo code. Try ELEGANCE20";
    }
    updateCartUI();
  });

  // Wishlist Modal
  document.getElementById("wishlistBtn")?.addEventListener("click", openWishlistModal);
  document.getElementById("closeWishlistBtn")?.addEventListener("click", closeWishlistModal);
  document.getElementById("wishlistModalOverlay")?.addEventListener("click", closeWishlistModal);

  // Quick View Close
  document.getElementById("closeQuickViewBtn")?.addEventListener("click", closeQuickView);
  document.getElementById("quickViewOverlay")?.addEventListener("click", closeQuickView);

  // Search Modal
  document.getElementById("searchBtn")?.addEventListener("click", () => {
    document.getElementById("searchModal")?.classList.add("open");
    document.getElementById("searchModalOverlay")?.classList.add("open");
    document.getElementById("modalSearchInput")?.focus();
  });

  document.getElementById("closeSearchBtn")?.addEventListener("click", closeSearchModal);
  document.getElementById("searchModalOverlay")?.addEventListener("click", closeSearchModal);

  document.getElementById("modalSearchInput")?.addEventListener("input", (e) => {
    const val = e.target.value.toLowerCase().trim();
    const grid = document.getElementById("searchResultsGrid");
    if (!grid) return;

    if (!val) {
      grid.innerHTML = '<p class="search-hint">Start typing above to see live results...</p>';
      return;
    }

    const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(val) || p.department.toLowerCase().includes(val));
    if (matches.length === 0) {
      grid.innerHTML = '<p class="search-hint">No matching items found.</p>';
    } else {
      grid.innerHTML = matches.map(p => `
        <div class="cart-item" onclick="openQuickView('${p.id}'); closeSearchModal();">
          <img src="${p.images[0]}" alt="${p.name}" class="cart-item-img" referrerPolicy="no-referrer" />
          <div>
            <h4 class="cart-item-title">${p.name}</h4>
            <span class="cart-item-meta">$${p.price}.00 • ${p.department}</span>
          </div>
        </div>
      `).join("");
    }
  });

  // Filter Toolbar Inputs
  document.querySelectorAll(".filter-tab").forEach(tab => {
    tab.addEventListener("click", (e) => {
      document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
      e.target.classList.add("active");
      state.filterDept = e.target.dataset.filter;
      state.filterSubCat = "all";
      renderProducts();
    });
  });

  document.getElementById("productSearchInput")?.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    renderProducts();
  });

  document.getElementById("priceRange")?.addEventListener("input", (e) => {
    state.maxPrice = +e.target.value;
    document.getElementById("priceRangeValue").innerText = `$${state.maxPrice}`;
    renderProducts();
  });

  document.getElementById("sortSelect")?.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    renderProducts();
  });

  // Review Modal
  document.getElementById("openReviewModalBtn")?.addEventListener("click", () => {
    document.getElementById("reviewModal")?.classList.add("open");
    document.getElementById("reviewModalOverlay")?.classList.add("open");
  });

  document.getElementById("closeReviewModalBtn")?.addEventListener("click", closeReviewModal);
  document.getElementById("reviewModalOverlay")?.addEventListener("click", closeReviewModal);

  document.getElementById("addReviewForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const author = document.getElementById("reviewAuthor").value;
    const rating = +document.getElementById("reviewRating").value;
    const role = document.getElementById("reviewRole").value || "Verified Patron";
    const text = document.getElementById("reviewText").value;

    REVIEWS.unshift({ id: "r-" + Date.now(), author, rating, role, text });
    renderReviews();
    closeReviewModal();
    showToast("Thank you! Your review has been published.");
    document.getElementById("addReviewForm").reset();
  });

  // Newsletter Form
  document.getElementById("newsletterForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("newsletterForm")?.classList.add("hidden");
    document.getElementById("newsletterSuccess")?.classList.remove("hidden");
    showToast("Subscription successful! Code WELCOME15 unlocked.");
  });

  // Atelier Contact Form
  document.getElementById("atelierContactForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contactName").value.trim();
    showToast(`Thank you, ${name || 'Patron'}. Your message has been received by our Atelier Concierge.`);
    document.getElementById("atelierContactForm").reset();
  });

  // Checkout Flow
  document.getElementById("checkoutBtn")?.addEventListener("click", openCheckoutModal);
  document.getElementById("closeCheckoutBtn")?.addEventListener("click", closeCheckoutModal);
  document.getElementById("checkoutModalOverlay")?.addEventListener("click", closeCheckoutModal);

  document.getElementById("toStep2Btn")?.addEventListener("click", () => {
    const fn = document.getElementById("checkoutFirstName").value.trim();
    const ln = document.getElementById("checkoutLastName").value.trim();
    const addr = document.getElementById("checkoutAddress").value.trim();
    if (!fn || !ln || !addr) {
      showToast("Please complete your shipping address details.");
      return;
    }
    document.getElementById("step1Content")?.classList.add("hidden");
    document.getElementById("step2Content")?.classList.remove("hidden");
    document.getElementById("step1Indicator")?.classList.remove("active");
    document.getElementById("step2Indicator")?.classList.add("active");
  });

  document.getElementById("backToStep1Btn")?.addEventListener("click", () => {
    document.getElementById("step2Content")?.classList.add("hidden");
    document.getElementById("step1Content")?.classList.remove("hidden");
    document.getElementById("step2Indicator")?.classList.remove("active");
    document.getElementById("step1Indicator")?.classList.add("active");
  });

  document.getElementById("checkoutForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const orderId = "#ELG-" + Math.floor(10000 + Math.random() * 90000);
    document.getElementById("generatedOrderId").innerText = orderId;

    document.getElementById("step2Content")?.classList.add("hidden");
    document.getElementById("step3Content")?.classList.remove("hidden");
    document.getElementById("step2Indicator")?.classList.remove("active");
    document.getElementById("step3Indicator")?.classList.add("active");

    clearCart();
    showToast(`Order ${orderId} confirmed successfully!`);
  });

  document.getElementById("finishCheckoutBtn")?.addEventListener("click", () => {
    closeCheckoutModal();
    // Reset checkout wizard
    document.getElementById("step3Content")?.classList.add("hidden");
    document.getElementById("step1Content")?.classList.remove("hidden");
    document.getElementById("step3Indicator")?.classList.remove("active");
    document.getElementById("step1Indicator")?.classList.add("active");
    document.getElementById("checkoutForm")?.reset();
  });
}

function closeSearchModal() {
  document.getElementById("searchModal")?.classList.remove("open");
  document.getElementById("searchModalOverlay")?.classList.remove("open");
}

function closeReviewModal() {
  document.getElementById("reviewModal")?.classList.remove("open");
  document.getElementById("reviewModalOverlay")?.classList.remove("open");
}
