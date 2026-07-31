"use client";

import { useEffect, useRef } from "react";

import Message from "./Message";
import ChatInput from "./ChatInput";

import { useChat } from "@/hooks/useChat";

export default function ChatBox() {
  const {
    messages,
    loading,
    error,
    sendMessage,
  } = useChat();

  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <section className="flex flex-col flex-1 bg-gray-100">

      {/* Chat Messages */}

      <div className="flex-1 overflow-y-auto p-6">

        {messages.length === 0 && (
          <div className="flex items-center justify-center h-full">

            <div className="text-center">

              <h2 className="text-3xl font-bold text-gray-700">
                Welcome 👋
              </h2>

              <p className="text-gray-500 mt-3">
                Start a conversation with your AI assistant.
              </p>

            </div>

          </div>
        )}

        {messages.map((message) => (
          <Message
            key={message.id}
            message={message}
          />
        ))}

        {loading && (

          <div className="flex justify-start mb-5">

            <div className="bg-white rounded-xl shadow px-5 py-3 border">

              <div className="flex gap-2">

                <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></span>

                <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce delay-150"></span>

                <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce delay-300"></span>

              </div>

            </div>

          </div>

        )}

        {error && (

          <div className="mt-5 rounded-lg border border-red-300 bg-red-100 p-4">

            <p className="text-red-700">
              {error}
            </p>

          </div>

        )}

        <div ref={bottomRef} />

      </div>

      {/* Chat Input */}

      <ChatInput
        loading={loading}
        onSend={sendMessage}
      />

    </section>
  );
}