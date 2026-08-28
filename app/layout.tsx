import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "月半文娱有限公司｜普通，做到过分",
  description: "以 shock value 为中心的极端营销公司与胖猫 IP 体验站。",
  icons: {
    icon: "https://yueban-shock-lab.thyeojiang1.chatgpt.site/favicon.svg",
    shortcut: "https://yueban-shock-lab.thyeojiang1.chatgpt.site/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
