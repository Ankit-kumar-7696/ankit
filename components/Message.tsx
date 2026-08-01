"use client";

import { useEffect, useState } from "react";
import { ChatMessage } from "@/types/chat";

interface MessageProps {
  message: ChatMessage;
}

export default function Message({ message }: MessageProps) {
  const isUser = message.role === "user";

  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    setFormattedTime(
      new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(new Date(message.createdAt))
    );
  }, [message.createdAt]);

  return (
    <div
      className={`flex mb-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[75%] rounded-2xl px-5 py-3 shadow-md ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-white border border-gray-200 text-gray-800"
        }`}
      >
        <p className="whitespace-pre-wrap break-words">
          {message.content}
        </p>

        <p
          className={`mt-2 text-xs ${
            isUser ? "text-blue-100" : "text-gray-400"
          }`}
        >
          {formattedTime}
        </p>
      </div>
    </div>
  );
}