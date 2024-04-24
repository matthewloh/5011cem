import { unstable_noStore } from "next/cache";
import { useSupabaseServer } from "@/utils/supabase/server";
import { getNotesAction } from "./actions";

// export const revalidate = 0;
// export const dynamic = "force-dynamic"; // no caching
// export const fetchCache = "force-no-store"; // to page.js

export default async function Notes() {
  unstable_noStore();
  const supabase = useSupabaseServer();
  const session = await supabase.auth.getUser();
  const user = session?.data?.user;
  const notes = await getNotesAction();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-lg mx-auto">
        {notes &&
          notes.map((note) => (
            <div
              key={note.id}
              className="mb-4 p-4 border border-gray-300 rounded"
            >
              <div className="font-bold text-lg mb-2">{note.title}</div>
              <div className="text-slate-400">{note.body}</div>
              <div className="text-sm text-gray-500">
                {`Created At: ${note.createdAt}, Updated At: ${note.updatedAt}`}
              </div>
            </div>
          ))}
      </div>
      <div className="mt-8 p-4 border border-gray-300 rounded">
        <div className="font-bold text-lg mb-2">Logged In User:</div>
        <div className="text-slate-400">Email: {user?.email}</div>
        <div className="text-slate-400">User ID: {user?.id}</div>
        <div className="text-slate-400">User Role: {user?.role}</div>
        <div className="text-slate-400">User Created At: {user?.created_at}</div>
      </div>
    </div>
  );
}
