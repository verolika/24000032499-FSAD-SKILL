/* ============================================
   FOOTER — Shared footer component
   ============================================ */
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; 2026 <Link to="/">SmartCity</Link>. All rights reserved. Building smarter cities together.</p>
            </div>
        </footer>
    );
}
