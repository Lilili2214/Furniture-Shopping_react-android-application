const express = require('express')
const mongoose= require("mongoose")
const dotenv= require("dotenv")
const app = express()

const productRouter = require('./routes/products')
const authRouter = require('./routes/auth')
const userRouter = require("./routes/user")
const cartRouter= require('./routes/cart')
const orderRouter= require('./routes/order')
dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(()=>console.log('db connected')).catch((err)=> console.log(err))

app.use(express.json({limit: '10mb'}))
app.use(express.urlencoded({limit: '10mb', extended: true}))
app.use('/api/products',productRouter)

app.use('/api',authRouter)
app.use('/api/orders',orderRouter)
app.use('/api/user', userRouter)
app.use('/api/carts', cartRouter)

app.listen(process.env.PORT|| port, () => console.log(`Example app listening on port ${process.env.PORT}!`))