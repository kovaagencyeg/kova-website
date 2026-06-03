import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Services Page - Business Solutions
 * Design: Luxury Editorial Minimalism
 * - Detailed service offerings
 * - Corporate-focused solutions
 */

export default function Services() {
 const services = [
 {
 title: 'Corporate Event Production',
 description: 'End-to-end planning and execution of premium corporate events, conferences, seminars, and brand activations.',
 features: ['Event Strategy & Planning', 'Venue Selection & Management', 'Audio/Visual Production', 'Catering Coordination', 'Staffing & Logistics', 'Post-Event Analysis'],
 image: '/E42.png',
 },
 {
 title: 'Exhibition Booth Design & Fabrication',
 description: 'Custom booth design, fabrication, and installation for trade shows, exhibitions, and corporate showcases.',
 features: ['Concept Design', 'Custom Fabrication', 'Professional Installation', 'On-Site Support', 'Modular Solutions', 'Dismantling & Storage'],
 image: '/E30.png',
 },
 {
 title: 'Trade Show Solutions',
 description: 'Complete trade show branding, booth setup, professional operations, and attendee engagement strategies.',
 features: ['Booth Design & Setup', 'Brand Activation', 'Logistics Management', 'Staff Training', 'Lead Management', 'Real-time Support'],
 image: '/E43.png',
 },
 {
 title: 'Corporate Branding & Signage',
 description: 'Premium branded materials, environmental signage, and corporate collateral for offices and events.',
 features: ['Brand Strategy', 'Signage Design & Production', 'Branded Collateral', 'Print Management', 'Installation Services', 'Brand Guidelines'],
 image: '/E46.png',
 },
 ];

 const process = [
 { step: 'Discovery', description: 'We understand your objectives, target audience, and brand positioning.' },
 { step: 'Strategy', description: 'Develop a comprehensive event strategy and execution plan.' },
 { step: 'Design', description: 'Create detailed designs, concepts, and production specifications.' },
 { step: 'Production', description: 'Fabricate, prepare, and quality-check all materials and elements.' },
 { step: 'Execution', description: 'Professional on-ground execution with full team support.' },
 { step: 'Analysis', description: 'Post-event reporting and recommendations for future improvements.' },
 ];

 return (
 <div className="min-h-screen bg-white">
 <Header />

 {/* HERO */}
 <section id="contact" className="relative h-screen md:h-[600px] flex items-center justify-center overflow-hidden bg-black">
 <div
 className="absolute inset-0 bg-cover bg-center opacity-50"
 style={{
 backgroundImage: 'url(/E41.png)',
 }}
 />
 <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
 
 <div className="container relative z-10 text-white">
 <div className="max-w-2xl">
 <h1 className="text-5xl md:text-5xl font-bold mb-6 leading-tight">
 Our Services
 </h1>
 <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
 Comprehensive business solutions for corporate events, exhibitions, and brand activations.
 </p>
 </div>
 </div>
 </section>

 {/* SERVICES DETAIL */}
 <section className="py-20 md:py-32 bg-white border-t-2 border-accent">
 <div className="container">
 <div className="space-y-20">
 {services.map((service, i) => (
 <div
 key={i}
 className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
 i % 2 === 1 ? 'md:grid-flow-dense' : ''
 }`}
 >
 {/* Image */}
 <div className={`h-96 rounded-lg overflow-hidden ${i % 2 === 1 ? 'md:order-last' : ''}`}>
 <img
 src={service.image}
 alt={service.title}
 className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
 />
 </div>

 {/* Content */}
 <div>
 <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
 <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>
 
 <div className="space-y-2 mb-8">
 {service.features.map((feature, j) => (
 <div key={j} className="flex items-center gap-3">
 <div className="w-1.5 h-1.5 bg-accent rounded-full" />
 <p className="text-gray-700">{feature}</p>
 </div>
 ))}
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* PROCESS */}
 <section className="py-20 md:py-32 bg-black text-white border-t-2 border-accent">
 <div className="container">
 <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Process</h2>
 
 <div className="max-w-4xl mx-auto">
 <div className="space-y-12">
 {process.map((item, i) => (
 <div key={i} className="flex gap-8 items-start">
 <div className="w-16 h-16 rounded-full bg-accent text-black flex items-center justify-center font-bold text-xl flex-shrink-0">
 {i + 1}
 </div>
 <div>
 <h3 className="font-bold text-2xl mb-2">{item.step}</h3>
 <p className="text-gray-400 text-lg">{item.description}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* WHY KOVA */}
 <section className="py-20 md:py-32 bg-white border-t-2 border-accent">
 <div className="container">
 <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Why Choose KOVA</h2>
 
 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
 <div className="p-8 bg-black text-white rounded-lg">
 <h3 className="text-2xl font-bold mb-4 text-accent">Proven Expertise</h3>
 <p className="text-gray-300 leading-relaxed">
 With years of experience in corporate event production and brand activation, we understand what it takes to deliver exceptional results.
 </p>
 </div>

 <div className="p-8 bg-black text-white rounded-lg">
 <h3 className="text-2xl font-bold mb-4 text-accent">Full-Service Partner</h3>
 <p className="text-gray-300 leading-relaxed">
 From concept to execution, we handle everything. No need to coordinate with multiple vendors—we're your single point of contact.
 </p>
 </div>

 <div className="p-8 bg-black text-white rounded-lg">
 <h3 className="text-2xl font-bold mb-4 text-accent">Premium Quality</h3>
 <p className="text-gray-300 leading-relaxed">
 We maintain the highest standards in design, production, and execution. Every project reflects our commitment to excellence.
 </p>
 </div>

 <div className="p-8 bg-black text-white rounded-lg">
 <h3 className="text-2xl font-bold mb-4 text-accent">Reliable Delivery</h3>
 <p className="text-gray-300 leading-relaxed">
 We understand the importance of deadlines. Our track record speaks for itself—we deliver on time, every time.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-20 md:py-32 bg-black text-white border-t-2 border-accent">
 <div className="container text-center">
 <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Discuss Your Project</h2>
 <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
 Contact us today to learn how KOVA can bring your vision to life.
 </p>
 
 <div className="flex flex-col md:flex-row gap-4 justify-center">
 <a href="/contact" className="btn-primary inline-flex items-center justify-center">Get a Quote</a>
 <a
 href="https://wa.me/201017920985"
 target="_blank"
 rel="noopener noreferrer"
 className="btn-secondary text-center"
 >
 WhatsApp Us
 </a>
 </div>
 </div>
 </section>

 <Footer />
 </div>
 );
}
