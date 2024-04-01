import type { Metadata } from "next";
import "@/style/globals.css";
import { Providers } from "@/app/providers";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "云淑",
  description: "书中自有颜如玉",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans">
      <body className="h-screen">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
