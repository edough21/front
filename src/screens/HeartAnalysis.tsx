import { useEffect, useState } from "react";
import { analyzeHeart } from "../services/analysis.service";
import { addSession } from "../services/session.service";
import { v4 as uuid } from "uuid";

type HeartState = "idle" | "recording" | "analyzing" | "result";

interface HeartResult {
  status: string;
  heartRate: number;
  confidence: number; // 0–100
  summary: string;
}

interface Props {
  onBack: () => void;
}

export default function HeartAnalysis({ onBack }: Props) {
  const [state, setState] = useState<HeartState>("idle");
  const [result, setResult] = useState<HeartResult | null>(null);
  const [name, setName] = useState("");

  useEffect(() => {
    startProcess();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startProcess = async () => {
    setState("recording");

    // Simulated recording duration
    await new Promise((res) => setTimeout(res, 3000));

    setState("analyzing");

    const analysis = await analyzeHeart();
    setResult(analysis);

    setState("result");
  };

  return (
    <div style={{ padding: 16 }}>
      <h1>Heart Analysis</h1>

      {state === "recording" && <p>Recording heart sounds...</p>}

      {state === "analyzing" && <p>Analyzing data...</p>}

      {state === "result" && result && (
        <>
          <h2>{result.status}</h2>
          <p>Heart Rate: {result.heartRate} bpm</p>
          <p>AI Confidence: {result.confidence}%</p>
          <p>{result.summary}</p>

          <input
            type="text"
            placeholder="Recording name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ display: "block", marginTop: 12 }}
          />

          <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
            <button
              disabled={!name}
              onClick={() => {
                addSession({
                  id: uuid(),
                  type: "heart",
                  name,
                  date: new Date().toISOString(),
                  result,
                });
                onBack();
              }}
            >
              Save Recording
            </button>

            <button onClick={onBack}>Back</button>
          </div>
        </>
      )}
    </div>
  );
}
