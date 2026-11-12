import '../style.css'
import { recipes, Recipe } from './mockData'

// ---------- Types / state ----------
type PageName = 'home' | 'retail' | 'exports' | 'contact';
interface RouteState { page: PageName; }

let currentPage: PageName = 'home';
let ready = false; // intro finished
let transitioning = false;

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('App root not found');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches; // used for magnetic buttons
const wait = (ms: number) => new Promise(r => setTimeout(r, ms));

// ---------- Icons ----------
const ICON = {
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  moon: `<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>`,
  sun: `<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 9h16M4 15h16"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>`,
  leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19c0-9 5-14 15-14 0 10-5 15-14 15"/><path d="M5 19c3-5 6-8 10-10"/></svg>`,
};

// ---------- Navigation ----------
async function navigate(page: PageName) {
  if (transitioning || (page === currentPage && ready)) return;
  transitioning = true;
  const curtain = document.querySelector<HTMLElement>('.curtain');
  document.querySelector('nav')?.classList.remove('nav-active');

  if (curtain && !reduceMotion) {
    curtain.className = 'curtain in';
    await wait(680);
  }
  currentPage = page;
  window.history.pushState({ page }, '', `/${page === 'home' ? '' : page}`);
  render();
  window.scrollTo(0, 0);
  if (curtain && !reduceMotion) {
    curtain.className = 'curtain out';
    await wait(720);
    curtain.className = 'curtain';
  }
  transitioning = false;
}

window.addEventListener('popstate', (e: PopStateEvent) => {
  const state = e.state as RouteState;
  currentPage = state?.page || 'home';
  render();
  window.scrollTo(0, 0);
});

// ---------- Shared components ----------
const link = (page: PageName, label: string) =>
  `<li><a href="/${page === 'home' ? '' : page}" data-link="${page}" class="nav-link ${currentPage === page ? 'active' : ''}" data-text="${label}">${label}</a></li>`;

const Header = (): string => `
  <header>
    <div class="wrap header-inner">
      <a href="/" data-link="home" class="brand" aria-label="Sear Food home">
        <img src="/logo.png" alt="Sear Food" class="logo-img" />
      </a>
      <nav>
        <ul>
          ${link('home', 'Home')}
          ${link('retail', 'Retail')}
          ${link('exports', 'Exports')}
          ${link('contact', 'Contact Us')}
        </ul>
      </nav>
      <div class="header-actions">
        <button class="theme-toggle" aria-label="Toggle dark mode">${ICON.moon}${ICON.sun}</button>
        <button class="mobile-menu-btn" aria-label="Open menu">${ICON.menu}</button>
      </div>
    </div>
  </header>
`;

const Footer = (): string => `
  <footer>
    <div class="wrap">
      <a href="/contact" data-link="contact" class="footer-cta">Let’s taste<br/>something <em>real.</em></a>
      <div class="footer-grid">
        <div>
          <div class="brand"><img src="/logo.png" alt="" class="logo-img" /><span class="brand-name">Sear Food</span></div>
          <p>Producers to global consumers. Spices, seasonings and dehydrated foods from the heartlands of India.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><a href="/retail" data-link="retail">Retail</a></li>
            <li><a href="/exports" data-link="exports">Exports</a></li>
            <li><a href="/contact" data-link="contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Collections</h4>
          <ul>
            <li><a href="/retail" data-link="retail">Masalas</a></li>
            <li><a href="/retail" data-link="retail">Spices</a></li>
            <li><a href="/exports" data-link="exports">Dehydrated foods</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom"><span>&copy; ${new Date().getFullYear()} Sear Food. All rights reserved.</span><span>Kanyakumari → Kashmir</span></div>
    </div>
  </footer>
`;

// ---------- Pages ----------
const spiceWords = ['Lakadong Turmeric', 'Iyengar Sambar', 'True Cinnamon', 'Gujarati Chai Masala', 'Mustard Seeds', 'Cardamom', 'Bhaji Masala', 'Black Pepper', 'Star Anise', 'Rasam Powder'];
const marqueeSet = spiceWords.map(w => `<span>${w}</span>`).join('');

const HomePage = (): string => `
  <section class="hero" data-io>
    <div class="hero-bg" data-parallax="0.12"><div class="hero-photo"></div></div>
    <div class="seal">
      <svg class="seal-ring" viewBox="0 0 120 120">
        <defs><path id="circ" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"/></defs>
        <text><textPath href="#circ" textLength="286" lengthAdjust="spacing">Sear Food · Heritage Spices · Farm to World ·</textPath></text>
      </svg>
      <div class="seal-core">${ICON.leaf}</div>
    </div>
    <div class="wrap">
      <p class="eyebrow reveal">Producers to global consumers</p>
      <h1>
        <span class="line"><span>Taste the</span></span>
        <span class="line"><span style="transition-delay:.1s"><em>tradition.</em></span></span>
      </h1>
      <div class="hero-bottom reveal" style="--d:.5s">
        <p class="lede">Authentic masalas, single-origin spices and dehydrated foods, rooted in ancestral recipes from the heartlands of India.</p>
        <div class="hero-actions">
          <a href="/retail" data-link="retail" class="btn btn-primary magnetic">Explore the collection ${ICON.arrow}</a>
          <a href="/exports" data-link="exports" class="btn btn-ghost magnetic">Export enquiries</a>
        </div>
      </div>
    </div>
  </section>

  <div class="marquee" aria-hidden="true">
    <div class="marquee-track">${marqueeSet}${marqueeSet}</div>
  </div>

  <section class="section">
    <div class="wrap about-grid">
      <div data-io><p class="eyebrow reveal">About us</p></div>
      <div>
        <p class="about-scrub" data-scrub>Hello! We are <em>Sear Food</em>, passionate about bringing you authentic masalas, spices and traditional dishes from across India. From Kanyakumari to Kashmir, and Gujarat to Arunachal Pradesh, we revive rare flavors from the heartlands of the country, each recipe specific to its region and passed down through generations.</p>
        <p class="about-more reveal" data-io>From the royal culinary traditions of Chhatrapati Shivaji Maharaj’s Maratha region to the rich heritage of the Ahom dynasty of Northeast India, every dish is our tribute to the land and the people who preserved these timeless practices. Through Sear Food, we celebrate India’s history and culture by sharing these treasured flavors with the world.</p>
      </div>
    </div>
  </section>

  <section class="section" id="collections" style="padding-top:0">
    <div class="wrap">
      <div class="section-head" data-io>
        <h2><span class="line"><span>Come, experience,</span></span><span class="line"><span style="transition-delay:.08s">and enjoy.</span></span></h2>
        <p class="lede reveal" style="--d:.3s">Three ways into the taste of tradition.</p>
      </div>
      <div class="bento">
        <a href="/retail" data-link="retail" class="tile feature reveal" data-spot>
          <span class="num">01</span><span class="arrow">${ICON.arrow}</span><div class="art art-packs" aria-hidden="true">
            <img src="/iyengar-sambar-powder.png" alt="" class="p1" /><img src="/everyday-bhaji-masala.jpg" alt="" class="p3" /><img src="/gujarati-chai-masala.jpg" alt="" class="p2" />
          </div>
          <h3>Masalas</h3><p>Gujarati Chai, Iyengar Sambar, Everyday Bhaji — blends rooted in regional kitchens.</p>
        </a>
        <a href="/retail" data-link="retail" class="tile reveal" style="--d:.1s" data-spot>
          <span class="num">02</span><span class="arrow">${ICON.arrow}</span><div class="art art-spices" aria-hidden="true">
            <img src="/spice-cinnamon.jpg" alt="" class="s1" /><img src="/spice-pepper.jpg" alt="" class="s2" /><img src="/spice-cloves.jpg" alt="" class="s3" />
          </div>
          <h3>Spices</h3><p>Single-origin whole and ground spices, from Lakadong turmeric to true cinnamon.</p>
        </a>
        <a href="/exports" data-link="exports" class="tile dark reveal" style="--d:.2s" data-spot>
          <span class="num">03</span><span class="arrow">${ICON.arrow}</span><div class="art art-routes" aria-hidden="true">
            <svg viewBox="0 0 400 220" fill="none">
              <defs>
                <pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.4" fill="currentColor"/></pattern>
                <radialGradient id="fade"><stop offset="0.35" stop-color="#fff"/><stop offset="1" stop-color="#000"/></radialGradient>
                <mask id="m"><rect width="400" height="220" fill="url(#fade)"/></mask>
              </defs>
              <rect width="400" height="220" fill="url(#dots)" mask="url(#m)" opacity="0.5"/>
              <g stroke="#f58220" stroke-width="1.4" stroke-linecap="round">
                <path class="route" d="M250 120 C 230 40, 130 30, 70 70"/>
                <path class="route" style="animation-delay:-1.1s" d="M250 120 C 290 50, 340 60, 360 90"/>
                <path class="route" style="animation-delay:-2.2s" d="M250 120 C 260 170, 200 190, 150 175"/>
                <path class="route" style="animation-delay:-3.3s" d="M250 120 C 300 160, 350 170, 372 150"/>
              </g>
              <g fill="#f58220">
                <circle cx="70" cy="70" r="3.5"/><circle cx="360" cy="90" r="3.5"/><circle cx="150" cy="175" r="3.5"/><circle cx="372" cy="150" r="3.5"/>
                <circle cx="250" cy="120" r="6"/>
              </g>
              <circle class="pulse" cx="250" cy="120" r="6" stroke="#f58220" stroke-width="1.5"/>
              <text x="262" y="112" font-size="11" fill="#f6f0e6" font-family="Inter, sans-serif" letter-spacing="2">INDIA</text>
            </svg>
          </div>
          <h3>Exports</h3><p>Bulk orders and end-to-end logistics for partners around the world.</p>
        </a>
      </div>
    </div>
  </section>
`;

const RetailPage = (): string => `
  <section class="page-head">
    <div class="wrap" data-io>
      <p class="eyebrow reveal">Retail</p>
      <h1><span class="line"><span>The <em>pantry</em></span></span><span class="line"><span style="transition-delay:.08s">collection.</span></span></h1>
      <p class="lede reveal" style="--d:.3s">Elevate your home cooking with our premium range of masalas and spices.</p>
    </div>
  </section>
  <section class="wrap" style="padding-bottom: clamp(4rem, 9vw, 8rem)">
    <div class="toolbar">
      <div class="filter-container">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="Masala">Masalas</button>
        <button class="filter-btn" data-filter="Spice">Spices</button>
      </div>
      <label class="search">${ICON.search}<input type="text" id="retail-search" placeholder="Search products" aria-label="Search products" /></label>
    </div>
    <div id="retail-grid" class="retail-grid"></div>
  </section>
`;

function renderRetailGrid(items: Recipe[]) {
  const grid = document.getElementById('retail-grid');
  if (!grid) return;
  if (items.length === 0) {
    grid.innerHTML = '<p class="empty">Nothing matches that — try another word.</p>';
    return;
  }
  grid.innerHTML = items.map((r, i) => `
    <article class="retail-card" style="--i:${i}">
      <div class="retail-image-container">
        <img src="${r.image}" alt="${r.title}" loading="lazy" referrerpolicy="no-referrer" />
        <span class="tag">${r.category}</span>
      </div>
      <div class="card-body">
        <h3 class="retail-title">${r.title}</h3>
        <p class="retail-desc truncated" id="desc-${r.id}">${r.description}</p>
        <button class="read-more-btn" data-toggle="${r.id}">Read more</button>
      </div>
    </article>
  `).join('');
}

const ExportsPage = (): string => `
  <section class="page-head">
    <div class="wrap" data-io>
      <p class="eyebrow reveal">Global exports</p>
      <h1><span class="line"><span>From our</span></span><span class="line"><span style="transition-delay:.08s">soil to <em>your port.</em></span></span></h1>
      <p class="lede reveal" style="--d:.3s">We manage end-to-end logistics for bulk orders. Our commitment to quality ensures freshness at every port.</p>
    </div>
  </section>
  <section class="wrap" style="padding-bottom: clamp(4rem, 9vw, 8rem)">
    <div class="stats" data-io>
      <div class="stat reveal"><strong><span data-count="20">0</span>+</strong><span>Countries served with bulk orders</span></div>
      <div class="stat reveal" style="--d:.1s"><strong><span data-count="3">0</span></strong><span>Product families: masalas, spices, dehydrated foods</span></div>
      <div class="stat reveal" style="--d:.2s"><strong>A→Z</strong><span>End-to-end logistics, handled by us</span></div>
    </div>
    <div class="steps" data-io>
      ${[
        ['01', 'Source', 'Single-origin ingredients from the regions that perfected them.'],
        ['02', 'Process', 'Cleaned, dried, ground and blended with traditional methods.'],
        ['03', 'Pack', 'Packed for freshness and shelf life, built for long journeys.'],
        ['04', 'Ship', 'Documentation and freight arranged to your destination port.'],
      ].map(([n, t, d], i) => `<div class="step reveal" style="--d:${i * 0.1}s"><span class="n">${n}</span><div><h3>${t}</h3><p>${d}</p></div></div>`).join('')}
    </div>
    <div class="cta-band reveal" data-io>
      <h2>Planning a bulk order?</h2>
      <a href="/contact" data-link="contact" class="btn magnetic">Talk to our team ${ICON.arrow}</a>
    </div>
  </section>
`;

const ContactPage = (): string => `
  <section class="page-head">
    <div class="wrap" data-io>
      <p class="eyebrow reveal">Contact</p>
      <h1><span class="line"><span>Get in</span></span><span class="line"><span style="transition-delay:.08s"><em>touch.</em></span></span></h1>
    </div>
  </section>
  <section class="wrap" style="padding-bottom: clamp(4rem, 9vw, 8rem)">
    <div class="contact-grid">
      <div data-io>
        <p class="lede reveal">Have a query about bulk orders or retail partnerships? Tell us a little and we’ll take it from there.</p>
        <div class="contact-info reveal" style="--d:.2s">
          <div><small>Response time</small><p>Within 24 hours</p></div>
          <div><small>For</small><p>Bulk orders &amp; retail partnerships</p></div>
          <div><small>Shipping</small><p>Worldwide</p></div>
        </div>
      </div>
      <div class="reveal" data-io style="--d:.15s">
        <div id="contact-response">
          <h3>Message sent.</h3>
          <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
          <button onclick="resetContactForm()" class="btn btn-ghost">Send another</button>
        </div>
        <form id="contact-form" class="contact-form">
          <div class="form-group"><label for="contact-name">Name</label><input type="text" id="contact-name" required autocomplete="name" /></div>
          <div class="form-group"><label for="contact-email">Email</label><input type="email" id="contact-email" required autocomplete="email" /></div>
          <div class="form-group"><label for="contact-message">How can we help?</label><textarea id="contact-message" rows="4" required></textarea></div>
          <button type="submit" class="btn btn-primary magnetic">Send message ${ICON.arrow}</button>
        </form>
      </div>
    </div>
  </section>
`;

// ---------- Handlers ----------
(window as any).resetContactForm = () => {
  const form = document.getElementById('contact-form') as HTMLFormElement;
  const response = document.getElementById('contact-response');
  if (form && response) { form.reset(); form.style.display = 'flex'; response.style.display = 'none'; }
};

function handleContactSubmit(e: Event) {
  e.preventDefault();
  const form = document.getElementById('contact-form');
  const response = document.getElementById('contact-response');
  // Placeholder: no backend yet, simulate success
  if (form && response) { form.style.display = 'none'; response.style.display = 'block'; }
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  try { localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light'); } catch { /* ignore */ }
}

// ---------- Render ----------
function render() {
  const pages: Record<PageName, () => string> = { home: HomePage, retail: RetailPage, exports: ExportsPage, contact: ContactPage };
  app!.innerHTML = `${Header()}<main>${(pages[currentPage] || HomePage)()}</main>${Footer()}`;

  app!.querySelectorAll('a[data-link]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      navigate((a as HTMLElement).dataset.link as PageName);
    });
  });
  app!.querySelectorAll('.theme-toggle').forEach(b => b.addEventListener('click', toggleTheme));
  app!.querySelector('.mobile-menu-btn')?.addEventListener('click', () => app!.querySelector('nav')?.classList.toggle('nav-active'));

  if (currentPage === 'retail') {
    let currentFilter = 'all';
    renderRetailGrid(recipes);
    const btns = app!.querySelectorAll<HTMLButtonElement>('.filter-btn');
    const input = document.getElementById('retail-search') as HTMLInputElement | null;
    const apply = () => {
      const q = (input?.value || '').toLowerCase();
      renderRetailGrid(recipes.filter(r =>
        r.title.toLowerCase().includes(q) && (currentFilter === 'all' || r.category === currentFilter)));
    };
    btns.forEach(btn => btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter || 'all';
      apply();
    }));
    input?.addEventListener('input', apply);
    document.getElementById('retail-grid')?.addEventListener('click', e => {
      const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-toggle]');
      if (!btn) return;
      const desc = document.getElementById(`desc-${btn.dataset.toggle}`);
      const open = desc?.classList.toggle('truncated') === false;
      btn.textContent = open ? 'Read less' : 'Read more';
    });
  }
  if (currentPage === 'contact') {
    document.getElementById('contact-form')?.addEventListener('submit', handleContactSubmit);
  }

  setupPage();
}

// ---------- Motion ----------
let pending: HTMLElement[] = [];
let scrubEls: HTMLElement[][] = [];
let parallaxEls: HTMLElement[] = [];
let marquee: HTMLElement | null = null;
let marqueeX = 0;

function setupPage() {
  // Split scrub text into words
  scrubEls = [];
  app!.querySelectorAll<HTMLElement>('[data-scrub]').forEach(el => {
    const wrapWords = (node: Node) => {
      Array.from(node.childNodes).forEach(child => {
        if (child.nodeType === 3) {
          const frag = document.createDocumentFragment();
          (child.textContent || '').split(/(\s+)/).forEach(part => {
            if (!part.trim()) { frag.appendChild(document.createTextNode(part)); return; }
            const s = document.createElement('span'); s.className = 'w'; s.textContent = part; frag.appendChild(s);
          });
          child.replaceWith(frag);
        } else wrapWords(child);
      });
    };
    wrapWords(el);
    scrubEls.push(Array.from(el.querySelectorAll<HTMLElement>('.w')));
  });

  parallaxEls = Array.from(app!.querySelectorAll<HTMLElement>('[data-parallax]'));
  marquee = app!.querySelector<HTMLElement>('.marquee-track');
  marqueeX = 0;

  // Reveal on view (checked every frame once the intro is done; no IntersectionObserver dependency)
  pending = [];
  const start = () => {
    pending = Array.from(app!.querySelectorAll<HTMLElement>('[data-io], .reveal'))
      .filter(el => !(el.classList.contains('reveal') && !el.hasAttribute('data-io') && el.closest('[data-io]')));
    checkReveals();
  };
  if (ready) requestAnimationFrame(start); else document.addEventListener('intro-done', start, { once: true });

  // Tile spotlight + magnetic buttons
  app!.querySelectorAll<HTMLElement>('[data-spot]').forEach(t => {
    t.addEventListener('mousemove', e => {
      const r = t.getBoundingClientRect();
      t.style.setProperty('--mx', `${e.clientX - r.left}px`);
      t.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
  if (finePointer && !reduceMotion) {
    app!.querySelectorAll<HTMLElement>('.magnetic').forEach(b => {
      b.addEventListener('mousemove', e => {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
      });
      b.addEventListener('mouseleave', () => { b.style.transition = 'transform .6s cubic-bezier(.22,1,.36,1)'; b.style.transform = ''; setTimeout(() => (b.style.transition = ''), 600); });
    });
  }
  onScroll();
}

function checkReveals() {
  if (!pending.length) return;
  const limit = window.innerHeight * 0.94;
  pending = pending.filter(el => {
    if (el.getBoundingClientRect().top > limit) return true;
    el.classList.add('in');
    el.querySelectorAll<HTMLElement>('[data-count]').forEach(countUp);
    return false;
  });
}

function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count || 0);
  if (reduceMotion) { el.textContent = String(target); return; }
  const t0 = performance.now(), dur = 1600;
  const tick = (t: number) => {
    const p = Math.min((t - t0) / dur, 1);
    el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 4))));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

let lastY = window.scrollY;
let velocity = 0;
function onScroll() {
  const y = window.scrollY;
  const header = document.querySelector('header');
  header?.classList.toggle('scrolled', y > 30);
  header?.classList.toggle('hide', y > lastY && y > 400 && !document.querySelector('nav.nav-active'));
  velocity = y - lastY;
  lastY = y;

  if (reduceMotion) return;
  const vh = window.innerHeight;

  parallaxEls.forEach(el => {
    const r = el.parentElement!.getBoundingClientRect();
    const speed = Number(el.dataset.parallax);
    if (r.bottom < -200 || r.top > vh + 200) return;
    el.style.transform = `translate3d(0, ${(r.top - vh / 2) * speed}px, 0)`;
  });

  scrubEls.forEach(words => {
    const r = words[0]?.parentElement?.getBoundingClientRect();
    if (!r) return;
    const progress = Math.min(Math.max((vh * 0.85 - r.top) / (r.height + vh * 0.35), 0), 1);
    const n = Math.floor(progress * words.length * 1.08);
    words.forEach((w, i) => w.classList.toggle('on', i < n));
  });
}

function loop() {
  checkReveals();
  if (marquee && !reduceMotion) {
    marqueeX -= 0.9 + Math.min(Math.abs(velocity), 60) * 0.35;
    const half = marquee.scrollWidth / 2;
    if (-marqueeX >= half) marqueeX += half;
    marquee.style.transform = `translate3d(${marqueeX}px,0,0)`;
    velocity *= 0.9;
  }
  requestAnimationFrame(loop);
}

// ---------- Boot ----------
const path = window.location.pathname.replace(/^\/|\/$/g, '');
if (['retail', 'exports', 'contact'].includes(path)) currentPage = path as PageName;

try { if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode'); } catch { /* ignore */ }

render();
window.addEventListener('scroll', onScroll, { passive: true });
requestAnimationFrame(loop);
ready = true;
document.dispatchEvent(new Event('intro-done'));
