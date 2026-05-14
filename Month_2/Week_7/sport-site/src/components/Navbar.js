import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const SPORTS = ["football", "tennis", "basketball"];

export default function Navbar() {
    const location = useLocation();

    return (
        <nav className="nav">
            <Link to="/" className="logo">🏆 SportStar</Link>
            <div className="nav-links">
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                    Home
                </Link>
                {SPORTS.map(sport => (
                    <Link
                        key={sport}
                        to={`/sport/${sport}`}
                        className={location.pathname === `/sport/${sport}` ? "active" : ""}
                    >
                        {sport.charAt(0).toUpperCase() + sport.slice(1)}
                    </Link>
                ))}
            </div>
        </nav>
    );
}