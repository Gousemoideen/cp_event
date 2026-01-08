'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 border-y border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="text-center mb-8"
        >
          <h2 className="font-ui text-primary text-sm tracking-widest mb-2">
            // POWERED_BY
          </h2>
          <h3 className="font-ui text-4xl md:text-5xl font-bold text-white">
            SPONSORS
          </h3>
        </motion.div>

        <div className="flex justify-center items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="group relative"
          >
            {/* Kept hover:opacity-80 for a slight interaction feel without changing color */}
            <div className="relative border border-white/10 rounded-xl p-8 md:p-12 flex flex-col items-center gap-6 transition-opacity duration-300 hover:opacity-80 bg-white/5">
              
              <div className="relative w-64 h-24 md:w-80 md:h-32">
                <Image
                  src="/unstop-logo.jpg"
                  alt="Unstop Sponsor"
                  fill
                  // Removed 'grayscale' and 'group-hover:grayscale-0'
                  className="object-contain" 
                />
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}