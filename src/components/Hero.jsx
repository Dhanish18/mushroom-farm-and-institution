import React from 'react';
import { ArrowRight, PlayCircle, Sprout } from 'lucide-react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

export default function Hero({ onOpenVideo }) {
  const prefersReducedMotion = useReducedMotion();
  const rawTiltX = useMotionValue(0);
  const rawTiltY = useMotionValue(0);
  const tiltX = useSpring(rawTiltX, { stiffness: 65, damping: 28 });
  const tiltY = useSpring(rawTiltY, { stiffness: 65, damping: 28 });

  const handlePointerMove = (event) => {
    if (prefersReducedMotion || event.pointerType === 'touch') return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    rawTiltX.set(-y * 3);
    rawTiltY.set(x * 4);
  };

  const resetTilt = () => {
    rawTiltX.set(0);
    rawTiltY.set(0);
  };

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
      <div className="hero-art" onPointerMove={handlePointerMove} onPointerLeave={resetTilt}>
        <motion.img
          className="hero-mushroom-image"
          src="/udhayan-mushrooms.png"
          alt="A fresh cluster of oyster and lion's mane mushrooms growing from rich soil"
          fetchpriority="high"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.84, scaleY: 0.9 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1, scaleY: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          style={{ rotateX: tiltX, rotateY: tiltY, transformOrigin: '50% 88%' }}
        />
        <div className="hero-spores" aria-hidden="true">
          {Array.from({ length: 10 }, (_, index) => (
            <span className="hero-spore" key={index} />
          ))}
        </div>
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
