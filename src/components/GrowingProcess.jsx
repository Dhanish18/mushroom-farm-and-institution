import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Dna, Activity, Scissors, Radio } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem, scaleIn, viewport } from '../utils/animations';

export default function GrowingProcess() {
  const stages = [
    {
      num: "01",
      param: "65% RH • 121°C",
      title: "Substrate Preparation",
      desc: "Locally sourced hardwood sawdust and wheat bran are hydrated to exact moisture ratios and autoclave-sterilized.",
      badge: "Sterile Autoclave Phase",
      icon: FlaskConical
    },
    {
      num: "02",
      param: "ISO-5 • 22°C",
      title: "Clean Inoculation",
      desc: "Liquid master culture is introduced to cooled substrate bags within laminar flow hoods to safeguard genetic vitality.",
      badge: "Laminar Flow Air Curtain",
      icon: Dna
    },
    {
      num: "03",
      param: "Darkness • 24°C",
      title: "Mycelial Incubation",
      desc: "In sensory-dark chambers, fine hyphal threads weave through the matrix, consuming lignocellulose and establishing vigor.",
      badge: "Hyphal Colonization",
      icon: Activity
    },
    {
      num: "04",
      param: "94% RH • 16°C",
      title: "Fruiting & Harvest",
      desc: "Fresh air exchanges and ultrasonic humidity trigger robust mushroom pinheads that mature into prime caps in 48 hours.",
      badge: "Hand-Trimmed at Dawn",
      icon: Scissors
    }
  ];

  return (
    <section id="process" className="w-full py-24 bg-[#1C2A1A] text-[#FAF4ED] relative overflow-hidden">
      {/* Atmospheric green mist gradients */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-[#243821]/50 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full bg-[#2D4229]/40 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-20 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <div className="max-w-xl">
            <span className="font-label-md text-label-md text-[#D1E6BF] uppercase tracking-widest block mb-2 font-semibold">
              Biological Precision
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#FAF4ED] tracking-tight font-serif font-bold">
              From Spore to Harvest
            </h2>
          </div>
          <p className="font-body-lg text-body-lg text-[#FAF4ED]/80 max-w-md">
            A four-stage lifecycle orchestrated to mimic prime understory seasonal conditions through dynamic climate control.
          </p>
        </motion.div>

        {/* Process 4-Stage Timeline Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {stages.map((stg) => {
            const Icon = stg.icon;
            return (
              <motion.div 
                key={stg.num}
                variants={staggerItem}
                className="flex flex-col gap-5 p-6 rounded-3xl bg-[#243821] border border-white/10 shadow-sm relative hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display-lg text-4xl text-[#D1E6BF]/50 font-serif font-bold">
                    {stg.num}
                  </span>
                  <div className="px-3 py-1 rounded-full bg-white/10 text-[#D1E6BF] font-label-sm text-label-sm font-semibold">
                    {stg.param}
                  </div>
                </div>

                <div>
                  <h3 className="font-headline-sm text-xl text-[#FAF4ED] mb-2 font-serif font-semibold">
                    {stg.title}
                  </h3>
                  <p className="font-body-md text-body-md text-[#FAF4ED]/75">
                    {stg.desc}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-[#D1E6BF] font-body-sm text-body-sm">
                  <Icon className="w-4 h-4" />
                  <span>{stg.badge}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Real-Time Telemetry Bar */}
        <motion.div
          className="p-6 rounded-2xl bg-[#243821] border border-white/15 flex flex-wrap items-center justify-between gap-6 shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D1E6BF] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D1E6BF]" />
            </span>
            <span className="font-label-lg text-label-lg font-semibold tracking-wide text-white">
              Live Fruiting Vault Status: Chamber Alpha-7
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-body-sm text-body-sm text-[#D1E6BF]">
            <div><span className="text-white font-bold">CO2:</span> 780 PPM (Optimal)</div>
            <div><span className="text-white font-bold">RH:</span> 94.2% (Ultrasonic Mist active)</div>
            <div><span className="text-white font-bold">TEMP:</span> 16.8°C</div>
            <div><span className="text-white font-bold">SPECTRUM:</span> 6500K Dusk Emulation</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
