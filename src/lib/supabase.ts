import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables for Node.js scripts
if (typeof process !== 'undefined' && process.env) {
    dotenv.config();
}

const getEnv = (key: string) => {
    // Astro environment variables
    if (typeof import.meta !== 'undefined' && import.meta.env) {
        return import.meta.env[key];
    }
    // Node.js environment variables
    if (typeof process !== 'undefined' && process.env) {
        return process.env[key];
    }
    return undefined;
};

const supabaseUrl = getEnv('SUPABASE_URL');
const supabaseKey = getEnv('SUPABASE_ANON_KEY');

if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Missing Supabase environment variables. Please check your .env file or Vercel settings.');
}

export const supabase = createClient(
    supabaseUrl || '',
    supabaseKey || ''
);