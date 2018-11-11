import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Sports = new Schema({
    Name: {
        type: String
    },
});

export default mongoose.model('Sports', Sports);