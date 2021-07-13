import { Schema } from 'mongoose';

export const RegistroSchema = new Schema({
    fecha: {type: String, required: true},
    tiempo: {type: String, required: true},
    movimientos: {type: Array, required: true},
});