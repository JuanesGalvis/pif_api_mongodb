import { Document } from 'mongoose';

export interface Registro extends Document {
    readonly fecha: string,
    readonly tiempo: string,
    readonly movimientos: Array<string>,
}