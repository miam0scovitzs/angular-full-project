const express = require ("express")

const router = express.Router()

const userController = require("./controller")

router.post("/createUser",userController.userCreation)
router.post("/logIn",userController.userLogin)
router.get("/getUser",userController.getUser)
router.delete("/delete/:id",userController.deleteUser)
router.put("/update",userController.updateUser)
module.exports =router
