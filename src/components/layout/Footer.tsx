
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/b667d8da-b7b9-4145-b54d-c343f34003c0.png" 
                alt="Kind Access Logo" 
                className="h-12 w-auto bg-white rounded-full p-1" 
              />
              <span className="ml-2 font-semibold text-xl">Kind Access</span>
            </div>
            <p className="text-gray-400">
              Empowering inclusion, one step at a time. We provide support services for people with disabilities in Brisbane.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 relative inline-block">
              Quick Links
              <span className="absolute bottom-[-5px] left-0 w-12 h-1 bg-primary"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 relative inline-block">
              Our Services
              <span className="absolute bottom-[-5px] left-0 w-12 h-1 bg-primary"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/daily-activities" className="text-gray-400 hover:text-white transition-colors">
                  Personal Daily Activities
                </Link>
              </li>
              <li>
                <Link to="/services/daily-living-skills" className="text-gray-400 hover:text-white transition-colors">
                  Daily Living Skills
                </Link>
              </li>
              <li>
                <Link to="/services/community-nursing" className="text-gray-400 hover:text-white transition-colors">
                  Community Nursing Care
                </Link>
              </li>
              <li>
                <Link to="/services/group-activities" className="text-gray-400 hover:text-white transition-colors">
                  Group Activities
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 relative inline-block">
              Contact Info
              <span className="absolute bottom-[-5px] left-0 w-12 h-1 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-400">Brisbane, QLD, Australia</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-primary flex-shrink-0" />
                <a href="tel:+61730000000" className="text-gray-400 hover:text-white transition-colors">
                  +61 7 3000 0000
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-primary flex-shrink-0" />
                <a href="mailto:info@kindaccess.com.au" className="text-gray-400 hover:text-white transition-colors">
                  info@kindaccess.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Kind Access. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="mx-2">|</span>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
