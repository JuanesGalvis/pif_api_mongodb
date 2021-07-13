import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistroModule } from './registro/registro.module';

@Module({
  imports: [
    RegistroModule,
    MongooseModule.forRoot('mongodb+srv://galvis:Lpm4WmLNDcaB0Cdp@pif.a2l1b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
