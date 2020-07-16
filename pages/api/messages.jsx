const mongoose = require("mongoose");
// const bodyParser = require('body-parser');

    export default (req, res) => {

    mongoose.connect(process.env.DB_HOST, {
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

    if(req.method === "GET"){
        Message.find(function(err,result){
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    } else {
        const data = req.body;
        const message = new Message({
            name : data.name,
            title:data.title,
            email:data.email,
            mobile:data.mobile,
            company:data.company,
            address:data.address,
            message:data.message,
            date:data.date
          });
        
          message.save(function(err){
            if(err){
              console.log("error is" + err);
            } else {
              res.send("success");
            }
          });
    }
  }

  export const config = {
    api: {
      externalResolver: true,
    },
  }