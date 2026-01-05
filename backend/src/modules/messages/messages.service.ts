// backend/src/modules/messages/messages.service.ts
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class MessagesService {
    constructor(private readonly db: DatabaseService) { }

    async getMessageById(id: number) {
        const client = this.db.client;
        const { data, error } = await client
            .from('messages')
            .select('id, content')
            .eq('id', id)
            .single();

        if (error) throw new Error(error.message);
        return data;
    }

    async createMessage(content: string) {
        const client = this.db.client;
        const { data, error } = await client
            .from('messages')
            .insert({ content })
            .select()
            .single();

        if (error) throw new Error(error.message);
        return data;
    }
}
