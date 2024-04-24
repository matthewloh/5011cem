"use client";
import useSupabaseBrowser from "@/utils/supabase/client";
import React from "react";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { getNotes } from "@/queries/get-notes";

export default function Note() {
  const supabase = useSupabaseBrowser();
  // This useQuery could just as well happen in some deeper
  // child to <Posts>, data will be available immediately either way
  const { data: notes } = useQuery(getNotes(supabase));
  return (
    <div>
      <h1>{`${notes?.map((note) => {
        return note.name;
      })}`}</h1>
    </div>
  );
}
