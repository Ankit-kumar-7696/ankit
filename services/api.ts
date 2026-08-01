import axios from "axios";
import {
  SendMessageRequest,
  SendMessageResponse,
} from "@/types/chat";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function sendChatMessage(
  payload: SendMessageRequest
): Promise<SendMessageResponse> {


  const response = await api.post("/chat", payload);

  return response.data;
}