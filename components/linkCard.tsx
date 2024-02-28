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
      <Card className="group w-36 hover:text-primary hover:shadow-primary">
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
