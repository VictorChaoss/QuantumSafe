import type { Metadata } from "next";
import "./globals.css";
// A fresh CSP nonce is required for each document response.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: {
    default: "Quantum Safe — Post-Quantum SHA-256 Custody Protocol on Solana",
    template: "%s | Quantum Safe",
  },
  description:
    "Post-quantum Solana vault powered by 34-chain SHA-256 one-time signatures (RFC 8554 LM-OTS). Your hot wallet key cannot open your vault.",
  metadataBase: new URL("https://qsafemode.io"),
  openGraph: {
    type: "website",
    siteName: "Quantum Safe",
    title: "Quantum Safe — Post-Quantum SHA-256 Custody on Solana",
    description:
      "A separate SHA-256 hash-locked vault for the Solana you can’t afford to lose. Powered by RFC 8554 LM-OTS one-time signatures.",
  },
  twitter: { card: "summary_large_image", site: "@QuantumSafe" },
  icons: {
    icon: [
      { url: "/brand/quantum-safe-icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/brand/quantum-safe-icon.svg",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
