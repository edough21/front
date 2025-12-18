export async function analyzeHeart() {
  await new Promise((res) => setTimeout(res, 2000));

  return {
    status: "Normal",
    heartRate: 72,
    confidence: 94,
    summary: "Heart sounds are within normal range with no abnormal murmurs detected.",
  };
}
export async function analyzeLung() {
  await new Promise((res) => setTimeout(res, 2000));

  return {
    crackles: false,
    wheezes: true,
    confidence: 91,
    summary: "Mild wheezes detected, no crackles present."
  };
}
