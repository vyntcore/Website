"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SmoothScrollProps {
  children: ReactNode;
}

function ScrollSync() {
  // This hook gives us direct access to the Lenis instance
  useLenis((lenis) => {
    // Notify ScrollTrigger every time Lenis updates scroll position
    ScrollTrigger.update();
  });
  return null;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false} options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
      <ScrollSync />
      {children}
    </ReactLenis>
  );
}
