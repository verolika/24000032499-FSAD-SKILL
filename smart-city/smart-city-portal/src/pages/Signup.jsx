/* ============================================
   SIGNUP PAGE
   ============================================ */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useToast } from '../context/ToastContext.jsx';

export default function Signup() {
    const { signup } = useAuth();
    const { showToast } = useToast();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errs = {};
        if (!name.trim()) errs.name = 'Name is required';
        if (!email.trim()) errs.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Please enter a valid email address';
        if (!password) errs.password = 'Password is required';
        else if (password.length < 6) errs.password = 'Password must be at least 6 characters';
        return errs;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length > 0) return;

        signup(name, email, password);
        showToast('✅ Account created! Redirecting to login…');
        setTimeout(() => navigate('/login'), 1200);
    };

    return (
        <main className="auth-page page-fade">
            <div className="auth-card">
                <h2>Create Account</h2>
                <p className="auth-subtitle">Join SmartCity to access all city services</p>

                <form onSubmit={handleSubmit} id="signupForm">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="John Doe"
                            className={errors.name ? 'error' : ''}
                            value={name}
                            onChange={e => { setName(e.target.value); setErrors(prev => ({ ...prev, name: '' })); }}
                        />
                        {errors.name && <span className="error-msg visible">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            className={errors.email ? 'error' : ''}
                            value={email}
                            onChange={e => { setEmail(e.target.value); setErrors(prev => ({ ...prev, email: '' })); }}
                        />
                        {errors.email && <span className="error-msg visible">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            className={errors.password ? 'error' : ''}
                            value={password}
                            onChange={e => { setPassword(e.target.value); setErrors(prev => ({ ...prev, password: '' })); }}
                        />
                        {errors.password && <span className="error-msg visible">{errors.password}</span>}
                    </div>

                    <button type="submit" className="btn btn--primary">Create Account</button>
                </form>

                <p className="auth-footer">Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </main>
    );
}
