import { useParams, Link } from 'react-router-dom';
import athletes from '../data/athletes';
import './AthletePage.css';

const SPORT_COLORS = {
    football:   "#4caf50",
    tennis:     "#00e5ff",
    basketball: "#f5a623",
};

export default function AthletePage() {
    const { id } = useParams();
    const athlete = athletes.find(a => a.id === parseInt(id));

    if (!athlete) {
        return <div className="not-found">Athlete not found. <Link to="/">Go home</Link></div>;
    }

    const color = SPORT_COLORS[athlete.sport] || "#fff";

    return (
        <div className="athlete-page">
            <Link to="/" className="back-btn">← Back to Home</Link>
            <span className="athlete-sport" style={{ color, borderColor: color }}>
        {athlete.sport}
      </span>
            <h1 className="athlete-name">{athlete.name}</h1>
            <p className="athlete-country">🌍 {athlete.country}</p>
            <p className="athlete-body">{athlete.body}</p>
        </div>
    );
}