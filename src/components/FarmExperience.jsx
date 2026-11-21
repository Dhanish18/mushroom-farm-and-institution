import React from 'react';
import { motion } from 'framer-motion';
import { Scale, RefreshCw, ChefHat } from 'lucide-react';
import { fadeInUp, fadeInLeft, staggerContainer, staggerItem, scaleIn, viewport } from '../utils/animations';

export default function FarmExperience() {
  return (
    <section id="experience" className="w-full py-24 bg-[#FAF4ED] relative border-b border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
        
        {/* Section Title */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <div>
            <span className="font-label-md text-label-md text-[#475C3E] uppercase tracking-widest block mb-2 font-semibold">
              Bio-Architectural Cultivation
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#1D1E18] tracking-tight font-serif font-bold">
              The Modern Mycological Chamber
            </h2>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
            A blend of natural biology and hyper-clean precision farming. Our modular chambers consume 90% less water than traditional field farms.
          </p>
        </motion.div>

        {/* Immersive Grid / Visual Tour */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Big Feature Visual */}
          <motion.div
            className="lg:col-span-8 rounded-3xl overflow-hidden relative min-h-[420px] shadow-md border border-outline-variant flex flex-col justify-end p-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={scaleIn}
          >
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
              alt="Interior of an ultra-modern indoor mushroom vertical farm, shelves stacked with organic substrate blocks covered in blooming white Lion's mane and blue oyster mushrooms" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIp2hsET9TeVwUfgJMzH_9X4kl6Zaah2WynHfGmXl4kXS0v37Mi_ja7vTKj5vmT8MQaLADYCbdF8-BXtjvPeU8NzGms4m6wbsVQyqCD6609Tufwr_3Ha9DAq3oByWL1yztwe2pepBybgxqzE3sq6ASek1nnbPWC08kMvPMsySo_pQcf8RCzO3aejMZSBK5-QsNAIPkHM_fYssq0MMbMjAibUVLmfNcnKVFiw90CFBv" 
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C2A1A]/95 via-[#1C2A1A]/40 to-transparent pointer-events-none" />
            
            <div className="relative z-10 flex flex-col gap-2 text-white max-w-lg">
              <span className="px-3 py-1 rounded-full bg-[#E2EBDA] text-[#263B22] font-label-sm text-label-sm w-fit font-bold uppercase tracking-wider">
                Vertical Ecology
              </span>
              <h3 className="font-headline-lg text-2xl sm:text-3xl text-white font-serif font-bold">
                Closed-Loop Ultrasonic Misting
              </h3>
              <p className="font-body-md text-body-md text-[#FAF4ED]/90">
                Each chamber recycles condensation via reverse osmosis, generating sub-micron droplet fogs that feed fungal respiration without water pooling.
              </p>
            </div>
          </motion.div>

          {/* Right Side Micro Telemetry Cards */}
          <motion.div
            className="lg:col-span-4 flex flex-col gap-6 justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
          >
            {/* Telemetry 1 */}
            <motion.div variants={staggerItem} className="p-6 rounded-3xl bg-white border border-outline-variant shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between text-[#475C3E]">
                <Scale className="w-6 h-6" />
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Annual Yield</span>
              </div>
              <div className="font-display-lg text-3xl sm:text-4xl text-[#1D1E18] font-bold font-serif">
                14,000<span className="text-[#475C3E] text-2xl font-normal"> + kg</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Annual harvested volume across specialty culinary and medicinal strains.
              </p>
            </motion.div>

            {/* Telemetry 2 */}
            <motion.div variants={staggerItem} className="p-6 rounded-3xl bg-white border border-outline-variant shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between text-[#475C3E]">
                <RefreshCw className="w-6 h-6" />
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Zero Footprint</span>
              </div>
              <div className="font-display-lg text-3xl sm:text-4xl text-[#1D1E18] font-bold font-serif">
                0%<span className="text-[#475C3E] text-2xl font-normal"> Waste</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Spent substrate blocks return directly to local urban soils as nutrient-dense organic compost.
              </p>
            </motion.div>

            {/* Telemetry 3 */}
            <motion.div variants={staggerItem} className="p-6 rounded-3xl bg-white border border-outline-variant shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between text-[#475C3E]">
                <ChefHat className="w-6 h-6" />
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Gastronomy</span>
              </div>
              <div className="font-display-lg text-3xl sm:text-4xl text-[#1D1E18] font-bold font-serif">
                42+<span className="text-[#475C3E] text-2xl font-normal"> Kitchens</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Partnered culinary programs relying on weekly bespoke harvest schedules.
              </p>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
