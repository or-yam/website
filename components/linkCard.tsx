import { Github, Codepen, StickyNote, Linkedin } from "lucide-react";
import Link from "next/link";
import { Card, CardDescription, CardHeader } from "./ui/card";
import { ReactElement } from "react";

const mapLinkTextToIcon: Record<string, ReactElement> = {
  Github: <Github />,
  Codepen: <Codepen />,
  Linkedin: <Linkedin />,
  "Dev.to": <StickyNote />,
} as const;

export const LinkCard = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link href={href} target="_blank">
      <Card className="hover:shadow-primary hover:text-primary group w-36">
        <CardHeader>
          {mapLinkTextToIcon?.[text] || null}
          <CardDescription className="group-hover:text-primary">
            {text}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};
