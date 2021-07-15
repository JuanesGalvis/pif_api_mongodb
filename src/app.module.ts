import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistroModule } from './registro/registro.module';

@Module({
  imports: [
    RegistroModule,
    MongooseModule.forRoot(process.env.MONGO, {
      useNewUrlParser: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
