
/*
const User= require("../models/user-model")
const bcrypt= require('bcrypt');
const sendEmail = require("../utils/sendEmail");
//For Home Page
const home = async(req,res) =>{
    try {
        res.status(200).send('This is home page');
    } catch (error) {
        console.error(error);
    }
}


//For Signup page
const signup = async(req,res)=>{
    try {
        const {username, email, password} = req.body;

        const userExist= await User.User.findOne({email})

        if(userExist){
            return res.status(400).json({ message: "Email already exists" });
        }

        const userCreated = await User.User.create({username, email, password});
        console.log(req.body);

        //Generate Token
           const token = await userCreated.generateToken();
           if(!token){
            throw new Error("Failed to generate token");
           }
        

        res.status(201).json(
            {
                msg : "User created successfully",
                token,
                userId: userCreated._id.toString()
            }

        );
    } catch (error) {
        console.error(error);
        res.send(400);
    }
}


//Login Page 

const login = async (req, res) =>{

    try {
        
         const {email, password} = req.body;
         const userExist = await User.User.findOne({email});

         if(!userExist){
            return res.status(400).json({msg : 'Invalid creds'})
         }

         console.log('Entered password:', password);  // Log entered password
console.log('Stored hashed password:', userExist.password);  // Log stored hashed password


         const user = await bcrypt.compare(password, userExist.password)

         if(user){
            res.status(200).json({
                msg: "Login Successfully",
                token : await userExist.generateToken(),
                userId: userExist._id.toString()
            });
         }

         else{
            res.status(400).json({msg: "Invalid email or password"})
         }


    } catch (error) {
        console.error("Login : ", error)
    }
}



//Contact Page

const contact = async (req, res)=>{

    try {
        const {name, email, subject, message} = req.body;
        const newContact = new User.Contact({name, email, subject, message});
        await newContact.save();

        res.status(200).json({msg : "Message sent successfully"});
    } catch (error) {
        console.log("Contact data not stored : ", error);
    }
}

// Create-Portfolio Page

const createPortfolio = async (req, res) => {
    try {
        const {
            name,
            skills,
            education,
            about,
            workexperience,
            projects,
            contact,
            hobby,
            template,
        } = req.body;

        const newPortfolio = new User.Portfolio({
            name,
            skills,
            education,
            about,
            workexperience,
            projects,
            contact, // Nested object
            hobby,
            template,
        });

        await newPortfolio.save();
        res.status(200).json({ msg: "Portfolio created successfully" });
    } catch (error) {
        console.error("Your portfolio data is not stored", error);
        res.status(500).json({ error: "Failed to create portfolio" });
    }
};


// Dashboard Page 

const dashboard = async (req,res) =>{
    try {
        const portfolios = await User.Portfolio.find(); // Fetch all portfolios
        res.json(portfolios);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
}


// Edit the portfolio page

const editPortfolio = async (req, res) =>{
    const {_id} = req.params;
    const updatedData = req.body;

    try {
        const updatedPortfolio = await User.Portfolio.findByIdAndUpdate(_id, updatedData, {new : true});
        res.status(200).json(updatedPortfolio);
    } catch (error) {
        res.status(500).json({error : "Failed to update portfolio"});
        console.log(error);
    }
}


// Forgot- Password Functionality

const forgotPassword = async (req, res) =>{
    const {email} = req.body;

    try {
        
        const user = await User.User.findOne({email});
        if(!user){
            return res.status(404).json({message: "User not found"})
        }

        //Generate a Reset token 

        const resetToken = Math.random().toString(36).substring(2, 15);
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpire = Date.now() + 3600000; // 1 hour
        await user.save();
    
        // Send reset link
        const resetUrl = `http://localhost:5000/reset-password/${resetToken}`;
        await sendEmail(user.email, "Password Reset", `Click here to reset: ${resetUrl}`);
    
        res.json({ message: "Password reset link sent to your email." });
    } catch (error) {
        res.status(500).json({message: `server error : ${error}`});
    }
}


// Reset Password functionality

const resetPassword = async (req, res) =>{
    const { token } = req.params;
    const { newPassword } = req.body;

    try {
        // Find the user with the valid reset token and not expired
        const user = await User.User.findOne({
            resetPasswordToken: token,
            resetPasswordExpire: { $gt: Date.now() },
        });

        if (!user) {
            return res.status(400).json({ message: "Invalid or expired token." });
        }
        console.log('New password:', newPassword); 

        // Hash the new password before saving it to the database
        const hashedPassword = await bcrypt.hash(newPassword, 10); // 10 is the salt rounds
        console.log('Hashed password:', hashedPassword);  

        // Update the user's password
        user.password = hashedPassword;

        // Clear the reset token and expiration fields
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        // Save the updated user record
        await user.save();

        res.json({ message: "Password reset successful." });
    } catch (error) {
        res.status(500).json({ message: `Server Error: ${error}` });
    }
}

module.exports= {home, signup, login, contact, createPortfolio, dashboard, editPortfolio, forgotPassword, resetPassword};*/








const User= require("../models/user-model")
const bcrypt= require('bcrypt');
const sendEmail = require("../utils/sendEmail");
//For Home Page
const home = async(req,res) =>{
    try {
        res.status(200).send('This is home page');
    } catch (error) {
        console.error(error);
    }
}


//For Signup page
const signup = async(req,res)=>{
    try {
        const {username, email, password} = req.body;

        const userExist= await User.User.findOne({email})

        if(userExist){
            return res.status(400).json({ message: "Email already exists" });
        }

        const userCreated = await User.User.create({username, email, password});
        console.log(req.body);

        //Generate Token
           const token = await userCreated.generateToken();
           if(!token){
            throw new Error("Failed to generate token");
           }
        

        res.status(201).json(
            {
                msg : "User created successfully",
                token,
                userId: userCreated._id.toString()
            }

        );
    } catch (error) {
        console.error(error);
        res.send(400);
    }
}


//Login Page 

const login = async (req, res) =>{

    try {
        
         const {email, password} = req.body;
         const userExist = await User.User.findOne({email});

         if(!userExist){
            return res.status(400).json({msg : 'Invalid creds'})
         }

         console.log('Entered password:', password);  // Log entered password
console.log('Stored hashed password:', userExist.password);  // Log stored hashed password


         const user = await bcrypt.compare(password, userExist.password)

         if(user){
            res.status(200).json({
                msg: "Login Successfully",
                token : await userExist.generateToken(),
                userId: userExist._id.toString()
            });
         }

         else{
            res.status(400).json({msg: "Invalid email or password"})
         }


    } catch (error) {
        console.error("Login : ", error)
    }
}



//Contact Page

const contact = async (req, res)=>{

    try {
        const {name, email, subject, message} = req.body;
        const newContact = new User.Contact({name, email, subject, message});
        await newContact.save();

        res.status(200).json({msg : "Message sent successfully"});
    } catch (error) {
        console.log("Contact data not stored : ", error);
    }
}

// Create-Portfolio Page

const createPortfolio = async (req, res) => {
    try {
        const {
            name,
            skills,
            education,
            about,
            workexperience,
            projects,
            contact,
            hobby,
            template,
        } = req.body;

        const newPortfolio = new User.Portfolio({
            name,
            skills,
            education,
            about,
            workexperience,
            projects,
            contact, // Nested object
            hobby,
            template,
        });

        await newPortfolio.save();
        res.status(200).json({ msg: "Portfolio created successfully" });
    } catch (error) {
        console.error("Your portfolio data is not stored", error);
        res.status(500).json({ error: "Failed to create portfolio" });
    }
};


// Dashboard Page 

const dashboard = async (req,res) =>{
    try {
        const portfolios = await User.Portfolio.find(); // Fetch all portfolios
        res.json(portfolios);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
}


// Edit the portfolio page

const editPortfolio = async (req, res) =>{
    const {_id} = req.params;
    const updatedData = req.body;

    try {
        const updatedPortfolio = await User.Portfolio.findByIdAndUpdate(_id, updatedData, {new : true});
        res.status(200).json(updatedPortfolio);
    } catch (error) {
        res.status(500).json({error : "Failed to update portfolio"});
        console.log(error);
    }
}


// Forgot- Password Functionality

const forgotPassword = async (req, res) =>{
    const {email} = req.body;

    try {
        
        const user = await User.User.findOne({email});
        if(!user){
            return res.status(404).json({message: "User not found"})
        }

        //Generate a Reset token 

        const resetToken = Math.random().toString(36).substring(2, 15);
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpire = Date.now() + 3600000; // 1 hour
        await user.save();
    
        // Send reset link
        const resetUrl = `http://localhost:5173/reset-password/${resetToken}`;
        await sendEmail(user.email, "Password Reset", `Click here to reset: ${resetUrl}`);
    
        res.json({ message: "Password reset link sent to your email." });
    } catch (error) {
        res.status(500).json({message: `server error : ${error}`});
    }
}


// Reset Password functionality

const resetPassword = async (req, res) =>{
    const { token } = req.params;
    const { newPassword } = req.body;

    try {
        // Find the user with the valid reset token and not expired
        const user = await User.User.findOne({
            resetPasswordToken: token,
            resetPasswordExpire: { $gt: Date.now() },
        });

        if (!user) {
            return res.status(400).json({ message: "Invalid or expired token." });
        }
        console.log('New password:', newPassword); 


        /*
        // Hash the new password before saving it to the database
        const hashedPassword = await bcrypt.hash(newPassword, 10); // 10 is the salt rounds
        console.log('Hashed password:', hashedPassword);  
        console.log(hashedPassword);*/
       
        
        // Update the user's password
        user.password = newPassword;
        console.log(user.password);

        // Clear the reset token and expiration fields
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        // Save the updated user record
        await user.save();

        res.json({ message: "Password reset successful." });
    } catch (error) {
        res.status(500).json({ message: `Server Error: ${error}` });
    }
}

module.exports= {home, signup, login, contact, createPortfolio, dashboard, editPortfolio, forgotPassword, resetPassword};

