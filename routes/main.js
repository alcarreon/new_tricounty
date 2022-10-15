const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/book", homeController.getBook);
router.get("/contact", homeController.getContact);
router.get("/services", homeController.getService);
router.get("/inventory", homeController.getInventory);

module.exports = router;
