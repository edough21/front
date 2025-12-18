import Screen from "../components/Screen";
import LCDButton from "../components/LCDButton";

type HomeScreen = "heart" | "lung" | "history";

interface Props {
  onNavigate: (screen: HomeScreen) => void;
}

export default function HomeDashboard({ onNavigate }: Props) {
  return (
    <Screen title="Smart AI Stethoscope">
      <LCDButton onClick={() => onNavigate("heart")}>
        Heart Analysis
      </LCDButton>

      <LCDButton onClick={() => onNavigate("lung")}>
        Lung Analysis
      </LCDButton>

      <LCDButton onClick={() => onNavigate("history")}>
        Session History
      </LCDButton>
    </Screen>
  );
}
