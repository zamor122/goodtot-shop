import type {Metadata} from "next";
import TopNav from "./components/TopNav";
import './globals.css';
import {Providers} from "./Providers";

export const metadata: Metadata = {
  title: "Goodtot Shop",
  description: "The best place to purchase new or used anything for kids",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body>
      <Providers>
      <main className="text-foreground dark:bg-stone-700 bg-amber-50">
      <TopNav />
      {children}
      </main>
      </Providers>
    </body>
    </html>
  );
}
