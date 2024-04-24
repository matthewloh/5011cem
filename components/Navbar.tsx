import { useSupabaseServer } from "@/utils/supabase/server";
import { HomeIcon, NotebookTabs } from "lucide-react";
import Link from "next/link";
import AuthButton from "./AuthButton";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 relative z-10">
      <div className="w-full flex justify-between items-center p-3 text-sm container">
        <div className="flex space-x-4">
          <Link
            href="/"
            className="py-2 px-3 flex rounded-md bg-btn-background hover:bg-btn-background-hover space-x-2 items-center text-btn-text text-sm font-medium transition-colors duration-200 ease-in-out"
          >
            <HomeIcon />
            <span className="ml-1">Home</span>
          </Link>
          <Link
            href="/notes"
            className="py-2 px-3 flex rounded-md bg-btn-background hover:bg-btn-background-hover space-x-2 items-center text-btn-text text-sm font-medium transition-colors duration-200 ease-in-out"
          >
            <NotebookTabs />
            <span className="ml-1">Notes</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <AuthButton />
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
