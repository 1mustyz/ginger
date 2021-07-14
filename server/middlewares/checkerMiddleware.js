const {Supplier} = require('../models');

exports.checkEmail = async (req,res,next) => {
    const {email} = req.body
    const result = await Supplier.findOne({where: {email: email}})

    result
    ? res.json({success: false, msg: 'email already exist'})
    : next()
}