import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

// In-memory store for demonstrations (can be wired to MongoDB / Postgres)
const leadsDb = [];
const subscribersDb = [];
const chatEnquiriesDb = [];

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Stats API
app.get('/api/stats', (req, res) => {
  res.json({
    activeCampaigns: '50+',
    leadsGenerated: '10,000+',
    clientRetention: '95%',
    averageRoi: '3.8x',
    monthlyInquiries: leadsDb.length + 142
  });
});

// Contact Form API
app.post('/api/contact', (req, res) => {
  const { name, email, phone, service, budget, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ success: false, error: 'Name and Email are required.' });
  }

  const newLead = {
    id: `LEAD-${Date.now()}`,
    name,
    email,
    phone: phone || '',
    service: service || 'Not specified',
    budget: budget || 'Not specified',
    message: message || '',
    createdAt: new Date().toISOString()
  };

  leadsDb.push(newLead);
  console.log('[New Lead Received]:', newLead);

  res.status(201).json({
    success: true,
    message: 'Your inquiry has been received. Our team will contact you within 24 hours!',
    leadId: newLead.id
  });
});

// Newsletter Subscription API
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ success: false, error: 'A valid email address is required.' });
  }

  if (subscribersDb.includes(email)) {
    return res.json({ success: true, message: 'You are already subscribed to our updates!' });
  }

  subscribersDb.push(email);
  console.log('[New Subscriber]:', email);

  res.status(201).json({
    success: true,
    message: 'Thank you for subscribing! You will receive our latest campaign insights and offers.'
  });
});

// Chat Widget Enquiry API
app.post('/api/chat-enquiry', (req, res) => {
  const { name, phone, email, plan, message } = req.body;

  const enquiry = {
    id: `CHAT-${Date.now()}`,
    name: name || 'Anonymous',
    phone: phone || '',
    email: email || '',
    plan: plan || 'General Enquiry',
    message: message || '',
    createdAt: new Date().toISOString()
  };

  chatEnquiriesDb.push(enquiry);
  console.log('[Chat Enquiry Received]:', enquiry);

  res.status(201).json({
    success: true,
    message: `Thank you ${name || ''}! Our strategy team has received your request for the ${plan || 'selected'} plan.`
  });
});

// Instant Lead Estimator / ROI Calculator API
app.post('/api/lead-estimate', (req, res) => {
  const { industry, budget } = req.body;
  const numBudget = Number(budget) || 15000;

  // Approximate industry CPL (Cost per Lead in INR)
  const cplMap = {
    'real-estate': 180,
    'education': 110,
    'healthcare': 95,
    'b2b-saas': 260,
    'ecommerce': 75,
    'finance': 210,
    'other': 130
  };

  const selectedCpl = cplMap[industry] || 130;
  const estimatedLeads = Math.round((numBudget * 0.75) / selectedCpl);
  const estimatedReach = Math.round(numBudget * 14.5);
  const qualifiedLeads = Math.round(estimatedLeads * 0.42);

  res.json({
    success: true,
    industry: industry || 'General',
    budget: numBudget,
    estimatedReach,
    estimatedLeads,
    qualifiedLeads,
    averageCpl: `₹${selectedCpl}`,
    recommendedPlan: numBudget < 10000 ? 'Trial (₹4,999)' : numBudget < 18000 ? 'Basic (₹11,999)' : numBudget < 25000 ? 'Gold (₹19,999)' : 'Premium (₹24,999)'
  });
});

// Redirect /campaigns to /services
app.get('/campaigns', (req, res) => {
  res.redirect(301, '/services');
});

// Serve frontend build in production
const distPath = path.join(__dirname, '..', 'dist');
app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 venturerise server running on port ${PORT}`);
});
