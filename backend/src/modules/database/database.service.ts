// backend/src/modules/database/database.service.ts
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

    get client(): SupabaseClient {
        return this.supabase;
    }
}
