// backend/src/modules/messages/messages.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) { }

    // GET /messages/1
    @Get()
    async getMessage() {
        return await this.messagesService.getMessageById(1);
    }

    // POST /messages
    @Post()
    async createMessage(@Body() createMessageDto: CreateMessageDto) {
        return await this.messagesService.createMessage(createMessageDto.content);
    }
}
