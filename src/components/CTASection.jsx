import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, ShoppingBag, Download, CheckCircle2 } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem, viewport } from '../utils/animations';

export default function CTASection({ onOpenGuide }) {
  const scrollToCollection = (e) => {
    e.preventDefault();
    const el = document.getElementById('collection');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full py-28 bg-[#1C2A1A] relative overflow-hidden">
      {/* Atmospheric depth lighting */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[50rem] h-[25rem] rounded-full bg-[#243821]/60 blur-[130px] pointer-events-none" />

      <motion.div
        className="max-w-5xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        
        {/* Overline Tag */}
        <motion.div
          variants={staggerItem}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#D1E6BF]"
        >
          <Sprout className="w-4 h-4" />
          <span className="font-label-md text-label-md uppercase tracking-wider font-semibold">
            Direct From Our Chambers
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          variants={staggerItem}
          className="font-display-lg text-4xl sm:text-5xl text-[#FAF4ED] tracking-tight max-w-3xl font-serif font-bold"
        >
          Bring the Freshness of Nature Home.
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={staggerItem}
          className="font-body-lg text-body-lg text-[#FAF4ED]/85 max-w-2xl leading-relaxed"
        >
          Experience premium organic mushrooms cultivated with reverence for the ecosystem and delivered fresh from our cleanroom vaults to your kitchen within hours of harvest.
        </motion.p>

        {/* Action Row */}
        <motion.div
          variants={staggerItem}
          className="flex flex-wrap items-center justify-center gap-5 pt-4"
        >
          <a
            href="#collection"
            onClick={scrollToCollection}
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#FAF4ED] text-[#1D1E18] font-label-lg text-label-lg shadow-lg hover:bg-white transition-all duration-300 transform hover:-translate-y-0.5 font-semibold"
          >
            <span>Shop Growing Kits</span>
            <ShoppingBag className="w-[18px] h-[18px]" />
          </a>

          <button
            onClick={onOpenGuide}
            type="button"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/20 text-[#FAF4ED] hover:bg-white/10 font-label-lg text-label-lg transition-colors"
          >
            <Download className="w-5 h-5" />
            <span>Download Cultivation Guide (PDF)</span>
          </button>
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          variants={staggerItem}
          className="pt-8 flex flex-wrap items-center justify-center gap-8 text-[#FAF4ED]/60 font-body-sm text-body-sm"
        >
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#D1E6BF]" />
            Guaranteed Fresh Delivery
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#D1E6BF]" />
            Zero Plastic Packaging
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#D1E6BF]" />
            Carbon-Neutral Cold Chain
          </span>
        </motion.div>

      </motion.div>
    </section>
  );
}
