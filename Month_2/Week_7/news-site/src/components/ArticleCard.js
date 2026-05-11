import { Link } from 'react-router-dom';
import './ArticleCard.css';

const CATEGORY_COLORS = {
    tech:    "#00e5ff",
    science: "#4caf50",
    finance: "#f5a623",
    culture: "#a855f7",
};

export default function ArticleCard({ article }) {
    const color = CATEGORY_COLORS[article.category] || "#fff";

    return (
        <div className="article-card">
            <div className="card-top">
        <span className="card-category" style={{ color, borderColor: color }}>
          {article.category}
        </span>
                <span className="card-date">{article.date}</span>
            </div>
            <h2 className="card-title">{article.title}</h2>
            <p className="card-summary">{article.summary}</p>
            <div className="card-bottom">
                <span className="card-author">by {article.author}</span>
                <Link to={`/article/${article.id}`} className="card-read-more">
                    Read more →
                </Link>
            </div>
        </div>
    );
}