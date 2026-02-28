const express = require("express");
const router = express.Router();
const { addProject, getProjects } = require("../controllers/projectController");
const upload = require("../Middleware(multer)/upload");

router.post("/", upload.single("image"), addProject);
router.get("/", getProjects);

module.exports = router;


