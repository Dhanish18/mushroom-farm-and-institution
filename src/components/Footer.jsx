import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sprout, Check, Send } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem, viewport } from '../utils/animations';

export default function Footer({ onCategoryClick, onOpenContact }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  return (
    <footer className="w-full bg-[#FAF4ED] text-[#1D1E18] pt-12 pb-12 border-t border-outline-variant">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          
          {/* Brand Info */}
          <motion.div variants={staggerItem} className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Sprout className="w-[22px] h-[22px] text-[#475C3E]" />
              <span className="font-headline-sm text-headline-sm text-[#1D1E18] font-serif font-bold">
                Udhayan Mushroom Farm and Institution
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Pioneering bio-architectural indoor cultivation. We cultivate Michelin-grade organic fungi through low-impact biotechnology and precision climatic misting chambers.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-outline-variant text-[#475C3E] font-label-sm text-label-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#475C3E]" />
                100% Organic
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-outline-variant text-[#475C3E] font-label-sm text-label-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#475C3E]" />
                Zero Emission
              </span>
            </div>
          </motion.div>

          {/* Column 2: Mushroom Varieties */}
          <motion.div variants={staggerItem} className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-label-lg text-label-lg text-[#1D1E18] uppercase tracking-wider font-semibold">
              Mushroom Varieties
            </h4>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
              {["Lion's Mane Supreme", "Black Pearl King Oyster", "Blue Morel Reserve", "Golden Enoki Clustered", "Cordyceps Militaris"].map((item, i) => (
                <li 
                  key={i}
                  onClick={() => onCategoryClick && onCategoryClick(item)}
                  className="hover:text-[#1D1E18] transition-colors cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Cultivation */}
          <motion.div variants={staggerItem} className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-label-lg text-label-lg text-[#1D1E18] uppercase tracking-wider font-semibold">
              Cultivation
            </h4>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
              {["Substrate Ecology", "Hyper-Pure Air Filtration", "Circadian Misting", "Culinary Standards", "Farm Visits & Tours"].map((item, i) => (
                <li 
                  key={i}
                  onClick={() => onOpenContact && onOpenContact(item)}
                  className="hover:text-[#1D1E18] transition-colors cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Cultivator Dispatch */}
          <motion.div variants={staggerItem} className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="font-label-lg text-label-lg text-[#1D1E18] uppercase tracking-wider font-semibold">
              Cultivator Dispatch
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Receive weekly fruiting schedules, private reserve drops, and culinary mycological essays.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#E2EBDA] text-[#263B22] rounded-2xl flex items-center gap-2 font-body-sm text-body-sm">
                <Check className="w-5 h-5 text-secondary" />
                <span>Thank you! You are subscribed to our weekly harvest bulletin.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 bg-white border border-outline-variant p-1.5 rounded-full shadow-sm">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent pl-4 pr-2 py-1.5 w-full font-body-sm text-body-sm text-[#1D1E18] placeholder:text-outline focus:outline-none"
                    placeholder="Enter your email address"
                    type="email"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-full bg-[#2D4229] text-white font-label-md text-label-md hover:bg-[#20311D] transition-colors whitespace-nowrap font-medium"
                  >
                    Join
                  </button>
                </div>
                {error && <span className="text-xs text-red-600 pl-4">{error}</span>}
              </form>
            )}
          </motion.div>

        </motion.div>

        {/* Bottom Sub-Footer */}
        <motion.div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-on-surface-variant border-t border-outline-variant/60"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <p>© 2025 Udhayan Mushroom Farm and Institution. All rights reserved. Regenerative bio-agriculture.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-[#1D1E18] transition-colors cursor-pointer" href="#farm">Ethical Sourcing</a>
            <a className="hover:text-[#1D1E18] transition-colors cursor-pointer" href="#farm">Privacy Policy</a>
            <a className="hover:text-[#1D1E18] transition-colors cursor-pointer" href="#farm">Terms of Cultivation</a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
