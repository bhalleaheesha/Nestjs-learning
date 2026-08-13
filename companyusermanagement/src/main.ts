import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // --- Swagger Configuration ---
  const config = new DocumentBuilder()
    .setTitle('Company User Management API')
    .setDescription('API documentation for Company User Management')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  // -----------------------------

  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log(`Application is running on: http://localhost:3000`);
  console.log(`API Docs available at: http://localhost:3000/docs`);
}
bootstrap();