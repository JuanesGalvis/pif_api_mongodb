import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Cualquier aplicación pueda consultar a esta API
  app.enableCors();
  
  await app.listen(3000);
}
bootstrap();
