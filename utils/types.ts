import { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/types/supabase";

export type TypedSupabaseClient = SupabaseClient<Database>;
