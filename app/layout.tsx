import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Frontend Developer Portfolio",
  description: "Professional portfolio website showcasing frontend development projects and skills",
  keywords: ["frontend developer", "web developer", "portfolio", "react", "next.js", "typescript"],
  authors: [{ name: "Frontend Developer" }],
  openGraph: {
    title: "Frontend Developer Portfolio",
    description: "Professional portfolio website showcasing frontend development projects and skills",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning style={{ colorScheme: "dark" }}>
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `html { background-color: #0a0a0a; color: #ededed; }`
        }} />
      </head>
      <body className="antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem("theme");
                  if (theme === "light") {
                    document.documentElement.classList.add("dark");
                  } else {
                    document.documentElement.classList.remove("dark");
                    if (!theme || theme !== "dark") {
                      localStorage.setItem("theme", "dark");
                    }
                  }
                } catch (e) {
                  document.documentElement.classList.remove("dark");
                }
              })();
            `,
          }}
        />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
