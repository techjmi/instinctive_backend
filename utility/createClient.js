import dotenv from 'dotenv';
dotenv.config();

import { createClient } from "@supabase/supabase-js";
// const supabaseKey = process.env.SUPABASE_KEY;
// const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3cm11eXhmdWRnZ2RiaGljdGJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2MTU1NjQsImV4cCI6MjA1MDE5'
const supabaseUrl='https://zwrmuyxfudggdbhictbn.supabase.co'
// console.log(supabaseUrl);
export const supabase = createClient(supabaseUrl, supabaseKey);
