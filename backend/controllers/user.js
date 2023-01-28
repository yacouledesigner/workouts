const User = require('../models/User')

// importation de crypto js pour crypter un mot de pass
const CryptoJS = require('crypto-js')

// importation de dotenv pour recuperer un fichier env
const dotenv  = require('dotenv').config()

// sign up User
/*const signupUser = async (req,res)=>{
    const {email, password} = req.body
    const user = await User.signup(email, password)
    res.status(200).json({email, user})
}*/

const signupUser = async (req,res)=>{
    const newUser = new User({
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC) ,
    })
    try {
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error)
    }
} 


// login User

const loginUser = async (req,res)=>{
    const user = await User.findOne({email:req.body.email})
    // condition sur l'utilisateur
    !user && res.status(401).json("Cet utilisateur n'existe pas")

    // decryptage du mot de passe
    const hash = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC)
    const password = hash.toString(CryptoJS.enc.Utf8)

    // condition sur le mot de passe 
    password !== req.body.password && res.status(401).json("Cet utilisateur n'existe pas")

    res.status(200).json(user)
}

module.exports = {loginUser,signupUser}