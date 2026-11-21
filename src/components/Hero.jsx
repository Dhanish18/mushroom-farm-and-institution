import React from 'react';
import { ArrowRight, PlayCircle, Sprout } from 'lucide-react';
import MushroomCanvas3D from './MushroomCanvas3D';
import { motion } from 'framer-motion';

export default function Hero({ onOpenVideo }) {
  const scrollToCollection = (e) => {
    e.preventDefault();
    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="farm" className="hero-section relative isolate w-full overflow-hidden">
      <div className="hero-glow" />
      <div className="hero-intro">
        <span className="hero-brand"><Sprout size={17} /> Udhayan Mushroom Farm and Institution</span>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          GROW NATURE.<br /><span>HARVEST FRESH.</span>
        </motion.h1>
      </div>
      <div className="hero-art" aria-label="An animated cluster of fresh oyster mushrooms growing from rich soil">
        <MushroomCanvas3D />
      </div>
      <div className="hero-copy hero-copy-left">Discover the ancient craft and precise biotechnology of mushroom cultivation. Experience fresh, organic.</div>
      <div className="hero-copy hero-copy-right">Mushrooms grown sustainably in your own space, nurtured by recirculating air and pure botanical substrates.</div>
      <div className="hero-actions">
        <a href="#collection" onClick={scrollToCollection} className="hero-button"><span>Shop Growing Kits</span><ArrowRight size={17} /></a>
        <button type="button" onClick={onOpenVideo} className="hero-button hero-button-secondary"><PlayCircle size={17} /><span>Watch How It Works</span></button>
      </div>
    </section>
  );
}
