import { DarkModeToggle } from "@/components/darkModeToggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <DarkModeToggle />
      <h1 className="text-xl">Hi there</h1>
    </main>
  );
}
