import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Patient = new Schema({
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    insurance: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    weight: {
        type: Number
    },
    reason: {
        type: String
    }
});

export default mongoose.model('Patient', Patient);