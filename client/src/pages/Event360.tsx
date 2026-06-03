import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Event 360 Page
 * Design: Luxury Editorial Minimalism
 * - Cinematic hero with event production imagery
 * - Detailed service breakdown
 * - Process visualization
 */

export default function Event360() {
 const services = [
 {
 title: 'Event Planning & Management',
 description: 'Strategic planning, timeline management, and coordination of all event elements from concept to execution.',
 },
 {
 title: 'Production & Fabrication',
 description: 'In-house production capabilities for custom builds, installations, and fabrication of event materials.',
 },
 {
 title: 'Branding & Wayfinding',
 description: 'Strategic brand placement, signage, and wayfinding systems that guide attendees through your event.',
 },
 {
 title: 'Booths & Stands',
 description: 'Design and construction of exhibition booths, trade show stands, and branded installations.',
 },
 {
 title: 'On-ground Operations',
 description: 'Full event execution, setup, management, and teardown with professional on-site teams.',
 },
 {
 title: 'Giveaways & Guest Kits',
 description: 'Custom giveaways, welcome kits, and promotional materials for event attendees.',
 },
 ];

 const caseStudies = [
 {
 title: 'Corporate Exhibition',
 description: 'Large-scale trade show booth with premium branding and interactive elements',
 image: '/hero.png',
 },
 {
 title: 'Brand Activation Event',
 description: 'Full event production with custom installations and branded materials',
 image: '/KOV 14.png',
 },
 {
 title: 'Product Launch',
 description: 'End-to-end event execution with premium production quality',
 image: '/KOV 16.png',
 },
 ];

 return (
 <div className="min-h-screen bg-white">
 <Header />

 {/* HERO */}
 <section id="contact" className="relative h-screen md:h-[600px] flex items-center justify-center overflow-hidden bg-black">
 <div
 className="absolute inset-0 bg-cover bg-center opacity-40"
 style={{
 backgroundImage: 'url(/hero.png)',
 }}
 />
 <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
 
 <div className="container relative z-10 text-white">
 <div className="max-w-2xl">
 <h1 className="text-5xl md:text-5xl font-bold mb-6 leading-tight">
 Events, Executed End-to-End
 </h1>
 <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
 From concept to reality, we handle every detail of your event with precision and creativity.
 </p>
 </div>
 </div>
 </section>

 {/* Services Grid */}
 <section className="py-20 md:py-32 bg-white">
 <div className="container">
 <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Event Services</h2>
 
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {services.map((service, i) => (
 <div
 key={i}
 className="p-8 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg hover:border-accent transition-all duration-300"
 >
 <div className="w-12 h-12 bg-black rounded-sm flex items-center justify-center text-white font-bold mb-6">
 {i + 1}
 </div>
 <h3 className="font-bold text-xl mb-3">{service.title}</h3>
 <p className="text-gray-600 leading-relaxed">{service.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Process Section */}
 <section className="py-20 md:py-32 bg-black text-white">
 <div className="container">
 <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Process</h2>
 
 <div className="max-w-4xl mx-auto">
 <div className="space-y-12">
 {[
 { step: 'Discovery', description: 'We understand your vision, goals, and target audience.' },
 { step: 'Strategy', description: 'Develop a comprehensive event strategy and timeline.' },
 { step: 'Design', description: 'Create detailed designs and production plans.' },
 { step: 'Production', description: 'Fabricate and prepare all event materials.' },
 { step: 'Execution', description: 'Flawless on-ground execution and management.' },
 { step: 'Debrief', description: 'Post-event analysis and success metrics.' },
 ].map((item, i) => (
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

 {/* Case Studies */}
 <section className="py-20 md:py-32 bg-white">
 <div className="container">
 <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Recent Projects</h2>
 
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {caseStudies.map((study, i) => (
 <div key={i} className="group overflow-hidden rounded-lg">
 <div className="relative h-80 overflow-hidden bg-gray-200">
 <img
 src={study.image}
 alt={study.title}
 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
 />
 </div>
 <div className="p-6 bg-gray-50">
 <h3 className="font-bold text-xl mb-2">{study.title}</h3>
 <p className="text-gray-600">{study.description}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* CTA Section */}
 <section className="py-20 md:py-32 bg-black text-white">
 <div className="container text-center">
 <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Create Your Next Event</h2>
 <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
 Contact us to discuss your event vision and how we can bring it to life.
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
