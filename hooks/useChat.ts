"use client";

import { useState } from "react";

import {
  ChatMessage,
  SendMessageResponse,
} from "@/types/chat";

import { sendChatMessage } from "@/services/api";

import {
  DEFAULT_AI_MESSAGE,
} from "@/utils/constants";

import {
  generateId,
  currentTime,
  trimMessage,
} from "@/utils/helpers";

const SESSION_ID = "user-101";

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: generateId(),
      role: "assistant",
      content: DEFAULT_AI_MESSAGE,
      createdAt: currentTime(),
    },
  ]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function sendMessage(text: string) {
    const message = trimMessage(text);

    if (!message) return;

    const userMessage: ChatMessage = {
      id: generateId(),
      role: "user",
      content: message,
      createdAt: currentTime(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setError("");

    try {
      const response: SendMessageResponse =
        await sendChatMessage({
          sessionId: SESSION_ID,
          message,
        });

      const aiMessage: ChatMessage = {
        id: generateId(),
        role: "assistant",
        content: response.reply,
        createdAt: currentTime(),
      };

      setMessages((prev) => [...prev, aiMessage]);

    } catch (err) {
      console.error(err);

      setError("Unable to contact AI server.");

      const aiError: ChatMessage = {
        id: generateId(),
        role: "assistant",
        content: "Unable to contact AI server.",
        createdAt: currentTime(),
      };

      setMessages((prev) => [...prev, aiError]);

    } finally {
      setLoading(false);
    }
  }

  return {
    messages,
    loading,
    error,
    sendMessage,
  };
}