import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Giveaways Page
 * Design: Luxury Editorial Minimalism
 * - Premium product showcase
 * - Category-focused layout
 * - Detailed service descriptions
 */

export default function Giveaways() {
 const categories = [
 {
 title: 'Corporate & VIP Gift Sets',
 description: 'Curated premium gift sets designed for executive clients and VIP events. Each set is meticulously assembled with high-quality items and elegant packaging.',
 features: ['Custom curation', 'Premium packaging', 'Personalization options', 'Bulk quantities'],
 image: '/KOV 14.png',
 },
 {
 title: 'Packaging & Custom Boxes',
 description: 'Luxury packaging solutions that elevate your brand. From custom box design to premium finishes, we create packaging that makes an impression.',
 features: ['Custom design', 'Premium materials', 'Various finishes', 'Eco-friendly options'],
 image: '/KOV 14.png',
 },
 {
 title: 'Banners & Backdrops',
 description: 'High-impact visual branding for events, exhibitions, and installations. Custom-designed and professionally fabricated.',
 features: ['Custom design', 'Multiple materials', 'Various sizes', 'Quick turnaround'],
 image: '/hero.png',
 },
 {
 title: 'Flags & Outdoor Branding',
 description: 'Durable, weather-resistant outdoor branding solutions. Perfect for events, exhibitions, and permanent installations.',
 features: ['Weather-resistant', 'Custom designs', 'Multiple sizes', 'Professional installation'],
 image: '/hero.png',
 },
 {
 title: 'Exhibition Booth Branding',
 description: 'Complete booth design and fabrication services. We create immersive branded environments that attract and engage.',
 features: ['Full design service', 'Custom fabrication', 'Installation included', 'Modular designs'],
 image: '/hero.png',
 },
 {
 title: 'Apparel & Uniforms',
 description: 'Premium branded clothing and uniforms. From t-shirts to complete uniform sets, we handle design, production, and quality control.',
 features: ['Multiple printing methods', 'Premium fabrics', 'Custom sizing', 'Bulk production'],
 image: '/KOV 16.png',
 },
 {
 title: 'Office & Stationery',
 description: 'Corporate stationery and office branding. Everything from business cards to branded office supplies.',
 features: ['Business cards', 'Letterheads', 'Branded supplies', 'Premium finishes'],
 image: '/KOV 14.png',
 },
 {
 title: 'Eco & Tech Giveaways',
 description: 'Sustainable and innovative promotional products. Modern giveaways that align with contemporary values.',
 features: ['Eco-friendly options', 'Tech gadgets', 'Sustainable materials', 'Modern designs'],
 image: '/KOV 16.png',
 },
 ];

 const printingMethods = [
 { name: 'Screen Printing', description: 'Ideal for large quantities and vibrant colors' },
 { name: 'Embroidery', description: 'Premium finish for apparel and accessories' },
 { name: 'Digital Printing', description: 'Perfect for detailed designs and small runs' },
 { name: 'Engraving', description: 'Elegant solution for premium items' },
 { name: 'Heat Transfer', description: 'Flexible and durable printing method' },
 { name: 'Custom Fabrication', description: 'Bespoke solutions for unique requirements' },
 ];

 return (
 <div className="min-h-screen bg-white">
 <Header />

 {/* HERO */}
 <section className="relative h-screen md:h-[600px] flex items-center justify-center overflow-hidden bg-black">
 <div
 className="absolute inset-0 bg-cover bg-center opacity-40"
 style={{
 backgroundImage: 'url(/KOV 14.png)',
 }}
 />
 <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
 
 <div className="container relative z-10 text-white">
 <div className="max-w-2xl">
 <h1 className="text-5xl md:text-5xl font-bold mb-6 leading-tight">
 Giveaways & Promotional Products
 </h1>
 <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
 Premium corporate gifts, branded apparel, custom packaging, and promotional products that elevate your brand.
 </p>
 </div>
 </div>
 </section>

 {/* Categories */}
 <section className="py-20 md:py-32 bg-white">
 <div className="container">
 <div className="space-y-20">
 {categories.map((category, i) => (
 <div
 key={i}
 className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
 i % 2 === 1 ? 'md:grid-flow-dense' : ''
 }`}
 >
 {/* Image */}
 <div className={`h-96 rounded-lg overflow-hidden ${i % 2 === 1 ? 'md:order-last' : ''}`}>
 <img
 src={category.image}
 alt={category.title}
 className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
 />
 </div>

 {/* Content */}
 <div>
 <h2 className="text-3xl md:text-4xl font-bold mb-4">{category.title}</h2>
 <p className="text-gray-600 text-lg leading-relaxed mb-6">{category.description}</p>
 
 <div className="space-y-2 mb-8">
 {category.features.map((feature, j) => (
 <div key={j} className="flex items-center gap-3">
 <div className="w-1.5 h-1.5 bg-accent rounded-full" />
 <p className="text-gray-700">{feature}</p>
 </div>
 ))}
 </div>

 <a href="/contact" className="btn-primary inline-flex items-center justify-center">Learn More</a>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Printing Methods */}
 <section className="py-20 md:py-32 bg-gray-50">
 <div className="container">
 <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Printing & Branding Methods</h2>
 
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {printingMethods.map((method, i) => (
 <div key={i} className="p-8 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-xl mb-3">{method.name}</h3>
 <p className="text-gray-600">{method.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Why Choose KOVA */}
 <section className="py-20 md:py-32 bg-black text-white">
 <div className="container">
 <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Why Choose KOVA for Your Giveaways</h2>
 
 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
 <div>
 <h3 className="text-2xl font-bold mb-4 text-accent">Quality Assurance</h3>
 <p className="text-gray-300 leading-relaxed">
 Every product undergoes rigorous quality checks to ensure premium finish and durability. We maintain the highest standards across all production processes.
 </p>
 </div>
 <div>
 <h3 className="text-2xl font-bold mb-4 text-accent">Custom Solutions</h3>
 <p className="text-gray-300 leading-relaxed">
 From concept to production, we work with you to create bespoke giveaways that perfectly align with your brand identity and campaign goals.
 </p>
 </div>
 <div>
 <h3 className="text-2xl font-bold mb-4 text-accent">Fast Turnaround</h3>
 <p className="text-gray-300 leading-relaxed">
 Our in-house production capabilities allow us to deliver high-quality products quickly, even for urgent orders without compromising quality.
 </p>
 </div>
 <div>
 <h3 className="text-2xl font-bold mb-4 text-accent">Bulk Production</h3>
 <p className="text-gray-300 leading-relaxed">
 Whether you need 100 or 100,000 units, we have the capacity and expertise to handle large-scale production efficiently and cost-effectively.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-20 md:py-32 bg-white">
 <div className="container text-center">
 <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Order?</h2>
 <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
 Get in touch with our team to discuss your giveaway requirements and receive a custom quote.
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
