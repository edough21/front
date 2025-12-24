import { useState } from "react";

import HomeDashboard from "../screens/HomeDashboard";
import HeartAnalysis from "../screens/HeartAnalysis";
import LungAnalysis from "../screens/LungAnalysis";
import SessionHistory from "../screens/SessionHistory";
import SessionDetail from "../screens/SessionDetail";

import type { Session } from "../models/Session";

type Screen = "home" | "heart" | "lung" | "history" | "detail";

export default function RootNavigator() {
  const [screen, setScreen] = useState<Screen>("home");
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);

  // Centralized navigation
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
          onOpen={(session) => {
            setSelectedSession(session);
            navigate("detail");
          }}
        />
      )}

      {screen === "detail" && selectedSession && (
        <SessionDetail
          session={selectedSession}
          onBack={() => {
            setSelectedSession(null);
            navigate("history");
          }}
        />
      )}
    </>
  );
}
