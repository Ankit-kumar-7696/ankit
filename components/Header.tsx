import { Bot, Wifi } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 shadow-sm flex items-center justify-between px-6">

      {/* Left Section */}
      <div className="flex items-center gap-3">

        <div className="bg-blue-600 p-2 rounded-lg">
          <Bot className="text-white" size={24} />
        </div>

        <div>
          <h1 className="text-xl font-bold text-gray-800">
            Lexavra AI Assistant ChatBot
          </h1>

          <p className="text-sm text-gray-500">
            Powered by n8n + Ollama
          </p>
        </div>

      </div>

      {/* Right Section */}

      <div className="flex items-center gap-2">

        <Wifi className="text-green-500" size={18} />

        <span className="text-green-600 font-medium">
          Online
        </span>

      </div>

    </header>
  );
}