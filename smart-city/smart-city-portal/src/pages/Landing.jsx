/* ============================================
   LANDING PAGE — Hero + Slider + Services
   ============================================ */
import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal.js';

/* ----- City updates data ----- */
const cityUpdates = [
    {
        title: '🚇 Metro Line 5 Expansion Complete',
        description: 'The new underground metro line connecting the east and west corridors is now fully operational, reducing average commute times by 25 minutes.',
        badge: 'Infrastructure',
        badgeClass: 'badge--info',
    },
    {
        title: '🌿 Green Energy Initiative Launched',
        description: 'Smart City has committed to powering 60% of public buildings with solar and wind energy by Q4 2026, with 120 new installations underway.',
        badge: 'Sustainability',
        badgeClass: 'badge--success',
    },
    {
        title: '⚡ Grid Maintenance Scheduled',
        description: 'Rolling power maintenance across sectors 7-12 this weekend. Backup generators will be activated automatically for essential services.',
        badge: 'Alert',
        badgeClass: 'badge--warning',
    },
    {
        title: '💧 Water Purification Upgrade',
        description: 'Next-generation filtration systems are being installed at all 8 treatment plants. Water quality index expected to improve by 40% within 3 months.',
        badge: 'Health',
        badgeClass: 'badge--info',
    },
    {
        title: '🏥 New Smart Clinic Opens in Sector 3',
        description: 'AI-assisted diagnostics and telemedicine support now available 24/7 at the new downtown medical facility, serving over 50,000 residents.',
        badge: 'Healthcare',
        badgeClass: 'badge--success',
    },
];

export default function Landing() {
    const pageRef = useScrollReveal();

    return (
        <div className="page-fade" ref={pageRef}>
            {/* ===== HERO ===== */}
            <section className="hero" id="hero">
                <div className="hero__bg"></div>
                <div className="hero__overlay"></div>
                <div className="hero__content">
                    <h1>Welcome to Smart City</h1>
                    <p>
                        Experience the future of urban living — intelligent transport, healthcare, energy, and water management
                        all at your fingertips.
                    </p>
                    <Link to="/signup" className="btn btn--primary">Get Started &rarr;</Link>
                </div>
            </section>

            {/* ===== SLIDER ===== */}
            <CitySlider />

            {/* ===== SERVICES ===== */}
            <section className="services reveal" id="services">
                <div className="container">
                    <h2>City Services</h2>
                    <p className="section-subtitle">Access and manage critical infrastructure services</p>
                    <div className="services__grid">
                        <Link to="/transport" className="service-card" id="service-transport">
                            <div className="service-card__icon">🚇</div>
                            <h3>Transport</h3>
                            <p>Real-time transit tracking, route planning, and incident reporting for a seamless commute.</p>
                        </Link>
                        <Link to="/hospitals" className="service-card" id="service-hospitals">
                            <div className="service-card__icon">🏥</div>
                            <h3>Hospitals</h3>
                            <p>Access healthcare services, view bed availability, and report medical emergencies instantly.</p>
                        </Link>
                        <Link to="/electricity" className="service-card" id="service-electricity">
                            <div className="service-card__icon">⚡</div>
                            <h3>Electricity</h3>
                            <p>Monitor power consumption, track outages, and manage smart grid resources efficiently.</p>
                        </Link>
                        <Link to="/water" className="service-card" id="service-water">
                            <div className="service-card__icon">💧</div>
                            <h3>Water</h3>
                            <p>Check supply status, water quality metrics, and report leaks or contamination issues.</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

/* ===== City Updates Slider Component ===== */
function CitySlider() {
    const [current, setCurrent] = useState(0);
    const timerRef = useRef(null);
    const total = cityUpdates.length;

    const goTo = useCallback((idx) => {
        setCurrent(((idx % total) + total) % total);
    }, [total]);

    const next = useCallback(() => goTo(current + 1), [current, goTo]);
    const prev = useCallback(() => goTo(current - 1), [current, goTo]);

    /* Autoplay */
    const startAutoplay = useCallback(() => {
        timerRef.current = setInterval(() => {
            setCurrent(prev => ((prev + 1) % total));
        }, 5000);
    }, [total]);

    const resetAutoplay = useCallback(() => {
        clearInterval(timerRef.current);
        startAutoplay();
    }, [startAutoplay]);

    useEffect(() => {
        startAutoplay();
        return () => clearInterval(timerRef.current);
    }, [startAutoplay]);

    return (
        <section className="slider-section reveal" id="updates">
            <div className="container">
                <h2>City Updates</h2>
                <p className="section-subtitle">Stay informed with real-time updates from across the city</p>

                <div
                    className="slider"
                    onMouseEnter={() => clearInterval(timerRef.current)}
                    onMouseLeave={startAutoplay}
                >
                    <div className="slider__track" style={{ transform: `translateX(-${current * 100}%)` }}>
                        {cityUpdates.map((slide, i) => (
                            <div className="slider__slide" key={i}>
                                <span className={`badge ${slide.badgeClass}`}>{slide.badge}</span>
                                <h3>{slide.title}</h3>
                                <p>{slide.description}</p>
                            </div>
                        ))}
                    </div>
                    <button className="slider__arrow slider__arrow--prev" aria-label="Previous slide" onClick={() => { prev(); resetAutoplay(); }}>&#10094;</button>
                    <button className="slider__arrow slider__arrow--next" aria-label="Next slide" onClick={() => { next(); resetAutoplay(); }}>&#10095;</button>
                </div>

                <div className="slider__dots">
                    {cityUpdates.map((_, i) => (
                        <button
                            key={i}
                            className={`slider__dot${i === current ? ' active' : ''}`}
                            aria-label={`Go to slide ${i + 1}`}
                            onClick={() => { goTo(i); resetAutoplay(); }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
