import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MUSHROOMS, CATEGORIES } from '../data/mushrooms';
import MushroomCard from './MushroomCard';
import { fadeInUp, staggerContainer, staggerItem, viewport } from '../utils/animations';

export default function MushroomCollection({ onSelectMushroom, onAddToCart, cartItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All Harvests");

  const filteredMushrooms = selectedCategory === "All Harvests"
    ? MUSHROOMS
    : MUSHROOMS.filter(m => m.category === selectedCategory);

  const cartItemIds = new Set(cartItems.map(item => item.id));

  return (
    <section id="collection" className="w-full py-24 bg-[#F5EDE2] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        
        {/* Collection Header & Filter Pills */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <div>
            <span className="font-label-md text-label-md text-[#475C3E] uppercase tracking-widest block mb-2 font-semibold">
              Our Living Archive
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#1D1E18] tracking-tight font-serif font-bold">
              Explore Our Mushroom Varieties
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center flex-wrap gap-2 p-1.5 rounded-full bg-[#EAE0CF] border border-outline-variant shadow-inner">
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full font-label-md text-label-md transition-all duration-300 font-medium ${
                    isSelected
                      ? 'bg-[#2D4229] text-white shadow-sm'
                      : 'text-on-surface-variant hover:text-[#1D1E18] hover:bg-white/40'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 6 Variety Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          <AnimatePresence mode="popLayout">
            {filteredMushrooms.map((mushroom) => (
              <motion.div
                key={mushroom.id}
                variants={staggerItem}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <MushroomCard
                  mushroom={mushroom}
                  onSelect={onSelectMushroom}
                  onAddToCart={onAddToCart}
                  isInCart={cartItemIds.has(mushroom.id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
