import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Sprout } from 'lucide-react';
import { MUSHROOMS } from '../data/mushrooms';
import { fadeInUp, staggerContainer, staggerItem, viewport } from '../utils/animations';

const farmImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIp2hsET9TeVwUfgJMzH_9X4kl6Zaah2WynHfGmXl4kXS0v37Mi_ja7vTKj5vmT8MQaLADYCbdF8-BXtjvPeU8NzGms4m6wbsVQyqCD6609Tufwr_3Ha9DAq3oByWL1yztwe2pepBybgxqzE3sq6ASek1nnbPWC08kMvPMsySo_pQcf8RCzO3aejMZSBK5-QsNAIPkHM_fYssq0MMbMjAibUVLmfNcnKVFiw90CFBv';

const highlights = [
  {
    label: 'Smart Cultivation',
    title: 'Smart Cultivation',
    image: farmImage,
    alt: 'Rows of mushrooms growing in a clean indoor farm',
    href: '#process',
  },
  {
    label: 'Premium Mycelium',
    title: 'Premium Mycelium',
    image: MUSHROOMS[2].image,
    alt: MUSHROOMS[2].alt,
    href: '#collection',
  },
  {
    label: 'Harvest Metrics',
    title: 'Flush Time',
    image: MUSHROOMS[0].image,
    alt: MUSHROOMS[0].alt,
    href: '#experience',
  },
  {
    label: 'Culinary',
    title: 'Gourmet mushrooms',
    image: MUSHROOMS[3].image,
    alt: MUSHROOMS[3].alt,
    href: '#collection',
  },
];

export default function AboutFarm() {
  return (
    <section className="impact-section" aria-label="Our impact">
      <motion.div
        className="impact-grid"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        {highlights.slice(0, 2).map((highlight) => (
          <motion.a
            key={highlight.label}
            href={highlight.href}
            variants={staggerItem}
            className="impact-card"
            aria-label={`Explore ${highlight.title}`}
          >
            <img src={highlight.image} alt={highlight.alt} loading="lazy" />
            <span className="impact-card-label">| {highlight.label}</span>
            <span className="impact-card-title">
              {highlight.title}
              <ArrowRight aria-hidden="true" />
            </span>
          </motion.a>
        ))}

        <motion.div
          className="impact-message"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <span className="impact-mark"><Sprout aria-hidden="true" /></span>
          <span className="impact-eyebrow">Our Impact</span>
          <h2>Sustainable Cultivation<br />for <span>Generations Ahead.</span></h2>
          <p>We empower growers with smart tools, expert knowledge, and sustainable ways to cultivate.</p>
        </motion.div>

        {highlights.slice(2).map((highlight) => (
          <motion.a
            key={highlight.label}
            href={highlight.href}
            variants={staggerItem}
            className="impact-card"
            aria-label={`Explore ${highlight.title}`}
          >
            <img src={highlight.image} alt={highlight.alt} loading="lazy" />
            <span className="impact-card-label">| {highlight.label}</span>
            <span className="impact-card-title">
              {highlight.title}
              <ArrowRight aria-hidden="true" />
            </span>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        className="impact-footer"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeInUp}
      >
        <span className="impact-sustainable">
          <Leaf aria-hidden="true" />
          <strong>100%</strong> Sustainable
        </span>
        <span className="impact-footer-note">
          <i /> SUSTAINABLY HARVESTED IN PACIFIC NORTHWEST · ZERO SYNTHETICS
        </span>
      </motion.div>
    </section>
  );
}
