// backend/src/app.module.ts
import { Module } from '@nestjs/common';
import { MessagesModule } from './modules/messages/messages.module';

@Module({
    imports: [MessagesModule],
})
export class AppModule { }
