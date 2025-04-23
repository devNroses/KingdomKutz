
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-barber-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <div className="mb-4">
              <h2 className="text-3xl font-heading font-bold">
                KINGDOM <span className="text-barber-gold">KUTS</span>
              </h2>
            </div>
            <p className="text-gray-300 mb-6">
              Professional barbershop specializing in cuts, fades, designs, razor shaves, and hot towel treatments for all hair types.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-barber-gold text-black p-2 rounded-full hover:opacity-90 transition-opacity">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-barber-gold text-black p-2 rounded-full hover:opacity-90 transition-opacity">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 uppercase">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-barber-gold mr-2 mt-1" />
                <span>123 Barber Street, Portland, OR 97205</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-barber-gold mr-2" />
                <a href="tel:+15035555555" className="hover:text-barber-gold transition-colors">
                  (503) 555-5555
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-barber-gold mr-2" />
                <a href="mailto:info@kingdomkuts.com" className="hover:text-barber-gold transition-colors">
                  info@kingdomkuts.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 uppercase">Business Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-barber-gold mr-2" />
                <div>
                  <span className="block">Monday - Friday</span>
                  <span className="text-gray-300">9:00 AM - 7:00 PM</span>
                </div>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 text-barber-gold mr-2 invisible" />
                <div>
                  <span className="block">Saturday</span>
                  <span className="text-gray-300">8:00 AM - 5:00 PM</span>
                </div>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 text-barber-gold mr-2 invisible" />
                <div>
                  <span className="block">Sunday</span>
                  <span className="text-gray-300">Closed</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Kingdom Kuts PDX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
