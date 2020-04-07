import mongoose from 'mongoose';

// we'll import all the schemas here and return them
// on the mongo connection object
// for use in the handlers
import StudentSchema from '../../data/models/student';

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
  const Student = connection.model("Student", StudentSchema, "attendance");
  return {
    connection,
    models: {
      Student
    }
  };
}

export default connectToMongo;