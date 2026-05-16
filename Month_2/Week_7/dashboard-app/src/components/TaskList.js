import { useState } from "react";

function TaskList({ tasks, setTasks }) {
    const [input, setInput] = useState("");

    function addTask() {
        if (!input.trim()) return;
        setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
        setInput("");
    }

    function toggleTask(id) {
        setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
    }

    function deleteTask(id) {
        setTasks(tasks.filter(t => t.id !== id));
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Tasks</h2>
            <div style={styles.row}>
                <input
                    placeholder="New task..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && addTask()}
                    style={styles.input}
                />
                <button onClick={addTask} style={styles.btn}>Add</button>
            </div>
            <ul style={styles.list}>
                {tasks.map(task => (
                    <li key={task.id} style={styles.item}>
            <span
                onClick={() => toggleTask(task.id)}
                style={{ ...styles.text, textDecoration: task.done ? "line-through" : "none", color: task.done ? "#aaa" : "#222", cursor: "pointer" }}
            >
              {task.done ? "✅" : "⬜"} {task.text}
            </span>
                        <button onClick={() => deleteTask(task.id)} style={styles.del}>✕</button>
                    </li>
                ))}
                {tasks.length === 0 && <p style={styles.empty}>No tasks yet.</p>}
            </ul>
        </div>
    );
}

const styles = {
    container: { background: "#fff", borderRadius: 8, padding: "24px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", marginTop: 24 },
    heading: { margin: "0 0 16px", fontSize: 20 },
    row: { display: "flex", gap: 8, marginBottom: 16 },
    input: { flex: 1, padding: "10px", fontSize: 15, borderRadius: 6, border: "1px solid #ccc" },
    btn: { background: "#1e88e5", color: "#fff", border: "none", padding: "10px 18px", borderRadius: 6, cursor: "pointer", fontSize: 15 },
    list: { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 },
    item: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 12px", background: "#f9f9f9", borderRadius: 6 },
    text: { fontSize: 15 },
    del: { background: "none", border: "none", color: "#e53935", fontSize: 16, cursor: "pointer" },
    empty: { color: "#aaa", textAlign: "center", margin: 0 }
};

export default TaskList;