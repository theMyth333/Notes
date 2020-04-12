import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
    name: String,
    email : String,
    pass: String
});

module.exports = UsersSchema;