var express = require('express');
var router = express.Router();
const sendtext = require('../controller/sms')
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const accountSid = 'ACe9190446cdbb675d966ae65619ee8d9e';
const authToken = '3685106f42da63be80ed0019da121749';
const client = require('twilio')(accountSid, authToken);



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/smstwilio',sendtext.textm, function(req, res, next) {
  console.log(req.body)
  res.json({msg:'ok'})
  });


  router.post('/sms', async (req, res) => {
try{

  if(req.body.number == "" || req.body.email == ""){
    res.json({msg:"you need to enter an email and phone number"})
    return
  }

 await client.messages
  .create({
     body:"0"+req.body.number+" and email " + req.body.email +" and name : " + req.body.name +" "+ req.body.text,
     from:'+19105972348' ,
     to:  '+972546982417'
   })
  .then(message =>  res.json({msg:'message sent' }));

}catch(e){
  console.log(e)
}

  



    // const twiml = new MessagingResponse();
    // twiml.message('The Robots are coming! Head for the hills!');
    // res.writeHead(200, {'Content-Type': 'text/xml'});
    // res.end(twiml.toString());
  });

module.exports = router;
