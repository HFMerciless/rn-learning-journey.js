import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteCard from "./components/NoteCard";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes([note, ...notes]);
  }

  function deleteNote(id) {
    setNotes(notes.filter(n => n.id !== id));
  }

  return (
      <div style={styles.container}>
        <h1 style={styles.heading}>📝 Notes</h1>
        <NoteForm onAdd={addNote} />
        <div style={styles.grid}>
          {notes.map(note => (
              <NoteCard key={note.id} note={note} onDelete={deleteNote} />
          ))}
        </div>
        {notes.length === 0 && <p style={styles.empty}>No notes yet. Add one above!</p>}
      </div>
  );
}

const styles = {
  container: { maxWidth: 700, margin: "40px auto", padding: "0 20px", fontFamily: "sans-serif" },
  heading: { fontSize: 32, marginBottom: 24 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 },
  empty: { color: "#aaa", textAlign: "center", marginTop: 40 }
};

export default App;