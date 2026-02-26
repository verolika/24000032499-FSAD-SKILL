/* ============================================
   TRANSPORT PAGE — Service module
   ============================================ */
import { useState } from 'react';
import { useToast } from '../context/ToastContext.jsx';
import useScrollReveal from '../hooks/useScrollReveal.js';

export default function Transport() {
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
                    <h1>🚇 Smart Transport Management</h1>
                    <p>Real-time updates, incident reporting, and transit analytics for a connected city</p>
                </div>

                <div className="service-page__grid">
                    {/* Live Updates */}
                    <div className="info-card reveal" id="transport-live-updates">
                        <h3><span className="icon">📡</span> Live Updates</h3>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--red"></div>
                            <div className="update-item__text">
                                <strong>Metro Line 3 — 15 min Delay</strong>
                                <span>Signal failure at Central Hub. Engineers on-site. Est. resolution: 30 min.</span>
                            </div>
                        </div>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--yellow"></div>
                            <div className="update-item__text">
                                <strong>Traffic Alert — Ring Road Sector 9</strong>
                                <span>Heavy congestion due to road works. Use alternative route via Sector 11.</span>
                            </div>
                        </div>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--green"></div>
                            <div className="update-item__text">
                                <strong>Bus Route 42 — On Schedule</strong>
                                <span>All buses operating normally. Next arrival at Stop B7: 4 min.</span>
                            </div>
                        </div>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--blue"></div>
                            <div className="update-item__text">
                                <strong>New Bike Lane — Sector 5</strong>
                                <span>Dedicated cycling lane now open along Green Boulevard. 3.2 km stretch.</span>
                            </div>
                        </div>
                    </div>

                    {/* Report Issue */}
                    <div className="info-card reveal" id="transport-report-form">
                        <h3><span className="icon">📝</span> Report an Issue</h3>
                        <form onSubmit={handleSubmit} id="transportForm">
                            <div className="form-group">
                                <label htmlFor="issue">Issue Description</label>
                                <textarea
                                    id="issue"
                                    placeholder="Describe the transport issue..."
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
                                    placeholder="e.g. Sector 7, Metro Station B"
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
                    <div className="info-card reveal" id="transport-resolved">
                        <h3><span className="icon">✅</span> Resolved Issues</h3>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--green"></div>
                            <div className="update-item__text">
                                <strong>Pothole Fixed — Highway 4A</strong>
                                <span>Repaired on Feb 22. Road fully operational.</span>
                            </div>
                        </div>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--green"></div>
                            <div className="update-item__text">
                                <strong>Bus Route 17 Restored</strong>
                                <span>Service resumed after vehicle replacement. Feb 21.</span>
                            </div>
                        </div>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--green"></div>
                            <div className="update-item__text">
                                <strong>Traffic Light Malfunction — Junction 9</strong>
                                <span>Controller replaced and synchronized. Feb 20.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
