import mongoose from 'mongoose';

const NotesSchema = new mongoose.Schema({
    _id : Number,
    user_id: String,
    note_title: { type: String, maxlength: 30},
    note_content: { type: String, maxlength: 300}
});

module.exports = NotesSchema;