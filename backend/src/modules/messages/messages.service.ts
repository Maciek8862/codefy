import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class MessagesService {
    constructor(private readonly db: DatabaseService) { }

    async getMessage() {
        const { data, error } = await this.db.client
            .from('messages')
            .select('content')
            .eq('id', 1)
            .single();

        if (error) {
            throw new Error(error.message);
        }

        return data;
    }
}
