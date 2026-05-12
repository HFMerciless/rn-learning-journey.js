import { useParams, Link } from 'react-router-dom';
import games from '../data/games';
import './GamePage.css';

const GENRE_COLORS = {
    rpg:      "#7c4dff",
    indie:    "#00e5ff",
    sports:   "#4caf50",
    fighting: "#e94560",
};

export default function GamePage() {
    const { id } = useParams();
    const game = games.find(g => g.id === parseInt(id));

    if (!game) {
        return (
            <div className="not-found">
                Game not found. <Link to="/">Go home</Link>
            </div>
        );
    }

    const color = GENRE_COLORS[game.genre] || "#fff";
    const stars = "★".repeat(Math.round(game.rating / 2)) + "☆".repeat(5 - Math.round(game.rating / 2));

    return (
        <div className="game-page">
            <Link to="/" className="back-btn">← Back to Home</Link>
            <span className="game-genre" style={{ color, borderColor: color }}>
        {game.genre}
      </span>
            <h1 className="game-title">{game.title}</h1>
            <div className="game-meta">
                <span>by {game.author}</span>
                <span>{game.date}</span>
                <span className="game-platform">{game.platform}</span>
            </div>
            <div className="game-stars">
                {stars} <span className="game-rating">{game.rating}/10</span>
            </div>
            <p className="game-body">{game.body}</p>
        </div>
    );
}