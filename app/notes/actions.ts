"use server";

import { getNotes } from "@/data-access/notes";
import { useSupabaseServer } from "@/utils/supabase/server";

export async function getNotesAction() {
  const supabase = useSupabaseServer();
  const session = supabase.auth.getUser();
  if (!session) {
    return null;
  }
  const notes = await getNotes();
  return notes;
}
