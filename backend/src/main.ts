// backend/src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: '*', // lub dokładny URL frontendu
    });
    await app.listen(process.env.PORT || 3001);
    console.log(`🚀 Backend running on port ${process.env.PORT || 3001}`);
}

bootstrap();
