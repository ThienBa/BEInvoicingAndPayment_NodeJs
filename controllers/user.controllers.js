const { User } = require("../models");
const { DOMAIN_NAME } = require("../utils/configs");

const addUser = async (req, res) => {
    const { file } = req;
    const { fullname, email, phoneNumber } = req.body;
    const user = await User.findOne({ where: { email } });
    if(user){
        return res.status(403).send("Email already exists!");
    }

    let urlImage = '';
    if (file) {
        urlImage = `${DOMAIN_NAME}/${file.path}`;
    } else {
        urlImage = `${DOMAIN_NAME}/public/images/avatar/defaultAvatar.png`;
    }

    try {
        const newUser = await User.create({ fullname, email, phoneNumber, avatar: urlImage });
        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getAllUser = async (req, res) => {
    try {
        const listUser = await User.findAll();
        res.status(200).send(listUser);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getDetailUser = async (req, res) => {
    const { id } = req.params;
    try {
        const userDetail = await User.findOne({ where: { id } });
        res.status(200).send(userDetail);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    getAllUser,
    getDetailUser,
    addUser
}