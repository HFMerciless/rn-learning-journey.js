import { useState } from 'react';
import games from '../data/games';
import GameCard from '../components/GameCard';
import './Home.css';

export default function Home() {
    const [search, setSearch] = useState("");

    const filtered = games.filter(g =>
        g.title.toLowerCase().includes(search.toLowerCase()) ||
        g.summary.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="page">
            <div className="hero">
                <h1>Game Reviews</h1>
                <p>Honest reviews from real gamers</p>
                <input
                    className="search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search games..."
                />
            </div>
            {filtered.length === 0
                ? <p className="empty">No games found.</p>
                : <div className="grid">
                    {filtered.map(g => <GameCard key={g.id} game={g} />)}
                </div>
            }
        </div>
    );
}