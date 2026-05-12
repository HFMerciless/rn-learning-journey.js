import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const GENRES = ["rpg", "indie", "sports", "fighting"];

export default function Navbar() {
    const location = useLocation();

    return (
        <nav className="nav">
            <Link to="/" className="logo">🎮 GameCritic</Link>
            <div className="nav-links">
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                    Home
                </Link>
                {GENRES.map(genre => (
                    <Link
                        key={genre}
                        to={`/genre/${genre}`}
                        className={location.pathname === `/genre/${genre}` ? "active" : ""}
                    >
                        {genre.charAt(0).toUpperCase() + genre.slice(1)}
                    </Link>
                ))}
            </div>
        </nav>
    );
}