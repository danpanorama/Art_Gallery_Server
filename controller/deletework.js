const imgs = require('./../models/sql/sqlpools')


const deldata = async (req, res, next) => {
   try {
    console.log(req.body.number,req.body.path)
    
      let deletework = await imgs.deletework(req.body.number);


    next()
   
    } catch (e) {
      console.log("i am the master ", e.message);
      res.json({err:e.message});
    }
  
};


module.exports.deldata = deldata;
