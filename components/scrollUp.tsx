"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ChevronUp } from "lucide-react";
import Lenis from "lenis";

const ScrollTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 2, // Increased for smoother scrolling
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 2,
      touchMultiplier: 2,
      infinite: false,
    });

    setLenis(lenisInstance);

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  useEffect(() => {
    const updateScrollInfo = () => {
      const scrollPosition = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollPosition / windowHeight) * 100;

      setIsVisible(scrollPosition > 300);
      setScrollProgress(progress);
    };

    const throttledUpdateScrollInfo = throttle(updateScrollInfo, 100); // Reduced throttle time for smoother updates

    window.addEventListener("scroll", throttledUpdateScrollInfo);

    return () =>
      window.removeEventListener("scroll", throttledUpdateScrollInfo);
  }, []);

  const scrollToTop = useCallback(() => {
    lenis?.scrollTo(0, {
      duration: 2,
      easing: (t: number) => 1 - Math.pow(1 - t, 5),
    }); // Custom easing for smoother start and end
  }, [lenis]);

  if (!isVisible) return null;

  const circleCircumference = 2 * Math.PI * 18; // 18 is the radius of the circle
  const strokeDashoffset =
    circleCircumference - (scrollProgress / 100) * circleCircumference;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-12 h-12 bg-indigo-600 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 z-50 flex items-center justify-center group"
      aria-label="Scroll to top"
    >
      <svg
        className="absolute w-12 h-12 -rotate-90 transition-transform duration-300 ease-in-out group-hover:rotate-90"
        viewBox="0 0 40 40"
      >
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="none"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="3"
        />
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeDasharray={circleCircumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300 ease-in-out"
        />
      </svg>
      <ChevronUp className="w-6 h-6 z-10 transition-transform duration-300 ease-in-out group-hover:-translate-y-1" />
    </button>
  );
};

// Throttle function to limit the rate at which a function can fire
function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function (this: unknown, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export default ScrollTopButton;
