/* ============================================
   LOGIN PAGE
   ============================================ */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useToast } from '../context/ToastContext.jsx';

export default function Login() {
    const { login } = useAuth();
    const { showToast } = useToast();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errs = {};
        if (!email.trim()) errs.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Please enter a valid email address';
        if (!password) errs.password = 'Password is required';
        return errs;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length > 0) return;

        const result = login(email, password);
        if (result.success) {
            showToast('✅ Login successful! Redirecting…');
            setTimeout(() => navigate('/dashboard'), 800);
        } else {
            showToast('❌ ' + result.message);
        }
    };

    return (
        <main className="auth-page page-fade">
            <div className="auth-card">
                <h2>Welcome Back</h2>
                <p className="auth-subtitle">Sign in to access your SmartCity dashboard</p>

                <form onSubmit={handleSubmit} id="loginForm">
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

                    <button type="submit" className="btn btn--primary">Login</button>
                </form>

                <p className="auth-footer">Don&apos;t have an account? <Link to="/signup">Sign up</Link></p>
            </div>
        </main>
    );
}
