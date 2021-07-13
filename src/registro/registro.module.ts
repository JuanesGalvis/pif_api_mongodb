import { Module } from '@nestjs/common';
import { RegistroService } from './registro.service';
import { RegistroController } from './registro.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { RegistroSchema } from './schemas/Registro.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
        {name: 'Registro', schema: RegistroSchema}
    ])
  ],
  providers: [RegistroService],
  controllers: [RegistroController]
})
export class RegistroModule {}
