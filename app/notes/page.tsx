import { createClient } from "@/utils/supabase/server";
import { unstable_noStore } from "next/cache";

export default async function Notes() {
  unstable_noStore()
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();

  return <pre>{JSON.stringify(notes, null, 2)}</pre>;
}
