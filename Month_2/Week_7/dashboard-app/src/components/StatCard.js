function StatCard({ label, value, color }) {
    return (
        <div style={{ ...styles.card, borderTop: `4px solid ${color}` }}>
            <p style={styles.label}>{label}</p>
            <h2 style={{ ...styles.value, color }}>{value}</h2>
        </div>
    );
}

const styles = {
    card: { background: "#fff", borderRadius: 8, padding: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", flex: 1 },
    label: { margin: "0 0 8px", color: "#888", fontSize: 14 },
    value: { margin: 0, fontSize: 32 }
};

export default StatCard;