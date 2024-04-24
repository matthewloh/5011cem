import { Github } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8 justify-center items-center">
        <a
          href="https://github.com/matthewloh/5011cem"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
        >
          <Github size={20} />
          <span className="font-mono text-xl">GitHub</span>
        </a>
        {/* <span className="border-l rotate-45 h-6" /> */}
      </div>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        Project Repository:{" "}
        <Link
          href="https://github.com/matthewloh/5011cem"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          5011CEM
        </Link>{" "}
      </p>
      {/* Separator */}
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
