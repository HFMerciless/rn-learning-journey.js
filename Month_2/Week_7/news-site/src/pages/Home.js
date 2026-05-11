import { useState } from 'react';
import articles from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import './Home.css';

export default function Home() {
    const [search, setSearch] = useState("");

    const filtered = articles.filter(a =>
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.summary.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="page">
            <div className="hero">
                <h1>Latest News</h1>
                <p>Stay up to date with the world</p>
                <input
                    className="search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search articles..."
                />
            </div>
            {filtered.length === 0
                ? <p className="empty">No articles found.</p>
                : <div className="grid">
                    {filtered.map(a => <ArticleCard key={a.id} article={a} />)}
                </div>
            }
        </div>
    );
}