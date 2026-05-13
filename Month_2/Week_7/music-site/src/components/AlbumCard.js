import { Link } from 'react-router-dom';
import './AlbumCard.css';

const GENRE_COLORS = {
    electronic: "#1db954",
    hiphop:     "#f5a623",
    rock:       "#e94560",
    pop:        "#00e5ff",
};

export default function AlbumCard({ album }) {
    const color = GENRE_COLORS[album.genre] || "#fff";
    const stars = "★".repeat(Math.round(album.rating / 2)) + "☆".repeat(5 - Math.round(album.rating / 2));

    return (
        <div className="album-card">
            <div className="card-top">
                <span className="card-genre" style={{ color, borderColor: color }}>{album.genre}</span>
                <span className="card-year">{album.year}</span>
            </div>
            <h2 className="card-title">{album.title}</h2>
            <p className="card-artist">{album.artist}</p>
            <div className="card-stars">{stars} <span className="card-rating">{album.rating}/10</span></div>
            <p className="card-summary">{album.summary}</p>
            <Link to={`/album/${album.id}`} className="card-link">Read review →</Link>
        </div>
    );
}