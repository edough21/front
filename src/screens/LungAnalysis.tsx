import { useEffect, useState } from "react";
import { analyzeLung } from "../services/analysis.service";
import { addSession } from "../services/session.service";
import { v4 as uuid } from "uuid";

type LungState = "idle" | "recording" | "analyzing" | "result";

interface LungResult {
  crackles: boolean;
  wheezes: boolean;
  confidence: number; // 0–100
  summary: string;
}

interface Props {
  onBack: () => void;
}

export default function LungAnalysis({ onBack }: Props) {
  const [state, setState] = useState<LungState>("idle");
  const [result, setResult] = useState<LungResult | null>(null);
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

    const analysis = await analyzeLung();
    setResult(analysis);

    setState("result");
  };

  return (
    <div style={{ padding: 16 }}>
      <h1>Lung Analysis</h1>

      {state === "recording" && <p>Recording lung sounds...</p>}

      {state === "analyzing" && <p>Analyzing data...</p>}

      {state === "result" && result && (
        <>
          <p>Crackles: {result.crackles ? "Detected" : "None"}</p>
          <p>Wheezes: {result.wheezes ? "Detected" : "None"}</p>
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
                  type: "lung",
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
