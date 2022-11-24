
const imgs = require('./../models/sql/sqlpools')

// this is logg in function
const add = async (req, res, next) => {


    try {

  




    //  console.log(req.body.user)
     let k = JSON.parse(req.body.user)
    //  console.log( req.file)
    

      await imgs.insertimage(
      k.name,
      req.file.path,
      k.category,
       k.date,
       k.size,
    );
     
   
  let work =   await imgs.getbynameandpath(
      k.name, req.file.path
    )

    
    res.json({msg:"complete",work:work[0][0]})
   
    } catch (e) {
      console.log("i am the master ", e.message);
      res.json({err:e.message});
    }
  
};


module.exports.add = add;
