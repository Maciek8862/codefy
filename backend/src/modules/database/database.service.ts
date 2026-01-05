import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class DatabaseService {
    private supabase: SupabaseClient;

    constructor(private config: ConfigService) {
        const url = this.config.get<string>('SUPABASE_URL');
        const key = this.config.get<string>('SUPABASE_KEY');

        if (!url || !key) {
            throw new Error('Supabase env variables are missing');
        }

        this.supabase = createClient(url, key);
    }

    get client() {
        return this.supabase;
    }
}
