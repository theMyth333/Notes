import connectToMongoose from "../../lib/api/connect-to-mongo";

export default async (req, res) => {
    const { connection, models } = await connectToMongoose();
    const data = await models.Note.find({ user_id: req.query.email },(err, data) => {
        if (!err) {
            return data;
        } else {
            console.log(`Error while fetching data: ${err}`);
        }
    });
    res.status(200).json(data);
    connection.close();
    console.log("Connection closed");
};