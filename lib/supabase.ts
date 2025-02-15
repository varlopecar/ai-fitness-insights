import { createClient } from "@supabase/supabase-js";
import { AsyncStorageService } from "@/services/storageService";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorageService,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
