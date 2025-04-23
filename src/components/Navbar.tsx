
import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll event to change navbar style when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-barber-black shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-white font-heading text-2xl md:text-3xl font-bold">
            KINGDOM <span className="text-barber-gold">KUTS</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-white font-heading uppercase hover:text-barber-gold transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-white font-heading uppercase hover:text-barber-gold transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white font-heading uppercase hover:text-barber-gold transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('gallery')}
            className="text-white font-heading uppercase hover:text-barber-gold transition-colors"
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-white font-heading uppercase hover:text-barber-gold transition-colors"
          >
            Contact
          </button>
          <a 
            href="#booking" 
            className="flex items-center text-black bg-barber-gold px-4 py-2 rounded-sm font-heading uppercase transition-opacity hover:opacity-90"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Book Now
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-barber-black pt-20 transition-transform duration-300 ease-in-out transform md:hidden",
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col px-6 py-4 space-y-4">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-white text-left font-heading uppercase py-2 border-b border-barber-gold/30 hover:text-barber-gold transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-white text-left font-heading uppercase py-2 border-b border-barber-gold/30 hover:text-barber-gold transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white text-left font-heading uppercase py-2 border-b border-barber-gold/30 hover:text-barber-gold transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('gallery')}
            className="text-white text-left font-heading uppercase py-2 border-b border-barber-gold/30 hover:text-barber-gold transition-colors"
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-white text-left font-heading uppercase py-2 border-b border-barber-gold/30 hover:text-barber-gold transition-colors"
          >
            Contact
          </button>
          <a 
            href="#booking" 
            className="flex items-center justify-center text-black bg-barber-gold px-4 py-3 rounded-sm font-heading uppercase transition-opacity hover:opacity-90 mt-4"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Book Now
          </a>
          <a 
            href="tel:+15035555555" 
            className="flex items-center justify-center text-white border border-barber-gold px-4 py-3 rounded-sm font-heading uppercase transition-opacity hover:opacity-90 mt-2"
          >
            <Phone className="mr-2 h-4 w-4" />
            (503) 555-5555
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
