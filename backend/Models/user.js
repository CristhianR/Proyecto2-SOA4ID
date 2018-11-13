import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let User = new Schema({
    id_usuario: {
        type: Number
    },
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    correo: {
        type: String
    },
});

export default mongoose.model('User', User);