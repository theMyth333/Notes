import connectToMongoose from "../../lib/api/connect-to-mongo";

export default async (req, res) => {
    const { connection, models } = await connectToMongoose();
    //insert
    if (req.query.m == "I") {   
        const note = new models.Note(req.body);
        console.log(`Inserting record: ${note}`);   //server log      
        try {
            await note.save();
            res.status(200).json({ success:`Entry Inserted => ID : ${req.body._id}`});
        } catch (err) {
            console.log(err.errmsg); //server log 
        }
    };
    //delete
    if (req.query.m == "D") {
        try {
            console.log(`Deleting record: `);
            console.log(req.body);          //server log 
            await models.Note.deleteOne(req.body);
            res.status(200).json({ success:`Entry deleted => ID : ${req.body._id}`});
        } catch (err) {
            console.log(err.errmsg);        //server log 
        }
    };
    connection.close();
    console.log("Connection closed");   //server log 
};