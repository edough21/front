import HomeDashboardUI from "../ui/HomeDashboardUI";

interface Props {
  onNavigate: (screen: "heart" | "lung" | "history") => void;
}

export default function HomeDashboard({ onNavigate }: Props) {
  return (
    <HomeDashboardUI
      onNavigate={onNavigate}
    />
  );
}
