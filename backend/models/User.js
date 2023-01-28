const mongoose = require('mongoose')
// je dois importer bcrypt
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
},{timestamps : true})

module.exports = mongoose.model('User', userSchema)

// signup static method

/*userSchema.statics.signup = async (email, password) => {
    const exists = await this.findOne({email}) // creer une constante pour verifier si l'email existe

    if (exists) { // si l'email existe alors renvoie une erreur
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10) // generer d'un crypto de 10
    const hash = await bcrypt.hash(password,salt) // hashage du mot de passe

    // creation de l'utilisateur
    const user = await this.create({email, password: hash})

    return user;

}*/