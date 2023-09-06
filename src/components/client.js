import { createClient } from '@supabase/supabase-js';

// Define your Supabase Project URL and API Key
const URL = 'https://lkxmlgifxgftixpqneph.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxreG1sZ2lmeGdmdGl4cHFuZXBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyNjcyNjQsImV4cCI6MjAwNjg0MzI2NH0.-8PraLjrakl9NQBzJ5TfkWqjZnI6lzIGTlIIDaccWgU';

// Create a Supabase client instance
const supabase = createClient(URL, API_KEY);

// Export the supabase client instance
export default supabase;