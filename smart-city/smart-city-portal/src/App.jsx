/* ============================================
   APP — Root component with routing
   ============================================ */
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HelpButton from './components/HelpButton.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

/* Pages */
import Landing from './pages/Landing.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Transport from './pages/Transport.jsx';
import Hospitals from './pages/Hospitals.jsx';
import Electricity from './pages/Electricity.jsx';
import Water from './pages/Water.jsx';

export default function App() {
    return (
        <>
            <Navbar />

            <Routes>
                {/* Public routes */}
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Protected routes */}
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/transport" element={<ProtectedRoute><Transport /></ProtectedRoute>} />
                <Route path="/hospitals" element={<ProtectedRoute><Hospitals /></ProtectedRoute>} />
                <Route path="/electricity" element={<ProtectedRoute><Electricity /></ProtectedRoute>} />
                <Route path="/water" element={<ProtectedRoute><Water /></ProtectedRoute>} />
            </Routes>

            <Footer />
            <HelpButton />
        </>
    );
}
