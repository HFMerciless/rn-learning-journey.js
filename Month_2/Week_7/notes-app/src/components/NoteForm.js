import { useState } from "react";

function NoteForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!title.trim()) return;
        onAdd({ id: Date.now(), title, body });
        setTitle("");
        setBody("");
    }

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} style={styles.input} />
            <textarea placeholder="Note..." value={body} onChange={e => setBody(e.target.value)} style={styles.textarea} />
            <button type="submit" style={styles.btn}>Add Note</button>
        </form>
    );
}

const styles = {
    form: { display: "flex", flexDirection: "column", gap: 10, marginBottom: 30 },
    input: { padding: 10, fontSize: 16, borderRadius: 6, border: "1px solid #ccc" },
    textarea: { padding: 10, fontSize: 15, borderRadius: 6, border: "1px solid #ccc", minHeight: 80, resize: "vertical" },
    btn: { background: "#1e88e5", color: "#fff", border: "none", padding: "10px", borderRadius: 6, fontSize: 15, cursor: "pointer" }
};

export default NoteForm;