import { useParams, Link } from 'react-router-dom';
import articles from '../data/articles';
import './ArticlePage.css';

const CATEGORY_COLORS = {
    tech:    "#00e5ff",
    science: "#4caf50",
    finance: "#f5a623",
    culture: "#a855f7",
};

export default function ArticlePage() {
    const { id } = useParams();
    const article = articles.find(a => a.id === parseInt(id));

    if (!article) {
        return (
            <div className="not-found">
                Article not found. <Link to="/">Go home</Link>
            </div>
        );
    }

    const color = CATEGORY_COLORS[article.category] || "#fff";

    return (
        <div className="article-page">
            <Link to="/" className="back-btn">← Back to Home</Link>
            <span className="article-category" style={{ color, borderColor: color }}>
        {article.category}
      </span>
            <h1 className="article-title">{article.title}</h1>
            <div className="article-meta">
                <span>by {article.author}</span>
                <span>{article.date}</span>
            </div>
            <p className="article-body">{article.body}</p>
        </div>
    );
}