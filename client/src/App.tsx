import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";

/**
 * KOVA Agency Website
 * Design: Luxury Editorial Minimalism
 * - Premium event production and brand activation agency
 * - Black + Ivory + Champagne Gold color palette
 * - Elegant typography with Playfair Display + Poppins
 * - Cinematic imagery and minimal, tactile design
 */

function Router() {
 return (
 <Switch>
 <Route path={"/"} component={Home} />
 <Route path={"/services"} component={Services} />
 <Route path={"/about"} component={About} />
 <Route path={"/contact"} component={Contact} />
 <Route path={"/404"} component={NotFound} />
 {/* Final fallback route */}
 <Route component={NotFound} />
 </Switch>
 );
}

function App() {
 return (
 <ErrorBoundary>
 <ThemeProvider defaultTheme="light">
 <TooltipProvider>
 <Toaster />
 <ScrollToTop />
 <Router />
 </TooltipProvider>
 </ThemeProvider>
 </ErrorBoundary>
 );
}

export default App;
