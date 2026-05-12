import { Link } from 'react-router-dom';
import './GameCard.css';

const GENRE_COLORS = {
    rpg:      "#7c4dff",
    indie:    "#00e5ff",
    sports:   "#4caf50",
    fighting: "#e94560",
};

export default function GameCard({ game }) {
    const color = GENRE_COLORS[game.genre] || "#fff";
    const stars = "★".repeat(Math.round(game.rating / 2)) + "☆".repeat(5 - Math.round(game.rating / 2));

    return (
        <div className="game-card">
            <div className="card-top">
        <span className="card-genre" style={{ color, borderColor: color }}>
          {game.genre}
        </span>
                <span className="card-platform">{game.platform}</span>
            </div>
            <h2 className="card-title">{game.title}</h2>
            <div className="card-stars">
                {stars} <span className="card-rating">{game.rating}/10</span>
            </div>
            <p className="card-summary">{game.summary}</p>
            <div className="card-bottom">
                <span className="card-author">by {game.author}</span>
                <Link to={`/game/${game.id}`} className="card-read-more">
                    Read review →
                </Link>
            </div>
        </div>
    );
}