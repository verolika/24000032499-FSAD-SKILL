/* ============================================
   AUTH CONTEXT — localStorage-based auth
   ============================================ */
import { createContext, useContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

/* ---------- Provider ---------- */
export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('smartcity_user'));
        } catch {
            return null;
        }
    });

    const navigate = useNavigate();

    /* Sign up — store user and redirect to login */
    const signup = useCallback((name, email, password) => {
        const newUser = { name, email, password };
        localStorage.setItem('smartcity_user', JSON.stringify(newUser));
        return { success: true };
    }, []);

    /* Login — validate against stored credentials */
    const login = useCallback((email, password) => {
        const stored = JSON.parse(localStorage.getItem('smartcity_user'));

        if (stored && stored.email === email && stored.password === password) {
            setUser(stored);
            return { success: true };
        }

        if (!stored) {
            // Demo fallback — auto-create user
            const demoUser = { name: 'Citizen', email, password };
            localStorage.setItem('smartcity_user', JSON.stringify(demoUser));
            setUser(demoUser);
            return { success: true };
        }

        return { success: false, message: 'Invalid email or password' };
    }, []);

    /* Logout */
    const logout = useCallback(() => {
        localStorage.removeItem('smartcity_user');
        setUser(null);
        navigate('/');
    }, [navigate]);

    const isAuthenticated = !!user;

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

/* ---------- Hook ---------- */
export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
}
