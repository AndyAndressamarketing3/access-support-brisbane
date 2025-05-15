
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  return (
    <header className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/b667d8da-b7b9-4145-b54d-c343f34003c0.png" 
            alt="Kind Access Logo" 
            className="h-12 w-auto" 
          />
          <span className={`ml-2 font-semibold text-xl ${scrolled ? 'text-primary' : 'text-primary'}`}>
            Kind Access
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks scrolled={scrolled} />
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary-dark text-white">
              Contact Us
            </Button>
          </Link>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-slide-down">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <NavLinksMobile />
            <Link to="/contact" className="w-full">
              <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ scrolled }: { scrolled: boolean }) => {
  const location = useLocation();
  const linkClasses = `relative font-medium transition-colors duration-200
    hover:text-primary after:content-[''] after:absolute after:bottom-[-4px]
    after:left-0 after:w-0 after:h-[2px] after:bg-primary
    after:transition-all after:duration-300 hover:after:w-full`;
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary after:w-full' : '';
  };
  
  return (
    <>
      <Link to="/" className={`${linkClasses} ${isActive('/')}`}>Home</Link>
      <Link to="/about" className={`${linkClasses} ${isActive('/about')}`}>About Us</Link>
      <Link to="/services" className={`${linkClasses} ${isActive('/services')}`}>Our Services</Link>
    </>
  );
};

const NavLinksMobile = () => {
  const location = useLocation();
  const linkClasses = "w-full py-2 block border-b border-gray-100 hover:bg-gray-50 transition-colors";
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary font-medium' : '';
  };
  
  return (
    <>
      <Link to="/" className={`${linkClasses} ${isActive('/')}`}>Home</Link>
      <Link to="/about" className={`${linkClasses} ${isActive('/about')}`}>About Us</Link>
      <Link to="/services" className={`${linkClasses} ${isActive('/services')}`}>Our Services</Link>
    </>
  );
};

export default Navbar;
