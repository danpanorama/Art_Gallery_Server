const imgs = require('./../models/sql/sqlpools')


const changeName = async (req, res, next) => {
   try {
    
      let changeNames = await imgs.changeName(req.body.name,req.body.number);


   res.json({msg:{msg:'seccest', type:'good'}})
   
    } catch (e) {
      console.log("i am the master ", e.message);
      res.json({err:e.message});
    }
  
};


module.exports.changeName = changeName;
