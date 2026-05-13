import { useParams, Link } from 'react-router-dom';
import albums from '../data/albums';
import './AlbumPage.css';

const GENRE_COLORS = {
    electronic: "#1db954",
    hiphop:     "#f5a623",
    rock:       "#e94560",
    pop:        "#00e5ff",
};

export default function AlbumPage() {
    const { id } = useParams();
    const album = albums.find(a => a.id === parseInt(id));

    if (!album) {
        return <div className="not-found">Album not found. <Link to="/">Go home</Link></div>;
    }

    const color = GENRE_COLORS[album.genre] || "#fff";
    const stars = "★".repeat(Math.round(album.rating / 2)) + "☆".repeat(5 - Math.round(album.rating / 2));

    return (
        <div className="album-page">
            <Link to="/" className="back-btn">← Back to Home</Link>
            <span className="album-genre" style={{ color, borderColor: color }}>{album.genre}</span>
            <h1 className="album-title">{album.title}</h1>
            <div className="album-meta">
                <span>{album.artist}</span>
                <span>{album.year}</span>
            </div>
            <div className="album-stars">{stars} <span className="album-rating">{album.rating}/10</span></div>
            <p className="album-body">{album.body}</p>
        </div>
    );
}