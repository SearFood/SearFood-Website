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
        <li>
          <button id="theme-toggle" style="background: none; border: none; cursor: pointer; font-size: 1.2rem; display: flex; align-items: center; color: var(--color-text);">
            <span class="icon-moon">🌙</span>
            <span class="icon-sun" style="display: none;">☀️</span>
          </button>
        </li>
      </ul>
    </nav>
  </header>
`;

// Theme Toggle Logic
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-mode');
  }
  updateThemeIcon();
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeIcon();
}

function updateThemeIcon() {
  const isDark = document.body.classList.contains('dark-mode');
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    const moon = btn.querySelector('.icon-moon') as HTMLElement;
    const sun = btn.querySelector('.icon-sun') as HTMLElement;
    if (moon && sun) {
      moon.style.display = isDark ? 'none' : 'block';
      sun.style.display = isDark ? 'block' : 'none';
      btn.style.color = isDark ? '#fff' : 'var(--color-text)'; // Ensure visibility
    }
  }
}

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

    <!-- Category Filter Buttons -->
    <div style="display: flex; justify-content: center; margin-bottom: 2rem; gap: 1rem;">
      <button class="filter-btn active" data-filter="all" style="padding: 0.5rem 1.5rem; border-radius: 25px; border: 1px solid var(--color-primary); background: var(--color-primary); color: white; cursor: pointer; font-family: var(--font-sans);">All</button>
      <button class="filter-btn" data-filter="Masala" style="padding: 0.5rem 1.5rem; border-radius: 25px; border: 1px solid #ddd; background: transparent; color: var(--color-text); cursor: pointer; font-family: var(--font-sans);">Masalas</button>
      <button class="filter-btn" data-filter="Spice" style="padding: 0.5rem 1.5rem; border-radius: 25px; border: 1px solid #ddd; background: transparent; color: var(--color-text); cursor: pointer; font-family: var(--font-sans);">Spices</button>
    </div>

    <div style="max-width: 500px; margin: 0 auto 3rem auto; position: relative;">
      <input type="text" id="retail-search" placeholder="Search products..." style="width: 100%; padding: 1rem 1.5rem; border-radius: 50px; border: 1px solid #ddd; font-family: var(--font-sans); font-size: 1rem; box-shadow: 0 4px 12px rgba(0,0,0,0.05); outline: none;" />
      <span style="position: absolute; right: 1.5rem; top: 50%; transform: translateY(-50%); color: #ccc;">🔍</span>
    </div>
    
    <div id="retail-grid" class="retail-grid">
      <!-- Grid populated by JS -->
    </div>
  </section>
`;

function renderRetailGrid(items: Recipe[]) {
  const grid = document.getElementById('retail-grid');
  if (!grid) return;
  
  if (items.length === 0) {
    grid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: var(--color-text-light);">No products found.</p>';
    return;
  }

  grid.innerHTML = items.map((recipe: Recipe) => `
    <div class="retail-card">
      <h3 class="retail-title">${recipe.title}</h3>
      
      <div class="retail-image-container">
        <img src="${recipe.image}" alt="${recipe.title}" loading="lazy" />
      </div>
      
      <p class="retail-desc">
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
    
    <div id="contact-response" style="max-width: 600px; margin: 0 auto; text-align: center; display: none;">
      <h3 style="color: var(--color-primary); margin-bottom: 1rem;">Message Sent!</h3>
      <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
      <button onclick="resetContactForm()" class="btn-primary" style="margin-top: 2rem;">Send Another</button>
    </div>

    <form id="contact-form" class="contact-form">
      <div class="form-group">
        <input type="text" id="contact-name" placeholder="Name" required />
      </div>
      <div class="form-group">
        <input type="email" id="contact-email" placeholder="Email Address" required />
      </div>
      <div class="form-group">
        <textarea id="contact-message" rows="5" placeholder="How can we help?" required></textarea>
      </div>
      <button type="submit" class="btn-primary">Send Message</button>
    </form>
  </section>
`;

// Contact Form Handler
function handleContactSubmit(e: Event) {
  e.preventDefault();
  const form = document.getElementById('contact-form');
  const response = document.getElementById('contact-response');
  
  // Here we would normally send data to backend
  // For now, simulate success
  if (form && response) {
    form.style.display = 'none';
    response.style.display = 'block';
  }
}

// Global scope for onclick
(window as any).resetContactForm = () => {
  const form = document.getElementById('contact-form') as HTMLFormElement;
  const response = document.getElementById('contact-response');
  if (form && response) {
    form.reset();
    form.style.display = 'flex';
    response.style.display = 'none';
  }
};

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
    let currentFilter = 'all';
    
    // Initial Render
    renderRetailGrid(recipes);

    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('retail-search') as HTMLInputElement;

    const applyFilters = () => {
      const query = searchInput ? searchInput.value.toLowerCase() : '';
      const filtered = recipes.filter(r => {
        const matchesSearch = r.title.toLowerCase().includes(query) || r.description.toLowerCase().includes(query);
        const matchesCategory = currentFilter === 'all' || r.category === currentFilter;
        return matchesSearch && matchesCategory;
      });
      renderRetailGrid(filtered);
    };

    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLButtonElement;
        
        // UI Update
        filterBtns.forEach(b => {
          (b as HTMLButtonElement).style.background = 'transparent';
          (b as HTMLButtonElement).style.color = 'var(--color-text)';
          (b as HTMLButtonElement).style.border = '1px solid #ddd';
        });
        target.style.background = 'var(--color-primary)';
        target.style.color = 'white';
        target.style.border = '1px solid var(--color-primary)';

        currentFilter = target.getAttribute('data-filter') || 'all';
        applyFilters();
      });
    });

    searchInput?.addEventListener('input', applyFilters);
  }

  if (currentPage === 'contact') {
    document.getElementById('contact-form')?.addEventListener('submit', handleContactSubmit);
  }

  // Theme Listener
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  updateThemeIcon(); // Ensure correct icon state after re-render
}

// Boot
const path = window.location.pathname.replace('/', '');
if (['retail', 'exports', 'contact'].includes(path)) {
  currentPage = path as PageName;
}
initTheme(); // Initialize dark mode preference
render();
