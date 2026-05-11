import { useParams } from 'react-router-dom';
import articles from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import './Home.css';

export default function CategoryPage() {
    const { category } = useParams();

    const filtered = articles.filter(a => a.category === category);

    return (
        <div className="page">
            <div className="hero">
                <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
                <p>{filtered.length} article{filtered.length !== 1 ? "s" : ""} in this category</p>
            </div>
            {filtered.length === 0
                ? <p className="empty">No articles in this category.</p>
                : <div className="grid">
                    {filtered.map(a => <ArticleCard key={a.id} article={a} />)}
                </div>
            }
        </div>
    );
}