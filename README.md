# venturerise — Digital Growth & Technology Partner

A modern full-stack web application for **venturerise**, a practical digital growth and technology partner for small businesses. Built using **React (JSX) + Vite + Tailwind CSS** on the frontend and **Node.js + Express** on the backend.

---

## 🎨 Branding & Color Palette

* **Brand Wordmark**: `venturerise`
* **Tagline**: *"Practical Digital Solutions. Built Around You."*
* **Primary Blue**: `#1554B8`
* **Off-White Background**: `#F7F4EC`
* **Dark Navy Headings**: `#14243B`
* **Body Text**: `#526175`
* **Pale Blue Accents**: `#EAF1FC`
* **Border Accents**: `#E3DFD5` / `#D5E4F9`

---

## 🚀 Pages & Structure

### 1. **Pages (`src/pages/`)**
* **Home (`/`)**:
  * Top bar with contact info (`venturerise@gmail.com`, `+91 8780788923`, `Ahmedabad, Gujarat`).
  * Hero: *"Build Your Presence. Grow Your Reach. Simplify Your Work."*
  * Connected Digital Solutions card showing Attract Customers, Capture Enquiries, and Simplify Follow-ups with an illustrative workflow diagram.
  * Factual capability cards: Digital Marketing, Website Development, AI Automation, Tech Integrations.
  * 4 core service cards with clear business benefit descriptions.
  * "Why venturerise" section highlighting Business-First Approach, Connected Services, Clear Communication, and Room to Grow.
  * 4-step process summary (Discover, Plan, Build & Launch, Review & Improve).
  * Consultation teaser: *"Not Sure Where to Start?"*
  * *"How We Can Help Your Business"* practical service application examples.
  * Closing CTA banner with primary and secondary navigation actions.
* **About Us (`/about`)**:
  * Hero: *"Your Ambition. Our Digital Expertise."*
  * Introduction: *"A Digital Partner for Your Next Step."*
  * Mission & Vision statements.
  * 4 business values: Practical Thinking, Clear Communication, Thoughtful Execution, Ongoing Improvement.
  * Factual capability cards.
  * 4-step process overview.
* **Services (`/services`)**:
  * Hero: *"Practical Digital Solutions Built Around Your Business."*
  * 6 core service categories:
    1. **SEO & Local Visibility** (On-Page SEO, Technical Improvements, Local Search, Keyword Planning)
    2. **Paid Marketing & Lead Generation** (Campaign Planning, Audience Targeting, Enquiry Forms, Performance Review)
    3. **Social Media & Content** (Content Planning, Social Creatives, Business Messaging, Channel Management)
    4. **Website Design & Development** (Business Websites, Landing Pages, Responsive Design, Form Integration)
    5. **AI Automation** (Enquiry Routing, Follow-up Workflows, AI-Assisted FAQs, Task Automation)
    6. **Tech Solutions & Integrations** (CRM Setup, Tool Connections, Data Workflows, Technical Improvements)
  * 4-step "How We Help" execution roadmap.
  * 4 transparent pricing tiers (Trial ₹4,999, Basic ₹11,999, Gold ₹19,999, Premium ₹24,999) with realistic scopes (amounts pending owner review).
  * Custom proposal CTA.
* **How It Works (`/how-it-works`)**:
  * Hero: *"A Clear Process. A Practical Way Forward."*
  * 6 detailed roadmap steps:
    1. **Discover** — Understand your business, audience, existing tools, and priorities.
    2. **Strategize** — Agree on the scope and plan the right combination of marketing, website work, or automation.
    3. **Create** — Build the agreed content, website elements, campaigns, or connected workflows.
    4. **Launch** — Test the work, check key journeys, and launch the solution.
    5. **Measure** — Review relevant information such as enquiries, website activity, campaign performance, or workflow reliability.
    6. **Improve & Grow** — Use what we learn to refine the solution and plan sensible next steps.
  * Expandable FAQ accordion addressing timelines, small business suitability, individual service options, post-launch arrangements, scope definition, and tool improvements.
* **Contact Us (`/contact`)**:
  * Hero: *"Tell Us What’s Next for Your Business."*
  * 4 contact coordinates cards: Email, Direct Call, WhatsApp conversation, Location (Ahmedabad, Gujarat).
  * Inquiry form with backend API submission (`/api/contact`), validation, and optional direct WhatsApp continuation.
  * Benefits of partnering with venturerise.
* **Legal Pages (`/privacy-policy`, `/terms-and-conditions`, `/refund-policy`, `/faq`)**:
  * Client agreements, data protection policy, transparent refund policy, and knowledge base.

---

## 🛠️ Tech Stack & Architecture

* **Frontend**: React 18, Tailwind CSS, Lucide React, Vite.
* **Backend**: Node.js, Express REST API, Static SPA File Server.
* **Routing**: HTML5 History API client routing with SPA server-side fallback and 301 redirect for `/campaigns` -> `/services`.

---

## ⚙️ Running the Project

### Production Mode (recommended)
```bash
./start.sh
```
Builds fresh production assets into `./dist` and launches the Node.js Express server on `http://localhost:5050`.

### Development Mode (live reloading)
```bash
./start.sh --dev
```
Concurrently runs Vite on `http://localhost:5173` with backend API proxying to `http://localhost:5050`.
