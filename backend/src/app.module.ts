import { Module } from '@nestjs/common';
import { MessagesModule } from './modules/messages/messages.module';

@Module({
    imports: [MessagesModule], // <--- bardzo ważne
})
export class AppModule { }
