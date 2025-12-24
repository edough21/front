import { useState } from "react";

interface Props {
  onConfirm: (name: string) => void;
  onCancel: () => void;
}

export default function SaveRecordingPanel({
  onConfirm,
  onCancel,
}: Props) {
  const [name, setName] = useState("");

  return (
    /* OVERLAY */
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      {/* MODAL */}
      <div
        style={{
          width: 420,
          background: "#ffffff",
          borderRadius: 16,
          padding: 24,
          boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
        }}
      >
        <h3 style={{ marginBottom: 12 }}>Save Recording</h3>

        <label
          style={{
            fontSize: 14,
            color: "#374151",
          }}
        >
          Recording Name
        </label>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter recording name"
          style={{
            width: "95%",
            marginTop: 6,
            padding: 12,
            borderRadius: 8,
            border: "1px solid #d1d5db",
            fontSize: 14,
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 12,
            marginTop: 20,
          }}
        >
          <button
            onClick={onCancel}
            style={{
              padding: "10px 16px",
              borderRadius: 8,
              border: "none",
              background: "#e5e7eb",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>

          <button
            onClick={() => onConfirm(name)}
            disabled={!name.trim()}
            style={{
              padding: "10px 16px",
              borderRadius: 8,
              border: "none",
              background: "#0f766e",
              color: "#ffffff",
              cursor: "pointer",
              opacity: name.trim() ? 1 : 0.5,
            }}
          >
            Confirm Save
          </button>
        </div>
      </div>
    </div>
  );
}
