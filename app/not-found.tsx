import { FishIcon } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex gap-4 min-h-screen flex-col items-center justify-center p-24">
      <FishIcon className="h-24 w-28" />
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        - 404 - Nothing here
      </h1>
    </main>
  );
}
