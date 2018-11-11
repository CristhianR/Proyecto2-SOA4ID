import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Challenges = new Schema({
    Place: {
        type: String
    },
    Teams: {
        type: Array,
        default: []
    },
    Date: {
        type: String,
    }
});

export default mongoose.model('Challenges', Challenges);