import { useParams } from 'react-router-dom';
import games from '../data/games';
import GameCard from '../components/GameCard';
import './Home.css';

export default function GenrePage() {
    const { genre } = useParams();

    const filtered = games.filter(g => g.genre === genre);

    return (
        <div className="page">
            <div className="hero">
                <h1>{genre.charAt(0).toUpperCase() + genre.slice(1)}</h1>
                <p>{filtered.length} game{filtered.length !== 1 ? "s" : ""} in this genre</p>
            </div>
            {filtered.length === 0
                ? <p className="empty">No games in this genre.</p>
                : <div className="grid">
                    {filtered.map(g => <GameCard key={g.id} game={g} />)}
                </div>
            }
        </div>
    );
}