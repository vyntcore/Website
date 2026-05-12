"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ProjectModal, { ProjectData } from "@/components/ProjectModal";

const projects: ProjectData[] = [
  {
    id: "plumber",
    title: "Aqua Flow",
    category: "Luxury Home Services",
    description: "A high-end digital presence for a bespoke plumbing and fixture installation company. We focused on dark, rich aesthetics to convey trust and uncompromising quality.",
    image: "/portfolio/plumber/IMG_9535.PNG",
    url: "/portfolio/plumber/plumber.html",
  },
  {
    id: "restaurant",
    title: "L'Éclat Fine Dining",
    category: "Hospitality & Reservations",
    description: "An immersive, cinematic website for a Michelin-starred restaurant. The design emphasizes food photography and a seamless reservation booking flow.",
    image: "/portfolio/restaurant-thumb.png",
    url: "/portfolio/restaurant/restaurant.html",
  },
  {
    id: "tshirt",
    title: "Noise Lab",
    category: "E-Commerce & Fashion",
    description: "A brutalist, high-fashion e-commerce experience for a luxury streetwear brand. The interface is minimal, putting the bold typography and garments front and center.",
    image: "/portfolio/tshirt/Untitled%202.PNG",
    url: "/portfolio/tshirt/tshirt.html",
  },
];

// Reusable Premium Card Component
const ProjectCard = ({ project, index, onClick }: { project: ProjectData; index: number; onClick: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Parallax setup for desktop
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  
  const imageX = useTransform(smoothX, [-0.5, 0.5], ["-5%", "5%"]);
  const imageY = useTransform(smoothY, [-0.5, 0.5], ["-5%", "5%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="group block w-full cursor-pointer"
    >
      <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden mb-6 md:mb-8 border border-white/5 bg-[#050505]">
        <motion.div 
          className="absolute inset-[-5%] w-[110%] h-[110%]"
          style={{ x: imageX, y: imageY }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={index <= 1}
            className="object-cover object-top transform group-hover:scale-105 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] opacity-80 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 100vw"
          />
        </motion.div>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
        
        {/* Glow accent */}
        <div className="absolute inset-0 bg-[var(--color-emerald-accent)]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-2 md:px-4">
        <div className="max-w-xl">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-emerald-accent)]">
              {project.category}
            </span>
            <div className="h-[1px] w-12 bg-white/10" />
          </div>
          <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 group-hover:text-white transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed line-clamp-2 md:line-clamp-none">
            {project.description}
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-sm font-medium text-white/50 group-hover:text-white transition-colors duration-300 hidden md:block">
            View Project
          </span>
          <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[var(--color-emerald-accent)] group-hover:bg-[var(--color-emerald-accent)] group-hover:text-black transition-all duration-500 ease-[0.16,1,0.3,1]">
            <ArrowUpRight size={24} className="text-white group-hover:text-black transition-colors duration-300" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <>
      <section id="portfolio" className="py-24 md:py-40 relative bg-[#0A0A0A] z-10">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-emerald-dark)]/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col mb-20 md:mb-32">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tighter"
            >
              Featured <br />
              <span className="text-gray-500">Projects.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl font-light"
            >
              A curated selection of our most impactful digital experiences. We blend premium aesthetics with conversion-focused strategy.
            </motion.p>
          </div>

          <div className="space-y-24 md:space-y-40">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
      />
    </>
  );
}

