import { getSessions } from "../services/session.service";
import type { Session } from "../models/Session";

interface Props {
  sessionId: string;
  onBack: () => void;
}

export default function SessionDetail({ sessionId, onBack }: Props) {
  const session: Session | undefined = getSessions().find(
    (s) => s.id === sessionId
  );

  if (!session) {
    return (
      <div style={{ padding: 16 }}>
        <p>Session not found.</p>
        <button onClick={onBack}>Back</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 16 }}>
      <h1>{session.name}</h1>

      <p>
        <strong>Type:</strong> {session.type.toUpperCase()}
      </p>

      <p>
        <strong>Date:</strong>{" "}
        {new Date(session.date).toLocaleString()}
      </p>

      <hr />

      {session.type === "heart" && (
        <>
          <p>Status: {session.result.status}</p>
          <p>Heart Rate: {session.result.heartRate} bpm</p>
          <p>AI Confidence: {session.result.confidence}%</p>
          <p>{session.result.summary}</p>
        </>
      )}

      {session.type === "lung" && (
        <>
          <p>Crackles: {session.result.crackles ? "Detected" : "None"}</p>
          <p>Wheezes: {session.result.wheezes ? "Detected" : "None"}</p>
          <p>AI Confidence: {session.result.confidence}%</p>
          <p>{session.result.summary}</p>
        </>
      )}

      <button onClick={onBack} style={{ marginTop: 16 }}>
        Back
      </button>
    </div>
  );
}
