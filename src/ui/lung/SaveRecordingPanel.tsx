export default function SaveRecordingPanel({
  name,
  setName,
  onConfirm,
  onCancel,
}: {
  name: string;
  setName: (v: string) => void;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div style={{ marginTop: 16 }}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter recording name"
      />

      <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
        <button onClick={onConfirm} disabled={!name}>
          Confirm Save
        </button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}
