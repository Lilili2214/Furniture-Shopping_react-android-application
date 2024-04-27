const router = require('express').Router()
const orderController = require('../controller/orderController')


router.get('/:id', orderController.getUserOrders)




module.exports= router