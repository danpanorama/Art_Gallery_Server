const imgs = require('./../models/sql/sqlpools')


const changeDate = async (req, res, next) => {
   try {
    
      let changeDateS = await imgs.changeDate(req.body.date,req.body.number);


   res.json({msg:{msg:'seccest', type:'good'}})
   
    } catch (e) {
      console.log("i am the master ", e.message);
      res.json({err:e.message});
    }
  
};


module.exports.changeDate = changeDate;
