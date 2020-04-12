import connectToMongoose from "../../lib/api/connect-to-mongo";

export default async (req, res) => {
    const { connection, models } = await connectToMongoose();

    const email = req.query.email; //email is like key
    const pass = req.query.key; // no security yet
    
    if (req.query.mode === "login") {
        await models.User.findOne({ email: email, pass: pass }, (err, data) => {
            if (!err) {
                data !== null ? res.status(200).json({ exists: true, name: data.name }) : res.status(200).json({ exists: false });
            } else {
                console.log(`Error while validating user: ${err}`); //server log
                res.status(200).json(err);
            }
        });
    };

    if (req.query.mode === "signup") {
        let exists = "";
        try {
            const data = await models.User.findOne({ email: email });
            if (data !== null) {
                exists = true;
                res.status(200).json({ exists: true });
            } else {
                exists = false;
            }
        } catch (err) {
            console.log(err); //server log
        };

        if (exists === false) {
            const newUser = new models.User(req.body);
            try {
                await newUser.save();
                res.status(200).json({ exists: false, created: true });
            } catch (err) {
                console.log(err); //server log
                res.status(200).json({ exists: false, created: false });
            };
        };
    };

    connection.close();
    console.log("Connection closed"); //server log
};