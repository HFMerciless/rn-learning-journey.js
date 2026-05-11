import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const CATEGORIES = ["tech", "science", "finance", "culture"];

export default function Navbar() {
    const location = useLocation();

    return (
        <nav className="nav">
            <Link to="/" className="logo">📰 NewsFlash</Link>
            <div className="nav-links">
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                    Home
                </Link>
                {CATEGORIES.map(cat => (
                    <Link
                        key={cat}
                        to={`/category/${cat}`}
                        className={location.pathname === `/category/${cat}` ? "active" : ""}
                    >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </Link>
                ))}
            </div>
        </nav>
    );
}