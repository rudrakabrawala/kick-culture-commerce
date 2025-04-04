import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vhebbeejkhjykhezduhb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoZWJiZWVqa2hqeWtoZXpkdWhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3NTAxODMsImV4cCI6MjA1OTMyNjE4M30.xGaSbahZ56WBUNQcviHvXpq4sFUcoJrFl38DlU0yef0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
