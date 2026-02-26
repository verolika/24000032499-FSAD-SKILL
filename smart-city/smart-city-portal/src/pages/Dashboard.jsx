/* ============================================
   DASHBOARD PAGE — Admin Panel
   ============================================ */
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import useScrollReveal from '../hooks/useScrollReveal.js';

export default function Dashboard() {
    const { user } = useAuth();
    const pageRef = useScrollReveal();

    return (
        <main className="service-page page-fade" ref={pageRef}>
            <div className="container">
                {/* Header */}
                <div className="service-page__header reveal">
                    <h1>📊 Dashboard</h1>
                    <p>Welcome back, <span id="userName">{user?.name || 'Citizen'}</span>! Manage all city services from here.</p>
                </div>

                {/* Quick Stats */}
                <div className="dashboard-stats reveal">
                    <div className="stat-card">
                        <div className="stat-card__icon">📋</div>
                        <div className="stat-card__info">
                            <h3>12</h3>
                            <p>Active Reports</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-card__icon">✅</div>
                        <div className="stat-card__info">
                            <h3>48</h3>
                            <p>Resolved Issues</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-card__icon">⚠️</div>
                        <div className="stat-card__info">
                            <h3>3</h3>
                            <p>Active Alerts</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-card__icon">🏙️</div>
                        <div className="stat-card__info">
                            <h3>98.7%</h3>
                            <p>City Uptime</p>
                        </div>
                    </div>
                </div>

                {/* Service Links */}
                <h2 className="dashboard-section-title reveal">City Services</h2>
                <div className="services__grid reveal">
                    <Link to="/transport" className="service-card" id="dash-transport">
                        <div className="service-card__icon">🚇</div>
                        <h3>Transport</h3>
                        <p>Real-time transit tracking, route planning, and incident reporting.</p>
                    </Link>
                    <Link to="/hospitals" className="service-card" id="dash-hospitals">
                        <div className="service-card__icon">🏥</div>
                        <h3>Hospitals</h3>
                        <p>Healthcare services, bed availability, and emergency reporting.</p>
                    </Link>
                    <Link to="/electricity" className="service-card" id="dash-electricity">
                        <div className="service-card__icon">⚡</div>
                        <h3>Electricity</h3>
                        <p>Power consumption monitoring, outage tracking, and smart grid.</p>
                    </Link>
                    <Link to="/water" className="service-card" id="dash-water">
                        <div className="service-card__icon">💧</div>
                        <h3>Water</h3>
                        <p>Supply status, water quality metrics, and leak reporting.</p>
                    </Link>
                </div>

                {/* Recent Activity */}
                <h2 className="dashboard-section-title reveal">Recent Activity</h2>
                <div className="info-card reveal" id="recent-activity" style={{ maxWidth: '700px' }}>
                    <div className="update-item">
                        <div className="update-item__dot update-item__dot--green"></div>
                        <div className="update-item__text">
                            <strong>Your report #1042 has been resolved</strong>
                            <span>Water leak in Sector 6 — fixed on Feb 22</span>
                        </div>
                    </div>
                    <div className="update-item">
                        <div className="update-item__dot update-item__dot--blue"></div>
                        <div className="update-item__text">
                            <strong>New service: AI Health Consultation</strong>
                            <span>Telemedicine now available 24/7 via the Health portal</span>
                        </div>
                    </div>
                    <div className="update-item">
                        <div className="update-item__dot update-item__dot--yellow"></div>
                        <div className="update-item__text">
                            <strong>Scheduled maintenance tonight</strong>
                            <span>Grid Zone B rolling blackout 11 PM - 5 AM</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
