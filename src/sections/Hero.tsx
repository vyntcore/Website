"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FRAME_COUNT = 121;
const getFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(3, "0");
  return `/frames/Sphere_revolve/ezgif-frame-${paddedIndex}.jpg`;
};

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
        if (loadedCount === FRAME_COUNT) {
          imagesRef.current = images;
          setImagesLoaded(true);
        }
      };
      images.push(img);
    }
  }, []);

  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current || !sectionRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = (index: number) => {
      const img = imagesRef.current[index];
      if (!img) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    render(0);

    const animationState = { frame: 0 };
    
    // We use matchMedia to ensure animations are optimized per device if necessary,
    // but a global timeline works well here.
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=300%",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      animation: gsap.timeline()
        .to(animationState, {
          frame: FRAME_COUNT - 1,
          snap: "frame",
          ease: "none",
          onUpdate: () => render(animationState.frame),
        }, 0)
        .to(textRef.current, {
          opacity: 0,
          y: -50,
          ease: "power2.inOut",
        }, 0),
    });

    // Refresh ScrollTrigger after DOM settles to fix pin height calculation
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    const handleResize = () => {
      render(animationState.frame);
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      st.kill();
    };
  }, [imagesLoaded]);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-black">
      {!imagesLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#050505] z-50">
          <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[var(--color-emerald-accent)] transition-all duration-300 ease-out"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <span className="text-white/40 text-xs mt-4 uppercase tracking-widest font-heading">
            Loading Experience
          </span>
        </div>
      )}

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0A0A0A] z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

      <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12 container mx-auto">
        <div ref={textRef} className="max-w-3xl pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm font-medium tracking-wide mb-6 backdrop-blur-md">
              Premium Digital Experiences
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[1.1] mb-6"
          >
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Digital Presence.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed text-balance font-light"
          >
            We help ambitious brands dominate their market with high-end, conversion-focused websites and powerful SEO.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="#contact"
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-base hover:bg-[var(--color-emerald-accent)] transition-colors duration-500 w-full sm:w-auto"
            >
              Start a Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#portfolio"
              className="px-8 py-4 rounded-full text-white font-medium text-base hover:text-[var(--color-emerald-accent)] transition-colors duration-300 w-full sm:w-auto text-center"
            >
              View Selected Work
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-medium">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}

