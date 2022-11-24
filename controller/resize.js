const multer = require('multer');
const path = require('path');
const sharp = require('sharp');
const fs = require('fs');


const resize = async (req, res, next) => {


    try {

        const { filename: image } = req.file;
      
        await sharp(req.file.path)
         .resize(200, 200)
         .jpeg({ quality: 90 })
         .toFile(
             path.resolve(req.file.destination,'resized',image)
         )
         fs.unlinkSync(req.file.path)


req.urli = path.resolve(req.file.destination,'resized',image)
    
    next()
   
    } catch (e) {
      console.log("i am the master ", e.message);
      res.json({err:e.message});
    }
  
};


module.exports.resize = resize;
