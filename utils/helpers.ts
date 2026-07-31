export function generateId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

export function currentTime() {
  return new Date().toISOString();
}

export function trimMessage(message: string) {
  return message.trim();
}