// backend/src/modules/messages/messages.service.ts
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class MessagesService {
    constructor(private readonly db: DatabaseService) { }

    // Pobiera wszystkie wiadomości
    async getAllMessages() {
        const client = this.db.client; // używamy getter'a 'client'
        const { data, error } = await client.from('messages').select('*').order('id', { ascending: true });
        if (error) {
            throw new Error(error.message);
        }
        return data;
    }

    // Pobiera wiadomość po ID (np. id = 1)
    async getMessageById(id: number) {
        const client = this.db.client; // używamy getter'a 'client'
        const { data, error } = await client.from('messages').select('id, content').eq('id', id).single();
        if (error) {
            throw new Error(error.message);
        }
        return data;
    }
}
