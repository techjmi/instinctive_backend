import dotenv from 'dotenv';
dotenv.config();

import { createClient } from "@supabase/supabase-js";
const supabaseKey = process.env.SUPABASE_KEY;
const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3cm11eXhmdWRnZ2RiaGljdGJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2MTU1NjQsImV4cCI6MjA1MDE5'
// const supabaseUrl='https://zwrmuyxfudggdbhictbn.supabase.co'
// console.log(supabaseUrl);


// const NEXT_PUBLIC_SUPABASE_URL='https://zwrmuyxfudggdbhictbn.supabase.co'
// const NEXT_PUBLIC_SUPABASE_ANON_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3cm11eXhmdWRnZ2RiaGljdGJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2MTU1NjQsImV4cCI6MjA1MDE5MTU2NH0.f1cPBHkRME8mmwCg9xK3BDHyvWgP2SIgRc9XwaZyjRw'
            
export const supabase = createClient(supabaseUrl,supabaseKey);
