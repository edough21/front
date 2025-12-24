export type Session = {
  id: string;
  type: "heart" | "lung";
  date: string;
  time: string;
  metrics: {
    label: string;
    value: string;
    unit?: string;
  }[];
  status: string;
};

let sessions: Session[] = [];

export function addSession(session: Session) {
  sessions.unshift(session);
}

export function getSessions(): Session[] {
  return sessions;
}

export function getSessionById(id: string): Session | undefined {
  return sessions.find((s) => s.id === id);
}

export function clearSessions() {
  sessions = [];
}
