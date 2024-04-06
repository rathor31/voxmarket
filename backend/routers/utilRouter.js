const express = require('express');
const multer = require('multer');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './static/uploads')
    },
    filename: function (req, file, cb) {
      const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniquePrefix + '-' + file.originalname)
      req.savedfile = uniquePrefix + '-' + file.originalname
    }
  })
  
  const uploader = multer({storage })

  router.post('/uploadfile', uploader.single('myfile'),(req,res)=>{
    console.log(req.savedfile);
    res.status(200).json({message:'File uploaded successfully', savedFile: req.savedfile})
  })

  module.exports= router;