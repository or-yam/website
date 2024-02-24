import { Github, Codepen, StickyNote, Linkedin } from "lucide-react";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-xl">{"Hi there, I'm Or-yam"}</h1>

      <ul className=" m-8 flex items-center justify-center gap-2 w-full ">
        <li>
          <Link href="https://github.com/or-yam" target="_blank">
            <Card className="hover:shadow-primary hover:text-primary group">
              <CardHeader>
                <Github />
                <CardDescription className="group-hover:text-primary">
                  Github
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </li>
        <li>
          <Link href="https://codepen.io/oryamne" target="_blank">
            <Card className="hover:shadow-primary hover:text-primary group">
              <CardHeader>
                <Codepen />
                <CardDescription className="group-hover:text-primary">
                  Codepen
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </li>
        <li>
          <Link href="https://dev.to/oryam" target="_blank">
            <Card className="hover:shadow-primary hover:text-primary group">
              <CardHeader>
                <StickyNote />
                <CardDescription className="group-hover:text-primary">
                  Dev.to
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/oryamne" target="_blank">
            <Card className="hover:shadow-primary hover:text-primary group">
              <CardHeader>
                <Linkedin />
                <CardDescription className="group-hover:text-primary">
                  Linkedin
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </li>
      </ul>
    </main>
  );
}
