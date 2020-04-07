import connectToMongoose from "../../lib/api/connect-to-mongo";

export default async (req,res) => {
    const {connection, models} = await connectToMongoose();
    console.log(models);
    models.Student.find({}, (error, user) => {
    if (error) {
      connection.close();
      res.status(500).json({ error });
    } else {
        res.status(200).json(user);
        connection.close();
    }});
};

