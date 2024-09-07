import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zclisrjawalimjftomem.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjbGlzcmphd2FsaW1qZnRvbWVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU3MDI2MzcsImV4cCI6MjA0MTI3ODYzN30.ZsCy7Kn51OsQjdMvne_PqhIjOhNUBGsxtj9U8Av07mc";
export const supabase = createClient(supabaseUrl, supabaseKey);
