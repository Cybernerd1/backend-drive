const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required : true,
        trim : true,
        lowercase: true,
        unique: true,
        minlength:[3,' Username must be 3 character long']
    },


    email:{
        type: String,
        required : true,
        trim: true,
        lowercase: true,
        unique: true,
        minlength: [10,'Enter a valid email address']
    },

    password : {
        type : String,
        required: true,
        trim: true,
        minlength:[ 6,'Password must be 6 character long']
    }
})


const user = mongoose.model('user',userSchema)

module.exports = user