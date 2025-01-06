require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required : true
    },

    email : {
        type: String,
        required : true
    },

    password : {
        type: String,
        required : true
    },
    
    resetPasswordToken: {
        type: String, // The reset token will be a string
    },

    resetPasswordExpire: {
        type: Date, // This will store the expiration time of the reset token
    },
})

// Hash password before saving

userSchema.pre('save', async function(next) {

    const user = this;

    if(!user.isModified('password')){
       return next();
    }
   
    try {
        const saltRound= await bcrypt.genSalt(10);
        const hash_password= await bcrypt.hash(user.password, saltRound);
        user.password= hash_password;
        next();
    } catch (error) {
        next(error);
    }
})

// Generate JWT Token
userSchema.methods.generateToken= async function(){

    try {
        if(! process.env.JWT_SECRETKEY){
            throw new Error('JWT_SECRETKEY is not defined');
        }

        return jwt.sign(
            {
                userid: this._id.toString(),
                email: this.email
            },
            process.env.JWT_SECRETKEY,
            {expiresIn: "30d"}
        )
    } catch (error) {
        console.error('Error generating token', error);
        return null;
    }
}


//Setting up contact schema

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required :true
    },

    email: {
        type: String,
        required :true
    },

    subject : {
        type: String,
        required :true
    },

    message : {
        type: String,
        required :true
    }
})

// Setting up portfolio data schema

const portfolioSchema = new mongoose.Schema({
    name: { type: String, required: true },
    skills: { type: [String], required: true },
    education: { type: String },
    about: { type: String },
    workexperience: { type: String },
    projects: [
        {
            projectname: { type: String },
            projectlink: { type: String },
        },
    ],
    contact: {
        email: { type: String, required: true },
        github: { type: String },
        twitter: { type: String },
        linkedIn: { type: String },
    },
    hobby: { type: String }
    
}) 

const User = new mongoose.model('User', userSchema);

const Contact = new mongoose.model('Conatct', contactSchema);

const Portfolio = new mongoose.model('User_Portfolio', portfolioSchema);
module.exports= {User, Contact, Portfolio}