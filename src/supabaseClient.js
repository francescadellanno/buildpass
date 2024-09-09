import { createClient } from "@supabase/supabase-js";

// I would usually keep these in a .env file, but for the sake of the demo, I'm keeping them here.
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
