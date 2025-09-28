const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const supabase = window.supabase.createClient(supabaseUrl, supabaseAnonKey);

// const supabase = window.supabase.createClient(                                                                                                                                                                                       
//   "https://peihaqxmkhxwwbiasgjo.supabase.co",                                                                                                                                                                                        
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlaWhhcXhta2h4d3diaWFzZ2pvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxNTA4MjEsImV4cCI6MjA1OTcyNjgyMX0.fe-bGM9-eQAvGGTUo75o5k-gYQjRxRYD5-GZx51FtsY"                 
// );      