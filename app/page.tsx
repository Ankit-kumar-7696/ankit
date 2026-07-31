import ChatBox from "@/components/ChatBox";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Message from "@/components/Message";

export default function Home() {
  return (
    <main className="flex h-screen flex-col bg-gray-100">

      {/* Header */}

      <Header />

      {/* Body */}

      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}

        <Sidebar />

        {/* Chat */}

        <div className="flex-1">

          <ChatBox />

        </div>

      </div>

    </main>
  );
}