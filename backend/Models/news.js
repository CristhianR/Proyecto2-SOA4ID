import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let News = new Schema({
    id: String,
    Title: {
        type: String
    },
    Tag: {
        type: [String]
    },
    Description: {
        type: String
    },
    Img: { 
        data: Buffer, 
        contentType: String 
    },
});

export default mongoose.model('News', News);