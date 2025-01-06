const mongoose = require('mongoose');
const {GridFsStorage} = require('multer-gridfs-storage');
const multer = require('multer');

// Import the existing MongoDB connection from db.js

const connectDb = require('./db');

// Initialize variables for GridFS

let gfs;
let gridFsBucket;

connectDb().then(()=>{
    const connection = mongoose.connection;

    // Initialize GridFSBucket once the connection is open

    connection.once('open', ()=>{
        gridFsBucket = new mongoose.mongo.GridFSBucket(connection.db, {
            bucketName: 'uploads', // Name of the bucket
        })
        gfs = gridFsBucket;
        console.log('GridFs Initialised Successfully');
    })
});

// Configure multer gridfs stoarge

const storage = new GridFsStorage({
    db : mongoose.connection,
    file : (req, file) =>{
        return new Promise((resolve, reject)=>{
            const fileInfo = {
                filename: `${Date.now()}-${file.originalname}`, // Generate a unique filename
                bucketName : 'uploads'
            }
            resolve(fileInfo);
        })
    }
})

// Initialize Multer with GridFS Storage

const upload = multer({ storage });

module.exports= {gfs, upload}
