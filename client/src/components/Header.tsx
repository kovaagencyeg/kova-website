import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

export default function Header() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const navItems = [
 { label: 'Home', href: '/' },
 { label: 'Services', href: '/services' },
 { label: 'About', href: '/about' },
 { label: 'Contact', href: '/contact' },
 ];

 return (
 <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
 <div className="container flex items-center justify-between h-20">
 {/* Logo */}
 <Link href="/">
 <div className="flex items-center gap-3 cursor-pointer">
 <img 
 src="/logo.png" 
 alt="KOVA Logo" 
 className="h-24 w-auto"
 />
 </div>
 </Link>

 {/* Desktop Navigation */}
 <nav className="hidden md:flex items-center gap-8">
 {navItems.map((item) => (
 <Link key={item.label} href={item.href}>
 <span className="text-sm font-medium text-gray-700 hover:text-black transition-colors cursor-pointer">
 {item.label}
 </span>
 </Link>
 ))}
 </nav>

 {/* Desktop CTAs */}
 <div className="hidden md:flex items-center gap-4">
 <Link href="/contact"><span className="btn-secondary text-sm cursor-pointer">Get a Quote</span></Link>
 <a
 href="https://wa.me/201017920985"
 target="_blank"
 rel="noopener noreferrer"
 className="btn-primary text-sm"
 >
 WhatsApp Us
 </a>
 </div>

 {/* Mobile Menu Toggle */}
 <button
 className="md:hidden p-2"
 onClick={() => setIsMenuOpen(!isMenuOpen)}
 aria-label="Toggle menu"
 >
 {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
 </button>
 </div>

 {/* Mobile Navigation */}
 {isMenuOpen && (
 <div className="md:hidden border-t border-gray-200 bg-white">
 <nav className="container py-4 flex flex-col gap-4">
 {navItems.map((item) => (
 <Link key={item.label} href={item.href}>
 <span onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium text-gray-700 hover:text-black transition-colors cursor-pointer py-2">
 {item.label}
 </span>
 </Link>
 ))}
 <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
 <Link href="/contact"><span onClick={() => setIsMenuOpen(false)} className="btn-secondary text-sm w-full text-center block cursor-pointer">Get a Quote</span></Link>
 <a
 href="https://wa.me/201017920985"
 target="_blank"
 rel="noopener noreferrer"
 className="btn-primary text-sm w-full text-center"
 >
 WhatsApp Us
 </a>
 </div>
 </nav>
 </div>
 )}
 </header>
 );
}
