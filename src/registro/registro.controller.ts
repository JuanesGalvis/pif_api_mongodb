import { Controller, Get, Res, HttpStatus, Post, Body } from '@nestjs/common';
import { RegistroService } from './registro.service';
import { Registro } from './dto/Registro.dto'
// import { ApiTags } from '@nestjs/swagger';

// @ApiTags('Registros')
@Controller('registro')
export class RegistroController {

    constructor(
        private RegistroService: RegistroService
    ){}

    @Get()
    async getAllRegistros(@Res() res) {
        const registros = await this.RegistroService.getAll()
        return res.status(HttpStatus.OK).json({
            registros: registros
        })
    }

    @Post()
    async createRegistro(@Res() res, @Body() createdRegistro: Registro) {
        const registro = await this.RegistroService.create(createdRegistro);

        return res.status(HttpStatus.CREATED).json({
            message: 'GUARDADO CON EXITO',
            NuevoRegistro: registro
        })
    }
}
