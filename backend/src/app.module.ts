import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MessagesModule } from './modules/messages/messages.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,   // 🔥 dostępne wszędzie
        }),
        DatabaseModule,
        MessagesModule,
    ],
})
export class AppModule { }
