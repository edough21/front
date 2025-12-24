import LungAnalysisUI from "../ui/lung/LungAnalysisUI";

interface Props {
  onBack: () => void;
}

export default function LungAnalysis({ onBack }: Props) {
  return <LungAnalysisUI onBack={onBack} />;
}
