import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
 const [location] = useLocation();
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
 }, [location]);

 useEffect(() => {
  const onScroll = () => setIsVisible(window.scrollY > 500);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
 }, []);

 return (
  <button
   type="button"
   aria-label="Scroll to top"
   onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
   className={`fixed right-5 bottom-24 z-50 h-12 w-12 rounded-full border border-accent/70 bg-black text-accent shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-black ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
  >
   <ArrowUp size={20} className="mx-auto" />
  </button>
 );
}
