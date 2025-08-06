const express = require("express");
const app = express();
const multer = require("multer");
const cors = require("cors");
const nodemailer = require("nodemailer");
const fs = require("fs/promises"); 
const path = require("path");
const { body, validationResult } = require("express-validator");
require("dotenv").config();

const uploadPath = path.join(__dirname, "uploads");

(async () => {
  try {
    await fs.access(uploadPath);
  } catch {
    await fs.mkdir(uploadPath, { recursive: true });
  }
})();

app.use(
  cors({
    origin: "http://localhost:3000", // Update for production
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, 
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "application/pdf",
      // Fix: Include DOC/DOCX to match frontend
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF and Word documents are allowed"), false);
    }
  },
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const validateApplication = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ max: 50 })
    .withMessage("Name must be under 50 characters"),
  body("email").isEmail().withMessage("Invalid Email").normalizeEmail(),
  body("phone")
    .matches(/^[0-9+() -]*$/)
    .withMessage("Invalid phone number")
    .notEmpty()
    .withMessage("Phone number is required"),
  body("portfolio")
    .notEmpty() 
    .withMessage("Portfolio URL is required")
    .isURL()
    .withMessage("Invalid Portfolio URL"),
  body("linkedin")
    .notEmpty() 
    .withMessage("LinkedIn URL is required")
    .isURL()
    .withMessage("Invalid LinkedIn URL"),
  body("howDidYouFindUs")
    .notEmpty()
    .withMessage("How did you hear about us is required"),
  body("coverLetter")
    .optional()
    .isLength({ max: 1000 })
    .withMessage("Cover letter must be under 1000 characters"),
];

app.post(
  "/api/apply",
  upload.single("resume"),
  validateApplication,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, portfolio, linkedin, howDidYouFindUs, coverLetter } = req.body;
    const resume = req.file;

    if (!resume) {
      return res.status(400).json({ error: "Resume is required" });
    }

    try {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.JOB_POSTER_EMAIL,
        subject: `New Job Application from ${name}`,
        html: `
          <h2>New Job Application</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Portfolio:</strong> <a href="${portfolio}">${portfolio}</a></p>
          <p><strong>LinkedIn:</strong> <a href="${linkedin}">${linkedin}</a></p>
          <p><strong>How did you hear about us:</strong> ${howDidYouFindUs}</p>
          <p><strong>Cover Letter:</strong></p>
          <p>${coverLetter || "Not provided"}</p>
        `,
        attachments: [
          {
            filename: resume.originalname,
            path: resume.path,
          },
        ],
      };

      await transporter.sendMail(mailOptions);
      await fs.unlink(resume.path);
      res.status(200).json({ success: true, message: "Application Submitted Successfully" });
    } catch (error) {
      console.error("Error Processing Application:", error);
      if (resume && resume.path) {
        try {
          await fs.unlink(resume.path);
        } catch (unlinkError) {
          console.error("Error deleting file:", unlinkError);
        }
      }
      res.status(500).json({ error: "Failed to submit application" });
    }
  }
);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});


