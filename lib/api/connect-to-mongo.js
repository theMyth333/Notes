import mongoose, { connection } from 'mongoose';
import NotesSchema from '../../data/models/schema-notes';
import UsersSchema from '../../data/models/schema-users';

const connectToMongo = async () => {
  const connection = await mongoose.createConnection(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useUnifiedTopology: true
    }
  );
  if (connection.readyState === 1) {
    const Note =  connection.model("Note", NotesSchema, process.env.MONGO_COLL_NOTE);
    const User =  connection.model("User", UsersSchema, process.env.MONGO_COLL_USER);
    console.log("Connection established");    //server log
    return {
      connection,
      models: {
        Note,
        User
      }
    };
  }else{
    console.log("Connection error");   //server log
  };
};

export default connectToMongo;