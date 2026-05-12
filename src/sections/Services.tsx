"use client";

import { motion } from "framer-motion";
import { Code, Search, Server, TrendingUp } from "lucide-react";

const services = [
  {
    icon: <Code size={32} className="text-[var(--color-emerald-accent)]" />,
    title: "Web Development",
    description: "Custom, high-performance websites built with modern frameworks. We create digital experiences that feel premium and convert visitors into clients.",
  },
  {
    icon: <Search size={32} className="text-[var(--color-emerald-accent)]" />,
    title: "SEO Optimization",
    description: "Dominate search engine rankings with our data-driven SEO strategies. We ensure your business is found by the right audience at the right time.",
  },
  {
    icon: <TrendingUp size={32} className="text-[var(--color-emerald-accent)]" />,
    title: "AEO Strategies",
    description: "Answer Engine Optimization (AEO) to make your brand the definitive answer for AI-driven search tools and voice assistants.",
  },
  {
    icon: <Server size={32} className="text-[var(--color-emerald-accent)]" />,
    title: "Premium Hosting",
    description: "Lightning-fast, secure, and reliable hosting solutions so your website is always online and performing at its best.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Digital Excellence, <br />
            <span className="text-gray-500">Delivered.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            We don't just build websites; we build powerful online assets designed to scale your business and outshine the competition.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 md:p-10 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-[var(--color-emerald-accent)]/30 transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--color-emerald-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="mb-6 inline-block p-4 rounded-xl bg-[#121212] border border-white/5 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              
              <h3 className="font-heading text-2xl font-semibold text-white mb-4 group-hover:text-[var(--color-emerald-accent)] transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
