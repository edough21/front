import HeartAnalysisUI from "../ui/heart/HeartAnalysisUI";

interface Props {
  onBack: () => void;
}

export default function HeartAnalysis({ onBack }: Props) {
  return <HeartAnalysisUI onBack={onBack} />;
}
