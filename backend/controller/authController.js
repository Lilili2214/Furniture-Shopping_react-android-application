const User = require("../model/User")
const CryptoJS = require('crypto-js');


const jwt= require("jsonwebtoken")


module.exports={
    createUser: async (req, res)=>{
        const newUser = new User({
            username : req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET).toString(),
            location: req.body.location
        })
        try{
            await newUser.save()
            res.status(201).json({message: "User created sucessful"})


        }catch(error){
            
            res.status(500).json({message: "Fail to create new user!"})
        }
    },
    loginUser: async (req, res)=>{
        try{
            const temp = req.body
            const user= await User.findOne({email: req.body.email})
            if (user=== null){
                res.status(401).json("Wrong credentials provide a vaild email")
            }
            
            const decryptedPassword= CryptoJS.AES.decrypt(user.password, process.env.SECRET)
            const decryptedpass= decryptedPassword.toString(CryptoJS.enc.Utf8)
            if (decryptedpass!== req.body.password){
                req.body.password && res.status(401).json("Wrong password")
            }

            const userToken= jwt.sign(
                {
                    id: user.id,

                }, process.env.JWT_SEC, {expiresIn: "7d"}

            )
                const {password, __v, createAt, updateAt, ...userData}= user._doc;
                res.status(200).json({...userData, token: userToken})
                
        }catch(error){
            console.log(error)
            res.status(500).json({message: "Fail to log in!"})
        
        }
    }
}