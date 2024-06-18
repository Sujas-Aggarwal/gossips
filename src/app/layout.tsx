import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/helpers/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Gossips",
    description: "Share Gossips Anonymously",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider>
            <html lang="en">
                <body className={inter.className}>{children}</body>
            </html>
        </ThemeProvider>
    );
}
