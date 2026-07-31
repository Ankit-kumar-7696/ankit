import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lexavra AI Assistant",
  description: "AI Assistant powered by n8n and Ollama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}