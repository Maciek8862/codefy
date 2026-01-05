import { Controller, Get } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) { }

    @Get()
    async getMessage() {
        // Pobierz rekord o id 1
        const message = await this.messagesService.getMessageById(1);
        return { content: message?.content || 'No message found' };
    }
}
