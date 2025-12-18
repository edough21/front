import { Session } from "../models/Session";

const STORAGE_KEY = "stethoscope_sessions";

function load(): Session[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

function save(sessions: Session[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
}

export function addSession(session: Session) {
  const sessions = load();
  sessions.unshift(session); // newest first
  save(sessions);
}

export function getSessions(): Session[] {
  return load();
}
