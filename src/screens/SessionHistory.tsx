import type { Session } from "../models/Session";
import SessionHistoryUI from "../ui/session/SessionHistoryUI";

interface Props {
  onBack: () => void;
  onOpen: (session: Session) => void;
}

export default function SessionHistory({ onBack, onOpen }: Props) {
  return (
    <SessionHistoryUI
      onBack={onBack}
      onOpen={onOpen}
    />
  );
}
