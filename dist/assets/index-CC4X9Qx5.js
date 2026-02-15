(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=a(i);fetch(i.href,o)}})();const g=[{id:1001,title:"Gujarati Chai Masala",image:"/gujarati-chai-masala.jpg",description:"Traditional Gujarati Chai Masala is a aromatic spice blend rooted in Gujarat’s culinary heritage. Influenced by Ayurveda, it combines ginger, cardamom, cloves, pepper, and cinnamon. Historically prepared in homes, it was valued for digestion and warmth, creating a gently spiced, comforting chai enjoyed across generations.",category:"Masala"},{id:1002,title:"Iyengar Rasam Powder",image:"/iyengar-rasam-powder.png",description:"Rasam is a soulful dish from South India, cherished for generations. In Iyengar families, this sacred recipe has been passed down through centuries, prepared with handpicked spices and lentils. Rooted in Ayurvedic wisdom, it is designed to aid digestion and provide essential benefits for overall well-being.",category:"Masala"},{id:1003,title:"Iyengar Sambar Powder",image:"/iyengar-sambar-powder.png",description:"Traditional Iyengar Sambar Powder is a finely balanced blend rooted in temple kitchens of Tamil Nadu. Made with roasted lentils, spices, and no onion or garlic, it delivers pure, aromatic flavor true to Iyengar culinary tradition.",category:"Masala"},{id:1004,title:"Everyday Bhaji Masala",image:"/everyday-bhaji-masala.jpg",description:"Versatile, all-in-one Bhaji Masala is a common spice blend used in a wide variety of vegetable dishes. It enhances natural flavors, adds balanced spice, and makes everyday cooking simple, quick, and delicious.",category:"Masala"},{id:1,title:"Cumin Seeds (Jeera)",image:"https://upload.wikimedia.org/wikipedia/commons/3/39/Seeds_of_Cumin.jpg",description:"Finest Premium Quality Cumin Seeds (Jeera) in various sizes starting from 100 gms (3.5 Oz) to 500 gms (1.1 lb) from Unjha (Gujarat) India.",category:"Spice"},{id:2,title:"Fenugreek Seeds (Methi)",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2VDvtRHQTP9jf6CIn1kYp7p178h70voTB8T1MgaKMqjkYC0xuLfBJ22wHgJ7CZDIWFJzn2MRTrAYaYseXw9-JQBgVSa1H4D_wVM4an8&s=10",description:"Finest Premium Quality Fenugreek Seeds (Methi) in 2 varieties comes in Various sizes starting from 100 gms (3.5 Oz) to 500 gms (1.1 lb) from Unjha (Gujarat) India",category:"Spice"},{id:3,title:"Fennel Seeds (Saunf)",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18xhl34DHeLbKY_43HGiuiXFCAlYfKX8sBg&s",description:"Premium Quality Fennel Seeds (Saunf) comes in Various Sizes starting from 100 gms (3.5 Oz) to 500 gms (1.1 lb) from Unjha (Gujarat) India",category:"Spice"},{id:4,title:"Sesame Seeds",image:"https://rukminim2.flixcart.com/image/480/640/kgqvlow0/edible-seed/t/c/x/500-pouch-raw-shree-whole-original-imafww6ytwqgbcxq.jpeg?q=90",description:"Premium Quality Sesame Seeds (Til) comes in White Colour & Black starting from 100 gms (3.5 Oz) to 500 gms (1.1 lb) from Saurashtra (Gujarat) India",category:"Spice"},{id:5,title:"Pepper",image:"https://assets.clevelandclinic.org/transform/LargeFeatureImage/65ddb397-7835-4b21-b30b-d123be3cb5c8/blackPepper-185067429-770x533-1_jpg",description:"Pepper is procured from the Iduki Hills of Kerala. The flavour and spice factor is higher compared to Pepper of other regions. White Pepper, Black Pepper & its respective Powder in Various sizes are packed in Pet Bottles.",category:"Spice"},{id:6,title:"Cloves",image:"https://thespiceway.com/cdn/shop/files/Cloves.webp?v=1755527798",description:"Cloves are procured from Spice capital of India. Apart from flavour, health benefits are abundant in Cloves. Various sizes of Cloves available in Pet Bottles.",category:"Spice"},{id:7,title:"Cinnamon",image:"https://static.toiimg.com/thumb/imgsize-23456,msid-107264619,width-600,resizemode-4/107264619.jpg",description:"Cinnamon is procured from Srilanka, Kerala & North Eastern part of India. Srilankan Cinnamon contains more fragrance compared to Indian counterpart. Various sizes are available.",category:"Spice"},{id:8,title:"Cardamom (Elaichi)",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw0_V32zsrNkbG3xdFG7EwGVReUIhRJrdcfQ&s",description:"We procure only the best quality of Cardamom. We sell only 8MM variety of Cardamom. Elaichi which can be used to enhance flavour in any items. We bringout from 50gms (1.85 Oz) to 500 gms (1.1 lb)",category:"Spice"},{id:13,title:"Star Anise",image:"https://media.post.rvohealth.io/wp-content/uploads/2020/08/star-anise-732x549-thumbnail-732x549.jpg",description:"Star Anise - Used as digestive spice. Premium Quality is available in 50gms to 500 gms or more for retail.",category:"Spice"},{id:901,title:"Mustard Seeds (Rai)",image:"https://www.organicgyaan.com/cdn/shop/files/Small-Mustard-Seeds.jpg?v=1721395851&width=1214",description:"Mustard seeds are an essential ingredient in Indian cooking and offer impressive health benefits. They support digestion, help maintain heart health, and possess natural anti-inflammatory properties that contribute to overall wellness.",category:"Spice"},{id:902,title:"Lakadong Turmeric Powder",image:"https://www.pahariroots.co.in/storage/2023/06/lakadong-turmeric.webp",description:"Lakadong turmeric from Meghalaya contains exceptionally high curcumin levels (7–12%), making it a powerful superfood. It supports immunity, digestion, joint and skin health, liver detox, and helps fight inflammation, oxidative stress, and chronic diseases like Alzheimer’s and cancer.",category:"Spice"},{id:903,title:"Cinnamon - Processed",image:"https://thottamfarmfresh.com/wp-content/uploads/2022/07/Ceylon-cinnamon.webp",description:"Cinnamon processing is a meticulous, labor-intensive craft. Mature branches are harvested, outer bark removed, and fragrant inner bark carefully peeled. As it dries, it curls into quills, which are graded by size and quality, ensuring rich aroma and essential oil retention.",category:"Spice"},{id:904,title:"Raw Cinnamon",image:"https://tiimg.tistatic.com/fp/1/007/950/a-grade-natural-pure-dried-raw-cinnamon-stick-with-high-nutritious-value-472.jpg",description:"True cinnamon is valued for its delicate sweetness, low coumarin making it safer for regular use, and thin, brittle layers. Unlike strong Cassia, Indian cinnamon from Kerala is traditionally grown, chemical-free, and prized in curries, teas, and baked goods worldwide.",category:"Spice"}];let n="home";const d=document.querySelector("#app");if(!d)throw new Error("App root not found");function b(t){n=t,p(),window.history.pushState({page:t},"",`/${t==="home"?"":t}`),window.scrollTo(0,0)}window.addEventListener("popstate",t=>{n=t.state?.page||"home",p()});const v=()=>`
  <header>
    <div class="logo-container">
      <a href="/" data-link="home">
        <img src="/logo.png" alt="SearFood Logo" class="logo-img" />
      </a>
    </div>
    
    <div class="header-controls">
      <!-- Mobile Theme Toggle -->
      <button class="theme-toggle mobile-toggle" aria-label="Toggle Dark Mode">
        <span class="icon-moon">🌙</span>
        <span class="icon-sun" style="display: none;">☀️</span>
      </button>
      
      <button class="mobile-menu-btn" onclick="toggleMobileMenu()" aria-label="Open Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <nav>
      <ul>
        <li><a href="/" data-link="home" class="${n==="home"?"active":""}">Home</a></li>
        <li><a href="/retail" data-link="retail" class="${n==="retail"?"active":""}">Retail</a></li>
        <li><a href="/exports" data-link="exports" class="${n==="exports"?"active":""}">Exports</a></li>
        <li><a href="/contact" data-link="contact" class="${n==="contact"?"active":""}">Contact Us</a></li>
        <!-- Desktop Theme Toggle -->
        <li class="desktop-toggle-li">
          <button class="theme-toggle desktop-toggle" aria-label="Toggle Dark Mode">
            <span class="icon-moon">🌙</span>
            <span class="icon-sun" style="display: none;">☀️</span>
          </button>
        </li>
      </ul>
    </nav>
  </header>
`;window.toggleMobileMenu=()=>{const t=document.querySelector("nav"),e=document.querySelector(".mobile-menu-btn");t?.classList.toggle("nav-active"),e?.classList.toggle("active")};function w(){localStorage.getItem("theme")==="dark"&&document.body.classList.add("dark-mode"),m()}function k(){document.body.classList.toggle("dark-mode");const t=document.body.classList.contains("dark-mode");localStorage.setItem("theme",t?"dark":"light"),m()}function m(){const t=document.body.classList.contains("dark-mode");document.querySelectorAll(".theme-toggle").forEach(e=>{const a=e.querySelector(".icon-moon"),r=e.querySelector(".icon-sun");a&&r&&(t?(a.style.display="none",r.style.display="inline"):(a.style.display="inline",r.style.display="none"))})}const u=()=>`
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
    <div class="filter-container">
      <button class="filter-btn active" data-filter="all">All</button>
      <button class="filter-btn" data-filter="Masala">Masalas</button>
      <button class="filter-btn" data-filter="Spice">Spices</button>
    </div>

    <div style="max-width: 500px; margin: 0 auto 3rem auto; position: relative;">
      <input type="text" id="retail-search" placeholder="Search products..." style="width: 100%; padding: 1rem 1.5rem; border-radius: 50px; border: 1px solid #ddd; font-family: var(--font-sans); font-size: 1rem; box-shadow: 0 4px 12px rgba(0,0,0,0.05); outline: none;" />
      <span style="position: absolute; right: 1.5rem; top: 50%; transform: translateY(-50%); color: #ccc;">🔍</span>
    </div>
    
    <div id="retail-grid" class="retail-grid">
      <!-- Grid populated by JS -->
    </div>
  </section>
`;function h(t){const e=document.getElementById("retail-grid");if(e){if(t.length===0){e.innerHTML='<p style="text-align: center; grid-column: 1/-1; color: var(--color-text-light);">No products found.</p>';return}e.innerHTML=t.map(a=>`
    <div class="retail-card">
      <h3 class="retail-title">${a.title}</h3>
      
      <div class="retail-image-container">
        <img src="${a.image}" alt="${a.title}" loading="lazy" />
      </div>
      
      <p class="retail-desc truncated" id="desc-${a.id}">
        ${a.description}
      </p>
      <button class="read-more-btn" onclick="toggleDescription(${a.id})">Read More</button>
    </div>
  `).join("")}}window.toggleDescription=t=>{const e=document.getElementById(`desc-${t}`),a=e?.nextElementSibling;e&&a&&(e.classList.contains("truncated")?(e.classList.remove("truncated"),a.textContent="Read Less"):(e.classList.add("truncated"),a.textContent="Read More"))};const x=()=>`
  <section class="section-container">
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
`;function M(t){t.preventDefault();const e=document.getElementById("contact-form"),a=document.getElementById("contact-response");e&&a&&(e.style.display="none",a.style.display="block")}window.resetContactForm=()=>{const t=document.getElementById("contact-form"),e=document.getElementById("contact-response");t&&e&&(t.reset(),t.style.display="flex",e.style.display="none")};const I=()=>`
  <footer>
    <div class="logo-container" style="justify-content: center; margin-bottom: 1rem;">
      <img src="/logo.png" alt="SearFood" style="height: 40px; opacity: 0.5; filter: grayscale(100%);" />
    </div>
    <p>Copyright &copy; 2025 SearFood - All Rights Reserved.</p>
  </footer>
`;function p(){let t="";switch(n){case"home":t=u();break;case"retail":t=S();break;case"exports":t=x();break;case"contact":t=C();break;default:t=u()}if(d&&(d.innerHTML=`
      ${v()}
      <main>${t}</main>
      ${I()}
    `),document.querySelectorAll("a[data-link]").forEach(e=>{e.addEventListener("click",a=>{a.preventDefault();const i=a.currentTarget.getAttribute("data-link");i&&b(i)})}),n==="retail"){let e="all";h(g);const a=document.querySelectorAll(".filter-btn"),r=document.getElementById("retail-search"),i=()=>{const o=r?r.value.toLowerCase():"",s=g.filter(l=>{const c=l.title.toLowerCase().includes(o),y=e==="all"||l.category===e;return c&&y});h(s)};a.forEach(o=>{o.addEventListener("click",s=>{const l=s.currentTarget;a.forEach(c=>{c.style.background="transparent",c.style.color="var(--color-text)",c.style.border="1px solid #ddd"}),l.style.background="var(--color-primary)",l.style.color="white",l.style.border="1px solid var(--color-primary)",e=l.getAttribute("data-filter")||"all",i()})}),r?.addEventListener("input",i)}n==="contact"&&document.getElementById("contact-form")?.addEventListener("submit",M),document.querySelectorAll(".theme-toggle").forEach(e=>{e.addEventListener("click",k)}),m()}const f=window.location.pathname.replace("/","");["retail","exports","contact"].includes(f)&&(n=f);w();p();
