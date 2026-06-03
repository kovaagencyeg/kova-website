import { useState } from 'react';
import { ChevronDown, ArrowRight, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WHATSAPP_URL = 'https://wa.me/201017920985';

export default function Home() {
 const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

 const trustedPartners = [
  'Registered Vendor Network',
  'Corporate Procurement Teams',
  'Event Organizers',
  'Exhibition Contractors',
  'Real Estate Launches',
  'Healthcare Events',
  'FMCG Activations',
  'Government Events',
  'Banking & Finance Teams',
  'Education Conferences',
 ];

 const businessSolutions = [
  {
   title: 'Corporate Events',
   description: 'We support events from concept to on-ground execution, handling branding, production, setup, and guest-facing details.',
   features: ['Event branding', 'Registration desks', 'Backdrops', 'On-ground support'],
   image: '/E50.png',
  },
  {
   title: 'Exhibition Branding',
   description: 'Premium booth branding, fabrication support, printed collateral, signage, and installation for trade shows and exhibitions.',
   features: ['Booth branding', 'Custom fabrication', 'Wayfinding signage', 'Installation'],
   image: '/E31.png',
  },
  {
   title: 'Promotional Merchandise',
   description: 'Branded corporate gifts, giveaways, packaging, and sourcing for launches, conferences, and sales teams.',
   features: ['Corporate gifts', 'Custom packaging', 'Bulk sourcing', 'Quality control'],
   image: '/E34.png',
  },
  {
   title: 'Printing & Signage',
   description: 'Reliable print production for event materials, booth graphics, roll-ups, banners, menus, badges, and branded collateral.',
   features: ['Large-format printing', 'Roll-ups', 'Banners', 'Event collateral'],
   image: '/E38.png',
  },
 ];

 const services = [
  { title: 'Event Branding', description: 'Visual identity rollout for conferences, launches, and corporate gatherings' },
  { title: 'Exhibition Booth Support', description: 'Booth graphics, counters, backdrops, signage, and installation' },
  { title: 'Promotional Gifts', description: 'Premium sourcing and branding for giveaways and corporate merchandise' },
  { title: 'Packaging Concepts', description: 'Custom boxes, sleeves, inserts, and branded presentation kits' },
  { title: 'Printing Production', description: 'Fast, reliable print management for business and event requirements' },
  { title: 'Event Supply', description: 'End-to-end sourcing, logistics, delivery, and on-ground coordination' },
 ];

 const industries = ['Healthcare', 'Education', 'Government', 'FMCG', 'Banking', 'Real Estate', 'Events & Exhibitions', 'Corporate Offices'];

 const whyKova = [
  { title: 'Fast Turnaround', description: 'Clear timelines, responsive communication, and practical production planning.' },
  { title: 'Production Network', description: 'Access to printing, fabrication, sourcing, packaging, and installation capabilities.' },
  { title: 'Nationwide Delivery', description: 'Cairo-based coordination with delivery support across Egypt when required.' },
  { title: 'Event Expertise', description: 'Experience with exhibition, conference, and event contractor requirements.' },
  { title: 'Corporate Gifting Focus', description: 'Practical product sourcing with premium presentation and brand alignment.' },
  { title: 'End-to-End Management', description: 'One point of contact from brief and quotation to delivery and execution.' },
 ];

 const exhibitionItems = ['Exhibition booths', 'Event branding', 'Wayfinding signage', 'Registration desks', 'Backdrops', 'Roll-ups', 'Corporate gifts', 'Sponsor visibility'];

 const faqs = [
  {
   question: 'What does KOVA produce?',
   answer: 'KOVA handles promotional merchandise, printing, packaging, exhibition branding, event signage, booth support, and corporate event supply projects.',
  },
  {
   question: 'Do you deliver across Egypt?',
   answer: 'Yes. We are Cairo-based and can coordinate delivery across Egypt depending on project scope, quantity, and deadline.',
  },
  {
   question: 'Can you source custom products?',
   answer: 'Yes. We source and brand corporate gifts, promotional items, packaging materials, and custom event requirements based on budget and timeline.',
  },
  {
   question: 'Do you provide design support?',
   answer: 'Yes. We can support layout, artwork preparation, mockups, and production-ready files for print and branding projects.',
  },
  {
   question: 'What information do you need for a quote?',
   answer: 'Project type, quantity, dimensions or specifications, branding method, delivery location, and deadline. Photos or references also help speed up pricing.',
  },
 ];

 return (
  <div className="min-h-screen bg-white">
   <Header />

   <section className="relative h-screen md:h-[650px] flex items-center justify-center overflow-hidden bg-black">
    <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url(/hero.png)' }} />
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
    <div className="container relative z-10 text-white">
     <div className="max-w-3xl animate-fade-in-up">
      <p className="text-sm uppercase tracking-[0.25em] text-accent mb-4">Premium Branding • Events • Merchandise</p>
      <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold mb-8 leading-[0.95] tracking-[-0.03em] max-w-4xl">
       Event Production
       <span className="block text-accent font-light italic mt-2">& Corporate Branding Solutions</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed font-light">
       KOVA delivers promotional merchandise, printing, packaging, exhibition branding, and event supply projects for companies that need premium execution and reliable delivery.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 py-8 border-t border-gray-700">
       {['Fast Quotes', 'Premium Finish', 'Custom Sourcing', 'On-Time Delivery'].map((item) => (
        <div key={item}>
         <p className="text-accent text-sm font-semibold mb-1">{item}</p>
         <p className="text-gray-400 text-xs">Built for corporate standards</p>
        </div>
       ))}
      </div>
      <div className="flex flex-col md:flex-row gap-4">
       <a href="/contact" className="btn-primary inline-flex items-center justify-center transition-all duration-300 hover:scale-105">Request a Quote</a>
       <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary text-center">Get Pricing in Minutes</a>
      </div>
     </div>
    </div>
   </section>

   <section className="py-14 bg-black text-white border-y border-accent/30 overflow-hidden">
    <div className="container mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
     <div>
      <p className="text-sm uppercase tracking-[0.24em] text-accent mb-3">Registered vendor / trusted by</p>
      <h2 className="text-3xl md:text-4xl font-bold">Built for corporate procurement standards</h2>
     </div>
     <p className="text-gray-400 max-w-xl">A premium supplier network for event, exhibition, gifting, printing, packaging, and brand activation requirements.</p>
    </div>
    <div className="relative overflow-hidden">
     <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
     <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />
     <div className="premium-marquee-track flex gap-4 px-4">
      {[...trustedPartners, ...trustedPartners].map((partner, i) => (
       <div key={`${partner}-${i}`} className="min-w-[220px] rounded-full border border-accent/35 bg-white/5 px-6 py-4 text-center text-sm font-semibold tracking-wide text-gray-100 shadow-[0_0_30px_rgba(212,175,55,0.08)]">
        {partner}
       </div>
      ))}
     </div>
    </div>
   </section>

   <section id="services" className="py-20 md:py-32 bg-white border-t-2 border-accent">
    <div className="container">
     <div className="text-center mb-16">
      <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3">What We Do</p>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Business Solutions</h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">A practical production partner for brands, contractors, and corporate teams that need high-quality execution.</p>
     </div>
     <div className="space-y-20">
      {businessSolutions.map((solution, i) => (
       <div key={solution.title} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
        <div className={`h-96 rounded-lg overflow-hidden shadow-xl bg-black ${i % 2 === 1 ? 'md:order-last' : ''}`}>
         <img src={solution.image} alt={solution.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div>
         <h2 className="text-3xl md:text-4xl font-bold mb-4">{solution.title}</h2>
         <p className="text-gray-600 text-lg leading-relaxed mb-6">{solution.description}</p>
         <div className="space-y-2 mb-8">
          {solution.features.map((feature) => (
           <div key={feature} className="flex items-center gap-3"><ArrowRight size={16} className="text-accent flex-shrink-0" /><p className="text-gray-700">{feature}</p></div>
          ))}
         </div>
         <a href="/services" className="btn-primary inline-flex items-center justify-center">Explore Services</a>
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>

   <section className="py-20 md:py-32 bg-black text-white border-t-2 border-accent">
    <div className="container">
     <div className="text-center mb-16">
      <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-3">Capabilities</p>
      <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, i) => (
       <div key={service.title} className="p-8 bg-gray-900 rounded-lg border border-gray-800 hover:border-accent hover:shadow-lg transition-all duration-300">
        <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center text-black font-bold mb-6">{i + 1}</div>
        <h3 className="font-bold text-xl mb-3">{service.title}</h3>
        <p className="text-gray-400">{service.description}</p>
       </div>
      ))}
     </div>
    </div>
   </section>

   <section className="py-20 md:py-28 bg-white border-t-2 border-accent">
    <div className="container">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
       <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3">Exhibitions & Events</p>
       <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for Exhibition Deadlines</h2>
       <p className="text-gray-600 text-lg mb-8">From booth graphics and registration desks to branded gifts and wayfinding, KOVA supports event teams with the materials that need to look right and arrive on time.</p>
       <a href="/contact" className="btn-primary inline-flex items-center justify-center">Send Exhibition Brief</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
       {exhibitionItems.map((item) => (
        <div key={item} className="flex items-center gap-3 p-5 rounded-lg border border-gray-200 bg-gray-50"><CheckCircle2 size={18} className="text-accent" /><span className="font-medium">{item}</span></div>
       ))}
      </div>
     </div>
    </div>
   </section>

   <section className="py-20 md:py-28 bg-[#faf7f2] border-t-2 border-accent">
    <div className="container">
     <div className="text-center mb-12">
      <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3">Industries</p>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">Production and branding support for organizations with corporate, event, and customer-facing requirements.</p>
     </div>
     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {industries.map((industry) => (
       <div key={industry} className="bg-white border border-gray-200 rounded-lg p-6 text-center font-semibold text-gray-800">{industry}</div>
      ))}
     </div>
    </div>
   </section>

   <section className="py-20 md:py-32 bg-gray-50 border-t-2 border-accent">
    <div className="container">
     <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Why Choose KOVA</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {whyKova.map((point) => (
       <div key={point.title} className="p-8 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
        <h3 className="font-bold text-lg mb-3">{point.title}</h3>
        <p className="text-gray-600">{point.description}</p>
       </div>
      ))}
     </div>
    </div>
   </section>

   <section className="py-16 bg-black text-white border-t-2 border-accent">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
     <div>
      <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-2">Request for Quotation</p>
      <h3 className="text-3xl font-bold mb-2">Need pricing for a project?</h3>
      <p className="text-gray-300">Send quantity, deadline, and references. We will respond with the next practical step.</p>
     </div>
     <div className="flex flex-col md:flex-row gap-4">
      <a href="/contact" className="btn-primary bg-white text-black hover:bg-accent inline-flex items-center justify-center">Open RFQ Form</a>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary text-center">Get Pricing in Minutes</a>
     </div>
    </div>
   </section>

   <section className="py-20 md:py-32 bg-white border-t-2 border-accent">
    <div className="container max-w-3xl">
     <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Frequently Asked Questions</h2>
     <div className="space-y-4">
      {faqs.map((faq, i) => (
       <div key={faq.question} className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
        <button onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)} className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
         <h3 className="font-semibold text-lg text-left">{faq.question}</h3>
         <ChevronDown size={20} className={`flex-shrink-0 transition-transform duration-300 ${expandedFAQ === i ? 'rotate-180' : ''}`} />
        </button>
        {expandedFAQ === i && <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div>}
       </div>
      ))}
     </div>
    </div>
   </section>

   <section className="py-20 md:py-32 bg-black text-white border-t-2 border-accent">
    <div className="container text-center">
     <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start?</h2>
     <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">Share your project details and receive a practical quotation path for production, branding, or event supply.</p>
     <div className="flex flex-col md:flex-row gap-4 justify-center">
      <a href="/contact" className="btn-primary inline-flex items-center justify-center transition-all duration-300 hover:scale-105">Request a Quote</a>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary text-center">WhatsApp Us</a>
     </div>
    </div>
   </section>

   <Footer />

   <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-5 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300">
    Get Pricing in Minutes
   </a>
  </div>
 );
}
