/* ============================================
   WATER PAGE — Service module
   ============================================ */
import { useState } from 'react';
import { useToast } from '../context/ToastContext.jsx';
import useScrollReveal from '../hooks/useScrollReveal.js';

export default function Water() {
    const { showToast } = useToast();
    const pageRef = useScrollReveal();
    const [issue, setIssue] = useState('');
    const [location, setLocation] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = {};
        if (!issue.trim()) errs.issue = 'Please describe the issue';
        if (!location.trim()) errs.location = 'Location is required';
        setErrors(errs);
        if (Object.keys(errs).length > 0) return;
        showToast('✅ Report submitted successfully!');
        setIssue('');
        setLocation('');
        setErrors({});
    };

    return (
        <main className="service-page page-fade" ref={pageRef}>
            <div className="container">
                <div className="service-page__header reveal">
                    <h1>💧 Smart Water Management</h1>
                    <p>Supply monitoring, water quality analytics, and leak detection</p>
                </div>

                <div className="service-page__grid">
                    {/* Live Updates */}
                    <div className="info-card reveal" id="water-live-updates">
                        <h3><span className="icon">📡</span> Live Updates</h3>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--red"></div>
                            <div className="update-item__text">
                                <strong>Main Pipeline Leak — Sector 6</strong>
                                <span>Major leak detected. Repair in progress. Water pressure reduced in areas 6A-6D.</span>
                            </div>
                        </div>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--yellow"></div>
                            <div className="update-item__text">
                                <strong>Water Quality Advisory — Sector 9</strong>
                                <span>Elevated chlorine levels detected. Safe for use but boil advisory for drinking.</span>
                            </div>
                        </div>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--green"></div>
                            <div className="update-item__text">
                                <strong>Reservoir Levels — Optimal</strong>
                                <span>All 4 city reservoirs at 85%+ capacity. No supply concerns for next 30 days.</span>
                            </div>
                        </div>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--blue"></div>
                            <div className="update-item__text">
                                <strong>Smart Irrigation System Live</strong>
                                <span>AI-driven irrigation deployed across 140 hectares of city parks and green zones.</span>
                            </div>
                        </div>
                    </div>

                    {/* Report Issue */}
                    <div className="info-card reveal" id="water-report-form">
                        <h3><span className="icon">📝</span> Report an Issue</h3>
                        <form onSubmit={handleSubmit} id="waterForm">
                            <div className="form-group">
                                <label htmlFor="issue">Issue Description</label>
                                <textarea
                                    id="issue"
                                    placeholder="Describe the water issue..."
                                    className={errors.issue ? 'error' : ''}
                                    value={issue}
                                    onChange={e => { setIssue(e.target.value); setErrors(prev => ({ ...prev, issue: '' })); }}
                                ></textarea>
                                {errors.issue && <span className="error-msg visible">{errors.issue}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="location">Location</label>
                                <input
                                    type="text"
                                    id="location"
                                    placeholder="e.g. Sector 6, Apartment Block B"
                                    className={errors.location ? 'error' : ''}
                                    value={location}
                                    onChange={e => { setLocation(e.target.value); setErrors(prev => ({ ...prev, location: '' })); }}
                                />
                                {errors.location && <span className="error-msg visible">{errors.location}</span>}
                            </div>
                            <button type="submit" className="btn btn--primary">Submit Report</button>
                        </form>
                    </div>

                    {/* Resolved Issues */}
                    <div className="info-card reveal" id="water-resolved">
                        <h3><span className="icon">✅</span> Resolved Issues</h3>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--green"></div>
                            <div className="update-item__text">
                                <strong>Sewage Overflow Fixed — Sector 3</strong>
                                <span>Drainage system unclogged and sanitized. Feb 22.</span>
                            </div>
                        </div>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--green"></div>
                            <div className="update-item__text">
                                <strong>Water Pressure Restored — Sector 11</strong>
                                <span>Pump station repaired. Normal pressure resumed. Feb 21.</span>
                            </div>
                        </div>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--green"></div>
                            <div className="update-item__text">
                                <strong>Contamination Cleared — Lake District</strong>
                                <span>Water purification completed. Quality tests passed. Feb 19.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
