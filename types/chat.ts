export type Role = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: Role;
  content: string;
  createdAt: string;
}

export interface SendMessageRequest {
  message: string;
  sessionId?: string; // ✅ add this
}

export interface SendMessageResponse {
  reply: string;
}

export interface ApiError {
  message: string;
}