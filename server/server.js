require('dotenv').config();
const express= require('express');
const cors = require('cors');
const router = require('./router/auth-router');
const connectDb = require('./utils/db');
const fs = require("fs");
const imageDownloader = require("image-downloader");
const path = require("path"); // To handle paths
const { gfs, upload } = require('./utils/gridfs'); // Import GridFS setup
const app = express();
//app.use(express.json());

// Increase the body size limit for JSON and URL-encoded data
app.use(express.json({ limit: '10mb' }));  // Increase limit for JSON payloads
app.use(express.urlencoded({ limit: '10mb', extended: true })); // Increase limit for URL-encoded data

// Handling cors policy

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET, POST, PUT, DELETE, PATCH, HEAD',
    credentials: true
}

app.use(cors(corsOptions));

//app.use('/uploads', cors(corsOptions), express.static(path.join(__dirname, 'uploads')));

// File upload setup with multer
/*
const upload = multer({
    limits: { fileSize: 10 * 1024 * 1024 }, // Max file size of 10 MB
  }).single('profileImage');  // Assuming the image field is named 'profileImage'
  
  // Example route to handle file uploads
  app.post('/upload', upload, (req, res) => {
    if (req.file) {
      res.send('File uploaded successfully');
    } else {
      res.status(400).send('No file uploaded or file is too large');
    }
  });

*/

// Routes 

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }
  res.status(200).send({ fileId: req.file.id, fileName: req.file.filename });
});


app.get('/file/:id', async (req, res) => {
  try {
    const fileId = new mongoose.Types.ObjectId(req.params.id);
    const file = await gfs.find({ _id: fileId }).toArray();

    if (!file || file.length === 0) {
      return res.status(404).send('File not found');
    }

    gfs.openDownloadStream(fileId).pipe(res);
  } catch (error) {
    res.status(500).send('Error retrieving file');
  }
});

//Routes for downloading image
/*
app.post("/download-image", async (req, res) => {
  const { imageUrl, filename } = req.body;

  console.log("Request received:", { imageUrl, filename });

  try {
    // Ensure the downloads folder exists
    const downloadsDir = path.join(__dirname, "downloads"); // Create absolute path
    if (!fs.existsSync(downloadsDir)) {
      console.log("Creating downloads directory...");
      fs.mkdirSync(downloadsDir, { recursive: true }); // Recursive to ensure parent directories
    }

    const options = {
      url: imageUrl,
      dest: path.join(downloadsDir, filename || "resume.png"), // Absolute path for the destination
    };

    console.log("Download options:", options);

    // Use imageDownloader.image() to download the image
    const { filename: savedFilename } = await imageDownloader.image(options);
    console.log("Image downloaded successfully:", savedFilename);

    res.status(200).send({ success: true, message: "Image downloaded successfully!", filePath: savedFilename });
  } catch (error) {
    console.error("Error downloading image:", error.message || error);
    res.status(500).send({ success: false, message: "Image download failed!", error: error.message || error });
  }
});
*/
app.use('/api/auth', router);
const PORT = 5000;

connectDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running at PORT : ${PORT}`);
    })
})

