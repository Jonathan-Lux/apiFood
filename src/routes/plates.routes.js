const {Router} = require("express")
const PlatesController = require("../controller/PlatesController")

const platesRoutes = Router()
const platesController = new PlatesController()

platesRoutes.post("/:user_id",platesController.create)


module.exports = platesRoutes