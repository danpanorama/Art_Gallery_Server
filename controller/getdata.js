
const imgs = require('./../models/sql/sqlpools')

// this is logg in function
const getdata = async (req, res, next) => {

    try {
    console.log(req.query)
      let finduser = await imgs.getbycat(req.query.data);


    res.json({data: finduser[0]})
   
    } catch (e) {
      console.log("i am the master ", e.message);
      res.json({err:e.message});
    }
  
};


module.exports.getdata = getdata;
