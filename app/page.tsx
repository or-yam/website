import { LinkCard } from "@/components/linkCard";

const links = [
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
] as const;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 sm:p-24">
      <h1 className="text-xl">{"Hi there, I'm Or-yam"}</h1>

      <ul className="m-8 flex items-center justify-center gap-4 w-full flex-col sm:flex-row">
        {links.map(({ text, href }) => (
          <LinkCard key={text} href={href} text={text} />
        ))}
      </ul>
    </main>
  );
}
