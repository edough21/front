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

  // SAFE navigation wrapper
  const navigate = (next: Screen) => {
    setScreen(next);
  };

  return (
    <>
      {screen === "home" && (
        <HomeDashboard onNavigate={navigate} />
      )}

      {screen === "heart" && (
        <HeartAnalysis onBack={() => navigate("home")} />
      )}

      {screen === "lung" && (
        <LungAnalysis onBack={() => navigate("home")} />
      )}

      {screen === "history" && (
        <SessionHistory
          onBack={() => navigate("home")}
          onOpen={(id) => {
            setSelectedId(id);
            navigate("detail");
          }}
        />
      )}

      {screen === "detail" && selectedId && (
        <SessionDetail
          sessionId={selectedId}
          onBack={() => navigate("history")}
        />
      )}
    </>
  );
}
