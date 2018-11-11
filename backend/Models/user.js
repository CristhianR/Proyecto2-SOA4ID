import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let User = new Schema({
    FirstName: {
        type: String
    },
    LastName: {
        type: String
    },
    Email: {
        type: String
    },
    Sports: {
        type: Array,
        default: []
    },
    Img: { 
        data: Buffer, 
        contentType: String 
    },
    Team: {
        type: String
    }

});

export default mongoose.model('User', User);