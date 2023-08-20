import { UserButton } from "@clerk/nextjs";

export default function Home() {
	return (
		<main className="flex min-h-screen bg-black text-white flex-col items-center p-12">
			<UserButton afterSignOutUrl="/" />
			Hello World
		</main>
	);
}
