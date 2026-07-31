import {
  PlusCircle,
  MessageSquare,
  History,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 text-white flex flex-col">

      {/* Top */}

      <div className="p-5 border-b border-slate-700">

        <button
          className="
            w-full
            bg-blue-600
            hover:bg-blue-700
            rounded-lg
            py-3
            flex
            items-center
            justify-center
            gap-2
            transition
          "
        >
          <PlusCircle size={20} />

          New Chat

        </button>

      </div>

      {/* Menu */}

      <div className="flex-1 p-5">

        <h2 className="text-sm text-gray-400 uppercase mb-5">
          Navigation
        </h2>

        <ul className="space-y-4">

          <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer transition">

            <MessageSquare size={20} />

            Chat

          </li>

          <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer transition">

            <History size={20} />

            History

          </li>

          <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer transition">

            <Settings size={20} />

            Settings

          </li>

        </ul>

      </div>

      {/* Footer */}

      <div className="border-t border-slate-700 p-5">

        <p className="text-sm text-gray-400">
          DevOps Assignment
        </p>

        <p className="text-xs text-gray-500 mt-1">
          Version 1.0.0
        </p>

      </div>

    </aside>
  );
}