import { supabase } from './supabase';

export default async function insertReport(obj) {
    const { data, error } = await supabase.from('complaints').insert(obj);
    if (error) throw error;
    if (data) return data;
}