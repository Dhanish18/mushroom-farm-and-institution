import React from 'react';
import MushroomIcon from './MushroomIcon';

export default function Footer() {
  return (
    <footer id="consultation" className="w-full bg-[#0b110c] text-[#eee9d8] py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <MushroomIcon className="w-5 h-5 text-[#D1E6BF]" />
            <h2 className="font-serif font-bold text-lg">Udhayan Mushroom Cultivation Farm</h2>
          </div>
          <p className="mt-2 text-sm text-[#b7baa8]">
            Kadachanenthal, Madurai, Tamil Nadu
          </p>
        </div>
        <a
          href="https://wa.me/91"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white hover:bg-[#1DA851] transition-colors"
        >
          Consultation via WhatsApp
        </a>
      </div>
    </footer>
  );
}
