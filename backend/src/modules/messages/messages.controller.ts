// backend/src/modules/messages/messages.controller.ts
import { Controller, Get } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) { }

    // GET /messages/1
    @Get()
    async getMessage() {
        return await this.messagesService.getMessageById(1);
    }
}
