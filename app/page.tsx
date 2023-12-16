import { Github, Codepen, StickyNote } from "lucide-react";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-xl">Hi there</h1>

      <ul className=" m-8 flex items-center justify-center gap-2 w-full ">
        <li>
          <Link href="https://github.com/or-yam" target="_blank">
            <Card className="hover:bg-gray-50">
              <CardHeader>
                <Github />
                <CardDescription>Github</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/or-yam" target="_blank">
            <Card className="hover:bg-gray-50">
              <CardHeader>
                <Codepen />
                <CardDescription>Codepen</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/or-yam" target="_blank">
            <Card className="hover:bg-gray-50">
              <CardHeader>
                <StickyNote />
                <CardDescription>Dev.to</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </li>
      </ul>
    </main>
  );
}
