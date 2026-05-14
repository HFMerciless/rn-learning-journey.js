import { useState } from 'react';
import athletes from '../data/athletes';
import AthleteCard from '../components/AthleteCard';
import './Home.css';

export default function Home() {
    const [search, setSearch] = useState("");

    const filtered = athletes.filter(a =>
        a.name.toLowerCase().includes(search.toLowerCase()) ||
        a.sport.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="page">
            <div className="hero">
                <h1>🏆 SportStar</h1>
                <p>Profiles of the greatest athletes of all time</p>
                <input
                    className="search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search by name or sport..."
                />
            </div>
            {filtered.length === 0
                ? <p className="empty">No athletes found.</p>
                : <div className="grid">
                    {filtered.map(a => <AthleteCard key={a.id} athlete={a} />)}
                </div>
            }
        </div>
    );
}