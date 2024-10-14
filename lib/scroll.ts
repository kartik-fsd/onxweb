"use client"
import { useEffect, useCallback, useRef } from "react";
import Lenis from "lenis";

export default function LenisScroll(): null {
    const lenisRef = useRef<Lenis | null>(null);

    const raf = useCallback((time: number) => {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
    }, []);

    useEffect(() => {
        lenisRef.current = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        requestAnimationFrame(raf);

        return () => {
            lenisRef.current?.destroy();
        };
    }, [raf]);

    return null;
}