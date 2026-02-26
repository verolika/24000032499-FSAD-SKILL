/* ============================================
   HOSPITALS PAGE — Service module
   ============================================ */
import { useState } from 'react';
import { useToast } from '../context/ToastContext.jsx';
import useScrollReveal from '../hooks/useScrollReveal.js';

export default function Hospitals() {
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
                    <h1>🏥 Smart Hospital Management</h1>
                    <p>Real-time healthcare updates, emergency reporting, and facility monitoring</p>
                </div>

                <div className="service-page__grid">
                    {/* Live Updates */}
                    <div className="info-card reveal" id="hospitals-live-updates">
                        <h3><span className="icon">📡</span> Live Updates</h3>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--red"></div>
                            <div className="update-item__text">
                                <strong>Emergency Ward — City General Hospital</strong>
                                <span>High occupancy alert. 92% beds occupied. Overflow protocol activated.</span>
                            </div>
                        </div>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--green"></div>
                            <div className="update-item__text">
                                <strong>Vaccination Drive — Sector 4 Clinic</strong>
                                <span>Free flu vaccinations available today, 9 AM - 5 PM. Walk-ins welcome.</span>
                            </div>
                        </div>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--yellow"></div>
                            <div className="update-item__text">
                                <strong>Lab Equipment Maintenance</strong>
                                <span>MRI scanner at Central Diagnostics offline until Feb 26 for calibration.</span>
                            </div>
                        </div>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--blue"></div>
                            <div className="update-item__text">
                                <strong>Telemedicine Service Expanded</strong>
                                <span>AI-assisted consultations now available 24/7 in 12 languages.</span>
                            </div>
                        </div>
                    </div>

                    {/* Report Issue */}
                    <div className="info-card reveal" id="hospitals-report-form">
                        <h3><span className="icon">📝</span> Report an Issue</h3>
                        <form onSubmit={handleSubmit} id="hospitalsForm">
                            <div className="form-group">
                                <label htmlFor="issue">Issue Description</label>
                                <textarea
                                    id="issue"
                                    placeholder="Describe the healthcare issue..."
                                    className={errors.issue ? 'error' : ''}
                                    value={issue}
                                    onChange={e => { setIssue(e.target.value); setErrors(prev => ({ ...prev, issue: '' })); }}
                                ></textarea>
                                {errors.issue && <span className="error-msg visible">{errors.issue}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="location">Location / Facility</label>
                                <input
                                    type="text"
                                    id="location"
                                    placeholder="e.g. City General Hospital, Ward 3"
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
                    <div className="info-card reveal" id="hospitals-resolved">
                        <h3><span className="icon">✅</span> Resolved Issues</h3>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--green"></div>
                            <div className="update-item__text">
                                <strong>Ambulance Response Time Improved</strong>
                                <span>Average response reduced to 8 min after fleet upgrade. Feb 22.</span>
                            </div>
                        </div>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--green"></div>
                            <div className="update-item__text">
                                <strong>Blood Bank Shortage Resolved</strong>
                                <span>O-negative supply restocked across all 5 facilities. Feb 21.</span>
                            </div>
                        </div>
                        <div className="update-item">
                            <div className="update-item__dot update-item__dot--green"></div>
                            <div className="update-item__text">
                                <strong>Pharmacy System Restored</strong>
                                <span>Prescription management portal back online after outage. Feb 20.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
