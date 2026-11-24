
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

// Online makhana photographs
const images = {
  hero: "https://www.biharimakhana.com/images/gallery/facility-branded-3.jpg",
  product: "https://www.biharimakhana.com/images/gallery/facility-branded-1.jpg",
  process: "https://www.biharimakhana.com/images/gallery/facility-branded-5.jpg"
};

const products = [
  {
    name: "Classic Phool Makhana",
    description: "Light, crunchy and naturally delicious.",
    price: "₹199",
    weight: "100g",
    image: images.product
  },
  {
    name: "Premium Jumbo Makhana",
    description: "Carefully selected large-sized makhana.",
    price: "₹349",
    weight: "250g",
    image: images.hero
  },
  {
    name: "Traditional Mithila Makhana",
    description: "A taste inspired by Mithila's heritage.",
    price: "₹499",
    weight: "500g",
    image: images.process
  }
];

// Shared CSS and navigation
const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap');

:root {
  --green: #254d36;
  --dark: #193426;
  --cream: #f8f5ec;
  --gold: #c79b48;
  --text: #30352e;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--cream);
  color: var(--text);
}

a { text-decoration: none; color: inherit; }

nav {
  height: 82px;
  padding: 0 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fffdf7;
}

.logo {
  font-family: 'Playfair Display', serif;
  font-size: 25px;
  font-weight: 700;
  color: var(--green);
}

.logo span { color: var(--gold); }

.nav-links {
  display: flex;
  gap: 35px;
  align-items: center;
}

.nav-links a {
  font-size: 14px;
  font-weight: 600;
  transition: .2s;
}

.nav-links a:hover { color: var(--gold); }

.nav-cta, .btn {
  background: var(--green);
  color: white;
  padding: 13px 24px;
  border-radius: 4px;
  display: inline-block;
  font-weight: 600;
  border: none;
  cursor: pointer;
}

.nav-cta:hover, .btn:hover { background: var(--gold); }

.hero {
  min-height: 580px;
  display: flex;
  align-items: center;
  padding: 70px 9%;
  background:
    linear-gradient(90deg, rgba(20,42,29,.94), rgba(20,42,29,.35)),
    url('${images.hero}') center/cover;
  color: white;
}

.hero-content { max-width: 620px; }

.eyebrow {
  color: var(--gold);
  font-weight: 700;
  letter-spacing: 3px;
  font-size: 12px;
  margin-bottom: 20px;
}

h1, h2, h3 {
  font-family: 'Playfair Display', serif;
}

.hero h1 {
  font-size: clamp(42px, 6vw, 68px);
  line-height: 1.15;
  margin-bottom: 22px;
}

.hero p {
  line-height: 1.8;
  font-size: 16px;
  max-width: 490px;
  color: #eee9dc;
  margin-bottom: 30px;
}

.section {
  padding: 90px 9%;
}

.section-heading {
  text-align: center;
  max-width: 650px;
  margin: 0 auto 48px;
}

.section-heading h2 {
  font-size: 40px;
  color: var(--green);
  margin: 12px 0;
}

.section-heading p {
  color: #77796f;
  line-height: 1.8;
}

.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.product-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  transition: .3s;
  box-shadow: 0 5px 25px #00000008;
}

.product-card:hover { transform: translateY(-7px); }

.product-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.product-info { padding: 25px; }

.product-info h3 {
  color: var(--green);
  font-size: 22px;
  margin-bottom: 10px;
}

.product-info p {
  color: #777;
  font-size: 14px;
  line-height: 1.7;
}

.product-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.price {
  color: var(--green);
  font-weight: 700;
  font-size: 20px;
}

.weight { color: #999; font-size: 13px; }

.story {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 65px;
}

.story img {
  width: 100%;
  height: 440px;
  object-fit: cover;
  border-radius: 8px;
}

.story h2 {
  font-size: 42px;
  color: var(--green);
  margin-bottom: 20px;
}

.story p {
  line-height: 1.9;
  color: #686b62;
  margin-bottom: 18px;
}

.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-top: 50px;
}

.feature {
  padding: 30px 20px;
  background: white;
  text-align: center;
  border-radius: 6px;
}

.feature .symbol {
  font-size: 30px;
  margin-bottom: 12px;
}

.feature h3 {
  color: var(--green);
  margin-bottom: 10px;
}

.feature p {
  font-size: 14px;
  color: #777;
  line-height: 1.7;
}

.page-banner {
  padding: 85px 9%;
  text-align: center;
  background: var(--green);
  color: white;
}

.page-banner h1 {
  font-size: 52px;
  margin-bottom: 15px;
}

.page-banner p { color: #e4e6dc; }

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 55px;
}

.contact-info h2 {
  font-size: 35px;
  color: var(--green);
  margin-bottom: 20px;
}

.contact-info p {
  line-height: 1.8;
  color: #777;
  margin-bottom: 25px;
}

.contact-detail {
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
}

.contact-detail strong {
  display: block;
  color: var(--green);
  margin-bottom: 5px;
}

.contact-form {
  background: white;
  padding: 35px;
  border-radius: 8px;
  box-shadow: 0 5px 30px #00000008;
}

.contact-form label {
  display: block;
  margin: 17px 0 8px;
  font-weight: 600;
  font-size: 14px;
}

.contact-form input, .contact-form textarea {
  width: 100%;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font: inherit;
  background: #fff;
}

.contact-form textarea {
  height: 130px;
  resize: vertical;
}

.contact-form button {
  margin-top: 20px;
  width: 100%;
}

footer {
  background: var(--dark);
  color: white;
  padding: 55px 9% 25px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
}

footer h3 {
  font-size: 25px;
  margin-bottom: 12px;
}

footer p {
  color: #c6cfc7;
  font-size: 14px;
  line-height: 1.8;
}

.footer-bottom {
  border-top: 1px solid #ffffff25;
  padding-top: 20px;
  margin-top: 35px;
  text-align: center;
  color: #b9c2ba;
  font-size: 13px;
}

@media(max-width: 768px) {
  nav { padding: 0 5%; height: auto; min-height: 75px; flex-wrap: wrap; gap: 15px; padding-top: 15px; padding-bottom: 15px; }
  .nav-links { gap: 16px; flex-wrap: wrap; }
  .nav-cta { display: none; }
  .hero { padding: 65px 7%; min-height: 500px; }
  .section { padding: 65px 7%; }
  .products, .story, .contact-grid { grid-template-columns: 1fr; }
  .features { grid-template-columns: 1fr; }
  .story img { height: 300px; }
  .section-heading h2, .story h2 { font-size: 33px; }
  .page-banner h1 { font-size: 40px; }
}
`;

function layout(title, content) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Discover premium Mithila Makhana from Bihar.">
    <title>${title} | Mithila Harvest</title>
    <style>${styles}</style>
  </head>
  <body>
    <nav>
      <a class="logo" href="/">Mithila<span>.</span>Harvest</a>
      <div class="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <a href="/contact" class="nav-cta">Get in Touch ↗</a>
    </nav>

    ${content}

    <footer>
      <div class="footer-content">
        <div>
          <h3>Mithila Harvest.</h3>
          <p>Rooted in Mithila. Inspired by tradition.<br>
          Bringing the goodness of Bihar to your table.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <p><a href="/">Home</a><br>
          <a href="/about">Our Story</a><br>
          <a href="/contact">Contact Us</a></p>
        </div>
        <div>
          <h3>Our Roots</h3>
          <p>Mithila Region<br>Bihar, India</p>
        </div>
      </div>
      <div class="footer-bottom">
        © 2026 Mithila Harvest. Project demonstration website.
      </div>
    </footer>
  </body>
  </html>
  `;
}

// HOME PAGE
app.get("/", (req, res) => {
  const productCards = products.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-bottom">
          <span class="price">${product.price}</span>
          <span class="weight">${product.weight}</span>
        </div>
      </div>
    </div>
  `).join("");

  const content = `
    <section class="hero">
      <div class="hero-content">
        <div class="eyebrow">AUTHENTIC TASTE OF MITHILA</div>
        <h1>A Little Nut.<br>A Rich Heritage.</h1>
        <p>
          Discover the traditional goodness of Mithila Makhana.
          Naturally delightful, deeply rooted in Bihar's heritage
          and made for modern snacking.
        </p>
        <a href="/about" class="btn">Discover Our Story →</a>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <div class="eyebrow">OUR COLLECTION</div>
        <h2>Goodness in Every Bite</h2>
        <p>
          Explore our selection of premium makhana, inspired by
          the agricultural heritage of Mithila.
        </p>
      </div>
      <div class="products">${productCards}</div>
    </section>

    <section class="section" style="background:#eeeade">
      <div class="story">
        <img src="${images.process}" alt="Traditional makhana processing">
        <div>
          <div class="eyebrow">OUR HERITAGE</div>
          <h2>From the Heart of Mithila</h2>
          <p>
            Mithila is known for its rich culture, traditions and
            agricultural heritage. Makhana is one of the region's
            most special gifts.
          </p>
          <p>
            Our concept celebrates the connection between local
            farming communities and a product loved across India.
          </p>
          <a href="/about" class="btn">Read Our Story →</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <div class="eyebrow">WHY MITHILA HARVEST</div>
        <h2>Tradition Meets Quality</h2>
      </div>
      <div class="features">
        <div class="feature">
          <div class="symbol">🌾</div>
          <h3>Regional Heritage</h3>
          <p>Inspired by the agricultural traditions of Mithila, Bihar.</p>
        </div>
        <div class="feature">
          <div class="symbol">🤍</div>
          <h3>Carefully Selected</h3>
          <p>A concept focused on quality, freshness and great taste.</p>
        </div>
        <div class="feature">
          <div class="symbol">🌿</div>
          <h3>Simple Goodness</h3>
          <p>A traditional snack that fits into modern lifestyles.</p>
        </div>
      </div>
    </section>
  `;

  res.send(layout("Home", content));
});

// ABOUT PAGE
app.get("/about", (req, res) => {
  const content = `
    <section class="page-banner">
      <div class="eyebrow">OUR STORY</div>
      <h1>Rooted in Mithila</h1>
      <p>A heritage that deserves to be shared with the world.</p>
    </section>

    <section class="section">
      <div class="story">
        <img src="${images.hero}" alt="Makhana from Bihar">
        <div>
          <div class="eyebrow">THE STORY BEHIND OUR PRODUCT</div>
          <h2>A Taste of Mithila, Bihar</h2>
          <p>
            Our makhana is presented as a product inspired by the
            beautiful Mithila region of Bihar, particularly the
            traditional makhana-growing areas around Madhubani
            and Darbhanga.
          </p>
          <p>
            For generations, makhana has been an important part
            of local food culture. The region's ponds, farmers
            and traditional processing practices have helped
            make Mithila famous for this unique product.
          </p>
          <p>
            Mithila Harvest is a project concept built around
            celebrating this local identity and connecting
            traditional produce with modern consumers.
          </p>
        </div>
      </div>
    </section>

    <section class="section" style="background:#eeeade">
      <div class="section-heading">
        <div class="eyebrow">OUR PHILOSOPHY</div>
        <h2>More Than Just a Snack</h2>
        <p>
          Every product has a story. Ours begins in the wetlands
          and communities of Mithila.
        </p>
      </div>
      <div class="story">
        <div>
          <h2>Celebrating Local Roots</h2>
          <p>
            We want to showcase the agricultural identity of
            North Bihar and the communities connected to it.
            Our vision is to build a brand that respects
            regional traditions while presenting them through
            modern packaging and design.
          </p>
          <p>
            From Mithila to the rest of India, the story of
            makhana deserves a place on every table.
          </p>
        </div>
        <img src="${images.process}" alt="Traditional makhana preparation">
      </div>
    </section>
  `;

  res.send(layout("About Us", content));
});

// CONTACT PAGE
app.get("/contact", (req, res) => {
  const content = `
    <section class="page-banner">
      <div class="eyebrow">LET'S CONNECT</div>
      <h1>Get in Touch</h1>
      <p>We would love to hear from you.</p>
    </section>

    <section class="section">
      <div class="contact-grid">
        <div class="contact-info">
          <div class="eyebrow">CONTACT US</div>
          <h2>Let's Start a Conversation</h2>
          <p>
            Have a question about our products or interested
            in exploring a business collaboration?
            Send us a message.
          </p>
          <div class="contact-detail">
            <strong>📍 Location</strong>
            Mithila Region, Bihar, India
          </div>
          <div class="contact-detail">
            <strong>✉️ Email</strong>
            hello@mithilaharvest.example
          </div>
          <div class="contact-detail">
            <strong>🌿 Brand</strong>
            Mithila Harvest
          </div>
        </div>

        <form class="contact-form" id="contactForm">
          <h2>Send a Message</h2>

          <label for="name">Your Name</label>
          <input id="name" name="name" type="text"
            placeholder="Enter your name" required>

          <label for="email">Email Address</label>
          <input id="email" name="email" type="email"
            placeholder="Enter your email" required>

          <label for="subject">Subject</label>
          <input id="subject" name="subject" type="text"
            placeholder="How can we help?" required>

          <label for="message">Your Message</label>
          <textarea id="message" name="message"
            placeholder="Write your message..." required></textarea>

          <button type="submit" class="btn">Send Message →</button>
          <p id="formMessage" style="margin-top:15px"></p>
        </form>
      </div>
    </section>

    <script>
      document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault();
        document.getElementById("formMessage").textContent =
          "Demo only: Your message has not been sent to a server.";
        this.reset();
      });
    </script>
  `;

  res.send(layout("Contact", content));
});

// 404 PAGE
app.use((req, res) => {
  res.status(404).send(layout("Page Not Found", `
    <section class="page-banner">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <br><br>
      <a href="/" class="btn">Back to Home</a>
    </section>
  `));
});

app.listen(PORT, () => {
  console.log(`Mithila Harvest running at http://localhost:${PORT}`);
});
