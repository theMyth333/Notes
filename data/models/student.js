import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    attendPercent: Number
});


module.exports = StudentSchema;