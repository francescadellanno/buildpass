import { createClient } from "@supabase/supabase-js";

// I would usually keep these in a .env file, but for the sake of the demo, I'm keeping them here.
const supabaseUrl = "https://zclisrjawalimjftomem.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjbGlzcmphd2FsaW1qZnRvbWVtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNTcwMjYzNywiZXhwIjoyMDQxMjc4NjM3fQ.BdlOnKRGMZ1DoVl9if5kNyMDOMPKjZJeRNzxGk6fnP8";
export const supabase = createClient(supabaseUrl, supabaseKey);
