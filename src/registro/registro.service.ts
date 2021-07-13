import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Registro } from './entities/Registro.intity';
import { Registro as RegistroDTO } from './dto/Registro.dto'

@Injectable()
export class RegistroService {

    constructor(
        @InjectModel("Registro") private registroModel: Model<Registro>
    ){}

    async getAll(): Promise<Registro[]> {
        return await this.registroModel.find();
    }

    async create(newRegistro: RegistroDTO): Promise<Registro> {
        const registro = new this.registroModel(newRegistro);
        return await registro.save();
    }

}
