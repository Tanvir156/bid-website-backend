const multer = require("multer");
const path = require("path");

// Define storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the directory where you want to save the files
    cb(null, path.join(__dirname, "uploads")); // Change "uploads" to your desired directory
  },
  filename: function (req, file, cb) {
    // Set the filename of the uploaded file (you can customize this as needed)
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// Middleware function to handle file uploads
const handleFileUploads = (req, res, next) => {
  // Pass an array of field names to upload.array()
  upload.array(["file0", "file1", "file2", "file3", "file4"])(
    req,
    res,
    (err) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ error: "File upload error" });
      }
      next();
    }
  );
};

module.exports = handleFileUploads;
