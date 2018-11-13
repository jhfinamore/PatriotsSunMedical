// Had an issue getting import or export to work, if any of you back-end dudes know how to fix this feel free
import mongoose from 'mongoose';

// In the mean time this seems to work alrighty
// const mongoose = require('mongoose');

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

// Also had a problem with this one, but commonJS syntax seemed to work it out. Absolutely no idea why 
export default mongoose.model('Patient', Patient);
// module.exports = mongoose.model('Patient', Patient);