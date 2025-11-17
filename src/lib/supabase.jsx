import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ngdyjulnpgpyntljakmz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nZHlqdWxucGdweW50bGpha216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5MTkyNjUsImV4cCI6MjA3ODQ5NTI2NX0.1xT7JpixvsNXximD1-hny03IMJPB73cRjOGbD-YjsE0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
