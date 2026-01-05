// backend/src/modules/messages/messages.module.ts
import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    providers: [MessagesService],
    controllers: [MessagesController],
})
export class MessagesModule { }
