"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[var(--color-emerald-dark)]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
            >
              We engineer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-emerald-accent)] to-[var(--color-emerald-dark)]">
                growth.
              </span>
            </motion.h2>
          </div>

          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 text-xl md:text-2xl font-light leading-relaxed text-balance"
            >
              VyntCore was founded with a singular vision: to empower small and medium-sized businesses with the digital infrastructure usually reserved for enterprise giants.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 text-lg leading-relaxed text-balance"
            >
              We believe your website should be your hardest-working employee. By combining premium aesthetics with rigorous SEO and AEO optimization, we build digital presences that don't just look stunning—they dominate search results and convert traffic into revenue.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5"
            >
              <div>
                <p className="font-heading text-4xl font-bold text-white mb-2">98<span className="text-[var(--color-emerald-accent)]">%</span></p>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Client Retention</p>
              </div>
              <div>
                <p className="font-heading text-4xl font-bold text-white mb-2">3x</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Average ROI</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
