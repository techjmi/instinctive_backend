import dotenv from 'dotenv';
dotenv.config();

import { createClient } from "@supabase/supabase-js";
const supabaseKey = process.env.SUPABASE_KEY;
const supabaseUrl = process.env.SUPABASE_URL;
// console.log(supabaseUrl);
export const supabase = createClient(supabaseUrl, supabaseKey);
