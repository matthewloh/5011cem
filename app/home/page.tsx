import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <>
      <div>Page</div>
      <Link href="/notes" className="p-6 bg-sky-500">Notes</Link>
    </>
  );
}
