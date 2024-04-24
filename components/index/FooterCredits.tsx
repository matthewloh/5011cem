import Link from "next/link";
import React from "react";

export default function FooterCredits() {
  return (
    <footer className="w-full border-t-2 border-t-foreground/10 p-4 flex justify-center text-center text-base bg-footer">
      <p className="mr-2 text-text-secondary">Created by:</p>
      <div className="flex space-x-2">
        <Link
          href="https://github.com/matthewloh"
          target="_blank"
          className="font-semibold hover:underline text-text-primary"
          rel="noreferrer"
        >
          Matthew Loh Yet Marn,
        </Link>
        <Link
          href="https://github.com/MarcusO17"
          target="_blank"
          className="font-semibold hover:underline text-text-primary"
          rel="noreferrer"
        >
          Ong Ge Ye,
        </Link>
        <Link
          href="https://github.com/Vaneryn"
          target="_blank"
          className="font-semibold hover:underline text-text-primary"
          rel="noreferrer"
        >
          Thor Wen Zheng,
        </Link>
        <Link
          href="https://github.com/kelvinkyy"
          target="_blank"
          className="font-semibold hover:underline text-text-primary"
          rel="noreferrer"
        >
          Kee Yong Yik
        </Link>
      </div>
    </footer>
  );
}
