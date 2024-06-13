import { createClient } from "@supabase/supabase-js";
const PUBLIC_SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2a3Nwb2lyem5uamRrZHpqaXhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyNzU2MTYsImV4cCI6MjAwNzg1MTYxNn0.yo84neco8YrvAr7KCESBnIRbcqFibDXVDP2-438C2w4";
const PUBLIC_SUPABASE_URL = "https://lvkspoirznnjdkdzjixa.supabase.co";
createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY, {
  db: { schema: "public" },
  auth: { persistSession: false }
});
