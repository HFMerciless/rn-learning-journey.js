import { Link } from 'react-router-dom';
import './AthleteCard.css';

const SPORT_COLORS = {
    football:   "#4caf50",
    tennis:     "#00e5ff",
    basketball: "#f5a623",
};

export default function AthleteCard({ athlete }) {
    const color = SPORT_COLORS[athlete.sport] || "#fff";

    return (
        <div className="athlete-card">
            <div className="card-top">
        <span className="card-sport" style={{ color, borderColor: color }}>
          {athlete.sport}
        </span>
                <span className="card-country">{athlete.country}</span>
            </div>
            <h2 className="card-name">{athlete.name}</h2>
            <p className="card-summary">{athlete.summary}</p>
            <Link to={`/athlete/${athlete.id}`} className="card-link">
                Read more →
            </Link>
        </div>
    );
}