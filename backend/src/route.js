const express = require ("express")

const router = express.Router()

const userController = require("./controller")

router.post("/createUser",userController.userCreation)
router.post("/logIn",userController.userLogin)
router.get("/getUser",userController.getUser)
router.delete("/delete/:id",userController.deleteUser)
router.put("/update",userController.updateUser)

router.post("/createItem",userController.createItem)
router.get("/getItem",userController.getItems)

router.delete("/deleteItems/:id",userController.deleteItems)
router.put("/updateItems",userController.updateItems)





module.exports =router
