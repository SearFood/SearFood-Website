import '../style.css'
import { recipes, Recipe } from './mockData'

// Types
type PageName = 'home' | 'retail' | 'exports' | 'contact';

interface RouteState {
  page: PageName;
}

// State
let currentPage: PageName = 'home';

// DOM Elements
const app = document.querySelector<HTMLDivElement>('#app');

if (!app) throw new Error('App root not found');

// Navigation Handler
function navigate(page: PageName) {
  currentPage = page;
  render();
  window.history.pushState({ page }, '', `/${page === 'home' ? '' : page}`);
  window.scrollTo(0, 0);
}

// Initial Load Handling
window.addEventListener('popstate', (e: PopStateEvent) => {
  const state = e.state as RouteState;
  currentPage = state?.page || 'home';
  render();
});

// Components
const Header = (): string => `
  <header>
    <div class="logo-container">
      <a href="/" data-link="home">
        <img src="/logo.png" alt="SearFood Logo" class="logo-img" />
      </a>
    </div>
    <nav>
      <ul>
        <li><a href="/" data-link="home" class="${currentPage === 'home' ? 'active' : ''}">Home</a></li>
        <li><a href="/retail" data-link="retail" class="${currentPage === 'retail' ? 'active' : ''}">Retail</a></li>
        <li><a href="/exports" data-link="exports" class="${currentPage === 'exports' ? 'active' : ''}">Exports</a></li>
        <li><a href="/contact" data-link="contact" class="${currentPage === 'contact' ? 'active' : ''}">Contact Us</a></li>
      </ul>
    </nav>
  </header>
`;

const HomePage = (): string => `
  <section class="hero-cinematic">
    <!-- Updated background to a high-quality ingredients shot -->
    <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=2500');"></div>
    <div class="hero-overlay-content">
      <p class="hero-tagline">Welcome to Sear Food</p>
      <h1 class="hero-title">Producers to Global Consumers</h1>
      <a href="/retail" data-link="retail" class="hero-cta">Explore Collection</a>
    </div>
  </section>
  
  <section class="section-container" style="background-color: #f8f8f8;">
    <h2 class="page-title" style="font-size: 2.5rem; margin-bottom: 2rem;">About Us</h2>
    
    <div style="max-width: 800px; margin: 0 auto; text-align: center; padding: 0 1rem;">
      <p style="font-family: var(--font-serif); font-size: 1.25rem; line-height: 1.8; color: #444; margin-bottom: 2rem;">
        Hello! We are <strong style="color: var(--color-primary);">Sear Food</strong>, passionate about bringing you authentic masalas, spices, and traditional dishes from across India. From <strong>Kanyakumari to Kashmir</strong>, and <strong>Gujarat to Arunachal Pradesh</strong>, we revive rare flavors from the heartlands of the country. Our offerings are rooted in ancestral wisdom, with each recipe and ingredient specific to its region and passed down through generations.
      </p>
      <p style="font-family: var(--font-serif); font-size: 1.25rem; line-height: 1.8; color: #444; margin-bottom: 2rem;">
        From the royal culinary traditions of <em>Chhatrapati Shivaji Maharaj’s Maratha region</em> to the rich heritage of the <em>Ahom dynasty of Northeast India</em>, every dish is our tribute to the land and the people who preserved these timeless practices. Through Sear Food, we celebrate India’s history and culture by sharing these treasured flavors with the world.
      </p>
      <p style="font-family: var(--font-serif); font-size: 1.4rem; font-style: italic; color: var(--color-primary); font-weight: bold;">
        Come, experience, and enjoy the taste of tradition
      </p>
    </div>
  </section>
`;


const RetailPage = (): string => `
  <section class="section-container">
    <h1 class="page-title">Retail Products</h1>
    <p style="text-align: center; max-width: 600px; margin: 0 auto; margin-bottom: 2rem;">
      Elevate your home cooking with our premium range.
    </p>

    <div style="max-width: 500px; margin: 0 auto 3rem auto; position: relative;">
      <input type="text" id="retail-search" placeholder="Search products..." style="width: 100%; padding: 1rem 1.5rem; border-radius: 50px; border: 1px solid #ddd; font-family: var(--font-sans); font-size: 1rem; box-shadow: 0 4px 12px rgba(0,0,0,0.05); outline: none;" />
      <span style="position: absolute; right: 1.5rem; top: 50%; transform: translateY(-50%); color: #ccc;">🔍</span>
    </div>
    
    <div id="retail-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem;">
      <!-- Grid populated by JS -->
    </div>
  </section>
`;

function renderRetailGrid(items: Recipe[]) {
  const grid = document.getElementById('retail-grid');
  if (!grid) return;
  
  if (items.length === 0) {
    grid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: #999;">No products found.</p>';
    return;
  }

  grid.innerHTML = items.map((recipe: Recipe) => `
    <div style="background: #f9f9f9; padding: 2rem 1rem; text-align: center; transition: transform 0.2s;">
      <h3 style="font-size: 1.25rem; margin-bottom: 1.5rem; font-family: var(--font-sans); color: #333;">${recipe.title}</h3>
      
      <div style="height: 200px; margin-bottom: 1.5rem; overflow: hidden; border-radius: 4px;">
        <img src="${recipe.image}" alt="${recipe.title}" style="width: 100%; height: 100%; object-fit: cover;" />
      </div>
      
      <p style="color: #666; font-size: 0.95rem; line-height: 1.6; max-width: 90%; margin: 0 auto;">
        ${recipe.description}
      </p>
    </div>
  `).join('');
}

const ExportsPage = (): string => `
  <section class="section-container section-dark">
    <h1 class="page-title">Global Exports</h1>
    <p style="text-align: center; max-width: 700px; margin: 0 auto;">
      We manage end-to-end logistics for bulk orders across 20+ countries. Our commitment to quality ensures freshness at every port.
    </p>
    <div style="margin-top: 4rem; height: 300px; border: 1px dashed rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.5);">
      [Interactive Global Map / Certifications Placeholder]
    </div>
  </section>
`;

const ContactPage = (): string => `
  <section class="section-container">
    <h1 class="page-title">Get in Touch</h1>
    <p style="text-align: center; margin-bottom: 3rem;">Have a query about bulk orders or retail partnerships?</p>
    
    <form class="contact-form" onsubmit="event.preventDefault(); alert('Thank you! We will reach out shortly.');">
      <div class="form-group">
        <input type="text" placeholder="Name" required />
      </div>
      <div class="form-group">
        <input type="email" placeholder="Email Address" required />
      </div>
      <div class="form-group">
        <textarea rows="5" placeholder="How can we help?" required></textarea>
      </div>
      <button type="submit" class="btn-primary">Send Message</button>
    </form>
  </section>
`;

const Footer = (): string => `
  <footer>
    <div class="logo-container" style="justify-content: center; margin-bottom: 1rem;">
      <img src="/logo.png" alt="SearFood" style="height: 40px; opacity: 0.5; filter: grayscale(100%);" />
    </div>
    <p>&copy; ${new Date().getFullYear()} SearFood. All Rights Reserved.</p>
  </footer>
`;

// Router Logic
function render() {
  let content = '';
  switch(currentPage) {
    case 'home': content = HomePage(); break;
    case 'retail': content = RetailPage(); break;
    case 'exports': content = ExportsPage(); break;
    case 'contact': content = ContactPage(); break;
    default: content = HomePage();
  }
  
  if (app) {
    app.innerHTML = `
      ${Header()}
      <main>${content}</main>
      ${Footer()}
    `;
  }
  
  // Re-attach event listeners
  document.querySelectorAll('a[data-link]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const page = target.getAttribute('data-link') as PageName;
      if (page) navigate(page);
    });
  });

  // Page Specific Logic
  if (currentPage === 'retail') {
    renderRetailGrid(recipes);
    const searchInput = document.getElementById('retail-search');
    searchInput?.addEventListener('input', (e) => {
      const query = (e.target as HTMLInputElement).value.toLowerCase();
      const filtered = recipes.filter(r => 
        r.title.toLowerCase().includes(query) || 
        r.description.toLowerCase().includes(query)
      );
      renderRetailGrid(filtered);
    });
  }
}

// Boot
const path = window.location.pathname.replace('/', '');
if (['retail', 'exports', 'contact'].includes(path)) {
  currentPage = path as PageName;
}
render();
