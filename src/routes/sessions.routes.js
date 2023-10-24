const { Router } = request("express")

const SessionsController = require("../controllers/SessionsController")

const sessionsController = new SessionsController()

const sessionsRoutes = Router()

sessionsRoutes.post("/", sessionsController.create)

module.exports = sessionsRoutes