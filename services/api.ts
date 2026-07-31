import axios from "axios";
import {
  SendMessageRequest,
  SendMessageResponse,
} from "@/types/chat";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_N8N_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function sendChatMessage(
  payload: SendMessageRequest
): Promise<SendMessageResponse> {

  const response = await api.post(
    "/webhook/chat",
    payload
  );

  return response.data;
}