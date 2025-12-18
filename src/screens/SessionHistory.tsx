import { useEffect, useState } from "react";
import { getSessions } from "../services/session.service";
import type { Session } from "../models/Session";

interface Props {
  onBack: () => void;
  onOpen: (id: string) => void;
}

export default function SessionHistory({ onBack, onOpen }: Props) {
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    setSessions(getSessions());
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h1>Session History</h1>

      {sessions.length === 0 && <p>No recordings yet.</p>}

      {sessions.map((s) => (
        <button
          key={s.id}
          onClick={() => {
            console.log("SESSION CLICKED:", s.id);
            onOpen(s.id);
          }}
          style={{
            width: "100%",
            padding: 16,
            marginBottom: 12,
            border: "2px solid blue",
            borderRadius: 8,
            background: "#f0f8ff",
            textAlign: "left",
            cursor: "pointer",
            fontSize: 16,
          }}
        >
          <div style={{ fontWeight: "bold" }}>{s.name}</div>
          <div>{s.type.toUpperCase()}</div>
          <div style={{ fontSize: 12 }}>
            {new Date(s.date).toLocaleString()}
          </div>
        </button>
      ))}

      <button
        onClick={onBack}
        style={{ marginTop: 16, padding: 12 }}
      >
        Back
      </button>
    </div>
  );
}
