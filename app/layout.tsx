import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NeonHeart — Clone Yourself. Simulate Your Love Life.',
  description:
    'Create an AI clone, run romantic multiverse simulations, and discover your chemistry before the first date.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#070510] text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
