import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class MessagesService {
    constructor(private readonly db: DatabaseService) { }

    async getAllMessages() {
        // wywołujemy publiczną metodę fetchTable
        return await this.db.fetchTable('messages');
    }
}
