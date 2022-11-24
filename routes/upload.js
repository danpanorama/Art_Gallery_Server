var express = require("express");
var router = express.Router();
// const upload = require('../controllers/multer/upload')
const multer = require('multer')
const path = require("path");
const adddata = require('./../controller/adddata');
const getdata = require('./../controller/getdata');
const getalldata = require('./../controller/getall');
const delwork = require('../controller/deletework');
const resize = require('../controller/resize')

const fs = require('fs')

const storage = multer.diskStorage({
  destination: function(req,file,cb) {
    
    cb(null, path.join(__dirname ,"../", "/public/upload/")  );
  },
  filename: function(req,file,cb) {
    
   cb(null,"mario_" + Math.floor(Date.now() / 1000) + file.originalname)
  }
});

const filterFile = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg'|| file.mimetype === 'image/png'){
    cb(null, true)
  }else{
    cb(null, false)
  }
};


const upload = multer({
  storage: storage,
  limits:{
    fieldSize: 1024 * 1024 * 5
  },
  fileFilter:filterFile
 
});



/* GET home page. */
router.get("/",getdata.getdata, function (req, res, next) {
 
});
router.get("/dash", function (req, res, next) {
  res.redirect('/')
 
});

router.post("/",upload.single('file'),resize.resize,adddata.add, function (req, res, next) {


  
  
});

router.post("/deletwork",delwork.deldata, function (req, res, next) {
  
  fs.unlink(req.body.path, (err) => {
    if (err) {
      console.error(err)
      res.json({err:err})
      return
    }
  res.json({msg:'delete complete',data:req.body.number})
    //file removed
  })

  
  
});

router.get('/file/:fileName', function (req, res) {
  const filePath = path.join(__dirname ,"../","/public/upload", req.params.fileName)
  res.sendFile(filePath);
});



router.get("/show",getalldata.getdata, function (req, res, next) {
 
  
});




module.exports = router;
