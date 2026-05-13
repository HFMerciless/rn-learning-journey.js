import { useParams } from 'react-router-dom';
import albums from '../data/albums';
import AlbumCard from '../components/AlbumCard';
import './Home.css';

export default function GenrePage() {
    const { genre } = useParams();
    const filtered = albums.filter(a => a.genre === genre);

    return (
        <div className="page">
            <div className="hero">
                <h1>{genre.charAt(0).toUpperCase() + genre.slice(1)}</h1>
                <p>{filtered.length} album{filtered.length !== 1 ? "s" : ""} in this genre</p>
            </div>
            {filtered.length === 0
                ? <p className="empty">No albums in this genre.</p>
                : <div className="grid">
                    {filtered.map(a => <AlbumCard key={a.id} album={a} />)}
                </div>
            }
        </div>
    );
}