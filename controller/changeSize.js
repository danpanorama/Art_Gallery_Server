const imgs = require('./../models/sql/sqlpools')


const changeSize = async (req, res, next) => {
   try {
    
      let changeSizeS = await imgs.changeSizeSQL(req.body.size,req.body.number);


   res.json({msg:{msg:'seccest', type:'good'}})
   
    } catch (e) {
      console.log("i am the master ", e.message);
      res.json({err:e.message});
    }
  
};


module.exports.changeSize = changeSize;
