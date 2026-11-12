# DIGITAL RISE — Full-Stack Website

A full-stack replica of **Digital Rise India** ([https://www.digitalriseindia.com/](https://www.digitalriseindia.com/)) built using **React (JSX) + Vite + Tailwind CSS** on the frontend and **Node.js + Express** on the backend.

---

## 🚀 Features & Pages Included

### 1. **Pages (`src/pages/`)**
* **Home (`/`)**:
  * Top bar with live contact coordinates and operating hours (`Mon - Sat 10:00 AM - 7:00 PM`).
  * Hero section with dynamic 3-slide auto-rotating carousel, interactive controls, and CTA buttons.
  * Real-time campaign performance mockup dashboard (Total Leads 28,540, Qualified Leads 12,820, Conversion Rate 45.8%, Lead Growth +24.8%).
  * Statistics counter bar (10,000+ Active Users, 500+ Businesses, 1M+ Leads Generated, 100% Growth Focused).
  * "WHAT WE DO" 4-card solutions grid with feature tags and "Learn More" navigation.
  * "WHY DIGITAL RISE" value proposition & DR+ 360° growth card (+84% growth).
  * "HOW IT WORKS" 4-step workflow preview.
  * Interactive Lead Estimator teaser.
  * 5-star verified client testimonials from Bhopal, Indore, and Pune.
  * Ready to Grow bottom CTA banner.
* **About Us (`/about`)**:
  * Hero: *"Behind Every Lead Is A Strategy."*
  * Who We Are & 4 pillars: Strategy Driven, Performance Focused, Transparent Process, Long-Term Growth.
  * What Drives Us: Mission & Vision statement cards.
  * Our Process: Discover, Strategize, Execute, Measure.
* **Services (`/services`)**:
  * Hero: *"Digital Solutions Built to Grow."*
  * 6 comprehensive service breakdowns:
    1. SEO & Organic Growth
    2. Performance Marketing (Google & Meta Ads)
    3. Social Media Marketing
    4. Website Development
    5. Lead Generation & Funnels
    6. Branding & Creative
  * 4-step execution framework.
  * 4 transparent pricing & plan tiers:
    * **Trial**: ₹4,999 (Starter pack)
    * **Basic**: ₹11,999 (Most Popular)
    * **Gold**: ₹19,999 (High Growth)
    * **Premium**: ₹24,999 (Enterprise)
* **How It Works (`/how-it-works`)**:
  * Hero: *"How We Turn Ideas Into Growth."*
  * Approach: Simple Process. Serious Results.
  * 6 detailed roadmap steps (Discover, Strategize, Create, Launch, Measure, Scale).
  * Interactive expandable FAQ accordion with all 6 answers.
* **Campaigns (`/campaigns`)**:
  * Performance metrics (50+ Live Campaigns, 10K+ Leads, 3.8x ROI, 95% Retention).
  * Filterable case studies by industry (Real Estate, Education, Healthcare, B2B SaaS, E-Commerce, Finance).
* **Contact Us (`/contact`)**:
  * 4 Contact info cards (Email: `venturerise@gmail.com`, Phone: `+91 8780788923`, Location: `Bhopal, Madhya Pradesh`, Hours: `Mon – Sat, 10 AM – 7 PM`).
  * Free consultation & audit guarantees.
  * Interactive contact form with validation, Express backend API submission (`/api/contact`), and direct WhatsApp message dispatch.
* **Legal & Support (`/faq`, `/privacy-policy`, `/terms-and-conditions`, `/refund-policy`)**:
  * Full privacy policy, client terms, cancellation & refund conditions, and knowledge base.

---

### 2. **Interactive Widgets & Modals (`src/components/`)**
* **Khushbu Patel Live Chatbot (`ChatWidget.jsx`)**:
  * Red floating action button at bottom-right (`fixed bottom-5 right-5 z-[999]`).
  * Agent profile: Khushbu Patel with active green online indicator.
  * Multi-branch automated flow:
    * 💰 Plans & Pricing: Trial (₹4,999), Basic (₹11,999), Gold (₹19,999), Premium (₹24,999) with in-chat lead capture form sending direct inquiries to WhatsApp.
    * 🚀 Lead Generation: Options for More Leads, FB/Insta Ads, Google Ads, or Talk to Expert.
    * 🛠️ Services, ⚙️ How It Works, 📞 Direct Call / WhatsApp / Email.
* **Lead ROI Calculator Modal (`LeadCalculatorModal.jsx`)**:
  * Interactive budget slider (₹5,000 to ₹2,00,000) and industry selector.
  * Computes projected inquiries, qualified leads, estimated reach, and recommended tier.
* **Fast-Track Register Modal (`RegisterModal.jsx`)**:
  * Express onboarding registration with WhatsApp verification.

---

### 3. **Backend API (`server/index.js`)**
* `GET /api/health` — Service health check
* `GET /api/stats` — Platform statistics
* `POST /api/contact` — Lead capture & inquiry submission
* `POST /api/subscribe` — Newsletter subscription
* `POST /api/chat-enquiry` — Chatbot lead intake
* `POST /api/lead-estimate` — Instant CPL / lead calculation
* Production static file serving with Single Page Application fallback for all routes.

---

## 🛠️ How to Run

### Quick Start:
```bash
# Production Mode (Builds if needed and runs on http://localhost:5050)
./start.sh

# Development Mode (Vite on :5173 + Express on :5050 with live reload)
./start.sh --dev
```

### Manual Commands:
```bash
# Terminal 1: Run frontend with Vite
npm run dev

# Terminal 2: Run backend API with Express
npm run server
```
Frontend runs at: `http://localhost:5173`
Backend runs at: `http://localhost:5050`

### Production Build & Serve:
```bash
# 1. Build optimized React assets
npm run build

# 2. Start full-stack server
npm run start
```
Full application will be served at: `http://localhost:5050`
