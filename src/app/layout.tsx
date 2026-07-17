import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bray Stiens | Senior Software Engineer",
  description:
    "Senior Software Engineer specializing in cloud-native systems, .NET/C# backend architecture, and React/Next.js frontends.",
  metadataBase: new URL("https://braystiens.tech"),
  openGraph: {
    title: "Bray Stiens | Senior Software Engineer",
    description:
      "Cloud-native systems, .NET/C#, distributed architecture, and modern React product delivery.",
    url: "https://braystiens.tech",
    siteName: "Bray Stiens Portfolio",
    type: "website",
    images: [
      {
        url: "/images/bray-stiens-headshot.jpg",
        width: 640,
        height: 760,
        alt: "Professional headshot of Bray Stiens, Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bray Stiens | Senior Software Engineer",
    description:
      "Cloud-native systems, .NET/C#, distributed architecture, and modern React product delivery.",
    images: ["/images/bray-stiens-headshot.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.18),transparent_24%),linear-gradient(180deg,rgba(11,16,32,0.86),rgba(11,16,32,1))]" />
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-10 md:px-10 lg:px-12">
          {children}
        </div>
      </body>
    </html>
  );
}
