import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Contact Page
 * Design: Luxury Editorial Minimalism
 * - Contact form
 * - Contact information
 * - Social links
 */

export default function Contact() {
 const [formData, setFormData] = useState({
 name: '',
 email: '',
 phone: '',
 company: '',
 serviceNeeded: '',
 quantity: '',
 deadline: '',
 subject: '',
 message: '',
 });

 const [submitted, setSubmitted] = useState(false);
 const [submitting, setSubmitting] = useState(false);
 const [errorMessage, setErrorMessage] = useState('');

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
 const { name, value } = e.target;
 setFormData((prev) => ({ ...prev, [name]: value }));
 };

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
 e.preventDefault();
 setSubmitting(true);
 setErrorMessage('');

 try {
 const response = await fetch('/api/contact', {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify(formData),
 });

 const result = await response.json().catch(() => ({}));

 if (!response.ok) {
 throw new Error(result?.message || 'Message could not be sent.');
 }

 setSubmitted(true);
 setFormData({ name: '', email: '', phone: '', company: '', serviceNeeded: '', quantity: '', deadline: '', subject: '', message: '' });
 } catch (error) {
 setErrorMessage(error instanceof Error ? error.message : 'Message could not be sent. Please try again.');
 } finally {
 setSubmitting(false);
 }
 };

 return (
 <div className="min-h-screen bg-white">
 <Header />

 {/* HERO */}
 <section id="contact" className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden bg-black">
 <div
 className="absolute inset-0 bg-cover bg-center opacity-40"
 style={{
 backgroundImage: 'url(/hero.png)',
 }}
 />
 <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
 
 <div className="container relative z-10 text-white">
 <div className="max-w-2xl">
 <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
 <p className="text-lg text-gray-300">
 Have a project in mind? Let's discuss how we can help.
 </p>
 </div>
 </div>
 </section>

 {/* Main Contact Section */}
 <section className="py-20 md:py-32 bg-white">
 <div className="container">
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
 {/* Contact Form */}
 <div className="lg:col-span-2">
 <h2 className="text-3xl md:text-4xl font-bold mb-3">Request a Quotation</h2>
 <p className="text-gray-600 mb-8">Share the service, quantity, deadline, and project details so we can respond with the most accurate next step.</p>
 
 {submitted ? (
 <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
 <p className="text-green-800 font-semibold text-lg">
 Thank you for your message! We'll get back to you shortly.
 </p>
 </div>
 ) : (
 
<form onSubmit={handleSubmit} className="space-y-6">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <label className="block text-sm font-semibold mb-2">Name *</label>
 <input
 type="text"
 name="name"
 value={formData.name}
 onChange={handleChange}
 required
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
 placeholder="Your name"
 />
 </div>
 <div>
 <label className="block text-sm font-semibold mb-2">Email *</label>
 <input
 type="email"
 name="email"
 value={formData.email}
 onChange={handleChange}
 required
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
 placeholder="your@email.com"
 />
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <label className="block text-sm font-semibold mb-2">Phone / WhatsApp *</label>
 <input
 type="tel"
 name="phone"
 value={formData.phone}
 onChange={handleChange}
 required
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
 placeholder="+20 1XX XXX XXXX"
 />
 </div>
 <div>
 <label className="block text-sm font-semibold mb-2">Company</label>
 <input
 type="text"
 name="company"
 value={formData.company}
 onChange={handleChange}
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
 placeholder="Company name"
 />
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <label className="block text-sm font-semibold mb-2">Service Needed *</label>
 <select
 name="serviceNeeded"
 value={formData.serviceNeeded}
 onChange={handleChange}
 required
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
 >
 <option value="">Select service</option>
 <option value="Promotional Gifts">Promotional Gifts</option>
 <option value="Exhibition Branding">Exhibition Branding</option>
 <option value="Printing & Signage">Printing & Signage</option>
 <option value="Packaging">Packaging</option>
 <option value="Event Supply">Event Supply</option>
 <option value="Other">Other</option>
 </select>
 </div>
 <div>
 <label className="block text-sm font-semibold mb-2">Subject *</label>
 <input
 type="text"
 name="subject"
 value={formData.subject}
 onChange={handleChange}
 required
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
 placeholder="Example: 500 branded notebooks"
 />
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <label className="block text-sm font-semibold mb-2">Quantity</label>
 <input
 type="text"
 name="quantity"
 value={formData.quantity}
 onChange={handleChange}
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
 placeholder="Example: 500 pcs"
 />
 </div>
 <div>
 <label className="block text-sm font-semibold mb-2">Deadline</label>
 <input
 type="date"
 name="deadline"
 value={formData.deadline}
 onChange={handleChange}
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
 />
 </div>
 </div>

 <div>
 <label className="block text-sm font-semibold mb-2">Message *</label>
 <textarea
 name="message"
 value={formData.message}
 onChange={handleChange}
 required
 rows={6}
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors resize-none"
 placeholder="Tell us the specifications, material, colors, delivery location, references, or any important project details..."
 />
 </div>

 {errorMessage && (
 <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4">
 {errorMessage}
 </div>
 )}

 <button type="submit" disabled={submitting} className="btn-primary flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
 <Send size={18} />
 {submitting ? 'Sending...' : 'Send RFQ'}
 </button>
 </form>
 )}
 </div>

 {/* Contact Info */}
 <div className="space-y-8">
 <div>
 <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
 </div>

 {/* Email */}
 <div className="flex gap-4">
 <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
 <Mail size={20} className="text-white" />
 </div>
 <div>
 <p className="text-sm text-gray-600 mb-1">Email</p>
 <a href="mailto:info@kovagency.com" className="text-lg font-semibold hover:text-accent transition-colors">
 info@kovagency.com
 </a>
 </div>
 </div>

 {/* Phone */}
 <div className="flex gap-4">
 <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
 <Phone size={20} className="text-white" />
 </div>
 <div>
 <p className="text-sm text-gray-600 mb-1">Phone / WhatsApp</p>
 <a href="tel:+201017920985" className="text-lg font-semibold hover:text-accent transition-colors">
 +201017920985
 </a>
 </div>
 </div>

 {/* Location */}
 <div className="flex gap-4">
 <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
 <MapPin size={20} className="text-white" />
 </div>
 <div>
 <p className="text-sm text-gray-600 mb-1">Location</p>
 <p className="text-lg font-semibold">Cairo, Egypt</p>
 </div>
 </div>

 {/* Social */}
 <div className="pt-8 border-t border-gray-200">
 <p className="text-sm text-gray-600 mb-4">Follow Us</p>
 <a
 href="https://www.instagram.com/kovaegypt/"
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center gap-3 text-lg font-semibold hover:text-accent transition-colors"
 >
 <Instagram size={24} />
 @kovaegypt
 </a>
 </div>

 {/* WhatsApp CTA */}
 <div className="pt-8">
 <a
 href="https://wa.me/201017920985"
 target="_blank"
 rel="noopener noreferrer"
 className="btn-primary w-full text-center"
 >
 Chat on WhatsApp
 </a>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Map Section (Placeholder) */}
 <section className="py-20 md:py-32 bg-gray-50">
 <div className="container">
 <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Location</h2>
 <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
 <div className="text-center">
 <MapPin size={48} className="mx-auto mb-4 text-gray-400" />
 <p className="text-gray-600">Cairo, Egypt</p>
 <p className="text-sm text-gray-500 mt-2">Map integration coming soon</p>
 </div>
 </div>
 </div>
 </section>

 {/* FAQ Quick Links */}
 <section className="py-20 md:py-32 bg-white">
 <div className="container max-w-3xl">
 <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Quick Answers</h2>
 
 <div className="space-y-6">
 <div className="p-6 bg-gray-50 rounded-lg">
 <h3 className="font-bold mb-2">What's your response time?</h3>
 <p className="text-gray-600">We typically respond to inquiries within 24 hours during business days.</p>
 </div>
 
 <div className="p-6 bg-gray-50 rounded-lg">
 <h3 className="font-bold mb-2">Do you offer rush orders?</h3>
 <p className="text-gray-600">Yes, we can accommodate rush orders. Contact us directly to discuss timeline and feasibility.</p>
 </div>
 
 <div className="p-6 bg-gray-50 rounded-lg">
 <h3 className="font-bold mb-2">How can I get a quote?</h3>
 <p className="text-gray-600">Fill out the contact form above, call us, or message us on WhatsApp. We'll provide a detailed quote based on your requirements.</p>
 </div>
 
 <div className="p-6 bg-gray-50 rounded-lg">
 <h3 className="font-bold mb-2">Do you work with international clients?</h3>
 <p className="text-gray-600">Yes, we work with clients globally and can arrange international shipping and delivery.</p>
 </div>
 </div>
 </div>
 </section>

 <Footer />
 </div>
 );
}
