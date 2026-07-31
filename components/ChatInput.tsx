"use client";

import { useState } from "react";
import { SendHorizontal } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => Promise<void>;
  loading: boolean;
}

export default function ChatInput({
  onSend,
  loading,
}: ChatInputProps) {
  const [message, setMessage] = useState("");

  async function handleSend() {
    const trimmedMessage = message.trim();

    if (!trimmedMessage || loading) return;

    try {
      await onSend(trimmedMessage);
      setMessage("");
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  }

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (e.key === "Enter") {
      handleSend();
    }
  }

  return (
    <div className="border-t bg-white p-4">
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Ask anything..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
          className="
            flex-1
            rounded-xl
            border
            border-gray-300
            px-4
            py-3
            outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="
            bg-blue-600
            hover:bg-blue-700
            disabled:bg-gray-400
            text-white
            rounded-xl
            px-6
            flex
            items-center
            gap-2
            transition
          "
        >
          <SendHorizontal size={18} />
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
}