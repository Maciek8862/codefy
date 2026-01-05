import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class DatabaseService {
    private supabase: SupabaseClient;

    constructor() {
        this.supabase = createClient(
            process.env.SUPABASE_URL!,
            process.env.SUPABASE_KEY!
        );
    }

    // publiczna metoda do fetchowania danych z tabeli
    public async fetchTable(tableName: string) {
        const { data, error } = await this.supabase
            .from(tableName)
            .select('*');

        if (error) throw new Error(error.message);
        return data;
    }
}
