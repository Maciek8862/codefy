import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class MessagesService {
    constructor(private readonly db: DatabaseService) { }

    // Pobiera wszystkie wiadomości
    async getMessage() {
        const client = this.db.getClient();
        const { data, error } = await client.from('messages').select('*');
        if (error) throw new Error(error.message);
        return data;
    }

    // Pobiera wiadomość po ID
    async getMessageById(id: number) {
        const client = this.db.getClient();
        const { data, error } = await client.from('messages').select('*').eq('id', id);
        if (error) throw new Error(error.message);
        return data[0]; // zwraca tylko pierwszą pasującą wiadomość
    }
}
