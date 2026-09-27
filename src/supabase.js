import { createClient } from "@supabase/supabase-js";

// Replace these with your own project's values:
// Supabase Dashboard -> Project Settings -> API
const supabaseUrl = "https://qphdesqrghmgocgkzjzt.supabase.co";
const supabaseKey = "sb_publishable_pHX1dNnJLX6neCueQMY5rA_3s4ujLvP";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
