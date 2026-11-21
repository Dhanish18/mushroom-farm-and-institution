import React, { useState, useEffect } from 'react';
import { ShoppingBasket, User, Menu, X, Sprout } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onOpenProfile }) {
  const [activeSection, setActiveSection] = useState('farm');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['farm', 'collection', 'process', 'experience', 'why-us', 'journal'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Farm', id: 'farm' },
    { label: 'Varieties', id: 'collection' },
    { label: 'Growing Process', id: 'process' },
    { label: 'Experience', id: 'experience' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Journal', id: 'testimonials' },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 bg-[#F5EDE2]/90 backdrop-blur-xl border-b border-outline-variant/50 transition-all duration-300 ${scrolled ? 'shadow-sm py-0' : 'py-1'}`}>
      <div className="h-16 max-w-7xl mx-auto px-5 lg:px-12 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <a 
          href="#farm" 
          onClick={(e) => handleNavClick(e, 'farm')} 
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-secondary-container text-secondary transition-transform group-hover:scale-105 shadow-sm">
            <Sprout className="w-5 h-5 text-secondary" />
          </span>
          <span className="font-headline-sm text-[13px] xl:text-[15px] leading-[1.05] xl:leading-normal text-primary tracking-tight font-serif font-bold max-w-[174px] xl:max-w-none xl:whitespace-nowrap">
            Udhayan Mushroom Farm and Institution
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-3">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`transition-colors text-[12px] whitespace-nowrap ${
                  isActive
                    ? "text-primary font-semibold relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                    : "text-on-surface-variant hover:text-primary font-normal"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3.5">
          {/* Shop Harvest Cart Trigger */}
          <button
            onClick={onOpenCart}
            aria-label="View Shopping Cart"
            className="flex items-center gap-2 bg-[#2D4229] text-white pl-3 pr-2.5 py-2 rounded-full shadow-md hover:bg-[#20311D] transition-all transform hover:-translate-y-0.5 focus:outline-none whitespace-nowrap"
          >
            <ShoppingBasket className="w-[18px] h-[18px]" />
            <span className="hidden sm:inline font-label-md text-[11px] tracking-wider uppercase font-semibold whitespace-nowrap">
              Shop Harvest
            </span>
            <span className="flex items-center justify-center min-w-[20px] h-5 px-1 rounded-full bg-[#E2EBDA] text-[#263B22] font-label-sm text-label-sm font-bold">
              {cartCount}
            </span>
          </button>

          {/* Profile / Account Button */}
          <button
            onClick={onOpenProfile}
            aria-label="User Account"
            className="w-9 h-9 rounded-full bg-[#2D4229] hover:bg-[#20311D] flex items-center justify-center shadow-sm text-white transition-colors"
          >
            <User className="w-[18px] h-[18px]" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-9 h-9 rounded-full bg-white/80 border border-outline-variant flex items-center justify-center text-primary"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF4ED] border-b border-outline-variant px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`py-2 px-3 rounded-xl text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-secondary-container text-secondary font-semibold'
                    : 'text-on-surface-variant hover:text-primary hover:bg-white/50'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-outline-variant flex gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="flex-1 py-3 bg-[#2D4229] text-white rounded-full font-label-md flex items-center justify-center gap-2"
              >
                <ShoppingBasket className="w-4 h-4" />
                View Cart ({cartCount})
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
