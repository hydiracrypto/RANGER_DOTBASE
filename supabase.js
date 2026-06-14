const SUPABASE_URL =
"https://mvfgioxgbnfroxdqonyv.supabase.co";

const SUPABASE_KEY =
"sb_publishable_9ZAfSfcg-WFnU33Ix0-dnA_kyX4J0X5";

window.supabaseClient =
supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);