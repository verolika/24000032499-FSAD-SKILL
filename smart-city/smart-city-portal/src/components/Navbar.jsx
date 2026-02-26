/* ============================================
   NAVBAR — Shared navigation component
   ============================================ */
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Navbar() {
    const { isAuthenticated, logout } = useAuth();
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    /* Scroll-based navbar styling */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* Close menu on route change */
    useEffect(() => { setMenuOpen(false); }, [location]);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
    };

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
            <Link to="/" className="navbar__logo">Smart<span>City</span></Link>

            <div className={`navbar__links${menuOpen ? ' open' : ''}`} id="navLinks">
                <Link to="/" className={isActive('/')}>Home</Link>

                {/* Guest links */}
                {!isAuthenticated && (
                    <>
                        <Link to="/login" className={isActive('/login')}>Login</Link>
                        <Link to="/signup" className={isActive('/signup')}>Signup</Link>
                    </>
                )}

                {/* Authenticated links */}
                {isAuthenticated && (
                    <>
                        <Link to="/dashboard" className={isActive('/dashboard')}>Dashboard</Link>
                        <a href="#" onClick={handleLogout} id="logoutBtn">Logout</a>
                    </>
                )}
            </div>

            <button
                className={`hamburger${menuOpen ? ' open' : ''}`}
                id="hamburger"
                aria-label="Toggle navigation"
                onClick={() => setMenuOpen(prev => !prev)}
            >
                <span></span><span></span><span></span>
            </button>
        </nav>
    );
}
