// Together Marketplace Supabase connection

window.TOGETHER_SUPABASE_URL = "https://chicpeueqsmxnewhtlra.supabase.co";

window.TOGETHER_SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Mkhh28_Uwe4859Ohgcvt5Q_SnbvFS3G";
// Initialise Together Fashion Marketplace Supabase client
(function () {
  if (!window.supabase || !window.supabase.createClient) {
    console.error("Supabase library not loaded.");
    return;
  }

  const client = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );

  window.togetherSupabase = client;

  console.log("Together Supabase connected.");
})();
