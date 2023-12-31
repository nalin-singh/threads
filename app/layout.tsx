import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Threads",
	description: "A Next.js 13 Meta Threads Application",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body
					className={`${inter.className} flex m-auto h-screen bg-black flex-col items-center p-12`}
				>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
