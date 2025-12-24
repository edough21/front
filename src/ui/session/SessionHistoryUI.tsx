import Screen from "../../components/Screen";
import SessionHeader from "./SessionHeader";
import SessionList from "./SessionList";
import type { Session } from "../../models/Session";
import { getSessions } from "../../services/session.service";

interface Props {
  onBack: () => void;
  onOpen: (session: Session) => void;
}

export default function SessionHistoryUI({ onBack, onOpen }: Props) {
  const sessions = getSessions(); // mock / service data

  return (
    <Screen>
      <SessionHeader
        title="Session History"
        subtitle="Past monitoring sessions"
        onBack={onBack}
      />

      <SessionList
        sessions={sessions}
        onSelect={onOpen}
      />
    </Screen>
  );
}
