"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowLeft, Maximize2 } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  url: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [viewMode, setViewMode] = useState<"intro" | "preview">("intro");

  // Reset view mode when modal opens
  useEffect(() => {
    if (isOpen) {
      setViewMode("intro");
      document.body.style.overflow = "hidden"; // Prevent scrolling underneath
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 md:top-10 md:right-10 z-[110] p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 group"
          >
            <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {viewMode === "intro" ? (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center max-w-5xl h-full overflow-y-auto py-24"
            >
              <div className="w-full aspect-video relative rounded-2xl md:rounded-3xl overflow-hidden mb-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              </div>

              <span className="inline-block py-1.5 px-4 rounded-full border border-[var(--color-emerald-accent)]/20 bg-[var(--color-emerald-accent)]/5 text-[var(--color-emerald-accent)] text-xs md:text-sm font-medium tracking-widest uppercase mb-6">
                {project.category}
              </span>

              <h2 className="font-heading text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
                {project.title}
              </h2>

              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 text-balance">
                {project.description}
              </p>

              <button
                onClick={() => setViewMode("preview")}
                className="group flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-semibold text-lg hover:bg-[var(--color-emerald-accent)] transition-colors duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(0,229,115,0.4)]"
              >
                <Maximize2 size={20} className="group-hover:scale-110 transition-transform" />
                Open Live Preview
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full p-4 md:p-8 flex flex-col"
            >
              <div className="flex items-center justify-between bg-[#111] border border-white/10 rounded-t-2xl px-6 py-4">
                <button
                  onClick={() => setViewMode("intro")}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  <ArrowLeft size={16} />
                  Back to Overview
                </button>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="hidden md:flex items-center gap-2 text-gray-500 text-sm">
                  <span className="truncate max-w-[200px]">{project.url.replace('/portfolio/', '')}</span>
                  <ExternalLink size={14} />
                </div>
              </div>
              <div className="flex-1 w-full bg-white rounded-b-2xl overflow-hidden relative">
                {/* Loader while iframe is initializing */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#050505] z-0">
                  <div className="w-8 h-8 border-2 border-white/10 border-t-[var(--color-emerald-accent)] rounded-full animate-spin" />
                </div>
                <iframe
                  src={project.url}
                  title={`${project.title} Preview`}
                  className="w-full h-full border-none relative z-10"
                  loading="lazy"
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
