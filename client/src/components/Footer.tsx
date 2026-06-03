import { Mail, MapPin, Phone, Instagram } from 'lucide-react';

export default function Footer() {
 return (
 <footer className="bg-black text-white py-16">
 <div className="container">
 <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
 {/* Brand */}
 <div>
 <div className="mb-4">
 <img 
 src="/logo-silver.png" 
 alt="KOVA Logo" 
 className="h-24 w-auto"
 />
 </div>
 <p className="text-gray-400 text-sm leading-relaxed">
 Premium event production & brand solutions for corporate clients.
 </p>
 </div>

 {/* Quick Links */}
 <div>
 <h4 className="font-semibold mb-4 text-accent">Services</h4>
 <ul className="space-y-2 text-sm text-gray-400">
 <li><a href="/services" className="hover:text-white transition-colors">Corporate Events</a></li>
 <li><a href="/services" className="hover:text-white transition-colors">Exhibition Branding</a></li>
 <li><a href="/services" className="hover:text-white transition-colors">Brand Activations</a></li>
 <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
 </ul>
 </div>

 {/* Contact Info */}
 <div>
 <h4 className="font-semibold mb-4 text-accent">Contact</h4>
 <ul className="space-y-3 text-sm text-gray-400">
 <li className="flex items-center gap-2">
 <Mail size={16} />
 <a href="mailto:info@kovagency.com" className="hover:text-white transition-colors">
 info@kovagency.com
 </a>
 </li>
 <li className="flex items-center gap-2">
 <Phone size={16} />
 <a href="tel:+201017920985" className="hover:text-white transition-colors">
 +201017920985
 </a>
 </li>
 <li className="flex items-center gap-2">
 <MapPin size={16} />
 <span>Cairo, Egypt</span>
 </li>
 </ul>
 </div>

 {/* Social */}
 <div>
 <h4 className="font-semibold mb-4 text-accent">Follow</h4>
 <a
 href="https://www.instagram.com/kovaegypt/"
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
 >
 <Instagram size={20} />
 <span className="text-sm">@kovaegypt</span>
 </a>
 </div>
 </div>

 {/* Divider */}
 <div className="border-t border-gray-800 pt-8">
 <p className="text-center text-gray-500 text-sm">
 © {new Date().getFullYear()} KOVA. All rights reserved.
 </p>
 </div>
 </div>
 </footer>
 );
}
