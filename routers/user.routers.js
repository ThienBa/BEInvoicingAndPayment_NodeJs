const express = require('express');
const { getAllUser, addUser, getDetailUser } = require('../controllers/user.controllers');
const { uploadImage } = require('../middlewares/upload/upload-image');
const { checkUserExist } = require('../middlewares/validations/checkUserExist');
const { User } = require("../models");
const userRouter = express.Router();

userRouter.get("/", getAllUser);
userRouter.get("/:id", getDetailUser);
userRouter.post("/",  uploadImage("avatar"), addUser);

module.exports = {
    userRouter
}
