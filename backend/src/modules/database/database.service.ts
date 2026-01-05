import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class DatabaseService {
    private readonly supabase: SupabaseClient;

    constructor() {
        if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
            throw new Error('Supabase ENV variables are missing');
        }
        this.supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
    }

    // getter dostępny publicznie
    get client(): SupabaseClient {
        return this.supabase;
    }

    // opcjonalnie helper
    async fetchTable(tableName: string) {
        const { data, error } = await this.supabase.from(tableName).select('*');
        if (error) throw new Error(error.message);
        return data;
    }
}
