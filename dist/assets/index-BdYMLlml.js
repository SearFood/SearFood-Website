(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();const g=[{id:1001,title:"Gujarati Chai Masala",image:"/gujarati-chai-masala.jpg",description:"Authentic Gujarati Chai Masala for a refreshing tea experience.",category:"Masala"},{id:1002,title:"Iyengar Rasam Powder",image:"/iyengar-rasam-powder.png",description:"Traditional Iyengar style Rasam Powder.",category:"Masala"},{id:1003,title:"Iyengar Sambar Powder",image:"/iyengar-sambar-powder.png",description:"Aromatic Iyengar Sambar Powder for authentic South Indian curry.",category:"Masala"},{id:1004,title:"Everyday Bhaji Masala",image:"/logo.png",description:"Versatile Bhaji Masala for your daily vegetable dishes.",category:"Masala"},{id:1,title:"Cumin Seeds (Jeera)",image:"https://upload.wikimedia.org/wikipedia/commons/3/39/Seeds_of_Cumin.jpg",description:"Finest Premium Quality Cumin Seeds (Jeera) in various sizes starting from 100 gms (3.5 Oz) to 500 gms (1.1 lb) from Unjha (Gujarat) India.",category:"Spice"},{id:2,title:"Fenugreek Seeds (Methi)",image:"https://upload.wikimedia.org/wikipedia/commons/1/16/Fenugreek_Seeds_01.jpg",description:"Finest Premium Quality Fenugreek Seeds (Methi) in 2 varieties comes in Various sizes starting from 100 gms (3.5 Oz) to 500 gms (1.1 lb) from Unjha (Gujarat) India",category:"Spice"},{id:3,title:"Fennel Seeds (Saunf)",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18xhl34DHeLbKY_43HGiuiXFCAlYfKX8sBg&s",description:"Premium Quality Fennel Seeds (Saunf) comes in Various Sizes starting from 100 gms (3.5 Oz) to 500 gms (1.1 lb) from Unjha (Gujarat) India",category:"Spice"},{id:4,title:"Sesame Seeds",image:"https://rukminim2.flixcart.com/image/480/640/kgqvlow0/edible-seed/t/c/x/500-pouch-raw-shree-whole-original-imafww6ytwqgbcxq.jpeg?q=90",description:"Premium Quality Sesame Seeds (Til) comes in White Colour & Black starting from 100 gms (3.5 Oz) to 500 gms (1.1 lb) from Saurashtra (Gujarat) India",category:"Spice"},{id:5,title:"Pepper",image:"https://assets.clevelandclinic.org/transform/LargeFeatureImage/65ddb397-7835-4b21-b30b-d123be3cb5c8/blackPepper-185067429-770x533-1_jpg",description:"Pepper is procured from the Iduki Hills of Kerala. The flavour and spice factor is higher compared to Pepper of other regions. White Pepper, Black Pepper & its respective Powder in Various sizes are packed in Pet Bottles.",category:"Spice"},{id:6,title:"Cloves",image:"https://thespiceway.com/cdn/shop/files/Cloves.webp?v=1755527798",description:"Cloves are procured from Spice capital of India. Apart from flavour, health benefits are abundant in Cloves. Various sizes of Cloves available in Pet Bottles.",category:"Spice"},{id:7,title:"Cinnamon",image:"https://static.toiimg.com/thumb/imgsize-23456,msid-107264619,width-600,resizemode-4/107264619.jpg",description:"Cinnamon is procured from Srilanka, Kerala & North Eastern part of India. Srilankan Cinnamon contains more fragrance compared to Indian counterpart. Various sizes are available.",category:"Spice"},{id:8,title:"Cardamom (Elaichi)",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw0_V32zsrNkbG3xdFG7EwGVReUIhRJrdcfQ&s",description:"We procure only the best quality of Cardamom. We sell only 8MM variety of Cardamom. Elaichi which can be used to enhance flavour in any items. We bringout from 50gms (1.85 Oz) to 500 gms (1.1 lb)",category:"Spice"},{id:13,title:"Star Anise",image:"https://media.post.rvohealth.io/wp-content/uploads/2020/08/star-anise-732x549-thumbnail-732x549.jpg",description:"Star Anise - Used as digestive spice. Premium Quality is available in 50gms to 500 gms or more for retail.",category:"Spice"},{id:901,title:"Mustard Seeds (Rai)",image:"/logo.png",description:"Premium quality small black Mustard seeds.",category:"Spice"},{id:902,title:"Lakadong Turmeric Powder",image:"/logo.png",description:"High curcumin content Lakadong Turmeric powder.",category:"Spice"},{id:903,title:"Cinnamon - Processed",image:"/logo.png",description:"Processed Cinnamon quills for easy use.",category:"Spice"},{id:904,title:"Raw Cinnamon",image:"/logo.png",description:"Raw, unrefined Cinnamon bark.",category:"Spice"}];let n="home";const d=document.querySelector("#app");if(!d)throw new Error("App root not found");function b(e){n=e,p(),window.history.pushState({page:e},"",`/${e==="home"?"":e}`),window.scrollTo(0,0)}window.addEventListener("popstate",e=>{n=e.state?.page||"home",p()});const v=()=>`
  <header>
    <div class="logo-container">
      <a href="/" data-link="home">
        <img src="/logo.png" alt="SearFood Logo" class="logo-img" />
      </a>
    </div>
    <nav>
      <ul>
        <li><a href="/" data-link="home" class="${n==="home"?"active":""}">Home</a></li>
        <li><a href="/retail" data-link="retail" class="${n==="retail"?"active":""}">Retail</a></li>
        <li><a href="/exports" data-link="exports" class="${n==="exports"?"active":""}">Exports</a></li>
        <li><a href="/contact" data-link="contact" class="${n==="contact"?"active":""}">Contact Us</a></li>
        <li>
          <button id="theme-toggle" style="background: none; border: none; cursor: pointer; font-size: 1.2rem; display: flex; align-items: center; color: var(--color-text);">
            <span class="icon-moon">🌙</span>
            <span class="icon-sun" style="display: none;">☀️</span>
          </button>
        </li>
      </ul>
    </nav>
  </header>
`;function w(){const e=localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches;(e==="dark"||!e&&t)&&document.body.classList.add("dark-mode"),m()}function x(){document.body.classList.toggle("dark-mode");const e=document.body.classList.contains("dark-mode");localStorage.setItem("theme",e?"dark":"light"),m()}function m(){const e=document.body.classList.contains("dark-mode"),t=document.getElementById("theme-toggle");if(t){const o=t.querySelector(".icon-moon"),i=t.querySelector(".icon-sun");o&&i&&(o.style.display=e?"none":"block",i.style.display=e?"block":"none",t.style.color=e?"#fff":"var(--color-text)")}}const u=()=>`
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
`,S=()=>`
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
`;function h(e){const t=document.getElementById("retail-grid");if(t){if(e.length===0){t.innerHTML='<p style="text-align: center; grid-column: 1/-1; color: var(--color-text-light);">No products found.</p>';return}t.innerHTML=e.map(o=>`
    <div class="retail-card">
      <h3 class="retail-title">${o.title}</h3>
      
      <div class="retail-image-container">
        <img src="${o.image}" alt="${o.title}" loading="lazy" />
      </div>
      
      <p class="retail-desc">
        ${o.description}
      </p>
    </div>
  `).join("")}}const k=()=>`
  <section class="section-container section-dark">
    <h1 class="page-title">Global Exports</h1>
    <p style="text-align: center; max-width: 700px; margin: 0 auto;">
      We manage end-to-end logistics for bulk orders across 20+ countries. Our commitment to quality ensures freshness at every port.
    </p>
    <div style="margin-top: 4rem; height: 300px; border: 1px dashed rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.5);">
      [Interactive Global Map / Certifications Placeholder]
    </div>
  </section>
`,C=()=>`
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
`;function P(e){e.preventDefault();const t=document.getElementById("contact-form"),o=document.getElementById("contact-response");t&&o&&(t.style.display="none",o.style.display="block")}window.resetContactForm=()=>{const e=document.getElementById("contact-form"),t=document.getElementById("contact-response");e&&t&&(e.reset(),e.style.display="flex",t.style.display="none")};const I=()=>`
  <footer>
    <div class="logo-container" style="justify-content: center; margin-bottom: 1rem;">
      <img src="/logo.png" alt="SearFood" style="height: 40px; opacity: 0.5; filter: grayscale(100%);" />
    </div>
    <p>&copy; ${new Date().getFullYear()} SearFood. All Rights Reserved.</p>
  </footer>
`;function p(){let e="";switch(n){case"home":e=u();break;case"retail":e=S();break;case"exports":e=k();break;case"contact":e=C();break;default:e=u()}if(d&&(d.innerHTML=`
      ${v()}
      <main>${e}</main>
      ${I()}
    `),document.querySelectorAll("a[data-link]").forEach(t=>{t.addEventListener("click",o=>{o.preventDefault();const a=o.currentTarget.getAttribute("data-link");a&&b(a)})}),n==="retail"){let t="all";h(g);const o=document.querySelectorAll(".filter-btn"),i=document.getElementById("retail-search"),a=()=>{const r=i?i.value.toLowerCase():"",l=g.filter(s=>{const c=s.title.toLowerCase().includes(r)||s.description.toLowerCase().includes(r),y=t==="all"||s.category===t;return c&&y});h(l)};o.forEach(r=>{r.addEventListener("click",l=>{const s=l.currentTarget;o.forEach(c=>{c.style.background="transparent",c.style.color="var(--color-text)",c.style.border="1px solid #ddd"}),s.style.background="var(--color-primary)",s.style.color="white",s.style.border="1px solid var(--color-primary)",t=s.getAttribute("data-filter")||"all",a()})}),i?.addEventListener("input",a)}n==="contact"&&document.getElementById("contact-form")?.addEventListener("submit",P),document.getElementById("theme-toggle")?.addEventListener("click",x),m()}const f=window.location.pathname.replace("/","");["retail","exports","contact"].includes(f)&&(n=f);w();p();
