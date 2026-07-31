export type Role = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: Role;
  content: string;
  createdAt: string;
}

export interface SendMessageRequest {
  message: string;
}

export interface SendMessageResponse {
  reply: string;
}

export interface ApiError {
  message: string;
}