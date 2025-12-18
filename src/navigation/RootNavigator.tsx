import { useState } from "react";

import HomeDashboard from "../screens/HomeDashboard";
import HeartAnalysis from "../screens/HeartAnalysis";
import LungAnalysis from "../screens/LungAnalysis";
import SessionHistory from "../screens/SessionHistory";
import SessionDetail from "../screens/SessionDetail";

type Screen = "home" | "heart" | "lung" | "history" | "detail";

export default function RootNavigator() {
  const [screen, setScreen] = useState<Screen>("home");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <>
      {screen === "home" && (
        <HomeDashboard onNavigate={setScreen} />
      )}

      {screen === "heart" && (
        <HeartAnalysis onBack={() => setScreen("home")} />
      )}

      {screen === "lung" && (
        <LungAnalysis onBack={() => setScreen("home")} />
      )}

      {screen === "history" && (
        <SessionHistory
          onBack={() => setScreen("home")}
          onOpen={(id) => {
            setSelectedId(id);
            setScreen("detail");
          }}
        />
      )}

      {screen === "detail" && selectedId && (
        <SessionDetail
          sessionId={selectedId}
          onBack={() => setScreen("history")}
        />
      )}
    </>
  );
}
