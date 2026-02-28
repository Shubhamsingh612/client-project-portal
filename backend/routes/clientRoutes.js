const express = require("express");
const router = express.Router();
const { addClient, getClients } = require("../controllers/clientController");
const upload = require("../Middleware(multer)/upload");

router.post("/", upload.single("logo"), addClient);
router.get("/", getClients);

module.exports = router;


