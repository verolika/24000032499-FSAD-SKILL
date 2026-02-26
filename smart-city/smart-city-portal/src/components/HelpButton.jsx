/* ============================================
   HELP BUTTON — Floating assistance button
   ============================================ */
import { useToast } from '../context/ToastContext.jsx';

export default function HelpButton() {
    const { showToast } = useToast();

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        showToast('👋 Need help? Contact support@smartcity.gov');
    };

    return (
        <button className="help-btn" id="helpBtn" aria-label="Help" onClick={handleClick}>
            ?
        </button>
    );
}
