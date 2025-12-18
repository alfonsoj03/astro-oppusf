import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load env vars if in Node environment (process exists)
if (typeof process !== 'undefined' && process.env) {
    dotenv.config();
}

const getEnv = (key: string) => {
    if (import.meta.env) {
        return import.meta.env[key];
    }
    return process.env[key];
};

const supabaseUrl = getEnv('SUPABASE_URL');
const supabaseKey = getEnv('SUPABASE_ANON_KEY');

if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Missing Supabase environment variables');
}

export const supabase = createClient(
    supabaseUrl!,
    supabaseKey!
);