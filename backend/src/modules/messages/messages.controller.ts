import { Controller, Get, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) { }

    // GET /messages
    @Get()
    async getAllMessages() {
        return await this.messagesService.getMessage();
    }

    // GET /messages/1
    @Get(':id')
    async getMessageById(@Param('id') id: string) {
        return await this.messagesService.getMessageById(Number(id));
    }
}
