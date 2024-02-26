import { Github, Codepen, StickyNote, Linkedin } from "lucide-react";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import Link from "next/link";

const links: { href: string; text: string }[] = [
  {
    href: "https://github.com/or-yam",
    text: "Github",
  },
  {
    href: "https://codepen.io/oryamne",
    text: "Codepen",
  },
  {
    href: "https://dev.to/oryam",
    text: "Dev.to",
  },
  {
    href: "https://www.linkedin.com/in/oryamne",
    text: "Linkedin",
  },
];

const linkTextToIcon = (text: string) => {
  switch (text) {
    case "Github":
      return <Github />;
    case "Codepen":
      return <Codepen />;
    case "Dev.to":
      return <StickyNote />;
    case "Linkedin":
      return <Linkedin />;
    default:
      return null;
  }
};

const LinkCard = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link href={href} target="_blank">
      <Card className="hover:shadow-primary hover:text-primary group w-36">
        <CardHeader>
          {linkTextToIcon(text)}
          <CardDescription className="group-hover:text-primary">
            {text}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 sm:p-24">
      <h1 className="text-xl">{"Hi there, I'm Or-yam"}</h1>

      <ul className="m-8 flex items-center justify-center gap-4 w-full flex-col sm:flex-row">
        {links.map((link) => (
          <LinkCard key={link.text} href={link.href} text={link.text} />
        ))}
      </ul>
    </main>
  );
}
