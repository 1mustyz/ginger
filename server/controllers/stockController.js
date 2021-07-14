const {Stock,Supplier} = require('../models')
const multer = require('multer');
const {singleUpload} = require('../middlewares/filesMiddleware');

exports.createStock = async (req,res,next) => {
   const stock = await Stock.create(req.body)
    res.json({success: true, stock})
}

exports.addStockImage = async (req,res,next) => {
  const {supplierId, stockId} = req.query
  console.log(req.body)
    singleUpload(req, res, async function(err) {
        if (err instanceof multer.MulterError) {
        return res.json(err.message);
        }
        else if (err) {
          return res.json(err);
        }
        else if (!req.file) {
          return res.json({"image": req.file, "msg":'Please select an image to upload'});
        }
        if(req.file){
            await Stock.update({stockPic: req.file.path},{where: {supplierId: supplierId, id: stockId}})
            return  res.json({success: true,
            message: 'profile picture updated successfully',
                       },
            
        );
        }
        });     
}

exports.getAllStocks = async (req,res,next) => {
  const result = await Stock.findAll({
    include: [{model: Supplier}]
  })
  res.json({success: true, result})
}

exports.getSingleStock = async (req,res,next) => {
  const result = await Stock.findOne({where: {id: req.query.id}},{
    include: [{model: Supplier}]
  })
  res.json({success: true, result})
}