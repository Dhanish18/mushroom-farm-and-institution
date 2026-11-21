import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Tractor, Repeat, ShieldCheck } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem, viewport } from '../utils/animations';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Sprout,
      title: "100% Natural Cultivation",
      description: "No forced growth stimulants, no synthetic foliar sprays. Only pure water, natural hardwoods, and clean mountain spore lines."
    },
    {
      icon: Tractor,
      title: "Fresh Farm Harvest",
      description: "Shipped cold packed immediately after daybreak clipping. Arrives crisp with intact veils and resilient moisture levels."
    },
    {
      icon: Repeat,
      title: "Closed-Loop Farming",
      description: "Our growing blocks are made of upcycled timber mill surplus, and every kilogram of post-flush substrate enriches local community soils."
    },
    {
      icon: ShieldCheck,
      title: "ISO Lab Production",
      description: "Monitored under cleanroom protocols to ensure every specimen is free from foreign bacterial contaminants and mold spores."
    }
  ];

  return (
    <section id="why-us" className="w-full py-24 bg-[#F5EDE2] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto flex flex-col gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <span className="font-label-md text-label-md text-[#475C3E] uppercase tracking-widest font-semibold">
            The Udhayan Distinction
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#1D1E18] tracking-tight font-serif font-bold">
            Why Our Fungi Elevate Culinary Standards
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            We combine biological integrity with exacting laboratory standards to deliver mushrooms of unparalleled texture and density.
          </p>
        </motion.div>

        {/* 4 Distinction Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div 
                key={i}
                variants={staggerItem}
                className="flex flex-col items-start gap-4 p-8 rounded-3xl bg-white border border-outline-variant hover:border-[#828577] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#E2EBDA] flex items-center justify-center text-[#2D4229]">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-headline-sm text-xl text-[#1D1E18] font-serif font-semibold">
                  {r.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {r.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
