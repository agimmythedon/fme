import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Bus, Accessibility, Car, Bike, MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "../constants";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Sectors", path: "/sectors" },
  { name: "Expertise", path: "/expertise" },
  { name: "Our Clients", path: "/clients" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex-shrink-0" aria-label="Future Mobility Engineering Home">
            <Logo className="h-10 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                  location.pathname === link.path ? "text-teal-600" : "text-slate-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors flex items-center gap-2"
            >
              Enquire Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-teal-600 transition-colors p-2"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-3 text-base font-medium rounded-md ${
                    location.pathname === link.path
                      ? "bg-slate-50 text-teal-600"
                      : "text-slate-700 hover:bg-slate-50 hover:text-teal-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Link
                  to="/contact"
                  className="w-full bg-slate-900 text-white px-5 py-3 rounded-lg text-center font-medium hover:bg-teal-700 transition-colors block"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block" aria-label="Future Mobility Engineering Home">
              <div className="flex items-center gap-2">
                <div className="grid grid-cols-2 gap-0.5 w-8 h-8" aria-hidden="true">
                  <div className="bg-[#56b4e9] flex items-center justify-center p-0.5"><Bus className="text-white w-full h-full" /></div>
                  <div className="bg-[#92d050] flex items-center justify-center p-0.5"><Accessibility className="text-white w-full h-full" /></div>
                  <div className="bg-[#262626] flex items-center justify-center p-0.5"><Car className="text-white w-full h-full" /></div>
                  <div className="bg-[#c4bd97] flex items-center justify-center p-0.5"><Bike className="text-white w-full h-full" /></div>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-lg font-bold text-white tracking-tighter">FME</span>
                  <span className="text-[6px] font-semibold tracking-widest text-slate-400 uppercase">Future Mobility Engineering</span>
                </div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Specialist engineering consultancy focused on inclusive, sustainable, and future-ready infrastructure solutions. Shaping mobility systems for safer, more accessible futures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-teal-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">Universal Access & Design</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">Transport Engineering</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">NMT Infrastructure</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">Public Transport Systems</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="mt-1 text-teal-400"><MapPin className="w-4 h-4" /></div>
                <span className="text-slate-400">Office Location Placeholder<br />City, Country</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="text-teal-400"><Phone className="w-4 h-4" /></div>
                <span className="text-slate-400">+00 000 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="text-teal-400"><Mail className="w-4 h-4" /></div>
                <span className="text-slate-400">info@fme-engineering.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Future Mobility Engineering (FME). All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-slate-300">Privacy Policy</Link>
            <Link to="#" className="hover:text-slate-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
