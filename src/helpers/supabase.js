import { createClient } from "@supabase/supabase-js"

const supabaseURL = "https://czuwkhgpcporuqvstraj.supabase.co"
const supabaseANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6dXdraGdwY3BvcnVxdnN0cmFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzMDg2OTcsImV4cCI6MjA1Njg4NDY5N30.rdhgU_T1bokUTNNBUMAxQlVMJTIzEACbsGDYcBfohU0"
const supabase = createClient(supabaseURL, supabaseANON)

export default supabase