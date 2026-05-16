import StatCard from "./components/StatCard";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const total = tasks.length;
  const done = tasks.filter(t => t.done).length;
  const pending = total - done;

  return (
      <div style={styles.container}>
        <h1 style={styles.heading}>📊 Dashboard</h1>
        <div style={styles.stats}>
          <StatCard label="Total" value={total} color="#1e88e5" />
          <StatCard label="Done" value={done} color="#43a047" />
          <StatCard label="Pending" value={pending} color="#fb8c00" />
        </div>
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
  );
}

const styles = {
  container: { maxWidth: 750, margin: "40px auto", padding: "0 20px", fontFamily: "sans-serif" },
  heading: { fontSize: 30, marginBottom: 24 },
  stats: { display: "flex", gap: 16 }
};

export default App;