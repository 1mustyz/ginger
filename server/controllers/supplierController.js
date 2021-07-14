const {Supplier} = require('../models');
const { v4: uuidv4 } = require('uuid');

exports.createSupplier = async (req,res,next) => {
    // console.log(req.body)
    req.body.supplierId = uuidv4()
    req.body.profilePic = 'none'
    await Supplier.create(req.body);
    res.json({success: true, msg: 'user created successfully'})
}

exports.findAllSuppliers = async (req,res,next) => {
    
    const result = await Supplier.findAll();
    result.length > 0
     ? res.json({success: true, result})
     : res.json({success: false, result})
    
}

exports.login = async (req,res,next) => {
    const result = await Supplier.findOne({where: {email: req.body.email}})
    result
        ? result.password == req.body.password
            ? res.json({msg: result})
            : res.json({msg: 'wrong password'})
        : res.json({msg: result})    
}
