/* ============================================
   ELECTRICITY PAGE — Service module
   ============================================ */
import { useState } from 'react';
import { useToast } from '../context/ToastContext.jsx';
import useScrollReveal from '../hooks/useScrollReveal.js';

export default function Electricity() {
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
                    <h1>⚡ Smart Electricity Management</h1>
                    <p>Power grid monitoring, outage tracking, and smart energy analytics</p>
                </div>

                <div className="service-page__grid">
                    {/* Live Updates */}
                    <div className="info-card reveal" id="electricity-live-updates">
                        <h3><span className="icon">📡</span> Live Updates</h3>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--red"></div>
                            <div className="update-item__text">
                                <strong>Power Outage — Sector 12</strong>
                                <span>Transformer failure detected. Repair crew dispatched. ETA: 2 hours.</span>
                            </div>
                        </div>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--yellow"></div>
                            <div className="update-item__text">
                                <strong>Scheduled Maintenance — Grid Zone B</strong>
                                <span>Rolling blackout tonight 11 PM - 5 AM. Backup power for critical services.</span>
                            </div>
                        </div>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--green"></div>
                            <div className="update-item__text">
                                <strong>Solar Farm Output — 120% Target</strong>
                                <span>Green Energy Park exceeding daily generation targets by 20%.</span>
                            </div>
                        </div>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--blue"></div>
                            <div className="update-item__text">
                                <strong>Smart Meter Rollout — Phase 3</strong>
                                <span>15,000 new smart meters installed across Sectors 8-11 this week.</span>
                            </div>
                        </div>
                    </div>

                    {/* Report Issue */}
                    <div className="info-card reveal" id="electricity-report-form">
                        <h3><span className="icon">📝</span> Report an Issue</h3>
                        <form onSubmit={handleSubmit} id="electricityForm">
                            <div className="form-group">
                                <label htmlFor="issue">Issue Description</label>
                                <textarea
                                    id="issue"
                                    placeholder="Describe the power issue..."
                                    className={errors.issue ? 'error' : ''}
                                    value={issue}
                                    onChange={e => { setIssue(e.target.value); setErrors(prev => ({ ...prev, issue: '' })); }}
                                ></textarea>
                                {errors.issue && <span className="error-msg visible">{errors.issue}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="location">Location / Sector</label>
                                <input
                                    type="text"
                                    id="location"
                                    placeholder="e.g. Sector 12, Block C"
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
                    <div className="info-card reveal" id="electricity-resolved">
                        <h3><span className="icon">✅</span> Resolved Issues</h3>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--green"></div>
                            <div className="update-item__text">
                                <strong>Underground Cable Repair — Sector 5</strong>
                                <span>High-voltage cable replaced. Full power restored. Feb 22.</span>
                            </div>
                        </div>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--green"></div>
                            <div className="update-item__text">
                                <strong>Voltage Fluctuation — Industrial Zone</strong>
                                <span>Stabilizer installed at substation J7. Issue resolved. Feb 21.</span>
                            </div>
                        </div>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--green"></div>
                            <div className="update-item__text">
                                <strong>Street Light Outage — Boulevard Ave</strong>
                                <span>42 LED units replaced along 2.5 km stretch. Feb 20.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
