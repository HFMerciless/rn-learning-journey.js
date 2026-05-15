function NoteCard({ note, onDelete }) {
    return (
        <div style={styles.card}>
            <h3 style={styles.title}>{note.title}</h3>
            <p style={styles.body}>{note.body}</p>
            <button onClick={() => onDelete(note.id)} style={styles.btn}>Delete</button>
        </div>
    );
}

const styles = {
    card: { background: "#fffde7", borderRadius: 8, padding: "16px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" },
    title: { margin: "0 0 8px", fontSize: 18 },
    body: { margin: "0 0 12px", color: "#555" },
    btn: { background: "#e53935", color: "#fff", border: "none", padding: "6px 12px", borderRadius: 4, cursor: "pointer" }
};

export default NoteCard;