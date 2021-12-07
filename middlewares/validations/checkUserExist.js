const checkUserExist = (Model) => {
    return async (req, res, next) => {
        const { email } = req.body;
        const User = await Model.findOne({ where: { email } });
        if (User) {
            res.status(404).send(`User already exists!`);
        } else {
            next();
        }
    }
}

module.exports = {
    checkUserExist
}