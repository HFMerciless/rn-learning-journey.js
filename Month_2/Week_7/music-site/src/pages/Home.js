import { useState } from 'react';
import albums from '../data/albums';
import AlbumCard from '../components/AlbumCard';
import './Home.css';

export default function Home() {
    const [search, setSearch] = useState("");

    const filtered = albums.filter(a =>
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.artist.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="page">
            <div className="hero">
                <h1>Album Reviews</h1>
                <p>Discover great music</p>
                <input
                    className="search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search by title or artist..."
                />
            </div>
            {filtered.length === 0
                ? <p className="empty">No albums found.</p>
                : <div className="grid">
                    {filtered.map(a => <AlbumCard key={a.id} album={a} />)}
                </div>
            }
        </div>
    );
}