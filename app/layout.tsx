import type { Metadata } from 'next'
import '@/style/globals.css'
import { Providers } from '@/app/providers'
import Header from '@/components/header'
import { Lumiflex } from 'uvcanvas'

export const metadata: Metadata = {
  title: "旅行者的随想",
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
      <head>
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "451e213ff4e14d1c8d1ac152fdc5403a"}'></script>
      </head>
      <body className="h-screen">
      <Providers>
        <Header/>
        <div className="absolute w-screen h-screen -z-50 mt-[-4rem]">
          <Lumiflex />
        </div>
        {children}
      </Providers>
      </body>
    </html>
  );
}
