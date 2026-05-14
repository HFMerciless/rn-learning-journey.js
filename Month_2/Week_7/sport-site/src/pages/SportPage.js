import { useParams } from 'react-router-dom';
import athletes from '../data/athletes';
import AthleteCard from '../components/AthleteCard';
import './Home.css';

export default function SportPage() {
    const { sport } = useParams();
    const filtered = athletes.filter(a => a.sport === sport);

    return (
        <div className="page">
            <div className="hero">
                <h1>{sport.charAt(0).toUpperCase() + sport.slice(1)}</h1>
                <p>{filtered.length} athlete{filtered.length !== 1 ? "s" : ""} in this sport</p>
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