import { supabase } from './supabase';

export async function insertReport(obj) {
    const { data, error } = await supabase.from('complaints').insert(obj);
    if (error) throw error;
    if (data) return data;
}
export async function getAll() {
    const { data, error } = await supabase.from('complaints').select();
    if (error) throw error;
    if (data) return data;
}
export async function getCSV() {
    const { data, error } = await supabase.from('complaints').select().csv();
    if (error) throw error;
    if (data) return data;
}