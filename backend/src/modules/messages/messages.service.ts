import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class MessagesService {
    constructor(private readonly db: DatabaseService) { }

    async getMessageById(id: number) {
        const { data, error } = await this.db.getClient()
            .from('messages')
            .select('content')
            .eq('id', id)
            .single();

        if (error) {
            console.error(error);
            return null;
        }
        return data;
    }
}
