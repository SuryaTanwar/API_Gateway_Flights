const express = require("express")
const router = express.Router()
const { AuthRequestMiddlewares } = require("../../middlewares")
const {InfoController} = require("../../controllers");
const userRoutes = require("./user-routes");

router.get("/info", AuthRequestMiddlewares.checkAuth, InfoController.info);

router.use("/user", userRoutes);

module.exports = router