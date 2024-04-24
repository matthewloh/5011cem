import { db } from "@/db";
import { Note, notes } from "@/db/schema";

export async function getNotes() {
  const rooms = await db.query.notes.findMany();
  return rooms;
}
