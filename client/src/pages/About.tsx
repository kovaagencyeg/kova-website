import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WHATSAPP_URL = 'https://wa.me/201017920985';

export default function About() {
 const values = [
  {
   title: 'Excellence',
   description: 'We pursue premium finishing in every project, from concept to final delivery.',
  },
  {
   title: 'Reliability',
   description: 'Our clients rely on us for clear timelines, consistent quality, and on-time execution.',
  },
  {
   title: 'Innovation',
   description: 'We combine practical production knowledge with fresh ideas for campaigns, packaging, and events.',
  },
  {
   title: 'Collaboration',
   description: 'We work closely with clients, contractors, and procurement teams to translate briefs into accurate execution.',
  },
  {
   title: 'Integrity',
   description: 'Transparent communication and realistic recommendations guide every project we manage.',
  },
  {
   title: 'Craftsmanship',
   description: 'We care about materials, details, finishing, packing, and the final handover experience.',
  },
 ];

 const stats = [
  { number: '150+', label: 'Projects Completed' },
  { number: '50+', label: 'Clients' },
  { number: '5+', label: 'Years Experience' },
 ];

 const projects = [
  {
   title: 'Exhibition Branding & Booth Support',
   description: 'Booth branding, printed materials, backdrops, counters, and on-ground installation support for exhibition environments.',
   image: '/E47.png',
  },
  {
   title: 'Corporate Gifts & Promotional Kits',
   description: 'Sourced and produced branded gifts, packaging, and event giveaways designed for premium client presentation.',
   image: '/E58.png',
  },
  {
   title: 'Conference & Event Branding',
   description: 'Stage backdrops, roll-ups, signage, directional branding, registration materials, and sponsor visibility items.',
   image: '/E60.png',
  },
  {
   title: 'Brand Activation Materials',
   description: 'Custom branded production, POS materials, display elements, and campaign support for corporate activations.',
   image: '/E55.png',
  },
 ];

 return (
  <div className="min-h-screen bg-white">
   <Header />

   <section className="relative h-screen md:h-[600px] flex items-center justify-center overflow-hidden bg-black">
    <div
     className="absolute inset-0 bg-cover bg-center opacity-40"
     style={{ backgroundImage: 'url(/E53.png)' }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

    <div className="container relative z-10 text-white">
     <div className="max-w-2xl">
      <p className="text-sm uppercase tracking-[0.25em] text-accent mb-4">About KOVA</p>
      <h1 className="text-5xl md:text-5xl font-bold mb-6 leading-tight">
       Premium execution for brands, events, and corporate teams.
      </h1>
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
       A Cairo-based production and brand activation agency built around reliable sourcing, refined finishing, and practical delivery.
      </p>
     </div>
    </div>
   </section>

   <section className="py-20 md:py-32 bg-white">
    <div className="container max-w-3xl">
     <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Story</h2>

     <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
      <p>
       KOVA was created to give brands and event teams a production partner that understands both presentation and deadlines. Based in Cairo, Egypt, we manage branded materials, gifts, packaging, exhibition requirements, and event supply projects for companies that need dependable execution.
      </p>

      <p>
       Our work starts with the brief: quantity, deadline, budget, finishing, and intended use. From there, we support sourcing, samples, printing, packaging, coordination, and delivery so clients have one clear point of contact.
      </p>

      <p>
       Today, KOVA supports corporate clients, organizers, contractors, and brands across multiple industries. The focus is simple: premium presentation, practical recommendations, and production that arrives ready for use.
      </p>
     </div>
    </div>
   </section>

   <section className="py-20 md:py-28 bg-black text-white border-y-2 border-accent">
    <div className="container">
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat) => (
       <div key={stat.label} className="text-center rounded-2xl border border-white/10 bg-white/5 p-10 shadow-[0_0_40px_rgba(212,175,55,0.08)]">
        <div className="text-5xl md:text-6xl font-bold text-accent mb-3">{stat.number}</div>
        <p className="text-gray-300 uppercase tracking-[0.18em] text-sm">{stat.label}</p>
       </div>
      ))}
     </div>
    </div>
   </section>

   <section className="py-16 md:py-24 bg-[#faf7f2]">
    <div className="container">
     <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
      <div>
       <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3">Selected Work</p>
       <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent Project Categories</h2>
       <p className="text-gray-600 max-w-2xl">Real production categories for corporate clients, exhibition teams, event contractors, and brand activation requirements.</p>
      </div>
      <a href="/portfolio.pdf" target="_blank" className="btn-primary inline-flex items-center justify-center">View Portfolio</a>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
       <div key={project.title} className="group overflow-hidden rounded-2xl bg-white border border-black/5 shadow-sm">
        <div className="h-[360px] overflow-hidden bg-black">
         <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="p-7">
         <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Realistic project shot</p>
         <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
         <p className="text-gray-600">{project.description}</p>
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>

   <section className="py-20 md:py-32 bg-white">
    <div className="container">
     <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Values</h2>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {values.map((value) => (
       <div key={value.title} className="p-8 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
        <h3 className="font-bold text-xl mb-3">{value.title}</h3>
        <p className="text-gray-600">{value.description}</p>
       </div>
      ))}
     </div>
    </div>
   </section>

   <section className="py-20 md:py-32 bg-gray-50">
    <div className="container">
     <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Expertise</h2>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
       <h3 className="text-2xl font-bold mb-6">Event Production</h3>
       <ul className="space-y-3 text-gray-600">
        <li className="flex items-start gap-3"><span className="text-accent font-bold">→</span><span>Event branding production and execution</span></li>
        <li className="flex items-start gap-3"><span className="text-accent font-bold">→</span><span>Exhibition booth graphics and fabrication support</span></li>
        <li className="flex items-start gap-3"><span className="text-accent font-bold">→</span><span>Brand activation and campaign materials</span></li>
        <li className="flex items-start gap-3"><span className="text-accent font-bold">→</span><span>On-ground operations, logistics, and delivery coordination</span></li>
       </ul>
      </div>

      <div>
       <h3 className="text-2xl font-bold mb-6">Branded Materials</h3>
       <ul className="space-y-3 text-gray-600">
        <li className="flex items-start gap-3"><span className="text-accent font-bold">→</span><span>Corporate giveaways and promotional products</span></li>
        <li className="flex items-start gap-3"><span className="text-accent font-bold">→</span><span>Premium packaging and custom boxes</span></li>
        <li className="flex items-start gap-3"><span className="text-accent font-bold">→</span><span>Branded apparel and uniforms</span></li>
        <li className="flex items-start gap-3"><span className="text-accent font-bold">→</span><span>Banners, flags, signage, and outdoor branding</span></li>
       </ul>
      </div>
     </div>
    </div>
   </section>

   <section className="py-20 md:py-32 bg-white">
    <div className="container">
     <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Why Partner With KOVA</h2>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
      <div className="p-8 bg-black text-white rounded-lg">
       <h3 className="text-2xl font-bold mb-4 text-accent">Premium Quality</h3>
       <p className="text-gray-300 leading-relaxed">We maintain high standards in materials, finishing, production, packing, and handover.</p>
      </div>

      <div className="p-8 bg-black text-white rounded-lg">
       <h3 className="text-2xl font-bold mb-4 text-accent">Reliable Delivery</h3>
       <p className="text-gray-300 leading-relaxed">We plan around real deadlines and communicate clearly from brief to delivery.</p>
      </div>

      <div className="p-8 bg-black text-white rounded-lg">
       <h3 className="text-2xl font-bold mb-4 text-accent">Full-Service Solutions</h3>
       <p className="text-gray-300 leading-relaxed">From sourcing to branding and packaging, KOVA acts as one coordinated production partner.</p>
      </div>

      <div className="p-8 bg-black text-white rounded-lg">
       <h3 className="text-2xl font-bold mb-4 text-accent">Local Expertise</h3>
       <p className="text-gray-300 leading-relaxed">Based in Cairo, we understand local suppliers, event timelines, and practical execution requirements.</p>
      </div>
     </div>
    </div>
   </section>

   <section className="py-20 md:py-32 bg-black text-white">
    <div className="container text-center">
     <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
     <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
      Share your project details and KOVA will support with practical production recommendations and pricing.
     </p>

     <div className="flex flex-col md:flex-row gap-4 justify-center">
      <a href="/contact" className="btn-primary inline-flex items-center justify-center">Get a Quote</a>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary text-center">WhatsApp Us</a>
     </div>
    </div>
   </section>

   <Footer />
  </div>
 );
}
