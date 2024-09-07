import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
console.log("$$process.env", process.env);
export const supabase = createClient(supabaseUrl, supabaseKey);
