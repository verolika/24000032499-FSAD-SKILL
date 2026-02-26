/* ============================================
   SCROLL REVEAL — Intersection Observer hook
   ============================================ */
import { useEffect, useRef } from 'react';

export default function useScrollReveal() {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        );

        /* Observe all .reveal children */
        const reveals = el.querySelectorAll('.reveal');
        reveals.forEach(r => observer.observe(r));

        return () => observer.disconnect();
    }, []);

    return ref;
}
