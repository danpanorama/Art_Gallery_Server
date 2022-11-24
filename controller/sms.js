async function textm(req ,res, next){
    const Vonage = require('nexmo')
    const from = req.body.number
    const to = "972546982417"
    
    const text = req.body.text + " " + req.body.name + " " + "הודעה מאת: " 
    console.log(req.body)
    const vonage = new Vonage({
      apiKey: "30caf60e",
      apiSecret: "P827COLIoJ7TXYhi"
    })
    
    vonage.message.sendSms(from, to, text, (err, responseData) => {
        if (err) {
            console.log(err);
        } else {
            if(responseData.messages[0]['status'] === "0") {
                console.log("Message sent successfully.");
                res.json({msg:'ההודעה נשלחה בהצלחה'})
            } else {
                
                console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
           res.json({msg:'סליחה אך ההודעה לא נשלחה משום מה'})
            }
        }
    })
}

module.exports.textm = textm;