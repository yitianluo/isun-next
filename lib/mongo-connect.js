const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin-luo:iloveisun@isun-database.ehsi5.mongodb.net/isunDB?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const messageSchema = new mongoose.Schema({
        name:String,
        title:String,
        email:String,
        mobile:String,
        company:String,
        address:String,
        message:String,
        date:String
      });
      
    const Message = mongoose.models.Message || mongoose.model("Message",messageSchema);

    const db = mongoose.connection;
    db.once('open', function() {
        console.log("we're connected!");
    });

export default async function connectDB(){

    return await Message.find(function(err,result){
            if (err) {
                return (err);
            } else {
                return JSON.stringify(result);
            }
        });
}