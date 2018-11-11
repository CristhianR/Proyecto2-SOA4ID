import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Team = new Schema({
    Name: {
        type: String
    },
    Members: {
        type: Array,
        default: []
    },
    Img: { 
        data: Buffer, 
        contentType: String 
    },
    Achievements: {
        type: Number,
        default: 0
    }
});

export default mongoose.model('Team', Team);